// import { cacheNames, clientsClaim } from 'workbox-core'
// import { registerRoute, setCatchHandler, setDefaultHandler, NavigationRoute } from 'workbox-routing'
// import type { StrategyHandler } from 'workbox-strategies'
// import {
//   NetworkFirst,
//   NetworkOnly,
//   Strategy
// } from 'workbox-strategies'
// import type { ManifestEntry } from 'workbox-build'
// import { createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching'

// // /// <reference lib="webworker" />
// export default null;
// declare let self: ServiceWorkerGlobalScope;

// // self.__WB_MANIFEST is default injection point
// precacheAndRoute(self.__WB_MANIFEST)

// // to allow work offline
// registerRoute(new NavigationRoute(
//   createHandlerBoundToURL('index.html'),
//   { denylist: [/^\/backoffice/] },
// ))

// // Give TypeScript the correct global.
// declare type ExtendableEvent = any

// const data = {
//   race: false,
//   debug: false,
//   credentials: 'same-origin',
//   networkTimeoutSeconds: 0,
//   fallback: 'index.html'
// }

// const cacheName = cacheNames.runtime

// function buildStrategy(): Strategy {
//   if (data.race) {
//     class CacheNetworkRace extends Strategy {
//       _handle(request: Request, handler: StrategyHandler): Promise<Response | undefined> {
//         const fetchAndCachePutDone: Promise<Response> = handler.fetchAndCachePut(request)
//         const cacheMatchDone: Promise<Response | undefined> = handler.cacheMatch(request)

//         return new Promise((resolve, reject) => {
//           fetchAndCachePutDone.then(resolve).catch((e) => {
//             if (data.debug)
//               console.log(`Cannot fetch resource: ${request.url}`, e)
//           })
//           cacheMatchDone.then(response => response && resolve(response))

//           // Reject if both network and cache error or find no response.
//           Promise.allSettled([fetchAndCachePutDone, cacheMatchDone]).then((results) => {
//             const [fetchAndCachePutResult, cacheMatchResult] = results
//             if (fetchAndCachePutResult.status === 'rejected' && !cacheMatchResult.status)
//               reject(fetchAndCachePutResult.reason)
//           })
//         })
//       }
//     }
//     return new CacheNetworkRace()
//   }
//   else {
//     if (data.networkTimeoutSeconds > 0)
//       return new NetworkFirst({ cacheName, networkTimeoutSeconds })
//     else
//       return new NetworkFirst({ cacheName })
//   }
// }

// const manifest = self.__WB_MANIFEST as Array<ManifestEntry>

// const cacheEntries: RequestInfo[] = []

// const manifestURLs = manifest.map(
//   (entry) => {
//     const url = new URL(entry.url, self.location)
//     cacheEntries.push(new Request(url.href, {
//       credentials: data.credentials as any
//     }))
//     return url.href
//   }
// )

// self.addEventListener('install', (event: ExtendableEvent) => {
//   event.waitUntil(
//     caches.open(cacheName).then((cache) => {
//       return cache.addAll(cacheEntries)
//     })
//   )
// })

// self.addEventListener('activate', (event: ExtendableEvent) => {
//   // - clean up outdated runtime cache
//   event.waitUntil(
//     caches.open(cacheName).then((cache) => {
//       // clean up those who are not listed in manifestURLs
//       cache.keys().then((keys) => {
//         keys.forEach((request) => {
//             data.debug && console.log(`Checking cache entry to be removed: ${request.url}`)
//           if (!manifestURLs.includes(request.url)) {
//             cache.delete(request).then((deleted) => {
//               if (data.debug) {
//                 if (deleted)
//                   console.log(`Precached data removed: ${request.url || request}`)
//                 else
//                   console.log(`No precache found: ${request.url || request}`)
//               }
//             })
//           }
//         })
//       })
//     })
//   )
// })

// registerRoute(
//   ({ url }) => manifestURLs.includes(url.href),
//   buildStrategy()
// )

// setDefaultHandler(new NetworkOnly())

// // fallback to app-shell for document request
// setCatchHandler(({ event }): Promise<Response> => {
//   switch (event.request.destination) {
//     case 'document':
//       return caches.match(data.fallback).then((r) => {
//         return r ? Promise.resolve(r) : Promise.resolve(Response.error())
//       })
//     default:
//       return Promise.resolve(Response.error())
//   }
// })

