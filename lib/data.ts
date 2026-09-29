import { Collection, Product, Course } from "@/types";
import { BASE_PATH } from "@/lib/base-path";

const paletteImages = [
  `${BASE_PATH}/images/Pallet/_DSC0225.webp`,
  `${BASE_PATH}/images/Pallet/_DSC0230.webp`,
  `${BASE_PATH}/images/Pallet/_DSC0237.webp`,
  `${BASE_PATH}/images/Pallet/_DSC0241.webp`,
  `${BASE_PATH}/images/Pallet/_DSC0249.webp`,
  `${BASE_PATH}/images/Pallet/_DSC0256.webp`,
  `${BASE_PATH}/images/Pallet/_DSC0260.webp`,
  `${BASE_PATH}/images/Pallet/_DSC0263.webp`,
  `${BASE_PATH}/images/Pallet/_DSC0310.webp`,
];

const flowImages = [
  `${BASE_PATH}/images/Flow/_DSC0267.webp`,
  `${BASE_PATH}/images/Flow/_DSC0284.webp`,
  `${BASE_PATH}/images/Flow/_DSC0290.webp`,
  `${BASE_PATH}/images/Flow/_DSC0293.webp`,
  `${BASE_PATH}/images/Flow/_DSC0085.webp`,
  `${BASE_PATH}/images/Flow/_DSC0108.webp`,
  `${BASE_PATH}/images/Flow/_DSC0113.webp`,
  `${BASE_PATH}/images/Flow/_DSC0117.webp`,
  `${BASE_PATH}/images/Flow/_DSC0121.webp`,
  `${BASE_PATH}/images/Flow/DSC09539.webp`,
  `${BASE_PATH}/images/Flow/DSC09541.webp`,
];

const bloomImages = [
  `${BASE_PATH}/images/Bloom/IMG_6720.webp`,
  `${BASE_PATH}/images/Bloom/IMG_6721.JPG`,
  `${BASE_PATH}/images/Bloom/IMG_6722.webp`,
  `${BASE_PATH}/images/Bloom/IMG_6723.webp`,
  `${BASE_PATH}/images/Bloom/IMG_8947.webp`,
];

const rugImages = [
  `${BASE_PATH}/images/Rug/DSC0952..webp`,
  `${BASE_PATH}/images/Rug/DSC09452.webp`,
  `${BASE_PATH}/images/Rug/DSC09457.webp`,
  `${BASE_PATH}/images/Rug/DSC09461.webp`,
  `${BASE_PATH}/images/Rug/DSC09472.webp`,
  `${BASE_PATH}/images/Rug/DSC09474.webp`,
  `${BASE_PATH}/images/Rug/DSC09481.webp`,
  `${BASE_PATH}/images/Rug/DSC09488.webp`,
  `${BASE_PATH}/images/Rug/DSC09498.webp`,
  `${BASE_PATH}/images/Rug/DSC09503.webp`,
  `${BASE_PATH}/images/Rug/DSC09507.webp`,
  `${BASE_PATH}/images/Rug/DSC09521.webp`,
  `${BASE_PATH}/images/Rug/DSC09524.webp`,
  `${BASE_PATH}/images/Rug/DSC09530.webp`,
  `${BASE_PATH}/images/Rug/DSC09533.webp`,
];

const edgeImages = [
  `${BASE_PATH}/images/Edge/IMG_8938.webp`,
  `${BASE_PATH}/images/Edge/IMG_8939.webp`,
  `${BASE_PATH}/images/Edge/IMG_8945.webp`,
  `${BASE_PATH}/images/Edge/IMG_8946.webp`,
  `${BASE_PATH}/images/Edge/IMG_8948.webp`,
  `${BASE_PATH}/images/Edge/IMG_8949.webp`,
  `${BASE_PATH}/images/Edge/IMG_8950.webp`,
  `${BASE_PATH}/images/Edge/IMG_9242.webp`,
  `${BASE_PATH}/images/Edge/IMG_9243.webp`,
  `${BASE_PATH}/images/Edge/IMG_9318.webp`,
  `${BASE_PATH}/images/Edge/IMG_9319.webp`,
  `${BASE_PATH}/images/Edge/IMG_9399.webp`,
  `${BASE_PATH}/images/Edge/IMG_9400.webp`,
  `${BASE_PATH}/images/Edge/IMG_9401.webp`,
  `${BASE_PATH}/images/Edge/IMG_9402.webp`,
  `${BASE_PATH}/images/Edge/IMG_9449.webp`,
];

