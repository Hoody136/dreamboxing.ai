'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8be0a0c633081a09239a9a835b8a2f21",
"version.json": "d270e4ff32c8ae61feb56c3043869ecf",
"index.html": "8b3bdaeba4f49f0e0e0909e190384393",
"/": "8b3bdaeba4f49f0e0e0909e190384393",
"main.dart.js": "51824a1d1e2c1f0fd05290a26f8ae0f4",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "da44d966b43f4412bddc6846d3ea3df8",
"assets/AssetManifest.json": "50f16012401147ff990270e70ba03a62",
"assets/NOTICES": "e341e60b0e3bb20f86ca0e0ed15a81b8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "d0c7fceb29abf921d03f648bac386f05",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f0d5d0b6b7d5786cc6da6af43c016880",
"assets/fonts/MaterialIcons-Regular.otf": "52e2bf47ffe5723b5661187b98f6f57a",
"assets/assets/images/landing/0_1_8.png": "c64c21fbc94188c17b89d214203bc135",
"assets/assets/images/landing/0_1_10.png": "28c214b80633f4422403476d6c0e3861",
"assets/assets/images/landing/0_1_9.png": "e03ab6487bd3c0979655849a9e1d0a58",
"assets/assets/images/landing/0_5_3.png": "6b4d6638f6a3aef90b3c68437a0d15fc",
"assets/assets/images/landing/0_1_7.png": "0c0a5b795a99f5a075b2449157a69c56",
"assets/assets/images/landing/0_3_4.png": "e4a7ec9445d521996b93c38504d59524",
"assets/assets/images/landing/0_1_6.png": "6264de09b5df5a820e09192da960d3c2",
"assets/assets/images/landing/0_5_2.png": "7f6d98cf41c5b33ddba8b6dd9b6420c7",
"assets/assets/images/landing/0_1_4.png": "c3057c8cc0e4e56e0d29118d7d9ec40d",
"assets/assets/images/landing/0_1_5.png": "aa805b80fa59abd9b998fc6f2f2330b6",
"assets/assets/images/landing/0_5_1.png": "d5e31130220097d273525f193eb2aae6",
"assets/assets/images/landing/0_1_1.png": "5f8fcded22325150f17b0e11a6fe4a5b",
"assets/assets/images/landing/0_3_3.png": "4febcfeccb4cf6ecda218c9d449e9d9a",
"assets/assets/images/landing/0_3_2.png": "0358a8ef65193d51024dd63894000580",
"assets/assets/images/landing/0_5_4.png": "342557d6c2cf0a0ee266b0789a32916e",
"assets/assets/images/landing/0_1_2.png": "e466a21158c5cc22f0675cca3ab8f35d",
"assets/assets/images/landing/0_3_1.png": "55b5fb27413f95a2f5a5ebb39e937b8e",
"assets/assets/images/landing/0_1_3.png": "8697101eeceb33ee05347177ceb82129",
"assets/assets/images/landing/0_6_2.png": "9942d1516c7ec178238338f07b5c8745",
"assets/assets/images/landing/0_4_1.png": "e65d2f1a8747cda5f9a9766fca5f9076",
"assets/assets/images/landing/0_6_3.png": "3ce19b031afa9e9a9b4b145fd96ddbce",
"assets/assets/images/landing/0_2_5.png": "eddc53ae437a892b4209574c817ad767",
"assets/assets/images/landing/0_6_1.png": "3f9d26ffd58466a0a0c016dbb502dea8",
"assets/assets/images/landing/0_4_3.png": "9482f9b1a85f64026c85d981227f9f9b",
"assets/assets/images/landing/0_4_2.png": "c5995945195114fdea7306d5b72a9f19",
"assets/assets/images/landing/0_2_4.png": "2b5e8d4a0bb2689e53d3befc248e4e9e",
"assets/assets/images/landing/0_2_1.png": "741936e11d71f4b63a2e1c1103cd7e03",
"assets/assets/images/landing/0_2_3.png": "fc032dc0903ecbd9e68a22c866b9a686",
"assets/assets/images/landing/0_2_2.png": "e3d5aa777d93d7e8e2b098ceff280bfd",
"assets/assets/images/Detail_Pages/6_3_2.png": "71121da5eea7a0c9032b07cd61754aa0",
"assets/assets/images/Detail_Pages/5_2_2.png": "ef90f04d464d0724a1e7aa8493416a49",
"assets/assets/images/Detail_Pages/5_2_3.png": "3ff8462da4a279eee2de9632496306c9",
"assets/assets/images/Detail_Pages/6_3_3.png": "64a1d38df13b7b58e2bf62c991eff3d3",
"assets/assets/images/Detail_Pages/6_1_1.png": "f1c90c0cfdca9a17fc79f163ba5c0c38",
"assets/assets/images/Detail_Pages/6_3_1.png": "ea414d589cdc2acd7bb43ae34f539e4e",
"assets/assets/images/Detail_Pages/5_2_1.png": "6c097e6539e1d49b16c6751fcc152f94",
"assets/assets/images/Detail_Pages/4_2_1.png": "75afdc5cbd96d502f119bdc5812d6548",
"assets/assets/images/Detail_Pages/6_3_4.png": "a997602d3caebf512c85e1aa1d73a018",
"assets/assets/images/Detail_Pages/5_2_4.png": "f11e49d8b9f2a48f49694af211aa5759",
"assets/assets/images/Detail_Pages/5_2_5.png": "01f3c65211c33c2ff8a560cc4d953bf4",
"assets/assets/images/Detail_Pages/6_3_5.png": "3753f3d2c605e88d18780b11f7825517",
"assets/assets/images/Detail_Pages/4_2_2.png": "d04d7c383a1afd574642c51100b512bc",
"assets/assets/images/Detail_Pages/1_4_9.png": "632e2878be201ec859b054d87007e952",
"assets/assets/images/Detail_Pages/6_3_7.png": "b5740f5162d8103ef05a7b70ba83127a",
"assets/assets/images/Detail_Pages/6_3_6.png": "6136b5cb3ff6079d5658618dd422d2ab",
"assets/assets/images/Detail_Pages/1_4_8.png": "144ad6679884989193ae86d1634edc85",
"assets/assets/images/Detail_Pages/6_3_10.png": "a7f3361addf0dd2a387f39b6345c11ce",
"assets/assets/images/Detail_Pages/6_2_1.png": "7cd87e861f0d211ded48922d0e4fd2a9",
"assets/assets/images/Detail_Pages/5_3_1.png": "ec9c2872a389f881822e74c2065217f9",
"assets/assets/images/Detail_Pages/5_1_3.png": "6bce2f0e002d88025614c0ad0e6605a3",
"assets/assets/images/Detail_Pages/6_4_6.png": "0d1fcd790ddaa96a9f0c96d8125254f2",
"assets/assets/images/Detail_Pages/5_1_2.png": "52972c66ffa45630c59211968e56b212",
"assets/assets/images/Detail_Pages/6_2_2.png": "b399dc7966f46e4c072b2cd0535247c9",
"assets/assets/images/Detail_Pages/5_3_2.png": "01dd3e2d5d9fe6ab1c0bf7bc4ba8c344",
"assets/assets/images/Detail_Pages/6_4_4.png": "fc5846ee3d2d0ac2ee5477bc7a82d204",
"assets/assets/images/Detail_Pages/6_4_5.png": "8d02da0910bad26093b70580a228f311",
"assets/assets/images/Detail_Pages/5_1_1.png": "10989e44d9f39df8a1861ad686a1e03f",
"assets/assets/images/Detail_Pages/4_1_4.png": "a60a1c34e13f838e095872c99f385a9c",
"assets/assets/images/Detail_Pages/5_3_3.png": "2e236473a2fb59caf53e495ae7e8dcf4",
"assets/assets/images/Detail_Pages/6_2_3.png": "f84c4236396e511b80c07dadab48af73",
"assets/assets/images/Detail_Pages/6_2_7.png": "d359f93dd08976669ec5f82ab91f6f7a",
"assets/assets/images/Detail_Pages/5_3_7.png": "6f70d6955c2adca29b00e1bc8d4b831f",
"assets/assets/images/Detail_Pages/5_1_5.png": "c086b453279cd1d1ef56e7a73a5bd18c",
"assets/assets/images/Detail_Pages/4_3_2.png": "286cec908d97b54edc159a16db5a6f8f",
"assets/assets/images/Detail_Pages/6_4_1.png": "8f2a669e26b445ee0d9b57cd992f3107",
"assets/assets/images/Detail_Pages/5_1_4.png": "7b0bb8895f907dc82b4a50ef2775bdc1",
"assets/assets/images/Detail_Pages/4_1_1.png": "475c5b7791dadd1115b173b851967041",
"assets/assets/images/Detail_Pages/5_3_6.png": "41373a46bf640d5fb07203b3a6976bf7",
"assets/assets/images/Detail_Pages/6_2_6.png": "ba39b12cb56ed384d10114a73850fa88",
"assets/assets/images/Detail_Pages/6_2_4.png": "d1663c0d439cddb2530c29694c52ba4e",
"assets/assets/images/Detail_Pages/4_1_3.png": "64826323ae6f335e994c4fbf1c36cdee",
"assets/assets/images/Detail_Pages/5_3_4.png": "f576fd5f9be93d20b57a0fc6c25d860b",
"assets/assets/images/Detail_Pages/4_3_1.png": "1f4d5041c7d33ff7d95dadaae30c869c",
"assets/assets/images/Detail_Pages/6_4_2.png": "4a0dfed315db05b628d988d6a3211e9e",
"assets/assets/images/Detail_Pages/6_4_3.png": "00c267a15e2c5deb8cf700de9d9bf62c",
"assets/assets/images/Detail_Pages/5_3_5.png": "5ad0ffe7afa48c943b09c4572a1c8acd",
"assets/assets/images/Detail_Pages/4_1_2.png": "f2c9f07852fe6bd3210972bf5c28c0cf",
"assets/assets/images/Detail_Pages/6_2_5.png": "025e94265448ea019a42337e60ae8711",
"assets/assets/images/Detail_Pages/6_2_8.png": "1571fea51b494c9e24e4e136d7477720",
"assets/assets/images/Detail_Pages/5_3_8.png": "44837835ad50b48b6998cf9add6ad9da",
"assets/assets/images/Detail_Pages/6_2_6_1.png": "4d8bbd2285ddb45b3eb0bc1972cec46a",
"assets/assets/images/Detail_Pages/1_1_2.png": "f7bdc4978894eb8c31163af1191de983",
"assets/assets/images/Detail_Pages/1_3_1.png": "1a9480f6a1f1aa2da2239734ec8faddc",
"assets/assets/images/Detail_Pages/2_2_1.png": "c886b807a2dfa3848f8a4b8edfe63b98",
"assets/assets/images/Detail_Pages/5_3_9.png": "c7abb0259756401abf601e266d6bb977",
"assets/assets/images/Detail_Pages/1_3_3.png": "ee737720643d03c9973db454d14eac06",
"assets/assets/images/Detail_Pages/1_1_1.png": "c26f98b5ffed65af34ecb0b1e671bb89",
"assets/assets/images/Detail_Pages/1_3_2.png": "89491874285e4541931ddaddbe2902e3",
"assets/assets/images/Detail_Pages/2_2_2.png": "1b8a12ddbf3c3a5c21af26ceeb3006d9",
"assets/assets/images/Detail_Pages/2_4_4.png": "b2cb80c8fa1a561139955e848044e1d9",
"assets/assets/images/Detail_Pages/1_4_10.png": "704368da290a33039efb563a8aed0325",
"assets/assets/images/Detail_Pages/2_4_1.png": "6cc7aa502c964b4e9cd4e236dff4edae",
"assets/assets/images/Detail_Pages/2_4_3.png": "615ba710e6ccc6b3d0cb34ec3dbbf9a4",
"assets/assets/images/Detail_Pages/1_3_5.png": "3f2d743badc957b9d960e750773a12fd",
"assets/assets/images/Detail_Pages/1_3_4.png": "da0f0c67a4bb218a29f339e89004bdb2",
"assets/assets/images/Detail_Pages/2_4_2.png": "f1cc22ca8e12e99ebde853fb4a6641f5",
"assets/assets/images/Detail_Pages/2_1_1.png": "5803c4a7296a489c4c4b8ade4cdc9c85",
"assets/assets/images/Detail_Pages/3_1_4.png": "55629ed1b494fc9c3abb0099c34bde6c",
"assets/assets/images/Detail_Pages/2_3_3.png": "3dd148b6b245832c1318df459b99ee47",
"assets/assets/images/Detail_Pages/1_2_3.png": "f3be6c856678768b899e4cc1d9df60f1",
"assets/assets/images/Detail_Pages/1_4_5.png": "35f0893e6aab1910ff67227aa448260a",
"assets/assets/images/Detail_Pages/1_4_4.png": "705bb02b374e17846fc1b128cc31b76f",
"assets/assets/images/Detail_Pages/1_2_2.png": "76f93fd5e403941bc8c10aafe21f6737",
"assets/assets/images/Detail_Pages/2_3_2.png": "cc24e7dfcad1c02fe34f10ff0022cfb4",
"assets/assets/images/Detail_Pages/2_1_2.png": "d16f4eb723f4cb2f6464544823aa90c8",
"assets/assets/images/Detail_Pages/1_4_6.png": "23b3ca6ffdb6358d2aedea421eeb0125",
"assets/assets/images/Detail_Pages/6_3_8.png": "4d9bf216f27cabc3cc5a98a05383deb8",
"assets/assets/images/Detail_Pages/6_3_9.png": "76688650e83d52f936eb17ca8ce4ac6c",
"assets/assets/images/Detail_Pages/1_4_7.png": "f6ee204aa85f24bfefdadf3420428d67",
"assets/assets/images/Detail_Pages/1_2_1.png": "198a5f22f6a28f9e5da2de0377658c01",
"assets/assets/images/Detail_Pages/2_3_1.png": "fbe6d244c3a151caf871ef9203f8b597",
"assets/assets/images/Detail_Pages/2_1_3.png": "2ae7b5edee366960cde0860e19ad0ca3",
"assets/assets/images/Detail_Pages/3_1_2.png": "59082a9b82d4192dcb7cddd8ff7593b1",
"assets/assets/images/Detail_Pages/1_4_3.png": "3bc9ac64351c24170cf24aec6840ffbb",
"assets/assets/images/Detail_Pages/1_4_2.png": "be3c8011303bd13cd0c6f51f59f98370",
"assets/assets/images/Detail_Pages/3_1_3.png": "6012863efc27877de9a860685ad31373",
"assets/assets/images/Detail_Pages/2_1_4.png": "03cc6687dc352a375661851bf2b0b079",
"assets/assets/images/Detail_Pages/3_1_1.png": "be61fda2319eb9b090413f8c91c26012",
"assets/assets/images/Detail_Pages/1_4_1.png": "7e23ab595c32aba26793db929d4cc6d3",
"assets/assets/Data/practice_section.json": "bb8ff8e0229d270d76d83f419eeaa92e",
"assets/assets/Data/warmup_section.json": "23b016d3bb22f437f798bf6e27852228",
"assets/assets/Data/attack_section.json": "5644bcacb2ff6f5a0e0efecf6b4aa0eb",
"assets/assets/Data/start_section.json": "9dcf98131abc6c781416b939eb9ee483",
"assets/assets/Data/move_section.json": "cc59de215cf5107f498115388f591f6a",
"assets/assets/Data/defend_section.json": "2597f36e9fcd883b7fce0eeff5e43ff8",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
