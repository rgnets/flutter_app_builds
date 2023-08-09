'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "ce56726a30392c57cbcbf7945f1bc0df",
"git_state": "d7d7014d713bad1d2e75ec3efada2fe7",
"README.md": "2092b9847eacd72944cddd1adb6250de",
"version.json": "5aeef19d718b292df0e5e405b36668c9",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
".git/objects/4d/e01c30cde3428496bfb1cc53b1b7446589047f": "16b8882b14c54dfce06c4753313ed0f5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ad/1da8e1446682a11c0adbb272f9194a85333e3f": "9c28d80a0079a5f00cccb3265c5a247e",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/af/9f2b3eb9bf517296d348d8e9010fcf455c5371": "85f1e9df0882ee63d33448bca936296d",
".git/objects/05/4d5e2f67b997fc7d5e6e12527eeb724150a8ef": "3eb72e2cd2cbcee4646afd26009e5ba2",
".git/objects/fc/3837fb0d8548bf14fc2a2ab80e1584df88fa89": "5ad8006ef61aada0e2cea1c16202e68a",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/c1/e83dcb2983a95a149cd7d353cbb48c3fe3b1b0": "bae0f6ebb3b8f2df583933dc36d5da8e",
".git/objects/33/149d7048f8dde83f293860950bd0dc703ab811": "61c770318201ba49aeaac488a928d7b8",
".git/objects/26/6b11a3f202f8f7bef243b21d12a4669f53b4f6": "30a6abd22e39b211311dc0daf10ed42a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/81/a032e3bac80ae127af48f23f218ee0978d4503": "0d681fb06ab5bbe61a521c3c7a0e508e",
".git/objects/09/905c59f712aabbb474f8c8158a25d7b2a88a2f": "dd3344c50a2036c1e97c4e730d136145",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/b1/4fea8093dc3d3385faedb630db2ad7eb5b173a": "6d6d1d53777635c63819858a49e881b6",
".git/objects/de/dfb82d074db99262ae3424931479b064ea9c0a": "58e25d44969e1e26e0be0361b2e162f1",
".git/objects/58/1b9d9840fd72ff1746a589784bee7ca1881e44": "bce2ae9f2083838bf7e956158cc771ca",
".git/objects/a5/74503b4b5b8b51714bc91d45d6eef1a5e2b774": "201ddb83d58ebc5e50e928fa9f1077b9",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/87/600b1d420af156f052ce5eb863640b2dd3eeae": "e8fb63af61982d319b023cc785430e99",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/96/0ef35a2dfdbbf012645967a92b6248a82eed37": "0851089304cd9aa987248e9188c04ec5",
".git/objects/c7/fc3041b7252e7caa558f72b8fa1d9d0024f9ab": "76e0439a4783a6e93a6773c925ca5646",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/88/9e4195fe9b653dff3ce518cff73013312631c2": "8c835a40262e194d011a2a2937e19350",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/41e6b52f51b8240c821fcfa55f5738d9b8c273": "0b65233d172bab71fcda9554c5ed04ce",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/9c/41b3415a7f21f604c5115983484ce8cd1140df": "8b2c26f86634c3bddd34518f1a884fbb",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/36/1981f799c1d71c9260d98977737978ab1b076f": "83d5357d04de36bc07e0abe981321c9e",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/27/af00e6449fd3dd7394d6818c7bb41aa756daba": "60d6ec9d560c7980cba9f569c559331d",
".git/objects/fe/666252c20183bcbd3e4129aef39df1ee0b3633": "69ed6a67fd3df043bdf949c634ab0432",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/3d888f93bb8889e9137b4faf10a371253c477d": "52e4cd9a209bcb3ce57dd07e6a710d78",
".git/objects/bf/1c9a35f137c58705919412bed789256c044756": "069fb8ab3f627d82a3e28ccc5270ddfb",
".git/objects/20/854f4303bb8edb49b93152d067a71c3011fca3": "f009c91d4f4a5613486f3352a99daaf9",
".git/objects/ce/51a504a4bfba98c9cc352d32020a9035672021": "e818762f63a313b074a8f38cb178b40a",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/5d/ef583430e8a5e3721cbb61043c07435ea15575": "890661971296834ea4f075fa34b82c8e",
".git/objects/5d/301f66c9c83f959c83b6a35513ff9b729ac5b1": "5bf0ff00a032c5663e75cc1f37985bff",
".git/objects/b5/2b8ddd6bd8b3e4debb924622a1df0e61e94cf4": "6c6b7654920c8c25b140e26aa890f64e",
".git/objects/10/796030e62abdf32e3ddffa258e6a93403ff4fd": "e3158c972af995fcadbc992fae062036",
".git/objects/6b/e94eee6bb37d29b01ebe8b450f64f9dde6a6d0": "386005e4c88f363ab90e33befee95411",
".git/objects/56/a8e28f2d6d299511fec118cb087ddfc15943a1": "9e7b77f0b4573ec9d845ebf9a31c676a",
".git/objects/0a/dfd997dda56982534502226f9a147b1dcccd92": "2a41745ef0f1f34580723e996a888556",
".git/objects/54/21fd526d21858769b109553ae6abbbc46bc8bf": "4229402e909dc4e0620f542d9e581705",
".git/objects/bc/fdab4311f2201f45b341b36310e1cdb8051e34": "0b0600863ba421ab0448fd6eb8546d41",
".git/objects/39/840341975f7b059f54ab3b250ed220b8ba1009": "7b883f1fd99db526816cdd36a73b28b8",
".git/objects/92/e2aa610cc0fd693f95f4c55c27ee512fff6b73": "fbc7cc3968ee1cbe19add78c136da62d",
".git/objects/24/a98fbaeda6b7f1aeef9617ec96c9b4f4d4e526": "6ecec9be8d22195b1aad090104f51b7a",
".git/objects/01/c3cd7a407e1d97d65218ff35e287c88f658527": "60fbd64cfc1bac591043480a5b004232",
".git/objects/c9/66ddf35fc1c1c670badca28bcbf8886333889c": "0420fa5ce2ef126fb5bcced16742d2ea",
".git/objects/61/578e103a7378a17512de5597d5306faae7ec12": "51bc70ee8f996a77d2a8e02ad46d469d",
".git/objects/f8/21f4749a9932134b27f010f10b9dc2f5c6a4cc": "48d34a5d1f1fe3b73330b8e026331a62",
".git/objects/ef/7f2f7f4bd77110e90e2a44b6229ac88470e6dc": "f7e47994c05d516ac03deddcad18687a",
".git/objects/c0/5168a9ba49de6263a4aba964ea4ef299f36632": "3615a5ad15545d2185d8b6ae435c5f33",
".git/objects/a9/de577d1c77da3e56d791a560e45b19ab7a0df8": "d8c81a4c7f35f2a3e5810071cd555824",
".git/objects/80/34c3cd6b7627306f8fd6947517f427f4f1cb8d": "976dba9674ea8351002d9497cf6ab4a0",
".git/objects/e6/1078ce088415d54373e115d73c5632cd8be517": "ecbb7d189adb653df912571c2ec01807",
".git/objects/e6/d77d7c52517f7a302a2ac80282a66adb3f30ea": "cfdcd449f221ef0157b98e49e16910d3",
".git/objects/7e/3227c1f1c45b2b94d1c9c6911400fe01f55fa2": "4791946f5757ea34420ef77b08adc3f1",
".git/objects/3f/1bb577e85510b3835237463977d19209a3a4fb": "352750712315e908f0d217aafdf6280d",
".git/objects/3f/82594f0ccaab98d978e77d2d989b6d20344040": "506bd7dbcc34be7194aa0337828dca49",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e1/f13dae646baf7365ba21d2d5058a6a82c4b97b": "0fa5feb0ba51763b2a2669895a99f702",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/08/3564ff37501d7cfbe419cfb87d51bcf9084350": "30c7c85279205f0264d85470782f395b",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/19/ac5d7484b14273d81f6573c49984822b29fa28": "444fb13b53d99ff726e973f8d9f36fc4",
".git/objects/84/694bea5f65a8ef7d9193573085ca0d25fdef0b": "fbd967114a9360d6fbce5d4811ec26d4",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/29/7570938012698ecfcbd61a33177ab252810338": "3178cb39f3fbfa8376bbb43fb9bb3b25",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/43/da14d84ecb949ca5f5e8ecca3a514aa7fe1c7d": "d970b955bbe605c4f81533fde279992d",
".git/objects/e3/319ede2091973d73b15d7c7d06b52030259fad": "b62a9e084e0bafbe536e2c852460f7ba",
".git/objects/e3/97225fc730e01e72d7e5cc338c5ad91448cc6a": "c3d1efb63d045aefa6ff6cfdbffb7683",
".git/objects/23/d15a67b27990a540fd9f885e962e9bff7b4dc7": "e57883daef8f27461b08ccc45d4839a0",
".git/objects/1b/5eaa361c7306b4246c48497c79475c0e05c5e2": "797c30b38f4b43082bf674ed21553c74",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/57/ed19307a8e6be7373d3953bab42bf8199efd76": "c0365250ea8a64742dd10767cda2a720",
".git/objects/df/a448a97937de38b1e0d630df0cbe612f86578d": "9db59373805921ad1061d54613f84ce9",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "68c09cd552b5a156dd7f6fff567e9b0e",
".git/logs/HEAD": "7a9f8d72c76195b986f958a37cbe7fc3",
".git/logs/refs/heads/rxg_lightui_web": "4d32e09e43817626b750b441a5766150",
".git/logs/refs/remotes/origin/rxg_lightui_web": "8965a5f2c90ea5b30ee54e648cf16125",
".git/config": "f1b0092c48c8baa97c377d5008c17935",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "698bf21ad5ad9af194f891e1479395d9",
".git/refs/heads/rxg_lightui_web": "32f87e0da18c53248e886b6a41449c44",
".git/refs/remotes/origin/rxg_lightui_web": "32f87e0da18c53248e886b6a41449c44",
".git/shallow": "32f87e0da18c53248e886b6a41449c44",
".git/index": "852b91a2340606c088c8ad7363ec6148",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"main.dart.js": "bd8340cc41e74250cfb7c581c0a5708d",
"index.html": "6711b1a10b3df76261bfa8ad29360966",
"/": "6711b1a10b3df76261bfa8ad29360966",
"assets/AssetManifest.bin": "30146d2275fcfb2aa12d52e666e1e8ac",
"assets/NOTICES": "49e1cf55ee94dc937aca62482c076138",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/rg_assets/images/Join-Fleet-comp.png": "75838ec357f53dc2ab95224ad2d2c2b0",
"assets/FontManifest.json": "84ca76db36d5ff0ca7cc1530a2738dbf",
"assets/lib/assets/images/2021_rgnets_logo_white-bb.png": "bebb4618d007a030727e143b125f2cb2",
"assets/lib/assets/images/pig.webp": "c0d738733d6a79537d16ce383d971adf",
"assets/lib/assets/images/rxg_two_tone.svg": "fe98220b70a14c7e3843d44d2701bfa3",
"assets/lib/assets/images/rgnets_logo.svg": "666dca7a9c97bdeaab91afbed40d0a00",
"assets/lib/assets/images/modify_fleet.svg": "ac1d298a443fef1fd8130aca5831d991",
"assets/lib/assets/images/rxg_two_tone.png": "bdfdad6c040a978ebc12c53bbd6038a5",
"assets/lib/assets/images/2021_rgnets_logo_secondary_metalic-bb.png": "4daeced07c034bc6807579305b5a7117",
"assets/lib/assets/fonts/Roboto/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/lib/assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/lib/assets/fonts/Roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/lib/assets/fonts/Roboto/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/lib/assets/language/en-US.yaml": "fe53096ba486fd8203ff0a65d14dbf1d",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_twotone_white.png": "b637235f81098f48924792598034ff99",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_twotone-bb.png": "a029935affddbd5d6dea88a7efaf8c43",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_white.png": "027a5ffa55cae2d0f77904a055c469eb",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_white-bb.png": "bebb4618d007a030727e143b125f2cb2",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_secondary_metalic.png": "e3bc74caabbd26dad004292343cd7fa1",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_twotone_white-bb.png": "5882d92bc1b47f577ade54bd825add87",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_tertiary-bb.png": "72668ebfb522020bfa2c9a43e6f11f6a",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_black-bb.png": "8a0d6c4a902987a03f94fb069d45d9f6",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_twotone.png": "28bd4be80d7fe1c9c666f8c3573931c9",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_secondary_metalic-bb.png": "4daeced07c034bc6807579305b5a7117",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_tertiary.png": "1019e5a8982582ba8db214f2f7bab59c",
"assets/lib/assets/logos/rgnets/2021_rgnets_logo_black.png": "ea52e5121900c59215e66edcd889a7b7",
"assets/lib/assets/logos/rxg/2021_rxg_gradient.png": "5fd5bdd42d70dea25805663dfd5c4d3c",
"assets/lib/assets/logos/rxg/2021_rxg_black-bb.png": "d2bbe64c3d7d51608818664ece47fee4",
"assets/lib/assets/logos/rxg/2021_rxg_twotone-bb.png": "b96eae40df966512fd4699ace79fcd51",
"assets/lib/assets/logos/rxg/2021_rxg_metalic-bb.png": "f5d97ecfdfff48af0430d8aec8ed0113",
"assets/lib/assets/logos/rxg/2021_rxg_metalic.png": "792362e854048fd1ba564682d4421c86",
"assets/lib/assets/logos/rxg/2021_rxg_twotone.png": "3ea3e32c87576b106c0aa4c4839237ed",
"assets/lib/assets/logos/rxg/2021_rxg_twotone_white-bb.png": "46053f5610edf16553aa5906cadd84a0",
"assets/lib/assets/logos/rxg/2021_rxg_gradient-bb.png": "91712e36caeab4d6e08dcfb693d0e173",
"assets/lib/assets/logos/rxg/2021_rxg_white-bb.png": "a85924a2c54d93d9919f0cf35daead07",
"assets/lib/assets/logos/rxg/2021_rxg_twotone_white.png": "737240a445a4b219b380cc5d0a7ac81c",
"assets/lib/assets/logos/rxg/2021_rxg_black.png": "bfc6dd21a08d3974741c0d907daacd14",
"assets/lib/assets/logos/rxg/2021_rxg_white.png": "99f0af93a4d969b5445754ea72589594",
"assets/AssetManifest.json": "875b8495679e09ad4f99d288d6d5e411",
"assets/fonts/MaterialIcons-Regular.otf": "796ab821f410004fcb12aefdce2806e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"};
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
