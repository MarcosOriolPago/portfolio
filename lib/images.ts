/** Convert legacy jpg/png paths to webp after build-time compression. */
export function toWebp(src: string): string {
  if (/\.(gif|webp|pdf|svg)$/i.test(src)) return src;
  return src.replace(/\.(jpe?g|png)$/i, ".webp");
}

/** Normalize img/ paths to absolute public URLs. */
export function publicSrc(src: string): string {
  if (src.startsWith("/") || src.startsWith("http")) return toWebp(src);
  return toWebp(`/${src}`);
}
