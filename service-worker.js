/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fa552fb9df4c7eb77105f9f7c7c04e6d"
  },
  {
    "url": "assets/css/0.styles.f3aeaaeb.css",
    "revision": "ebc1084daee064f41330bbc030eec2e8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.202d162c.js",
    "revision": "f004d6d7328a811b7013682ada48fe7b"
  },
  {
    "url": "assets/js/11.ce71482c.js",
    "revision": "d53a3f3d75252d74be350fedaea335a9"
  },
  {
    "url": "assets/js/12.ebab5440.js",
    "revision": "023ab0e7fd5d38df3357d59497ff1093"
  },
  {
    "url": "assets/js/13.6c76dfee.js",
    "revision": "f6ea1e6c0770353fe03cfba3ef0d9a6f"
  },
  {
    "url": "assets/js/14.4bd71ccf.js",
    "revision": "b9ea2d92131ef23ef104c85c909c564c"
  },
  {
    "url": "assets/js/15.ad2dc00e.js",
    "revision": "6038b3b6e51964d6b1faf75ee5ab94ee"
  },
  {
    "url": "assets/js/16.ef4769ff.js",
    "revision": "2145574f3b0542373904a4e22494cb4e"
  },
  {
    "url": "assets/js/17.f5ff6aa2.js",
    "revision": "01feaeeb7db6fb50e63ff3ef0220928f"
  },
  {
    "url": "assets/js/18.0be2fc3e.js",
    "revision": "21d7ab92a8237f4f67ab0e4a1f7b36c0"
  },
  {
    "url": "assets/js/19.917d9134.js",
    "revision": "90f834f5d52e1b33906d3d248c53c616"
  },
  {
    "url": "assets/js/20.c2edfb87.js",
    "revision": "8c3d604a03aed6467dbc33fd6dcfea3c"
  },
  {
    "url": "assets/js/21.c2d89163.js",
    "revision": "fee197d5b36f61c818eec4c370625dde"
  },
  {
    "url": "assets/js/22.9d81b6c4.js",
    "revision": "c4a6a70b29e325abfa9c7c109c4e7314"
  },
  {
    "url": "assets/js/23.2a46f3e4.js",
    "revision": "134a2673bee079a4104eaa32c0c1dd12"
  },
  {
    "url": "assets/js/24.470788f0.js",
    "revision": "8398286a5e475f607f83103c1a725efd"
  },
  {
    "url": "assets/js/25.c7b70a07.js",
    "revision": "cd7f919e6fa91add192e342595f4eada"
  },
  {
    "url": "assets/js/26.08b78896.js",
    "revision": "d524c3f88f3e15262b0d17ec1bc3267d"
  },
  {
    "url": "assets/js/27.136e5c1e.js",
    "revision": "5f92dbaf25698bb0bab5620d2c4d53b7"
  },
  {
    "url": "assets/js/28.2853c8b8.js",
    "revision": "d66159ec24c8ffae5bcdca7a27b4b363"
  },
  {
    "url": "assets/js/29.ff25750b.js",
    "revision": "e01b244ba9ca0c2500100bb377122af8"
  },
  {
    "url": "assets/js/30.118d5e61.js",
    "revision": "741dfc02c1b0fee913a36e1eaeda7884"
  },
  {
    "url": "assets/js/31.dcdc4386.js",
    "revision": "eff2f4c790716bdb7895f33fa5bc777c"
  },
  {
    "url": "assets/js/32.5fdb77a2.js",
    "revision": "c4a794ee50da12f3490f8694c8ff9d12"
  },
  {
    "url": "assets/js/33.e37f3b33.js",
    "revision": "bf49e8ed170db5adda91fc402879fbab"
  },
  {
    "url": "assets/js/34.6e843075.js",
    "revision": "d270cafdfcc660a64e78295756ceda68"
  },
  {
    "url": "assets/js/35.c9f675d1.js",
    "revision": "08f46cc2c59271914413759dfc17d627"
  },
  {
    "url": "assets/js/36.8893550a.js",
    "revision": "c6318b3e59e25bc38c63449ce1b1699f"
  },
  {
    "url": "assets/js/37.d9760b9b.js",
    "revision": "02dc59ba07ba8a252f3018f9e4b22bf1"
  },
  {
    "url": "assets/js/38.45f6a28a.js",
    "revision": "d9b8db0c5c8ce62f372440ccd7bbefb4"
  },
  {
    "url": "assets/js/4.f9334130.js",
    "revision": "12cc72db3c2dbd3948d62baa3f6043e1"
  },
  {
    "url": "assets/js/5.41d66565.js",
    "revision": "c7c3ee40f751a1063d73911e3684f1a1"
  },
  {
    "url": "assets/js/6.b340f4c5.js",
    "revision": "9ae3c44aa2ddd901d38a670abb011a71"
  },
  {
    "url": "assets/js/7.5bb5dbbb.js",
    "revision": "f17e8739fcab79cabcf6bba90c6247de"
  },
  {
    "url": "assets/js/8.cb1c7502.js",
    "revision": "6c9f1f5071f5136f7f32ec9ee0083d04"
  },
  {
    "url": "assets/js/9.9703c25f.js",
    "revision": "0da43e1ebc88d89b154980c3dfded247"
  },
  {
    "url": "assets/js/app.6e4602cc.js",
    "revision": "418c3cbcb0ade849f3cf8b045a8640bf"
  },
  {
    "url": "assets/js/vendors~flowchart.6e42d0bd.js",
    "revision": "51de5c4ba58177148749a92004867ac2"
  },
  {
    "url": "assets/js/vendors~notification.ecb92178.js",
    "revision": "6fa917f78f32e3b33fb173fbda9afec4"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "05ed91334e2887c9fd1bfaa94744991a"
  },
  {
    "url": "javaee/index.html",
    "revision": "305f074e2f5b14a245ac3d90579ee651"
  },
  {
    "url": "javaee/javaee-cookie-sesion.html",
    "revision": "9323acf0f276c20c86ce76ae8101a7c4"
  },
  {
    "url": "javaee/javaee-filter-listener.html",
    "revision": "6a4cfae49f0390127e18d31824fbdd21"
  },
  {
    "url": "javaee/javaee-interview.html",
    "revision": "d4f5f59e8b47802d00ff89efe867bc17"
  },
  {
    "url": "javaee/javaee-jsp.html",
    "revision": "ffbb9d28b576f5982d9badea921e2b40"
  },
  {
    "url": "javaee/javaee-servlet.html",
    "revision": "c9bf19a6957387a01e7a51872e7c67c4"
  },
  {
    "url": "javatool/build/ant.html",
    "revision": "6774353340d0be93dc725e16a69319ac"
  },
  {
    "url": "javatool/build/index.html",
    "revision": "86cfbb579b2d1bb011d537657e5bfb6b"
  },
  {
    "url": "javatool/build/maven/index.html",
    "revision": "bf7b0f2a0ea401258631a8d170111bbf"
  },
  {
    "url": "javatool/build/maven/maven-action.html",
    "revision": "8ae1be66262aedb9935c1def488f26e8"
  },
  {
    "url": "javatool/build/maven/maven-checkstyle-plugin.html",
    "revision": "49a090e162c7890a61c8615a133d3f26"
  },
  {
    "url": "javatool/build/maven/maven-deploy.html",
    "revision": "e0b1a18d66914cc7f523620582793ffd"
  },
  {
    "url": "javatool/build/maven/maven-pom.html",
    "revision": "9025cb6417922b1864d9f7317662b32e"
  },
  {
    "url": "javatool/build/maven/maven-quickstart.html",
    "revision": "c655ea9d0435b14ffe986d78de793171"
  },
  {
    "url": "javatool/build/maven/maven-settings.html",
    "revision": "c43f631af6845ad23af697981f2a6178"
  },
  {
    "url": "javatool/build/maven/sidebar.html",
    "revision": "1c209e851609ea09199adbb2b6d81b9a"
  },
  {
    "url": "javatool/ide/eclipse.html",
    "revision": "9e91cd49b682b8969b74bedd583d16fa"
  },
  {
    "url": "javatool/ide/index.html",
    "revision": "96de7c38f2f5e79d311074b66207f4f0"
  },
  {
    "url": "javatool/ide/intellij-idea.html",
    "revision": "a1a11bd1da589cd1f69e289078403375"
  },
  {
    "url": "javatool/ide/vscode.html",
    "revision": "992e465db6ab07ab9d602761025701f1"
  },
  {
    "url": "javatool/index.html",
    "revision": "cb5ea2846c33dd25676b76b9ff0bd2bc"
  },
  {
    "url": "javatool/monitor/arthas.html",
    "revision": "dfd0ca4777d5dae594b0870acc5a171a"
  },
  {
    "url": "javatool/monitor/cat.html",
    "revision": "e389fd59d7ccf39781e4bf3ccbcc9dff"
  },
  {
    "url": "javatool/monitor/index.html",
    "revision": "e5f52345f2620334722621a1bebed9bd"
  },
  {
    "url": "javatool/monitor/monitor-summary.html",
    "revision": "dc85d82c2e16bd1645076504ffd3785d"
  },
  {
    "url": "javatool/monitor/skywalking.html",
    "revision": "293fc95458cd2ef3dd2f8cb2b66bac19"
  },
  {
    "url": "javatool/monitor/zipkin.html",
    "revision": "d8c48c27047cd2e196d578ad0d5d325e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
