
const CACHE_NAME = 'memoria-cache-v1';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'sw.js',
  'logo_texto.webp',
  'background.webp',
  'cover.webp',
  'opciones1.webp',
  'opciones2.webp',
  'opciones3.webp',
  'opciones4.webp',
  'opciones5.webp',
  'opciones6.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
