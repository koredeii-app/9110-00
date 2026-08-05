const CACHE_NAME = "koredeii-cache-v3";

const urlsToCache = [
  "./",
  "index.html",
  "style.css",
  "app.js",
  "manifest.json",
  "privacy.html",
  "terms.html",
  "disclaimer.html",
  "icons/icon-192.png",
  "icons/icon-512.png"
];

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  clients.claim();
});