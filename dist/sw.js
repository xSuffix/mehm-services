if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const a=e=>i(e,n),u={module:{uri:n},exports:t,require:a};s[n]=Promise.all(r.map((e=>u[e]||a(e)))).then((e=>(l(...e),t)))}}define(["./workbox-06f7c1ce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_...all_.bbbef173.js",revision:null},{url:"assets/_id_.12a727e3.css",revision:null},{url:"assets/_id_.5f90c53d.js",revision:null},{url:"assets/404.f1a29ba6.js",revision:null},{url:"assets/app.165c63b6.js",revision:null},{url:"assets/app.973d4e0e.css",revision:null},{url:"assets/contact.3172bb33.js",revision:null},{url:"assets/footerless.6a553fcc.js",revision:null},{url:"assets/imprint.55978672.js",revision:null},{url:"assets/jdenticon-module.687b0030.js",revision:null},{url:"assets/login.8f7325ba.js",revision:null},{url:"assets/privacy.bb0d7eea.js",revision:null},{url:"assets/register.107543ab.js",revision:null},{url:"assets/submit.c222902a.js",revision:null},{url:"assets/user.c500ebb6.js",revision:null},{url:"assets/virtual_pwa-register.1c1f76db.js",revision:null},{url:"contact.html",revision:"1c2b961f40802ca07aebcd2a16605ee4"},{url:"imprint.html",revision:"e39f4bcafcd6eccca1b571c3e3583ffc"},{url:"index.html",revision:"45146f31a911a137c0a9d7d43b8bee8f"},{url:"login.html",revision:"c0466f87be8382969e2158a7036b5313"},{url:"privacy.html",revision:"9442706c7b8b71f26b8df4e4892ed927"},{url:"register.html",revision:"c76682094f3527afc8b25e375c0f11a3"},{url:"submit.html",revision:"21316d543c9764deef6d11feead57cca"},{url:"user.html",revision:"de852a9ee1ae0e42f26eb6080a9b8d25"},{url:"favicon.ico",revision:"be7dd31082f20e5e99dbfcafbbf5ff60"},{url:"robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"safari-pinned-tab.svg",revision:"12612bafd41ea63a219dfc907a31754f"},{url:"pwa-192x192.png",revision:"e77b26cc1775dd8fdf8b9af0f1f36afc"},{url:"pwa-512x512.png",revision:"d48711d16baf3fc89577467989522b82"},{url:"manifest.webmanifest",revision:"d6708706480d0955d80fdcb467d736a4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));