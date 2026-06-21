const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicImagesDir = path.join(__dirname, '../public/images');
const galleryDir = path.join(publicImagesDir, 'gallery');
const appDir = path.join(__dirname, '../app');
const backupDir = path.join(publicImagesDir, 'backup');

// Ensure backup dirs exist
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}
if (!fs.existsSync(path.join(backupDir, 'gallery'))) {
  fs.mkdirSync(path.join(backupDir, 'gallery'), { recursive: true });
}

// Helper to convert to webp and backup original
async function processImage(srcDir, filename, destFilename, options = {}) {
  const srcPath = path.join(srcDir, filename);
  const backupPath = path.join(backupDir, srcDir.includes('gallery') ? 'gallery/' + filename : filename);
  const destPath = path.join(srcDir, destFilename);

  if (!fs.existsSync(srcPath)) {
    console.log(`Skipping missing image: ${filename}`);
    return;
  }

  console.log(`Processing ${filename} -> ${destFilename}...`);
  
  // Backup
  fs.copyFileSync(srcPath, backupPath);

  try {
    let pipeline = sharp(srcPath);
    if (options.width) {
      pipeline = pipeline.resize({ width: options.width, height: options.height, fit: options.fit || 'cover' });
    }
    await pipeline.webp({ quality: options.quality || 80 }).toFile(destPath);
    console.log(`Successfully created ${destFilename}`);
    
    // Delete the original file since we backed it up
    fs.unlinkSync(srcPath);
  } catch (err) {
    console.error(`Error processing ${filename}:`, err);
  }
}

async function run() {
  // 1. Optimize favicon (app/icon.png)
  const iconPath = path.join(appDir, 'icon.png');
  if (fs.existsSync(iconPath)) {
    console.log('Optimizing app/icon.png...');
    fs.copyFileSync(iconPath, path.join(backupDir, 'icon-backup.png'));
    try {
      await sharp(iconPath)
        .resize(32, 32)
        .png()
        .toFile(path.join(appDir, 'icon_temp.png'));
      fs.renameSync(path.join(appDir, 'icon_temp.png'), iconPath);
      console.log('Favicon optimized to 32x32!');
    } catch (err) {
      console.error('Error optimizing icon.png:', err);
    }
  }

  // 2. Process large images
  await processImage(publicImagesDir, 'hero-bg.png', 'hero-bg.webp', { quality: 80 }); 
  await processImage(publicImagesDir, 'groom.png', 'groom.webp', { width: 800, quality: 80 }); 
  await processImage(publicImagesDir, 'bride.png', 'bride.webp', { width: 800, quality: 80 }); 
  await processImage(publicImagesDir, 'gold-logo.png', 'gold-logo.webp', { width: 400, quality: 85 }); 
  
  // 3. Process bank logos
  await processImage(publicImagesDir, 'bca.png', 'bca.webp', { width: 200, quality: 90 });
  await processImage(publicImagesDir, 'bri.png', 'bri.webp', { width: 200, quality: 90 });
  await processImage(publicImagesDir, 'dana.png', 'dana.webp', { width: 200, quality: 90 });

  // 4. Process gallery images (convert to webp)
  const galleryFiles = ['gallery1.jpg', 'gallery2.jpg', 'gallery3.jpg', 'gallery4.jpg'];
  for (const file of galleryFiles) {
    const webpFile = file.replace(/\.(jpg|jpeg)$/, '.webp');
    await processImage(galleryDir, file, webpFile, { width: 1000, quality: 80 });
  }

  console.log('All image optimization tasks completed!');
}

run();
