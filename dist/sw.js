if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const c=e=>i(e,r),l={module:{uri:r},exports:o,require:c};s[r]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-fb0596ae"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-D5KdKkh7.js",revision:null},{url:"assets/index-legacy-LFotyJoO.js",revision:null},{url:"assets/index-Rnpv4BVv.css",revision:null},{url:"assets/polyfills-legacy-BQnZtUPr.js",revision:null},{url:"index.html",revision:"2ac793a957ddc517e1e0082cab472853"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"72c060550d8b262cf9e1d25dce355c38"},{url:"robots.txt",revision:"ed5e26ce5e936183c517fbac849d9360"},{url:"manifest.webmanifest",revision:"bb75bd4c9a5ef98158160475ba1ffead"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/\.(?:js|css|woff2?|png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"static-assets",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/^http:\/\/fastfood-tips\.ru\/.*$/,new e.NetworkFirst({cacheName:"api-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:86400})]}),"GET")}));
