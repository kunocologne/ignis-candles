const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const writeFileAsync = promisify(fs.writeFile);

const images = [
  {
    url: 'https://images.unsplash.com/photo-1638279828799-bc7bc9932766?w=1200&auto=format&fit=crop',
    path: 'public/images/hero-candle.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop',
    path: 'public/images/texture-pattern.png'
  },
  {
    url: 'https://images.unsplash.com/photo-1566766292873-2235f331a356?w=800&auto=format&fit=crop',
    path: 'public/images/texture-natural.png'
  },
  {
    url: 'https://images.unsplash.com/photo-1504179093343-f8da5d0c342a?w=800&auto=format&fit=crop',
    path: 'public/images/texture-flame.png'
  },
  {
    url: 'https://images.unsplash.com/photo-1574800170881-04d59bb3e2a5?w=800&auto=format&fit=crop',
    path: 'public/images/fire-particles.png'
  },
  {
    url: 'https://images.unsplash.com/photo-1513090898098-d437f03eda2f?w=1000&auto=format&fit=crop',
    path: 'public/images/ignis-story.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1507810572220-93d6da8cfff2?w=1000&auto=format&fit=crop',
    path: 'public/images/sustainability.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop',
    path: 'public/images/product-phoenix.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=800&auto=format&fit=crop',
    path: 'public/images/product-moon.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=800&auto=format&fit=crop',
    path: 'public/images/product-sacred.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1545399424-8254c8d43737?w=800&auto=format&fit=crop',
    path: 'public/images/product-chakra.jpg'
  }
];

async function downloadImage(url, imagePath) {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'arraybuffer'
    });

    await writeFileAsync(imagePath, response.data);
    console.log(`Downloaded: ${imagePath}`);
  } catch (error) {
    console.error(`Error downloading ${url}:`, error.message);
  }
}

async function downloadAllImages() {
  try {
    // Make sure directory exists
    if (!fs.existsSync('public/images')) {
      fs.mkdirSync('public/images', { recursive: true });
    }

    for (const image of images) {
      await downloadImage(image.url, image.path);
    }
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

downloadAllImages(); 