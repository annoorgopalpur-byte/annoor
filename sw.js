
const CACHE_NAME = 'annoor-khidmah-v1';
const urlsToCache = [
  '/annoor/',
  '/annoor/user.html',
  '/annoor/Admin.html',
  '/annoor/An.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});