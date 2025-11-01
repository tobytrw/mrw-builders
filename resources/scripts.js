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

// === HERO BACKGROUND IMAGE ROTATOR ===
  const banner = document.getElementById('banner');

  if (banner) {
    const images = [
      'resources/images/hero_1.jpg',
      'resources/images/hero_2.jpeg',
      'resources/images/hero_3.jpg',
      'resources/images/hero_4.jpg'
    ];

    let index = 0;
    const changeInterval = 5000; // 5 seconds

    // Set initial image
    banner.style.backgroundImage = `url(${images[index]})`;

    // Start image rotation
    setInterval(() => {
      index = (index + 1) % images.length;
      banner.style.backgroundImage = `url(${images[index]})`;
    }, changeInterval);
  }
// End of DOMContentLoaded - add new code above this line
});
