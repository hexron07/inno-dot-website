const CACHE_NAME = 'inno-dot-v1.0.0';
const STATIC_CACHE_NAME = 'inno-dot-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'inno-dot-dynamic-v1.0.0';

// Resources to cache on install
const STATIC_ASSETS = [
  '/',
  '/favicon.ico',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&display=swap',
  'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
  'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2'
];

// Cache strategies for different resource types
const CACHE_STRATEGIES = {
  images: {
    cacheName: 'inno-dot-images-v1.0.0',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    maxEntries: 100
  },
  api: {
    cacheName: 'inno-dot-api-v1.0.0',
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    maxEntries: 50
  },
  fonts: {
    cacheName: 'inno-dot-fonts-v1.0.0',
    maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
    maxEntries: 30
  }
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Failed to cache static assets', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Delete old caches
            if (cacheName !== STATIC_CACHE_NAME && 
                cacheName !== DYNAMIC_CACHE_NAME &&
                !Object.values(CACHE_STRATEGIES).some(strategy => strategy.cacheName === cacheName)) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated successfully');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension requests
  if (url.protocol === 'chrome-extension:') {
    return;
  }

  event.respondWith(handleRequest(request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  
  try {
    // Static assets - Cache First strategy
    if (STATIC_ASSETS.some(asset => request.url.includes(asset)) || 
        request.url.includes('.js') || 
        request.url.includes('.css')) {
      return await cacheFirst(request, STATIC_CACHE_NAME);
    }

    // Images - Cache First strategy with longer TTL
    if (request.destination === 'image' || 
        url.hostname.includes('unsplash.com') ||
        url.hostname.includes('images.unsplash.com')) {
      return await cacheFirst(request, CACHE_STRATEGIES.images.cacheName);
    }

    // Fonts - Cache First strategy with longest TTL
    if (request.url.includes('fonts.googleapis.com') || 
        request.url.includes('fonts.gstatic.com') ||
        request.destination === 'font') {
      return await cacheFirst(request, CACHE_STRATEGIES.fonts.cacheName);
    }

    // API requests - Network First strategy
    if (url.pathname.includes('/api/')) {
      return await networkFirst(request, CACHE_STRATEGIES.api.cacheName);
    }

    // HTML pages - Network First with cache fallback
    if (request.headers.get('accept').includes('text/html')) {
      return await networkFirst(request, DYNAMIC_CACHE_NAME);
    }

    // Default - Network with cache fallback
    return await networkWithCacheFallback(request);

  } catch (error) {
    console.error('Service Worker: Fetch error', error);
    return await handleOfflineFallback(request);
  }
}

// Cache First strategy - good for static assets
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    // Check if cache is still valid
    const cacheDate = new Date(cachedResponse.headers.get('date'));
    const now = new Date();
    const strategy = Object.values(CACHE_STRATEGIES).find(s => s.cacheName === cacheName);
    const maxAge = strategy ? strategy.maxAge : 24 * 60 * 60 * 1000; // Default 24 hours
    
    if (now - cacheDate < maxAge) {
      return cachedResponse;
    }
  }

  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Clone the response before caching
      const responseClone = networkResponse.clone();
      await cache.put(request, responseClone);
      
      // Clean up old entries if needed
      await cleanupCache(cacheName);
    }
    
    return networkResponse;
  } catch (error) {
    // Return cached version if network fails
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Network First strategy - good for dynamic content
async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Clone and cache the response
      const responseClone = networkResponse.clone();
      await cache.put(request, responseClone);
      
      // Clean up old entries
      await cleanupCache(cacheName);
    }
    
    return networkResponse;
  } catch (error) {
    // Fallback to cache if network fails
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Network with cache fallback - default strategy
async function networkWithCacheFallback(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache successful responses
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      const responseClone = networkResponse.clone();
      await cache.put(request, responseClone);
    }
    
    return networkResponse;
  } catch (error) {
    // Try to get from any cache as fallback
    const cacheResponse = await caches.match(request);
    if (cacheResponse) {
      return cacheResponse;
    }
    throw error;
  }
}

// Handle offline fallback
async function handleOfflineFallback(request) {
  const url = new URL(request.url);
  
  // For HTML requests, try to return cached page or offline page
  if (request.headers.get('accept').includes('text/html')) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page if available
    const offlinePage = await caches.match('/offline.html');
    if (offlinePage) {
      return offlinePage;
    }
  }

  // For images, return a placeholder or cached version
  if (request.destination === 'image') {
    const cachedImage = await caches.match(request);
    if (cachedImage) {
      return cachedImage;
    }
    
    // Return placeholder image
    return new Response(
      '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9CA3AF" font-size="14">Image Unavailable</text></svg>',
      {
        headers: {
          'Content-Type': 'image/svg+xml',
          'Cache-Control': 'no-cache'
        }
      }
    );
  }

  // Generic error response
  return new Response('Network error occurred', {
    status: 408,
    headers: { 'Content-Type': 'text/plain' }
  });
}

// Clean up old cache entries
async function cleanupCache(cacheName) {
  const cache = await caches.open(cacheName);
  const requests = await cache.keys();
  const strategy = Object.values(CACHE_STRATEGIES).find(s => s.cacheName === cacheName);
  const maxEntries = strategy ? strategy.maxEntries : 100;
  
  if (requests.length > maxEntries) {
    // Remove oldest entries
    const entriesToDelete = requests.slice(0, requests.length - maxEntries);
    await Promise.all(
      entriesToDelete.map(request => cache.delete(request))
    );
  }
}

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  try {
    // Get stored form data from IndexedDB
    const db = await openDB();
    const transaction = db.transaction(['forms'], 'readonly');
    const store = transaction.objectStore('forms');
    const forms = await store.getAll();
    
    // Submit each form
    for (const formData of forms) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData.data)
        });
        
        if (response.ok) {
          // Remove from IndexedDB after successful submission
          const deleteTransaction = db.transaction(['forms'], 'readwrite');
          const deleteStore = deleteTransaction.objectStore('forms');
          await deleteStore.delete(formData.id);
        }
      } catch (error) {
        console.error('Failed to sync form:', error);
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('InnoFormSync', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('forms')) {
        db.createObjectStore('forms', { keyPath: 'id', autoIncrement: true });
      }
    };
  });
}

// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey || '1'
      },
      actions: [
        {
          action: 'explore',
          title: 'View Details',
          icon: '/action-icon.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/close-icon.png'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_MEASURE') {
    // Log performance metrics
    console.log('Performance metric:', event.data.data);
  }
});

console.log('Service Worker: Loaded successfully');