export const collections: Collection[] = [
  {
    slug: "palette",
    title: "Palette",
    description: "Wheel-thrown colorful serveware",
    heroImage: `${BASE_PATH}/images/Pallet/_DSC0256.webp`,
    images: paletteImages,
  },
  {
    slug: "flow",
    title: "Flow",
    description: "Handmade lamps with thread shades",
    heroImage: `${BASE_PATH}/images/Flow/_DSC0267.webp`,
    images: flowImages,
  },
  {
    slug: "bloom",
    title: "Bloom",
    description: "Ceramic vases for living plants",
    heroImage: `${BASE_PATH}/images/Bloom/IMG_6722.webp`,
    images: bloomImages,
  },
  {
    slug: "rug",
    title: "Rug",
    description:
      "Ceramic lamps combining the ancient crafts of pottery and Persian weaving.",
    heroImage: `${BASE_PATH}/images/Rug/DSC09474.webp`,
    images: rugImages,
  },
  {
    slug: "edge",
    title: "Edge",
    description: "Handmade ceramic vases and serveware",
    heroImage: `${BASE_PATH}/images/Edge/IMG_9449.webp`,
    images: edgeImages,
  },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Palette Bowl",
    description:
      "A hand-painted bowl built around playful pastel shapes, with every brushstroke following the natural movement of the clay.",
    image: `${BASE_PATH}/images/Pallet/_DSC0225.webp`,
    dimensions: '8" diameter × 3" height',
    material: "Stoneware clay, hand-painted glaze",
    colors: ["Pastel Blue", "Soft Pink", "Sage"],
    price: "$68",
    collectionSlug: "palette",
  },
  {
    id: "p2",
    name: "Flow Lamp",
    description:
      "A sculptural terracotta lamp paired with a hand-wrapped blue shade, balancing grounded clay with a vivid field of color.",
    image: `${BASE_PATH}/images/Flow/_DSC0267.webp`,
    dimensions: '19" height × 12" diameter',
    material: "Terracotta, woven fiber shade",
    colors: ["Natural Clay", "Cobalt Blue"],
    price: "$195",
    collectionSlug: "flow",
  },
  {
    id: "p3",
    name: "Bloom Vessel",
    description:
      "A softly structured vessel with carved linear details and a luminous pale-blue glaze.",
    image: `${BASE_PATH}/images/Bloom/IMG_6722.webp`,
    dimensions: '10" height × 7" diameter',
    material: "Stoneware, gloss glaze",
    colors: ["Pale Blue"],
    price: "$92",
    collectionSlug: "bloom",
  },
  {
    id: "p4",
    name: "Bloom Bowl Set",
    description:
      "A family of carved bowls whose repeating lines and varied proportions feel collected rather than matched.",
    image: `${BASE_PATH}/images/Bloom/IMG_6720.webp`,
    dimensions: '4"–10" diameter',
    material: "Stoneware, gloss glaze",
    colors: ["Pale Blue"],
    price: "$156",
    collectionSlug: "bloom",
  },
  {
    id: "p5",
    name: "Rug Table Lamp",
    description:
      "A warm ceramic base and a woven rug panel come together in a lamp that feels both sculptural and familiar.",
    image: `${BASE_PATH}/images/Rug/DSC09533.webp`,
    dimensions: '20" height × 13" diameter',
    material: "Stoneware, woven textile shade",
    colors: ["Ochre", "Cream", "Deep Blue"],
    price: "$240",
    collectionSlug: "rug",
  },
  {
    id: "p6",
    name: "Edge Bowl Trio",
    description:
      "Three free-formed bowls with softly uneven rims, finished in a single layered green glaze.",
    image: `${BASE_PATH}/images/Edge/IMG_9318.webp`,
    dimensions: '4"–9" diameter',
    material: "Stoneware, gloss glaze",
    colors: ["Soft Olive"],
    price: "$125",
    collectionSlug: "edge",
  },
  {
    id: "p7",
    name: "Palette Serving Set",
    description:
      "A colorful family of serving forms, each painted by hand so no two arrangements are ever quite the same.",
    image: `${BASE_PATH}/images/Pallet/_DSC0249.webp`,
    dimensions: '5"–11" diameter',
    material: "Stoneware clay, hand-painted glaze",
    colors: ["Pastel Mix"],
    price: "$168",
    collectionSlug: "palette",
  },
  {
    id: "p8",
    name: "Rug Studio Lamp",
    description:
      "A compact ceramic lamp finished with a stitched woven panel, made to bring texture and warm light to smaller spaces.",
    image: `${BASE_PATH}/images/Rug/DSC09452.webp`,
    dimensions: '17" height × 12" diameter',
    material: "Stoneware, woven textile shade",
    colors: ["Sand", "Forest", "Rust"],
    price: "$220",
    collectionSlug: "rug",
  },
];

