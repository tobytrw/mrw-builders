document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero');

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Google Maps config
    const map = L.map('service-map', {
        center: [51.163, 0.558],
        zoom: 9,
        zoomControl: true,
        scrollWheelZoom: false,
        doubleClickZoom: true,
        dragging: true,
        touchZoom: true
        });

   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);



    L.circle([51.163, 0.558], {
      color: '#00938f',
      fillColor: '#00938f',
      fillOpacity: 0.3,
      weight: 2,
      radius: 20000
}).addTo(map);

// === HERO IMAGE ROTATOR ===
const slides = document.querySelectorAll('.banner .slide');
let current = 0;

function loadImage(img) {
  return new Promise(resolve => {
    if (img.src) return resolve(); // already loaded
    const tmp = new Image();
    tmp.src = img.dataset.src;
    tmp.onload = () => {
      img.src = tmp.src;
      resolve();
    };
  });
}

async function nextSlide() {
  const next = (current + 1) % slides.length;
  const nextSlide = slides[next];

  // Wait for the next image to fully load before transition
  await loadImage(nextSlide);

  slides[current].classList.remove('visible');
  nextSlide.classList.add('visible');

  current = next;
}

// preload the second image immediately
loadImage(slides[1]);

// then start looping every 5 seconds
setInterval(nextSlide, 5000);
// === END HERO IMAGE ROTATOR ===
// End of DOMContentLoaded - add new code above this line
});
