import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./src/assets/images";
const sizes = [600, 900, 1700];

const files = fs.readdirSync(inputDir);

files.forEach(async (file) => {
  const ext = path.extname(file);
  const name = path.basename(file, ext);

  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) return;

  for (const size of sizes) {
    const outputFile = `${inputDir}/${name}-${size}.webp`;

    await sharp(`${inputDir}/${file}`)
      .resize({ width: size })
      .webp({ quality: 80 })
      .toFile(outputFile);

    console.log(`✔ creado: ${outputFile}`);
  }
});