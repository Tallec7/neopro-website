/**
 * Script d'optimisation des images pour MADXP
 * Convertit les PNG en WebP et redimensionne selon le type
 *
 * Usage : node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { join, basename, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SOURCE_DIR = join(__dirname, '../../site-internet-neopro/public/assets/images');
const OUTPUT_DIR = join(__dirname, '../src/assets/images');

// Configuration par catégorie d'image
const imageConfig = {
  // Héros : pleine largeur, 3 tailles responsive
  hero: {
    match: (name) => name.startsWith('hero-'),
    sizes: [
      { suffix: '', width: 1920, quality: 80 },
      { suffix: '-md', width: 1280, quality: 80 },
      { suffix: '-sm', width: 768, quality: 80 },
    ],
  },
  // Logos clubs : petits, haute qualité
  logo: {
    match: (name) => name.startsWith('logo-'),
    sizes: [
      { suffix: '', width: 200, quality: 85 },
    ],
  },
  // Images de contenu : max 1200px
  content: {
    match: () => true, // fallback
    sizes: [
      { suffix: '', width: 1200, quality: 80 },
    ],
  },
};

function getConfig(filename) {
  const name = basename(filename, extname(filename));
  for (const [, config] of Object.entries(imageConfig)) {
    if (config.match(name)) return config;
  }
  return imageConfig.content;
}

async function optimizeImage(sourcePath, filename) {
  const config = getConfig(filename);
  const name = basename(filename, extname(filename));
  const results = [];

  for (const size of config.sizes) {
    const outputName = `${name}${size.suffix}.webp`;
    const outputPath = join(OUTPUT_DIR, outputName);

    try {
      const info = await sharp(sourcePath)
        .resize({ width: size.width, withoutEnlargement: true })
        .webp({ quality: size.quality })
        .toFile(outputPath);

      const sourceStats = await stat(sourcePath);
      const savings = ((1 - info.size / sourceStats.size) * 100).toFixed(1);

      results.push({
        output: outputName,
        originalSize: (sourceStats.size / 1024).toFixed(0) + ' KB',
        newSize: (info.size / 1024).toFixed(0) + ' KB',
        savings: savings + '%',
        dimensions: `${info.width}x${info.height}`,
      });
    } catch (err) {
      console.error(`  ❌ Erreur pour ${outputName}:`, err.message);
    }
  }

  return results;
}

async function main() {
  console.log('🖼️  Optimisation des images MADXP\n');

  // Créer le dossier de sortie
  await mkdir(OUTPUT_DIR, { recursive: true });

  // Lister les images source
  const files = await readdir(SOURCE_DIR);
  const images = files.filter((f) => /\.(png|jpg|jpeg)$/i.test(f));

  console.log(`📁 ${images.length} images trouvées dans le projet source\n`);

  let totalOriginal = 0;
  let totalNew = 0;

  for (const image of images) {
    const sourcePath = join(SOURCE_DIR, image);
    console.log(`⚙️  ${image}...`);

    const results = await optimizeImage(sourcePath, image);
    for (const r of results) {
      totalOriginal += parseInt(r.originalSize);
      totalNew += parseInt(r.newSize);
      console.log(`   ✅ ${r.output} — ${r.originalSize} → ${r.newSize} (${r.savings}) [${r.dimensions}]`);
    }
  }

  console.log(`\n📊 Résumé :`);
  console.log(`   Original total : ${(totalOriginal / 1024).toFixed(1)} MB`);
  console.log(`   Optimisé total : ${(totalNew / 1024).toFixed(1)} MB`);
  console.log(`   Économie : ${((1 - totalNew / totalOriginal) * 100).toFixed(1)}%`);
}

main().catch(console.error);
