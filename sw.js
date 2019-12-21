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
    "url": "ch-de-2018-f.40c954fa.js",
    "revision": "60d039b43af2870935539ef9b244e3fa"
  },
  {
    "url": "ch-de-2018-m.553bede1.js",
    "revision": "449000c196ce3373f52fd986b6c05e99"
  },
  {
    "url": "icon-180.8603994c.png",
    "revision": "148c6d4bb866b91047959e7f29c390e4"
  },
  {
    "url": "icon-192.3a2d15f2.png",
    "revision": "60ca5c0eb10234bf1266417b2d492571"
  },
  {
    "url": "icon-512.fc3868fc.png",
    "revision": "759c80bc0a0e709a971e624640e359c5"
  },
  {
    "url": "icon.29bfe867.svg",
    "revision": "555d08f9a027f9869cf3e584c6c97e3c"
  },
  {
    "url": "index.html",
    "revision": "6cfc3d1a294dcee1ce23c68874031c22"
  },
  {
    "url": "logo.34c14486.svg",
    "revision": "23646e5a397cab89cbb82dc837a3a84f"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "470d46738b1ab5437a09901c26744200"
  },
  {
    "url": "menu.b5b331e7.svg",
    "revision": "aec21dfa9b554a95ab9bf4916d13a6a3"
  },
  {
    "url": "src.7d54bb34.css",
    "revision": "90bd08485a51c726f094a1637e73d057"
  },
  {
    "url": "src.ec8218d7.js",
    "revision": "5093accd6eea7fa9ad31654ecd988e6b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
