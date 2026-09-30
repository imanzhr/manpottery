import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

// Run once after replacing photos. Commit the generated files with the sources.
const root = process.cwd();
const arg = process.argv.indexOf('--source');
const source = path.resolve(arg < 0 ? 'public/images' : process.argv[arg + 1]);
const target = path.join(root, 'public/images');
const generated = path.join(target, 'optimized');
const widths = [320, 640, 960, 1280, 1920];
async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === 'optimized') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (/\.(webp|png|jpe?g)$/i.test(entry.name)) files.push(full);
  }
  return files;
}
const files = (await walk(source)).sort();
await fs.rm(generated, { recursive: true, force: true });
await fs.mkdir(generated, { recursive: true });
const manifest = {};
const rows = [];
const renamed = [];
for (const file of files) {
  const relative = path.relative(source, file).split(path.sep).join('/');
  const buffer = await fs.readFile(file);
  // Preserve the supplied unused logo; it is already only 88 KB.
  if (relative === 'IMG_1824.PNG' || relative === 'fav-image.PNG') {
    const output = relative === 'fav-image.PNG'
      ? await sharp(buffer).resize({ width: 256, height: 256, fit: 'inside', withoutEnlargement: true }).png({ compressionLevel: 9 }).toBuffer()
      : buffer;
    await fs.writeFile(path.join(target, relative), output);
    rows.push({ image: relative, before: buffer.length, after: output.length, variants: 0 });
    continue;
  }
  const newRelative = relative.replace(/\.(png|jpe?g)$/i, '.webp');
  const pipeline = sharp(buffer).rotate().resize({ width: 1920, height: 2400, fit: 'inside', withoutEnlargement: true });
  const { data: full, info } = await pipeline.clone().webp({ quality: 84, effort: 5 }).toBuffer({ resolveWithObject: true });
  await fs.mkdir(path.dirname(path.join(target, newRelative)), { recursive: true });
  await fs.writeFile(path.join(target, newRelative), full);
  if (newRelative !== relative) {
    renamed.push([`/images/${relative}`, `/images/${newRelative}`]);
    await fs.rm(path.join(target, relative), { force: true });
  }
  const hash = crypto.createHash('sha256').update(buffer).digest('hex').slice(0, 16);
  const imageWidths = [...new Set([...widths.filter(w => w < info.width), info.width])];
  let variantBytes = 0;
  for (const width of imageWidths) {
    const variant = width === info.width ? full : await sharp(buffer).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 80, effort: 5 }).toBuffer();
    const output = `${hash}-${width}.webp`;
    await fs.writeFile(path.join(generated, output), variant);
    variantBytes += variant.length;
  }
  manifest[`/images/${newRelative}`] = { hash, widths: imageWidths, width: info.width, height: info.height };
  rows.push({ image: newRelative, before: buffer.length, after: full.length, width: info.width, height: info.height, variants: variantBytes });
  process.stdout.write(`Optimized ${relative}\n`);
}
// Update the two legacy JPG/PNG photograph references without changing content.
async function replaceReferences(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await replaceReferences(file);
    else if (/\.(tsx?|json)$/.test(entry.name) && entry.name !== 'image-manifest.json') {
      const original = await fs.readFile(file, 'utf8');
      let updated = original;
      for (const [from, to] of renamed) updated = updated.split(from).join(to);
      if (updated !== original) await fs.writeFile(file, updated);
    }
  }
}
for (const dir of ['app', 'components', 'lib']) await replaceReferences(path.join(root, dir));
await fs.writeFile(path.join(root, 'lib/image-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
await fs.mkdir(path.join(root, 'reports'), { recursive: true });
const totals = rows.reduce((sum, row) => ({ before: sum.before + row.before, after: sum.after + row.after, variants: sum.variants + row.variants }), { before: 0, after: 0, variants: 0 });
const variantFiles = await fs.readdir(generated);
totals.variants = (await Promise.all(variantFiles.map(file => fs.stat(path.join(generated, file))))).reduce((sum, info) => sum + info.size, 0);
await fs.writeFile(path.join(root, 'reports/image-optimization.json'), JSON.stringify({ totals, variantReferences: Object.values(manifest).reduce((sum, image) => sum + image.widths.length, 0), uniqueVariantFiles: variantFiles.length, images: rows }, null, 2) + '\n');
console.log(totals);
