'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3918aad4c0c34261fdd0f412092602f3",
"version.json": "7e5451c9df8be90ed3beb0414a0c4692",
"index.html": "1f1a54e33a3675d77f7bc56daa2249a1",
"/": "1f1a54e33a3675d77f7bc56daa2249a1",
"main.dart.js": "7d987738a5071cc9779bccf9ece3664d",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "96654b1a9a458cf615eb6fbe88aef476",
"Kirtik_Ayush.pdf": "298f25539521b606c08bc51afedbf885",
".git/ORIG_HEAD": "cd5abfe2af5dc9d4d6bd6af261b2ddbb",
".git/config": "c733883063ac07948a2d107aca9396f5",
".git/objects/0d/7ec0cf050f5c4ddfa23494e697b7356bf257b4": "387521aa8fe64434cadd45da6503a3cf",
".git/objects/66/c6a7ac88f54ff13ac168f59b83c6fd2016ae13": "7a85c3def6a9d6efe68cfc060d14bc7c",
".git/objects/50/b81752278d084ba9d449fff25f4051df162b0f": "0ddbe11c79b98dec806590815f7676a8",
".git/objects/68/c7d0fced8375b3e6a940452c18b45cdc0580b5": "0a8601381f0b3b8ab99119d852f75e16",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/32/777f249bdb7c3878479e23d9f13740645dab0c": "fceb4d1f03c7f20c999fa007d0a85056",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/56/f48058df8fcdfa495c1c995659cd0f56241607": "e88e2237b08bfe0985257e9ccbfff57b",
".git/objects/56/d8c1ac0bdb5e2e86dd28fcdf15b4ebcec80b2b": "bf0921ccbe7b62ecd37f5007c17a0e7f",
".git/objects/67/da90bef7e964b5aee50b43e9b9b93ae27b7fde": "592ca409063c21c939adf44c9852275b",
".git/objects/67/97ed2ddda6c3f2e30b77d1fd8f4ded4ba21877": "84728cfe02752e33cad5ff530246711e",
".git/objects/0e/d041d23b4863f7d7de9edfd6f29e848fe6a4a7": "0cb630d2018c17c14f3a588b2fe0b257",
".git/objects/5a/d90add6c8a71082acafe195233d30102d06f48": "028e322bdd159f576596abc680c0b6fc",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/9d/b9aea3929473a82623f627f72deea83a969885": "5c8f23482f521c740b3e553cdfb7dbfe",
".git/objects/a3/ffcd45bff0c3a9cebb497c651c5940f5a46465": "ffa97b8e68c0b8a3c7c9693b13545180",
".git/objects/a3/2a7a50e01bbee11ea5262c30ad13ff173bf733": "dd686dd3ebc54eb850dff055ae465c69",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/bd/e9c12bfdb2d809329f71b6aa38179c636f86a8": "eec12cdd312a1f10658a25cd26a80af8",
".git/objects/d1/40f7436b92cb1e7c2ab13e52b5944816d49c82": "1cfc2632239b8584f82249de0b450f60",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/b1deda1c594859a1f5197644142f73e2a85868": "8fc00ee8b8c9d045131ef0a72c3602f5",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/6c61e5f2e5d191bb622813dcb2cee51e2826e0": "a9b24c3af0fc2750b6ad40665c72c0c5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/01c51114f2da3c8688ed480513b1153d8b9a4d": "f4def052390b086927b4aea65b9f9d51",
".git/objects/ee/f45b0fa0661b5cd6df3f64522700ba69612f84": "943a4ba6b8a5301bae38a93c42c85342",
".git/objects/ee/1f6c3e272ca7fd4e1dc95b133864249e8ce906": "8924cc5412fdf5bfb4432f91b0be5033",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/a235ccece1e12a8597323a8a02e84e8498a9b5": "9330c9275dfd3fb13dcf8e294257a292",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/698b17dbff27822010b6914891327114b349f8": "89247418a1ed75093cdbb765f8bd3d5a",
".git/objects/e4/3d1196dd6c346ebf081373285bdf0fefeace09": "3a85f3c4e2c4a7c6da58abde69c39b01",
".git/objects/ed/becdf356a68a7b178cb915e892b0a9285da1e0": "4846db579860211e9fc9e1105a40b6b7",
".git/objects/ed/b71a016e0ed0d4b07f7438aeb29490d61930c2": "e631d88fac54fa8c6a0aa5d08111d156",
".git/objects/c6/6570d851f034f2d2bc8c0c74201b7ac0aa1145": "6bc38dfa1bca035ee010bac912106b1e",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7d/a5eb371980eaa17117974815590bb9c9a7ee37": "68372facffb222c560e818cf17383e47",
".git/objects/73/45fde616d651260b0073ba5ea1997a8aba7c48": "40550f32cd4ab1aaa687a03904a496f4",
".git/objects/17/3cd2157696dd8826a4b9147a543e09e6f08c17": "5d90af666c40666be07b1c511b87ca82",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/8199c56f4ee811f589b3bbf844415821d63abc": "cb17ae6917f1948c9467dc1ac5b76ad0",
".git/objects/86/1e24bd6535a64a2ff68b919f67b577ab63a03e": "50a46791aac52a30e1d0abba1e148e6a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/966757f9597ab0d1eb2dfb9e48f748f0059874": "9d190c86b12e91c674085bfc9fa600fd",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/e0de8a4df13b1a528e1fdc15b4d281a6085288": "c3115108f5c3fc3af069de5928ddfc00",
".git/objects/6e/0f33c8ec610b839abde763a5344a89a28365e7": "7f6077c93e1653bfd8c3ef83f4deb86e",
".git/objects/91/bb3acdddacd0a380e5c038b892a856c4cbe64c": "289019910abec0799603a51d670b6cd0",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/79849b5b27c0606cc4b10f0a8fc86a10df2015": "a2aca0c758a87b956456176999bbb5d7",
".git/objects/5e/17b87b6aaf92641878abdf328a8844035b2900": "b9f6eef3f3e9fdb0fa0c2fdcc725f6ff",
".git/objects/5e/8a82e302b8aa279d7a01efe6475224ea18e616": "e6fc8ac18fde75a645d33040b1d2683a",
".git/objects/06/74ae3e4fc8c3f7baa53dbb582dd420ea73f224": "4cb86117577f320667297db8b700946e",
".git/objects/99/abca9e3df04947b364f1de0426702d1181f59a": "312de12f1d8d9a8ea48a8f2a81eef3d1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/e224bda6c60d5bdee0e2794165e70f4bf7aad7": "d1cef926431c2d4859546b154e22d9a6",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/d5/cfd76d7485056b1e27ab504f8576d700deef47": "588bcf59eed1f373fecedfbae3b8d5e9",
".git/objects/d2/0c1275e7b04f01426bbf48937031c4206f548d": "15c84a81a30e7c85f1fb3d82c8f5bbf5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a6/26a527c843ad01cd4f6a2fd470e77fa93a781e": "4786ae7536228c6a6fa5b32908f13330",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ea/2d9a390778915fac2b9efb26b25de8cd2cd50a": "e9494327c46642e966eec7109b451ecc",
".git/objects/cc/52642455282ecc1e193e7357d5b3e3208c7cae": "5b59ed6ca102473e20371155f8b6e875",
".git/objects/f9/b20b9a2793994c83e53e8f828cf569e34bf1ec": "1e0dc81d714b2626865d95d773413776",
".git/objects/fa/537bdb7e594bf59ec5dac7d3d3195814d77f50": "2ff65ee3805884e3f6b4ff3f2b6b1b91",
".git/objects/f6/8f5315399177a0235be88e40e2da3bafcfe829": "245943ba8e12c4bc18743bdfbace25c8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/3a191aa025b232fd824b4e16e30d1a96499e24": "b9195af97317ae2f9f6604a84a664f6e",
".git/objects/ce/7b0478ce10772ff512490f2a3fe330c7cba8a8": "805534d64f5757fb4c71b037ae7be2de",
".git/objects/e0/0c89fd351b7a6efe015a6ec6104f372290652a": "b04ef655d741df671cbe2e6639fa1849",
".git/objects/1e/5898b501d9b9addad7c4e1e976980bbd07c63c": "ce08deae085fd10896d1eb7ddadd6ac9",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/8d/24f050078c59690e4a632cd6b696ddb7320cc4": "81f875802b8ab50d4b1c4e9b815bdefb",
".git/objects/8c/1762361c641389b0a788c730249b571387711e": "cd78ec12353eea82f9e29fb67e6e504e",
".git/objects/85/43da4fd182ee47b0fe317d5cb637ae3d7f4f68": "dcd6cc8bade95b0280689a534bbab557",
".git/objects/82/0df0eb42446a0468016e2d538962fccbdcfd8c": "43d217839d3e2c54a1b57f3920472ca1",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2b/b3081563a8d269bc42831dfa66751d42fe7d4a": "1829c83844e371365d491f7d0a33aae9",
".git/objects/2b/c4738183fc63dfae3d26659840e58c7ecb5e44": "546f08742a6dfc065fca014c5054b12c",
".git/objects/2b/b757a66a4018eeb3ac9290ac730b84e390b10b": "8582a31579978d64b9a429657b62a3d0",
".git/objects/7f/c047a0098a00cf81d027e8f4683cbd6f98689a": "f9c5ea685b9c20c0aa52c7ff5d616001",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6c1705edca362f5135a897847d7b9bd1",
".git/logs/refs/heads/main": "efc22483cf8bc96aff56034a99a41269",
".git/logs/refs/remotes/origin/main": "8d3981e3dfd2d2ca5d04b6d09f2f76de",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2d644041a3bc2de62f631546fc699616",
".git/refs/remotes/origin/main": "2d644041a3bc2de62f631546fc699616",
".git/index": "9036184b1bb0e5d6a08b11f77a77e0a8",
".git/COMMIT_EDITMSG": "cceda5ce32b985b1191fe6a9ec1554f0",
".git/FETCH_HEAD": "deff56835d3d617daa3cb4c36a153440",
"assets/images/email.png": "c736bfaaf8014d2ec21780ee2ccc7eac",
"assets/images/instagram.png": "69e60fd2620c6f25403c16749026f5e4",
"assets/images/github.png": "1dee40f2668d5c719eafa2c89296f5e7",
"assets/images/handwave.gif": "f3fc3df204ab2c13aa0cf686dc941f13",
"assets/images/streamlit.png": "96cc39b1f9ef6d9c5ed687a8f8099bfe",
"assets/images/linkedin.png": "8efbce0203746a0e2906c02b3f55b5cb",
"assets/images/my_pic.png": "5e07ef4adc83cb40efade111521bc05e",
"assets/AssetManifest.json": "5fd739fcb812369753f04c018b0386a9",
"assets/NOTICES": "db484961c66505f65bd2d8f6a0c4b740",
"assets/FontManifest.json": "e293c34781e2fb41cf93f5adeef2c7e6",
"assets/AssetManifest.bin.json": "734c583fcaf23447da9d6496d1b96fc5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c2fa26b52956a434b9f5bf945ab0c7ea",
"assets/fonts/cursive/cursiveRegular.ttf": "8d31107b80c8b0c5a896d4188b733d16",
"assets/fonts/bg/bgExtraLight.ttf": "0e66297d36d7f24484f3ec8a2232d6fc",
"assets/fonts/bg/bgExtraBold.ttf": "5bfb4fa1f8907c768231d97bc27e8df9",
"assets/fonts/bg/bgRegular.ttf": "6586800789b30b19bbaeb349ca5d240a",
"assets/fonts/bg/bgLight.ttf": "a1f1439e622b6998c9b639bbf0a23f01",
"assets/fonts/bg/bgBold.ttf": "2f7de7a336f650f9cee5ed919cc3b003",
"assets/fonts/bg/bgMedium.ttf": "1363130c7bdf956d164cb7e605619849",
"assets/fonts/MaterialIcons-Regular.otf": "aa22c78b47c8dd3b0ae8082301914896",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
