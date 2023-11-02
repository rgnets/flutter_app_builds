'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js": "89c9a17ccb911d9ca5e3e850f275c25d",
"version.json": "5aeef19d718b292df0e5e405b36668c9",
"assets/lib/assets/language/en-US.yaml": "fe53096ba486fd8203ff0a65d14dbf1d",
"assets/lib/assets/images/rgnets_logo.svg": "666dca7a9c97bdeaab91afbed40d0a00",
"assets/lib/assets/images/rxg_two_tone.svg": "fe98220b70a14c7e3843d44d2701bfa3",
"assets/lib/assets/images/rxg_two_tone.png": "bdfdad6c040a978ebc12c53bbd6038a5",
"assets/lib/assets/images/pig.webp": "c0d738733d6a79537d16ce383d971adf",
"assets/lib/assets/images/2021_rgnets_logo_white-bb.png": "bebb4618d007a030727e143b125f2cb2",
"assets/lib/assets/images/2021_rgnets_logo_secondary_metalic-bb.png": "4daeced07c034bc6807579305b5a7117",
"assets/lib/assets/images/modify_fleet.svg": "ac1d298a443fef1fd8130aca5831d991",
"assets/lib/assets/logos/rxg/2021_rxg_black-bb.png": "d2bbe64c3d7d51608818664ece47fee4",
"assets/lib/assets/logos/rxg/2021_rxg_black.png": "bfc6dd21a08d3974741c0d907daacd14",
"assets/lib/assets/logos/rxg/2021_rxg_gradient-bb.png": "91712e36caeab4d6e08dcfb693d0e173",
"assets/lib/assets/logos/rxg/2021_rxg_gradient.png": "5fd5bdd42d70dea25805663dfd5c4d3c",
"assets/lib/assets/logos/rxg/2021_rxg_metalic-bb.png": "f5d97ecfdfff48af0430d8aec8ed0113",
"assets/lib/assets/logos/rxg/2021_rxg_metalic.png": "792362e854048fd1ba564682d4421c86",
"assets/lib/assets/logos/rxg/2021_rxg_twotone_white-bb.png": "46053f5610edf16553aa5906cadd84a0",
"assets/lib/assets/logos/rxg/2021_rxg_twotone_white.png": "737240a445a4b219b380cc5d0a7ac81c",
"assets/lib/assets/logos/rxg/2021_rxg_twotone-bb.png": "b96eae40df966512fd4699ace79fcd51",
"assets/lib/assets/logos/rxg/2021_rxg_twotone.png": "3ea3e32c87576b106c0aa4c4839237ed",
"assets/lib/assets/logos/rxg/2021_rxg_white-bb.png": "a85924a2c54d93d9919f0cf35daead07",
"assets/lib/assets/logos/rxg/2021_rxg_white.png": "99f0af93a4d969b5445754ea72589594",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_black-bb.png": "8a0d6c4a902987a03f94fb069d45d9f6",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_black.png": "ea52e5121900c59215e66edcd889a7b7",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_secondary_metalic-bb.png": "4daeced07c034bc6807579305b5a7117",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_secondary_metalic.png": "e3bc74caabbd26dad004292343cd7fa1",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_tertiary-bb.png": "72668ebfb522020bfa2c9a43e6f11f6a",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_tertiary.png": "1019e5a8982582ba8db214f2f7bab59c",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_twotone_white-bb.png": "5882d92bc1b47f577ade54bd825add87",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_twotone_white.png": "b637235f81098f48924792598034ff99",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_twotone-bb.png": "a029935affddbd5d6dea88a7efaf8c43",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_twotone.png": "28bd4be80d7fe1c9c666f8c3573931c9",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_white-bb.png": "bebb4618d007a030727e143b125f2cb2",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_white.png": "027a5ffa55cae2d0f77904a055c469eb",
"assets/lib/assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/lib/assets/fonts/Roboto/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/lib/assets/fonts/Roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/lib/assets/fonts/Roboto/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/packages/rg_assets/images/Join-Fleet-comp.png": "75838ec357f53dc2ab95224ad2d2c2b0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/fonts/MaterialIcons-Regular.otf": "afc874f002cede1f8a9ea62f847c6def",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.json": "875b8495679e09ad4f99d288d6d5e411",
"assets/AssetManifest.bin": "30146d2275fcfb2aa12d52e666e1e8ac",
"assets/FontManifest.json": "84ca76db36d5ff0ca7cc1530a2738dbf",
"assets/NOTICES": "ed974aa6bc494e7e029d9085aef5ee1e",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "fd48339230739cdbb783c16048219d05",
"/": "fd48339230739cdbb783c16048219d05",
"manifest.json": "ce56726a30392c57cbcbf7945f1bc0df"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
