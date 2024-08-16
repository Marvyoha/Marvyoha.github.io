'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "726a42a34ca17157df4249b973af3a1a",
"assets/AssetManifest.bin.json": "191a97f4afdd2aa2651537d42738c20f",
"assets/AssetManifest.json": "3c9b6a9009aa2ab4fdc03f52a13517e6",
"assets/FontManifest.json": "2ad075b25ecdbe9d523bb1471d172fb1",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/lib/assets/caleb_uni_logo.webp": "cdeff01dc01d8804d33410c705527e9a",
"assets/lib/assets/carcare1.webp": "0c9e4a83abe10adee506bdc56c9f130b",
"assets/lib/assets/carcare2.webp": "12779360bb18cb45b610570216abdff3",
"assets/lib/assets/carcare3.webp": "fd0a70d9f9a71eaf9bb1c2520329b508",
"assets/lib/assets/carcare4.webp": "f06e50be9d8309ec8ca0c40752bf16e7",
"assets/lib/assets/cms_logo.webp": "b5e5c74909d5d18a88e3a7fbe251dbf7",
"assets/lib/assets/cosmic1.webp": "aa840bc359a4ff399b3f568cf6c93bc9",
"assets/lib/assets/cosmic2.webp": "00898fafc95b623c444b1a3ab0d9949d",
"assets/lib/assets/cosmic3.webp": "ecff21516345dd4ca53a376fa589d990",
"assets/lib/assets/cosmic4.webp": "7cff1bd1c8ddff57e2bdf88696b024ee",
"assets/lib/assets/exolve_tech_logo.webp": "a730dfe681b79cd87c6b0004a2cd8736",
"assets/lib/assets/google_logo.webp": "ca154f785392eda635d4ef1abf5a64b1",
"assets/lib/assets/ibm_logo.webp": "ed7f3d2809da13b6c3bd76ce1ce5b1ed",
"assets/lib/assets/kamp1.webp": "52bfac88063a901564266678de6aa8c2",
"assets/lib/assets/kamp2.webp": "6a3bd892c59e6c4ff3a56053bd599d4c",
"assets/lib/assets/kamp3.webp": "4275d6c62430c8c7990cfd516ab9bcf0",
"assets/lib/assets/kamp4.webp": "634bab9ea3f1014a8f66bdbaa636e3f3",
"assets/lib/assets/profile.webp": "b503883090af5987121a55850932db12",
"assets/lib/assets/profile2.webp": "32f51e5a1c657954bff8d8d37ac7c89c",
"assets/lib/assets/soleSeekers1.webp": "9ea49fdf299cd590b5ec632580d14e8d",
"assets/lib/assets/soleSeekers2.webp": "3431f4bd7d2553dcb779e20a9129ba2b",
"assets/lib/assets/soleSeekers3.webp": "b65ab81a5bdb1b4d2c980c668384420c",
"assets/lib/assets/soleSeekers4.webp": "e44d503ba25fdea00c39b69d24c97cbb",
"assets/NOTICES": "69d32043308f1cab68fdc0ced67e5acc",
"assets/packages/carbon_icons/assets/CarbonFonts.ttf": "0c93ab25976e1f3472ae75e68b5813d9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/dev_icons/fonts/devicon.ttf": "1dede8d498067ea893dc79a5bfd7692c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "3230bc68d3b4803993d7edaadaf72023",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4437caf32e174851f56e7763a12d397b",
"/": "4437caf32e174851f56e7763a12d397b",
"main.dart.js": "f5df2c8e34e0d72e4f47e2b7cecae4f4",
"manifest.json": "8bc39948c1595765fc6f69f395993155",
"profile.webp": "b503883090af5987121a55850932db12",
"version.json": "3fe4fd5df2020acccdd334a29a3cc4f4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
