import { BASE_PATH } from '@/lib/base-path';

export function GrainOverlay() {
  return <div className="grain-overlay" style={{ backgroundImage: `url(${BASE_PATH}/textures/grain.png)` }} aria-hidden="true" />;
}
