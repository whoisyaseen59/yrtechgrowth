const CACHE_NAME = 'yr-tech-growth-v1.0.1';
const DYNAMIC_CACHE_NAME = 'yr-dynamic-v1';

// Core assets to cache for offline usage
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/privacy-policy.html',
  '/404.html',
  '/assets/css/style.css',
  '/assets/js/global.js',
  '/manifest.json'
];

// Install event - safe asset caching
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Safe addAll to prevent 1 failed asset from aborting installation
      await Promise.allSettled(
        CORE_ASSETS.map(url => 
          fetch(url)
            .then(res => {
              if (res.ok) return cache.put(url, res);
            })
            .catch(() => {})
        )
      );
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (![CACHE_NAME, DYNAMIC_CACHE_NAME].includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch handler - Network first for HTML, Cache first for static assets
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Ignore non-GET requests
  if (request.method !== 'GET') return;

  // Ignore chrome-extension or dynamic analytics
  if (request.url.startsWith('chrome-extension:') || request.url.includes('google-analytics') || request.url.includes('gtm.js')) {
    return;
  }

  // HTML pages - Network First
  if (request.destination === 'document' || request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const resClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, resClone));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(request).then(cached => cached || caches.match('/404.html'));
        })
    );
    return;
  }

  // Static assets - Cache First with Network Fallback
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch in background to update cache (stale-while-revalidate)
        fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then(cache => cache.put(request, networkResponse));
            }
          })
          .catch(() => {});
        return cachedResponse;
      }
      return fetch(request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const resClone = networkResponse.clone();
          caches.open(DYNAMIC_CACHE_NAME).then(cache => cache.put(request, resClone));
        }
        return networkResponse;
      });
    })
  );
});
