import sharp from 'sharp';
import { readdir, mkdir, copyFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const assetsDir = path.join(rootDir, 'src/assets');
const optimizedDir = path.join(rootDir, 'src/assets/optimized');
const publicDir = path.join(rootDir, 'public');

// Icon sizes for display (most icons are shown at 48-64px, so 128px is plenty with 2x for retina)
const ICON_SIZE = 128;
const LOGO_SIZE = 256;

async function optimizeImages() {
  console.log('Starting image optimization...\n');

  // Create optimized directory if it doesn't exist
  if (!existsSync(optimizedDir)) {
    await mkdir(optimizedDir, { recursive: true });
  }

  const files = await readdir(assetsDir);
  const imageFiles = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f));

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(assetsDir, file);
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    
    // Determine output format and size based on file type
    const isIcon = baseName.includes('icon');
    const isLogo = baseName.includes('logo');
    const isPhoto = baseName.includes('hero') || baseName.includes('tap-to-pay');
    
    const targetSize = isLogo ? LOGO_SIZE : (isIcon ? ICON_SIZE : null);
    
    try {
      const originalStats = await sharp(inputPath).metadata();
      const originalBuffer = await sharp(inputPath).toBuffer();
      totalOriginalSize += originalBuffer.length;
      
      let pipeline = sharp(inputPath);
      
      // Resize icons and logos
      if (targetSize && originalStats.width > targetSize) {
        pipeline = pipeline.resize(targetSize, targetSize, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        });
      }
      
      let outputPath;
      let optimizedBuffer;
      
      if (isPhoto) {
        // Keep photos as WebP for best compression
        outputPath = path.join(optimizedDir, `${baseName}.webp`);
        optimizedBuffer = await pipeline
          .webp({ quality: 85, effort: 6 })
          .toBuffer();
      } else if (ext.toLowerCase() === '.png') {
        // Convert PNGs to WebP (much smaller, widely supported)
        outputPath = path.join(optimizedDir, `${baseName}.webp`);
        optimizedBuffer = await pipeline
          .webp({ quality: 90, effort: 6, lossless: false })
          .toBuffer();
      } else {
        // Convert JPGs to WebP
        outputPath = path.join(optimizedDir, `${baseName}.webp`);
        optimizedBuffer = await pipeline
          .webp({ quality: 85, effort: 6 })
          .toBuffer();
      }
      
      await sharp(optimizedBuffer).toFile(outputPath);
      totalOptimizedSize += optimizedBuffer.length;
      
      const savings = ((originalBuffer.length - optimizedBuffer.length) / originalBuffer.length * 100).toFixed(1);
      console.log(`[OK] ${file} -> ${path.basename(outputPath)}`);
      console.log(`   ${(originalBuffer.length / 1024).toFixed(1)}KB -> ${(optimizedBuffer.length / 1024).toFixed(1)}KB (${savings}% smaller)\n`);
      
    } catch (err) {
      console.error(`[ERROR] Error processing ${file}:`, err.message);
    }
  }
  
  console.log('═'.repeat(50));
  console.log(`Total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB -> ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Saved: ${((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(2)}MB (${((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1)}%)\n`);
}

async function createFavicons() {
  console.log('Creating favicons...\n');
  
  const logoPath = path.join(assetsDir, 'logo.png');
  
  if (!existsSync(logoPath)) {
    console.error('[ERROR] logo.png not found in assets');
    return;
  }
  
  const faviconSizes = [
    { size: 16, name: 'favicon-16x16.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 48, name: 'favicon-48x48.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 192, name: 'android-chrome-192x192.png' },
    { size: 512, name: 'android-chrome-512x512.png' },
  ];
  
  for (const { size, name } of faviconSizes) {
    const outputPath = path.join(publicDir, name);
    
    await sharp(logoPath)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(outputPath);
    
    console.log(`[OK] Created ${name} (${size}x${size})`);
  }
  
  // Create ICO file (using 32x32 PNG as base, browsers handle it well)
  const icoPath = path.join(publicDir, 'favicon.ico');
  await sharp(logoPath)
    .resize(32, 32, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(icoPath.replace('.ico', '-temp.png'));
  
  // Copy as ico (modern browsers accept PNG in .ico)
  await copyFile(icoPath.replace('.ico', '-temp.png'), icoPath);
  
  console.log('[OK] Created favicon.ico (32x32)\n');
  
  // Create OG image (1200x630 recommended for social sharing)
  const ogPath = path.join(publicDir, 'og-image.png');
  await sharp(logoPath)
    .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .extend({
      top: 59,
      bottom: 59,
      left: 344,
      right: 344,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .png()
    .toFile(ogPath);
  
  console.log('[OK] Created og-image.png (1200x630)\n');
}

async function createWebManifest() {
  console.log('Creating web manifest...\n');
  
  const manifest = {
    name: "Tillit | Mobile POS",
    short_name: "Tillit",
    description: "Tillit lets shoppers scan items and pay instantly on their phones",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  };
  
  const manifestPath = path.join(publicDir, 'site.webmanifest');
  await import('fs').then(fs => {
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  });
  
  console.log('[OK] Created site.webmanifest\n');
}

async function main() {
  console.log('\n' + '═'.repeat(50));
  console.log('TILLIT IMAGE OPTIMIZATION');
  console.log('═'.repeat(50) + '\n');
  
  await optimizeImages();
  await createFavicons();
  await createWebManifest();
  
  console.log('═'.repeat(50));
  console.log('Optimization complete!');
  console.log('═'.repeat(50) + '\n');
  
  console.log('Next steps:');
  console.log('1. Update component imports to use optimized images from @/assets/optimized/');
  console.log('2. Update index.html to reference new favicon files');
  console.log('3. Test the website to ensure all images load correctly\n');
}

main().catch(console.error);

