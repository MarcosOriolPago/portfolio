import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.resolve("public");
const QUALITY = 72;
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

async function convertFile(filePath) {
  const ext = path.extname(filePath);
  if (!EXTENSIONS.has(ext)) return null;

  const webpPath = filePath.replace(/\.(jpe?g|png)$/i, ".webp");
  const before = (await stat(filePath)).size;

  await sharp(filePath)
    .webp({ quality: QUALITY, effort: 4 })
    .toFile(webpPath);

  const after = (await stat(webpPath)).size;
  await unlink(filePath);

  return { from: filePath, to: webpPath, before, after };
}

const files = await walk(PUBLIC_DIR);
const results = [];

for (const file of files) {
  const result = await convertFile(file);
  if (result) results.push(result);
}

const totalBefore = results.reduce((sum, r) => sum + r.before, 0);
const totalAfter = results.reduce((sum, r) => sum + r.after, 0);

console.log(`Converted ${results.length} images`);
console.log(
  `Size: ${(totalBefore / 1024 / 1024).toFixed(1)} MB → ${(totalAfter / 1024 / 1024).toFixed(1)} MB (${Math.round((1 - totalAfter / totalBefore) * 100)}% reduction)`
);