export const courses: Course[] = [
  {
    id: "c1",
    title: "Wheel Throwing Basics",
    description:
      "Learn the fundamentals of throwing on the potter's wheel. From centering clay to pulling walls, this course covers the essential techniques every beginner needs.",
    image: `${BASE_PATH}/images/Kargah/IMG_4727.webp`,
    duration: "6 weeks",
    instructor: "Manpottery",
    skillLevel: "Beginner",
    schedule: "Tuesdays, 6:00–8:30 PM",
    price: "$280",
  },
  {
    id: "c2",
    title: "Hand-Building Workshop",
    description:
      "Explore pinch, coil, and slab techniques to create unique ceramic pieces without a wheel. A meditative approach to working with clay by hand.",
    image: `${BASE_PATH}/images/Kargah/IMG_4716.webp`,
    duration: "1 day",
    instructor: "Manpottery",
    skillLevel: "All Levels",
    schedule: "Saturdays, 10:00 AM–1:00 PM",
    price: "$220",
  },
  {
    id: "c3",
    title: "Glazing & Surface Design",
    description:
      "Dive into the art of surface decoration. Learn about glaze chemistry basics, application techniques, and how to create beautiful finishes on your work.",
    image: `${BASE_PATH}/images/Kargah/IMG_4718.webp`,
    duration: "3 weeks",
    instructor: "Manpottery",
    skillLevel: "Intermediate",
    schedule: "Thursdays, 6:00–8:00 PM",
    price: "$195",
  },
  {
    id: "c4",
    title: "Advanced Throwing",
    description:
      "Push your wheel skills to the next level. Focus on larger forms, altered pieces, and developing your personal voice in ceramic art.",
    image: `${BASE_PATH}/images/Kargah/IMG_4720.webp`,
    duration: "8 weeks",
    instructor: "Manpottery",
    skillLevel: "Advanced",
    schedule: "Mondays, 6:30–9:00 PM",
    price: "$380",
  },
];

export const galleryImages = [
  {
    src: `${BASE_PATH}/images/Pallet/_DSC0249.webp`,
    alt: "Palette collection arranged as a colorful still life",
  },
  {
    src: `${BASE_PATH}/images/Pallet/_DSC0225.webp`,
    alt: "Hand-painted Palette bowls on a wooden table",
  },
  {
    src: `${BASE_PATH}/images/Pallet/_DSC0256.webp`,
    alt: "Close view of a colorful Palette ceramic piece",
  },
  {
    src: `${BASE_PATH}/images/Flow/_DSC0267.webp`,
    alt: "Flow lamp with a sculptural clay base and blue shade",
  },
  {
    src: `${BASE_PATH}/images/Flow/_DSC0284.webp`,
    alt: "Flow lamp styled with flowers in a calm interior",
  },
  {
    src: `${BASE_PATH}/images/Bloom/IMG_6722.webp`,
    alt: "Carved pale-blue vessels from the Bloom collection",
  },
  {
    src: `${BASE_PATH}/images/Bloom/IMG_6720.webp`,
    alt: "Bloom bowls and vessel gathered in warm light",
  },
  {
    src: `${BASE_PATH}/images/Bloom/IMG_8947.webp`,
    alt: "Bloom ceramics with hand-carved linear details",
  },
  {
    src: `${BASE_PATH}/images/Rug/DSC09533.webp`,
    alt: "Rug lamp displayed against a deep blue wall",
  },
  {
    src: `${BASE_PATH}/images/Rug/DSC09524.webp`,
    alt: "Textile shade detail from the Rug collection",
  },
  {
    src: `${BASE_PATH}/images/Rug/DSC09503.webp`,
    alt: "Handmade Rug lamp in a styled interior",
  },
  {
    src: `${BASE_PATH}/images/Edge/IMG_9318.webp`,
    alt: "Irregular green bowls from the Edge collection",
  },
  {
    src: `${BASE_PATH}/images/Edge/IMG_8938.webp`,
    alt: "Edge bowls arranged in tonal green light",
  },
  {
    src: `${BASE_PATH}/images/Edge/IMG_9242.webp`,
    alt: "Close view of an expressive handmade rim",
  },
  {
    src: `${BASE_PATH}/images/Kargah/IMG_4727.webp`,
    alt: "Students shaping clay during a Manpottery workshop",
  },
];
