/* Satış və Anbar — offline cache. Proqram faylları cihazda saxlanılır; server sorğuları həmişə internetlə gedir. */
const V = 'sa-v1';
const CORE = ['./', './index.html', './config.js', './manifest.webmanifest', './apple-touch-icon.png', './icon-192.png', './icon-512.png'];
const CDN = ['https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',
             'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(CORE).then(() =>
    Promise.all(CDN.map(u => fetch(u, { mode: 'no-cors' }).then(r => c.put(u, r)).catch(() => {}))))));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || /script\.google|googleusercontent/.test(url.host)) return;   // server: always network
  if (url.origin === location.origin) {                                                    // app files: fresh when online, cached when offline
    e.respondWith(Promise.race([
      fetch(req).then(r => { if (r.ok) { const c = r.clone(); caches.open(V).then(x => x.put(req, c)); } return r; }),
      new Promise((_, rej) => setTimeout(rej, 4000))
    ]).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {                // libraries, fonts: cache first
    const c = r.clone(); caches.open(V).then(x => x.put(req, c)); return r;
  }).catch(() => hit)));
});
