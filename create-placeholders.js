const fs = require('fs');
const { createCanvas } = require('canvas');

// Create placeholder images with text
function createPlaceholderImage(path, width, height, text, bgColor = '#69351a', isPNG = false) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background gradient
  const bgGradient = ctx.createLinearGradient(0, 0, width, height);
  bgGradient.addColorStop(0, '#69351a');
  bgGradient.addColorStop(0.5, '#92461e');
  bgGradient.addColorStop(1, '#69351a');
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, width, height);

  // Add texture pattern
  for (let i = 0; i < 50; i++) {
    ctx.beginPath();
    const x = Math.random() * width;
    const y = Math.random() * height;
    const radius = Math.random() * 100 + 50;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, 'rgba(255, 138, 0, 0.15)');
    gradient.addColorStop(1, 'rgba(255, 138, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Add flame-like glow in the center
  const flameGradient = ctx.createRadialGradient(
    width / 2, height / 2, 0,
    width / 2, height / 2, width / 3
  );
  flameGradient.addColorStop(0, 'rgba(255, 200, 0, 0.5)');
  flameGradient.addColorStop(0.5, 'rgba(255, 100, 0, 0.2)');
  flameGradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
  ctx.fillStyle = flameGradient;
  ctx.fillRect(0, 0, width, height);

  // Text shadow
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 15;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  
  // Draw "IGNIS" brand at top
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.font = `bold ${Math.floor(width / 20)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText('IGNIS', width / 2, height / 10);
  
  // Main text for image content
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.font = `bold ${Math.floor(width / 15)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);
  
  // Subtitle
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = `${Math.floor(width / 30)}px Arial`;
  ctx.fillText('Luxury Ritual Candles', width / 2, height / 2 + Math.floor(width / 12));
  
  // Reset shadow
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  
  // Border
  ctx.strokeStyle = 'rgba(255, 200, 0, 0.3)';
  ctx.lineWidth = 10;
  ctx.strokeRect(15, 15, width - 30, height - 30);
  
  // Inner border
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 2;
  ctx.strokeRect(30, 30, width - 60, height - 60);

  // Save to file
  const format = isPNG ? 'image/png' : 'image/jpeg';
  const buffer = canvas.toBuffer(format);
  fs.writeFileSync(path, buffer);
  console.log(`Created: ${path}`);
}

// Create directory if it doesn't exist
if (!fs.existsSync('public/images')) {
  fs.mkdirSync('public/images', { recursive: true });
}

// Create placeholder images
const placeholders = [
  { path: 'public/images/hero-candle.jpg', width: 1200, height: 800, text: 'Hero Candle', isPNG: false },
  { path: 'public/images/texture-pattern.png', width: 800, height: 800, text: 'Pattern Texture', isPNG: true },
  { path: 'public/images/texture-natural.png', width: 800, height: 800, text: 'Natural Texture', isPNG: true },
  { path: 'public/images/texture-flame.png', width: 800, height: 800, text: 'Flame Texture', isPNG: true },
  { path: 'public/images/fire-particles.png', width: 800, height: 800, text: 'Fire Particles', isPNG: true },
  { path: 'public/images/ignis-story.jpg', width: 1000, height: 700, text: 'Ignis Story', isPNG: false },
  { path: 'public/images/sustainability.jpg', width: 1000, height: 700, text: 'Sustainability', isPNG: false },
  { path: 'public/images/product-phoenix.jpg', width: 800, height: 800, text: 'Phoenix Rebirth', isPNG: false },
  { path: 'public/images/product-moon.jpg', width: 800, height: 800, text: 'Lunar Goddess', isPNG: false },
  { path: 'public/images/product-sacred.jpg', width: 800, height: 800, text: 'Sacred Union', isPNG: false },
  { path: 'public/images/product-chakra.jpg', width: 800, height: 800, text: 'Chakra Alignment', isPNG: false },
];

placeholders.forEach(({ path, width, height, text, isPNG }) => {
  createPlaceholderImage(path, width, height, text, '#69351a', isPNG);
});

console.log('All placeholder images created successfully!'); 