// // this is necessary, since the new service worker will keep on skipWaiting state
// // and then, caches will not be cleared since it is not activated
// self.skipWaiting()
// clientsClaim()


import { cacheNames, clientsClaim } from 'workbox-core'
import { registerRoute, setCatchHandler, setDefaultHandler, NavigationRoute } from 'workbox-routing'
import type { StrategyHandler } from 'workbox-strategies'
import {
  NetworkFirst,
  NetworkOnly,
  Strategy
} from 'workbox-strategies'
import type { ManifestEntry } from 'workbox-build'
import { createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching'

// Give TypeScript the correct global.
// declare let self: ServiceWorkerGlobalScope
declare const self: ServiceWorkerGlobalScope;

declare type ExtendableEvent = any;

// to allow work offline
registerRoute(new NavigationRoute(
  createHandlerBoundToURL('index.html'),
  { denylist: [/^\/backoffice/] },
))
// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST)

const data = {
  race: false,
  debug: false,
  credentials: 'same-origin',
  networkTimeoutSeconds: 0,
  fallback: 'index.html'
}

const cacheName = cacheNames.runtime

function buildStrategy(): Strategy {
  if (data.race) {
    class CacheNetworkRace extends Strategy {
      _handle(request: Request, handler: StrategyHandler): Promise<Response | undefined> {
        const fetchAndCachePutDone: Promise<Response> = handler.fetchAndCachePut(request)
        const cacheMatchDone: Promise<Response | undefined> = handler.cacheMatch(request)

        return new Promise((resolve, reject) => {
          fetchAndCachePutDone.then(resolve).catch((e) => {
            if (data.debug)
              console.log(`Cannot fetch resource: ${request.url}`, e)
          })
          cacheMatchDone.then(response => response && resolve(response))

          // Reject if both network and cache error or find no response.
          Promise.allSettled([fetchAndCachePutDone, cacheMatchDone]).then((results) => {
            const [fetchAndCachePutResult, cacheMatchResult] = results
            if (fetchAndCachePutResult.status === 'rejected' && !cacheMatchResult.status)
              reject(fetchAndCachePutResult.reason)
          })
        })
      }
    }
    return new CacheNetworkRace()
  }
  else {
    if (data.networkTimeoutSeconds > 0)
      return new NetworkFirst({ cacheName })
    else
      return new NetworkFirst({ cacheName })
  }
}

const manifest = self.__WB_MANIFEST as Array<ManifestEntry>

const cacheEntries: RequestInfo[] = []

const manifestURLs = manifest.map(
  (entry) => {
    // const url = new URL(entry.url, self.location)
    const url = new URL(entry.url)
    cacheEntries.push(new Request(url.href, {
      credentials: data.credentials as any
    }))
    return url.href
  }
)

self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(cacheEntries)
    })
  )
})

self.addEventListener('activate', (event: ExtendableEvent) => {
  // - clean up outdated runtime cache
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      // clean up those who are not listed in manifestURLs
      cache.keys().then((keys) => {
        keys.forEach((request) => {
          data.debug && console.log(`Checking cache entry to be removed: ${request.url}`)
          if (!manifestURLs.includes(request.url)) {
            cache.delete(request).then((deleted) => {
              if (data.debug) {
                if (deleted)
                  console.log(`Precached data removed: ${request.url || request}`)
                else
                  console.log(`No precache found: ${request.url || request}`)
              }
            })
          }
        })
      })
    })
  )
})

registerRoute(
  ({ url }) => manifestURLs.includes(url.href),
  buildStrategy()
)

setDefaultHandler(new NetworkOnly())

// fallback to app-shell for document request
setCatchHandler(({ event }): Promise<Response> => {
  switch (event.type) {
    case 'document':
      return caches.match(data.fallback).then((r) => {
        return r ? Promise.resolve(r) : Promise.resolve(Response.error())
      })
    default:
      return Promise.resolve(Response.error())
  }
})

// this is necessary, since the new service worker will keep on skipWaiting state
// and then, caches will not be cleared since it is not activated
self.skipWaiting()
clientsClaim()