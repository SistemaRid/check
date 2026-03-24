const OPERATOR_CACHE = "checkmaint-operator-v2";

const CORE_ASSETS = [
  "./operador.html",
  "./operator-manifest.json",
  "./assets/pwa/checkmaint-icon.svg",
  "./assets/pwa/checkmaint-icon-maskable.svg",
  "./xl_media_image4.png",
  "./assets/js/defs/index.js",
  "./assets/js/defs/caminhao-basculante.js",
  "./assets/js/defs/caminhao-carroceria.js",
  "./assets/js/defs/caminhao-comboio.js",
  "./assets/js/defs/caminhao-munck.js",
  "./assets/js/defs/caminhao-pipa.js",
  "./assets/js/defs/carregadeira.js",
  "./assets/js/defs/cavalo-mecanico.js",
  "./assets/js/defs/checklists.js",
  "./assets/js/defs/compressor.js",
  "./assets/js/defs/empilhadeira.js",
  "./assets/js/defs/escavadeira.js",
  "./assets/js/defs/gerador-energia.js",
  "./assets/js/defs/mini-carregadeira.js",
  "./assets/js/defs/motoniveladora.js",
  "./assets/js/defs/onibus.js",
  "./assets/js/defs/perfuratriz.js",
  "./assets/js/defs/prancha.js",
  "./assets/js/defs/retroescavadeira.js",
  "./assets/js/defs/rompedor.js",
  "./assets/js/defs/trator-esteira.js",
  "./assets/js/defs/veiculos-leves.js",
  "./assets/icons/equipment/backhoe.svg",
  "./assets/icons/equipment/breaker.svg",
  "./assets/icons/equipment/bulldozer.svg",
  "./assets/icons/equipment/bus.svg",
  "./assets/icons/equipment/car.svg",
  "./assets/icons/equipment/compressor.svg",
  "./assets/icons/equipment/crane-truck.svg",
  "./assets/icons/equipment/drill-rig.svg",
  "./assets/icons/equipment/dump-truck.svg",
  "./assets/icons/equipment/excavator.svg",
  "./assets/icons/equipment/flatbed-truck.svg",
  "./assets/icons/equipment/forklift.svg",
  "./assets/icons/equipment/generator.svg",
  "./assets/icons/equipment/grader.svg",
  "./assets/icons/equipment/loader.svg",
  "./assets/icons/equipment/semi-truck.svg",
  "./assets/icons/equipment/service-truck.svg",
  "./assets/icons/equipment/trailer.svg",
  "./assets/icons/equipment/water-truck.svg"
];

const EXTERNAL_ASSETS = [
  "https://cdn.tailwindcss.com/3.4.17",
  "https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth-compat.js",
  "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore-compat.js",
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(OPERATOR_CACHE).then(async (cache) => {
      await Promise.allSettled(
        CORE_ASSETS.map((asset) => cache.add(asset))
      );

      await Promise.allSettled(
        EXTERNAL_ASSETS.map(async (asset) => {
          const response = await fetch(asset, { mode: "no-cors" });
          await cache.put(asset, response);
        })
      );
    }).then(() => self.skipWaiting())
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
  const isSameOrigin = url.origin === self.location.origin;
  const isCachedExternalAsset = EXTERNAL_ASSETS.includes(url.href);

  if (!isSameOrigin && !isCachedExternalAsset) {
    return;
  }

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
