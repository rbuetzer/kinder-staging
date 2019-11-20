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
    "revision": "fa999287b380270172c3bcb837964f0a"
  },
  {
    "url": "ch-de-2018-m.553bede1.js",
    "revision": "bd5f1d236afa73ba5eb2b5b42d1d84ce"
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
    "revision": "e36ccc65bcb37c4d64ac8adb9f5da5d6"
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
    "url": "src.15c9f5b7.css",
    "revision": "ea25592895e150775af1f81c438683fb"
  },
  {
    "url": "src.d8511828.js",
    "revision": "ac6609ebe8bcd0a017ef16283653dae7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
