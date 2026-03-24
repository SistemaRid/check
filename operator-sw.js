const OPERATOR_CACHE = "checkmaint-operator-v1";

const CORE_ASSETS = [
  "./operador.html",
  "./operator-manifest.json",
  "./assets/pwa/checkmaint-icon.svg",
  "./assets/pwa/checkmaint-icon-maskable.svg",
  "./xl_media_image4.png",
  "./assets/js/defs/index.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(OPERATOR_CACHE).then((cache) => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== OPERATOR_CACHE)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  const isNavigation = event.request.mode === "navigate";

  if (isNavigation) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(OPERATOR_CACHE).then((cache) => cache.put("./operador.html", responseClone));
          return response;
        })
        .catch(() => caches.match("./operador.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          const responseClone = networkResponse.clone();
          caches.open(OPERATOR_CACHE).then((cache) => cache.put(event.request, responseClone));
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
