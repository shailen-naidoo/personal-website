const removeOldCaches = async () => {
  const cacheVersions = await caches.keys();

  const handler = () => Promise.all(cacheVersions.map((cacheName) => caches.delete(cacheName)));

  if (cacheVersions.includes(CACHE_VERSION)) {
    cacheVersions.splice(cacheVersions.indexOf(CACHE_VERSION), 1)
  }

  return handler();
};

const preCacheRoutes = () => caches.open(CACHE_VERSION).then((cache) => {
  return cache.addAll(routes.map(({ route }) => route))
})

self.addEventListener('install', (event) => {
  event.waitUntil(Promise.all([
    removeOldCaches(),
    preCacheRoutes(),
  ]))
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(CACHE_VERSION).then((cache) => {
      // if (event.request.destination !== 'image') {
      //   return fetch(event.request);
      // }

      return cache.match(event.request).then((cacheResponse) => {
        return cacheResponse || fetch(event.request).then((networkResponse) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    }),
  );
});