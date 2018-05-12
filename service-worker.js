self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          '/css/style.css',
          '/scss/style.scss',
          '/js/index.js',
          '/image/*',
          '/image/bungalo/*',
          '/image/standard/*',
          '/image/standardplus/*',
          '/image/gallery/*',
          '/favicons/*'
        ]);
      })
    );
  });