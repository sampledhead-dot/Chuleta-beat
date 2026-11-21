// Service worker de Chuleta Beat: guarda la página para usarla sin conexión.
// Si cambias index.html, sube también el número de VERSION para que se actualice.
const VERSION = 'chuleta-beat-v1.3.3-c13';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'sh-core.js'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('chuleta-beat-v') && k !== VERSION).map((k) => caches.delete(k))))   // solo las suyas: el dominio lo comparten todas las apps
      .then(() => self.clients.claim())
  );
});

// Responde desde la caché y actualiza en segundo plano cuando hay conexión.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((cached) => {
      const red = fetch(e.request).then((res) => {
        if (res && res.ok && new URL(e.request.url).origin === location.origin) {
          const copia = res.clone();
          caches.open(VERSION).then((c) => c.put(e.request, copia));
        }
        return res;
      }).catch(() => cached);
      return cached || red;
    })
  );
});
