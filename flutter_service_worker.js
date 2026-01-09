'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "db1e95c15a6c0a6a68f720e9179b7056",
"assets/AssetManifest.bin.json": "85eb5f03e003a43008dacf0dc4e256c0",
"assets/FontManifest.json": "77ef2d60ce332c4176a9cde733a53d4d",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
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
"assets/lib/assets/technocrat_logo.webp": "5241ec3c025d795f9d762cd5f909eba0",
"assets/NOTICES": "cdfc55e58194fbb29dffbd34c5fafbb0",
"assets/packages/carbon_icons/assets/CarbonFonts.ttf": "0c93ab25976e1f3472ae75e68b5813d9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/dev_icons/fonts/devicon.ttf": "1dede8d498067ea893dc79a5bfd7692c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "51b74c5f84eafe294654aa6092c3dba5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3b2561ca30561e0d7314dcdb69bd383a",
"/": "3b2561ca30561e0d7314dcdb69bd383a",
"main.dart.js": "d29209dd5cbc421fb41e12e4ce0dbf97",
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
