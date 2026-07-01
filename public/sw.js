// Basic Service Worker for PWA installation
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass through all requests for now. 
  // PWABuilder requires a service worker with a fetch event listener.
  event.respondWith(fetch(event.request));
});
