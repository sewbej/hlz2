const CACHE_NAME = 'skaner-v1';
const ASSETS = [
  './',
  './index.html',
  './html5-qrcode.min.js',
  './jsbarcode.min.js',
  './qrcode.min.js',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
