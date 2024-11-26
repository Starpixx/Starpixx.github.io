// Pexels API Key
const apiKey = 'YOUR_PEXELS_API_KEY';
const apiUrl = 'https://api.pexels.com/v1/curated?per_page=5&page=1'; // API untuk gambar acak

// Mengambil gambar dari Pexels
async function fetchRandomImages() {
  const response = await fetch(apiUrl, {
    headers: {
      Authorization: apiKey
    }
  });
  const data = await response.json();
  
  // Menampilkan gambar acak di halaman
  const productImages = document.querySelectorAll('.product-item img');
  data.photos.forEach((photo, index) => {
    if (productImages[index]) {
      productImages[index].src = photo.src.medium;
    }
  });
}

// Menjalankan fungsi fetch saat halaman dimuat
window.addEventListener('load', fetchRandomImages);

// Menjaga service worker aktif
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  });
}
