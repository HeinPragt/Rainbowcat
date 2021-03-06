// Cache names

var dataCacheName = `RainbowcatD-v2.2.7`
var cacheName = `RainbowcatC-v2.2.7`

// Application shell files to be cached

var filesToCache = [
'/',
'/index.html',
'/service-worker.js',
'/c2runtime.js',
'/data.js',
'/jquery-2.0.0.min.js',
'/images\tiledbackground.png',
'/images\tiles-sheet0.png',
'/images\tiles-sheet1.png',
'/images\player-sheet0.png',
'/images\player-sheet1.png',
'/images\playerbox-sheet0.png',
'/images\dog_enemy-sheet0.png',
'/images\dog_enemy-sheet1.png',
'/images\marker-sheet0.png',
'/images\tileswater-sheet0.png',
'/images\tileswater-sheet1.png',
'/images\tileswater-sheet2.png',
'/images\rainbow-sheet0.png',
'/images\decoration-sheet0.png',
'/images\decoration-sheet1.png',
'/images\mouse-sheet0.png',
'/images\jumptru-sheet0.png',
'/images\tilesaction-sheet0.png',
'/images\buttons_controls-sheet0.png',
'/images\buttons_controls-sheet1.png',
'/images\buttons_controls-sheet2.png',
'/images\rainbowball-sheet0.png',
'/images\flag_half-sheet0.png',
'/images\flag_finish-sheet0.png',
'/images\house-sheet0.png',
'/images\house-sheet1.png',
'/images\lava-sheet0.png',
'/images\lava-sheet1.png',
'/images\tiledfloor1.png',
'/images\tiledfloor2.png',
'/images\tiledside.png',
'/images\tiledfloor4.png',
'/images\tiledfloor3.png',
'/images\tiledbackground4.png',
'/images\tiledbackground6.png',
'/images\tiledbackground7.png',
'/images\knop_start-sheet0.png',
'/images\tiledliaan1.png',
'/images\sprite-sheet0.png',
'/images\sprite-sheet1.png',
'/images\tiledbackgroundstone.png',
'/images\tiledbackground9.png',
'/images\tiledbackground11.png',
'/images\tiledbackground12.png',
'/images\movingfloor-sheet0.png',
'/images\tiledbackground13.png',
'/images\tiledbackground15.png',
'/images\ijspegels1.png',
'/images\gameendbg.png',
'/images\lock1.png',
'/images\tiledbackground5.png',
'/images\tiledbackground16.png',
'/images\ijspegel2-sheet0.png',
'/images\startlevel1button.png',
'/images\tiledbackground18.png',
'/images\tiledbackground19.png',
'/images\tiledbackground20.png',
'/images\tiledbackground21.png',
'/images\tiledbackground22.png',
'/images\tiledbackground23.png',
'/images\tiledbackground24.png',
'/images\tiledbackground25.png',
'/images\healthbar.png',
'/images\boomstam.png',
'/images\meltingice-sheet0.png',
'/images\sprite3-sheet0.png',
'/images\gameendbg2.png',
'/images\tiledbackground28.png',
'/images\tiledbackground26.png',
'/images\spikes.png',
'/images\tiledbackground2.png',
'/media\tinhit2.m4a',
'/media\tinhit2.ogg',
'/media\crackle-sound.m4a',
'/media\crackle-sound.ogg',
'/media\slap-sound.m4a',
'/media\slap-sound.ogg',
'/media\oops2.m4a',
'/media\oops2.ogg',
'/media\newachievement2.m4a',
'/media\newachievement2.ogg',
'/media\cling_1.m4a',
'/media\cling_1.ogg',
'/media\ok%20-%201.m4a',
'/media\ok%20-%201.ogg',
'/media\squaremotif2.m4a',
'/media\squaremotif2.ogg',
'/media\gameover.m4a',
'/media\gameover.ogg',
'/loading-logo.png'
]

self.addEventListener(`install`, function (e) {
  console.log(`[ServiceWorker] Install`)
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log(`[ServiceWorker] Caching app shell`)
      return cache.addAll(filesToCache)
    })
  )
})

self.addEventListener(`activate`, function (e) {
  console.log(`[ServiceWorker] Activate`)
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log(`[ServiceWorker] Removing old cache`, key)
          return caches.delete(key)
        }
      }))
    })
  )
  return self.clients.claim()
})

self.addEventListener(`fetch`, function (e) {
  console.log(`[ServiceWorker] Fetch`, e.request.url)
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request)
    })
  )
})


