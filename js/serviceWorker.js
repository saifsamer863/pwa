const staticpicdavinci= "pic Da vinci"
const assets = [
  "/",
  "gallery","home",
  "css/home.css",
  "css/gallery.css",
  "gpic/cont1 (1).jpg",
  "gpic/cont1 (2).jpg",
  "gpic/cont1 (3).jpg",
  "gpic/cont1 (4).jpg",
  "gpic/cont1 (5).jpg",
  "gpic/cont1 (6).jpg",
  "gpic/cont1 (7).jpg",

  "gpic/cont2 (1).jpg",
  "gpic/cont2 (2).jpg",
  "gpic/cont2 (3).jpg",
  "gpic/cont2 (4).jpg",
  "gpic/cont2 (5).jpg",
  "gpic/cont2 (6).jpg",
  "gpic/cont2 (7).jpg",

  "gpic/cont3 (1).jpg",
  "gpic/cont3 (2).jpg",
  "gpic/cont3 (3).jpg",
  "gpic/cont3 (4).jpg",
  "gpic/cont3 (5).jpg",
  "gpic/cont3 (6).jpg",
  "gpic/cont3 (7).jpg",

  "gpic/cont4 (1).jpg",
  "gpic/cont4 (2).jpg",
  "gpic/cont4 (3).jpg",
  "gpic/cont4 (4).jpg",
  "gpic/cont4 (5).jpg",
  "gpic/cont4 (6).jpg",
  "gpic/cont4 (7).jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
  