document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero');

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Google Maps config
    const map = L.map('service-map', {
        center: [51.163, 0.558],
        zoom: 11,
        zoomControl: true,
        scrollWheelZoom: false,
        doubleClickZoom: true,
        dragging: true,
        touchZoom: false
        });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CartoDB',
        subdomains: 'abcd',
        maxZoom: 18
    }).addTo(map);

    const serviceArea = [
        [51.173, 0.500],
        [51.197, 0.548],
        [51.166, 0.600],
        [51.132, 0.570],
        [51.130, 0.512],
        [51.152, 0.495]
        ];
    L.polygon(serviceArea, { 
        color: '#00938f',
        fillColor: '#00938f',
        fillOpacity: 0.3,
        weight: 2
    }).addTo(map).bindPopup('Service Area - MRW Builders');

// === HERO IMAGE ROTATOR ===
  const slides = document.querySelectorAll('.banner .slide');
let current = 0;

function loadImage(img) {
  if (img.dataset.src && !img.src) {
    img.src = img.dataset.src;
  }
}

function nextSlide() {
  slides[current].classList.remove('visible');

  // increment & loop back when we reach the end
  current = (current + 1) % slides.length;

  // preload next image before showing
  loadImage(slides[current]);

  slides[current].classList.add('visible');
}

// preload the second image right away for a smooth start
loadImage(slides[1]);

// cycle every 5 seconds
setInterval(nextSlide, 5000);
// End of DOMContentLoaded - add new code above this line
});
