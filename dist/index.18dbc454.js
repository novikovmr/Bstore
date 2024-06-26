// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"j2YDk":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "router", ()=>router);
var _navigo = require("navigo");
var _navigoDefault = parcelHelpers.interopDefault(_navigo);
var _headerJs = require("/src/js/components/header/Header.js");
var _pageContainerJs = require("/src/js/components/pageContainer/PageContainer.js");
const app = document.getElementById("app");
const router = new (0, _navigoDefault.default)("/");
const header = (0, _headerJs.getHeader)(router);
const pageContainer = (0, _pageContainerJs.getPageContainer)();
router.on("/", async ()=>{
    pageContainer.innerHTML = "";
    const pageModuleMain = await require("443e20a275e2f316");
    const mainPage = pageModuleMain.getMainPage();
    pageContainer.append(mainPage);
});
router.on("/catalog", async ()=>{
    pageContainer.innerHTML = "";
    const pageModuleCatalog = await require("ca6fca4a03e11cee");
    const catalogPage = pageModuleCatalog.getCatalogPage();
    pageContainer.append(catalogPage);
});
router.on("/about", async ()=>{
    pageContainer.innerHTML = "";
    const pageModuleAbout = await require("31662a4341e07b78");
    const aboutPage = pageModuleAbout.getAboutPage();
    pageContainer.append(aboutPage);
});
router.on("/pay", async ()=>{
    pageContainer.innerHTML = "";
    const pageModulePay = await require("9b072e1d87d03c49");
    const payPage = pageModulePay.getPayPage();
    pageContainer.append(payPage);
});
router.on("/delivery", async ()=>{
    pageContainer.innerHTML = "";
    const pageModuleDelivery = await require("b5b50ac6227ff0ca");
    const deliveryPage = pageModuleDelivery.getDeliveryPage();
    pageContainer.append(deliveryPage);
});
router.on("/basket", async ()=>{
    pageContainer.innerHTML = "";
    const pageModuleBasket = await require("acb63a5ee6a9e9ce");
    const basketPage = pageModuleBasket.getBasketPage();
    pageContainer.append(basketPage);
});
router.resolve();
app.append(header, pageContainer);

},{"navigo":"fuSlc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","/src/js/components/header/Header.js":"gP8EL","/src/js/components/pageContainer/PageContainer.js":"jroh0","443e20a275e2f316":"jazuh","ca6fca4a03e11cee":"4iSxT","31662a4341e07b78":"cYpNA","9b072e1d87d03c49":"9u3nA","b5b50ac6227ff0ca":"3ofVA","acb63a5ee6a9e9ce":"3oO4f"}],"fuSlc":[function(require,module,exports) {
!function(t, n) {
    module.exports = n();
}("undefined" != typeof self ? self : this, function() {
    return function() {
        "use strict";
        var t = {
            407: function(t, n, e) {
                e.d(n, {
                    default: function() {
                        return N;
                    }
                });
                var o = /([:*])(\w+)/g, r = /\*/g, i = /\/\?/g;
                function a(t) {
                    return void 0 === t && (t = "/"), v() ? location.pathname + location.search + location.hash : t;
                }
                function s(t) {
                    return t.replace(/\/+$/, "").replace(/^\/+/, "");
                }
                function c(t) {
                    return "string" == typeof t;
                }
                function u(t) {
                    return t && t.indexOf("#") >= 0 && t.split("#").pop() || "";
                }
                function h(t) {
                    var n = s(t).split(/\?(.*)?$/);
                    return [
                        s(n[0]),
                        n.slice(1).join("")
                    ];
                }
                function f(t) {
                    for(var n = {}, e = t.split("&"), o = 0; o < e.length; o++){
                        var r = e[o].split("=");
                        if ("" !== r[0]) {
                            var i = decodeURIComponent(r[0]);
                            n[i] ? (Array.isArray(n[i]) || (n[i] = [
                                n[i]
                            ]), n[i].push(decodeURIComponent(r[1] || ""))) : n[i] = decodeURIComponent(r[1] || "");
                        }
                    }
                    return n;
                }
                function l(t, n) {
                    var e, a = h(s(t.currentLocationPath)), l = a[0], p = a[1], d = "" === p ? null : f(p), v = [];
                    if (c(n.path)) {
                        if (e = "(?:/^|^)" + s(n.path).replace(o, function(t, n, e) {
                            return v.push(e), "([^/]+)";
                        }).replace(r, "?(?:.*)").replace(i, "/?([^/]+|)") + "$", "" === s(n.path) && "" === s(l)) return {
                            url: l,
                            queryString: p,
                            hashString: u(t.to),
                            route: n,
                            data: null,
                            params: d
                        };
                    } else e = n.path;
                    var g = new RegExp(e, ""), m = l.match(g);
                    if (m) {
                        var y = c(n.path) ? function(t, n) {
                            return 0 === n.length ? null : t ? t.slice(1, t.length).reduce(function(t, e, o) {
                                return null === t && (t = {}), t[n[o]] = decodeURIComponent(e), t;
                            }, null) : null;
                        }(m, v) : m.groups ? m.groups : m.slice(1);
                        return {
                            url: s(l.replace(new RegExp("^" + t.instance.root), "")),
                            queryString: p,
                            hashString: u(t.to),
                            route: n,
                            data: y,
                            params: d
                        };
                    }
                    return !1;
                }
                function p() {
                    return !("undefined" == typeof window || !window.history || !window.history.pushState);
                }
                function d(t, n) {
                    return void 0 === t[n] || !0 === t[n];
                }
                function v() {
                    return "undefined" != typeof window;
                }
                function g(t, n) {
                    return void 0 === t && (t = []), void 0 === n && (n = {}), t.filter(function(t) {
                        return t;
                    }).forEach(function(t) {
                        [
                            "before",
                            "after",
                            "already",
                            "leave"
                        ].forEach(function(e) {
                            t[e] && (n[e] || (n[e] = []), n[e].push(t[e]));
                        });
                    }), n;
                }
                function m(t, n, e) {
                    var o = n || {}, r = 0;
                    !function n() {
                        t[r] ? Array.isArray(t[r]) ? (t.splice.apply(t, [
                            r,
                            1
                        ].concat(t[r][0](o) ? t[r][1] : t[r][2])), n()) : t[r](o, function(t) {
                            void 0 === t || !0 === t ? (r += 1, n()) : e && e(o);
                        }) : e && e(o);
                    }();
                }
                function y(t, n) {
                    void 0 === t.currentLocationPath && (t.currentLocationPath = t.to = a(t.instance.root)), t.currentLocationPath = t.instance._checkForAHash(t.currentLocationPath), n();
                }
                function _(t, n) {
                    for(var e = 0; e < t.instance.routes.length; e++){
                        var o = l(t, t.instance.routes[e]);
                        if (o && (t.matches || (t.matches = []), t.matches.push(o), "ONE" === t.resolveOptions.strategy)) return void n();
                    }
                    n();
                }
                function k(t, n) {
                    t.navigateOptions && (void 0 !== t.navigateOptions.shouldResolve && console.warn('"shouldResolve" is deprecated. Please check the documentation.'), void 0 !== t.navigateOptions.silent && console.warn('"silent" is deprecated. Please check the documentation.')), n();
                }
                function O(t, n) {
                    !0 === t.navigateOptions.force ? (t.instance._setCurrent([
                        t.instance._pathToMatchObject(t.to)
                    ]), n(!1)) : n();
                }
                m.if = function(t, n, e) {
                    return Array.isArray(n) || (n = [
                        n
                    ]), Array.isArray(e) || (e = [
                        e
                    ]), [
                        t,
                        n,
                        e
                    ];
                };
                var w = v(), L = p();
                function b(t, n) {
                    if (d(t.navigateOptions, "updateBrowserURL")) {
                        var e = ("/" + t.to).replace(/\/\//g, "/"), o = w && t.resolveOptions && !0 === t.resolveOptions.hash;
                        L ? (history[t.navigateOptions.historyAPIMethod || "pushState"](t.navigateOptions.stateObj || {}, t.navigateOptions.title || "", o ? "#" + e : e), location && location.hash && (t.instance.__freezeListening = !0, setTimeout(function() {
                            if (!o) {
                                var n = location.hash;
                                location.hash = "", location.hash = n;
                            }
                            t.instance.__freezeListening = !1;
                        }, 1))) : w && (window.location.href = t.to);
                    }
                    n();
                }
                function A(t, n) {
                    var e = t.instance;
                    e.lastResolved() ? m(e.lastResolved().map(function(n) {
                        return function(e, o) {
                            if (n.route.hooks && n.route.hooks.leave) {
                                var r = !1, i = t.instance.matchLocation(n.route.path, t.currentLocationPath, !1);
                                r = "*" !== n.route.path ? !i : !(t.matches && t.matches.find(function(t) {
                                    return n.route.path === t.route.path;
                                })), d(t.navigateOptions, "callHooks") && r ? m(n.route.hooks.leave.map(function(n) {
                                    return function(e, o) {
                                        return n(function(n) {
                                            !1 === n ? t.instance.__markAsClean(t) : o();
                                        }, t.matches && t.matches.length > 0 ? 1 === t.matches.length ? t.matches[0] : t.matches : void 0);
                                    };
                                }).concat([
                                    function() {
                                        return o();
                                    }
                                ])) : o();
                            } else o();
                        };
                    }), {}, function() {
                        return n();
                    }) : n();
                }
                function P(t, n) {
                    d(t.navigateOptions, "updateState") && t.instance._setCurrent(t.matches), n();
                }
                var R = [
                    function(t, n) {
                        var e = t.instance.lastResolved();
                        if (e && e[0] && e[0].route === t.match.route && e[0].url === t.match.url && e[0].queryString === t.match.queryString) return e.forEach(function(n) {
                            n.route.hooks && n.route.hooks.already && d(t.navigateOptions, "callHooks") && n.route.hooks.already.forEach(function(n) {
                                return n(t.match);
                            });
                        }), void n(!1);
                        n();
                    },
                    function(t, n) {
                        t.match.route.hooks && t.match.route.hooks.before && d(t.navigateOptions, "callHooks") ? m(t.match.route.hooks.before.map(function(n) {
                            return function(e, o) {
                                return n(function(n) {
                                    !1 === n ? t.instance.__markAsClean(t) : o();
                                }, t.match);
                            };
                        }).concat([
                            function() {
                                return n();
                            }
                        ])) : n();
                    },
                    function(t, n) {
                        d(t.navigateOptions, "callHandler") && t.match.route.handler(t.match), t.instance.updatePageLinks(), n();
                    },
                    function(t, n) {
                        t.match.route.hooks && t.match.route.hooks.after && d(t.navigateOptions, "callHooks") && t.match.route.hooks.after.forEach(function(n) {
                            return n(t.match);
                        }), n();
                    }
                ], S = [
                    A,
                    function(t, n) {
                        var e = t.instance._notFoundRoute;
                        if (e) {
                            t.notFoundHandled = !0;
                            var o = h(t.currentLocationPath), r = o[0], i = o[1], a = u(t.to);
                            e.path = s(r);
                            var c = {
                                url: e.path,
                                queryString: i,
                                hashString: a,
                                data: null,
                                route: e,
                                params: "" !== i ? f(i) : null
                            };
                            t.matches = [
                                c
                            ], t.match = c;
                        }
                        n();
                    },
                    m.if(function(t) {
                        return t.notFoundHandled;
                    }, R.concat([
                        P
                    ]), [
                        function(t, n) {
                            t.resolveOptions && !1 !== t.resolveOptions.noMatchWarning && void 0 !== t.resolveOptions.noMatchWarning || console.warn('Navigo: "' + t.currentLocationPath + "\" didn't match any of the registered routes."), n();
                        },
                        function(t, n) {
                            t.instance._setCurrent(null), n();
                        }
                    ])
                ];
                function E() {
                    return (E = Object.assign || function(t) {
                        for(var n = 1; n < arguments.length; n++){
                            var e = arguments[n];
                            for(var o in e)Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                function x(t, n) {
                    var e = 0;
                    A(t, function o() {
                        e !== t.matches.length ? m(R, E({}, t, {
                            match: t.matches[e]
                        }), function() {
                            e += 1, o();
                        }) : P(t, n);
                    });
                }
                function H(t) {
                    t.instance.__markAsClean(t);
                }
                function j() {
                    return (j = Object.assign || function(t) {
                        for(var n = 1; n < arguments.length; n++){
                            var e = arguments[n];
                            for(var o in e)Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                var C = "[data-navigo]";
                function N(t, n) {
                    var e, o = n || {
                        strategy: "ONE",
                        hash: !1,
                        noMatchWarning: !1,
                        linksSelector: C
                    }, r = this, i = "/", d = null, w = [], L = !1, A = p(), P = v();
                    function R(t) {
                        return t.indexOf("#") >= 0 && (t = !0 === o.hash ? t.split("#")[1] || "/" : t.split("#")[0]), t;
                    }
                    function E(t) {
                        return s(i + "/" + s(t));
                    }
                    function N(t, n, e, o) {
                        return t = c(t) ? E(t) : t, {
                            name: o || s(String(t)),
                            path: t,
                            handler: n,
                            hooks: g(e)
                        };
                    }
                    function U(t, n) {
                        if (!r.__dirty) {
                            r.__dirty = !0, t = t ? s(i) + "/" + s(t) : void 0;
                            var e = {
                                instance: r,
                                to: t,
                                currentLocationPath: t,
                                navigateOptions: {},
                                resolveOptions: j({}, o, n)
                            };
                            return m([
                                y,
                                _,
                                m.if(function(t) {
                                    var n = t.matches;
                                    return n && n.length > 0;
                                }, x, S)
                            ], e, H), !!e.matches && e.matches;
                        }
                        r.__waiting.push(function() {
                            return r.resolve(t, n);
                        });
                    }
                    function q(t, n) {
                        if (r.__dirty) r.__waiting.push(function() {
                            return r.navigate(t, n);
                        });
                        else {
                            r.__dirty = !0, t = s(i) + "/" + s(t);
                            var e = {
                                instance: r,
                                to: t,
                                navigateOptions: n || {},
                                resolveOptions: n && n.resolveOptions ? n.resolveOptions : o,
                                currentLocationPath: R(t)
                            };
                            m([
                                k,
                                O,
                                _,
                                m.if(function(t) {
                                    var n = t.matches;
                                    return n && n.length > 0;
                                }, x, S),
                                b,
                                H
                            ], e, H);
                        }
                    }
                    function F() {
                        if (P) return (P ? [].slice.call(document.querySelectorAll(o.linksSelector || C)) : []).forEach(function(t) {
                            "false" !== t.getAttribute("data-navigo") && "_blank" !== t.getAttribute("target") ? t.hasListenerAttached || (t.hasListenerAttached = !0, t.navigoHandler = function(n) {
                                if ((n.ctrlKey || n.metaKey) && "a" === n.target.tagName.toLowerCase()) return !1;
                                var e = t.getAttribute("href");
                                if (null == e) return !1;
                                if (e.match(/^(http|https)/) && "undefined" != typeof URL) try {
                                    var o = new URL(e);
                                    e = o.pathname + o.search;
                                } catch (t) {}
                                var i = function(t) {
                                    if (!t) return {};
                                    var n, e = t.split(","), o = {};
                                    return e.forEach(function(t) {
                                        var e = t.split(":").map(function(t) {
                                            return t.replace(/(^ +| +$)/g, "");
                                        });
                                        switch(e[0]){
                                            case "historyAPIMethod":
                                                o.historyAPIMethod = e[1];
                                                break;
                                            case "resolveOptionsStrategy":
                                                n || (n = {}), n.strategy = e[1];
                                                break;
                                            case "resolveOptionsHash":
                                                n || (n = {}), n.hash = "true" === e[1];
                                                break;
                                            case "updateBrowserURL":
                                            case "callHandler":
                                            case "updateState":
                                            case "force":
                                                o[e[0]] = "true" === e[1];
                                        }
                                    }), n && (o.resolveOptions = n), o;
                                }(t.getAttribute("data-navigo-options"));
                                L || (n.preventDefault(), n.stopPropagation(), r.navigate(s(e), i));
                            }, t.addEventListener("click", t.navigoHandler)) : t.hasListenerAttached && t.removeEventListener("click", t.navigoHandler);
                        }), r;
                    }
                    function I(t, n, e) {
                        var o = w.find(function(n) {
                            return n.name === t;
                        }), r = null;
                        if (o) {
                            if (r = o.path, n) for(var a in n)r = r.replace(":" + a, n[a]);
                            r = r.match(/^\//) ? r : "/" + r;
                        }
                        return r && e && !e.includeRoot && (r = r.replace(new RegExp("^/" + i), "")), r;
                    }
                    function M(t) {
                        var n = h(s(t)), o = n[0], r = n[1], i = "" === r ? null : f(r);
                        return {
                            url: o,
                            queryString: r,
                            hashString: u(t),
                            route: N(o, function() {}, [
                                e
                            ], o),
                            data: null,
                            params: i
                        };
                    }
                    function T(t, n, e) {
                        return "string" == typeof n && (n = z(n)), n ? (n.hooks[t] || (n.hooks[t] = []), n.hooks[t].push(e), function() {
                            n.hooks[t] = n.hooks[t].filter(function(t) {
                                return t !== e;
                            });
                        }) : (console.warn("Route doesn't exists: " + n), function() {});
                    }
                    function z(t) {
                        return "string" == typeof t ? w.find(function(n) {
                            return n.name === E(t);
                        }) : w.find(function(n) {
                            return n.handler === t;
                        });
                    }
                    t ? i = s(t) : console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'), this.root = i, this.routes = w, this.destroyed = L, this.current = d, this.__freezeListening = !1, this.__waiting = [], this.__dirty = !1, this.__markAsClean = function(t) {
                        t.instance.__dirty = !1, t.instance.__waiting.length > 0 && t.instance.__waiting.shift()();
                    }, this.on = function(t, n, o) {
                        var r = this;
                        return "object" != typeof t || t instanceof RegExp ? ("function" == typeof t && (o = n, n = t, t = i), w.push(N(t, n, [
                            e,
                            o
                        ])), this) : (Object.keys(t).forEach(function(n) {
                            if ("function" == typeof t[n]) r.on(n, t[n]);
                            else {
                                var o = t[n], i = o.uses, a = o.as, s = o.hooks;
                                w.push(N(n, i, [
                                    e,
                                    s
                                ], a));
                            }
                        }), this);
                    }, this.off = function(t) {
                        return this.routes = w = w.filter(function(n) {
                            return c(t) ? s(n.path) !== s(t) : "function" == typeof t ? t !== n.handler : String(n.path) !== String(t);
                        }), this;
                    }, this.resolve = U, this.navigate = q, this.navigateByName = function(t, n, e) {
                        var o = I(t, n);
                        return null !== o && (q(o.replace(new RegExp("^/?" + i), ""), e), !0);
                    }, this.destroy = function() {
                        this.routes = w = [], A && window.removeEventListener("popstate", this.__popstateListener), this.destroyed = L = !0;
                    }, this.notFound = function(t, n) {
                        return r._notFoundRoute = N("*", t, [
                            e,
                            n
                        ], "__NOT_FOUND__"), this;
                    }, this.updatePageLinks = F, this.link = function(t) {
                        return "/" + i + "/" + s(t);
                    }, this.hooks = function(t) {
                        return e = t, this;
                    }, this.extractGETParameters = function(t) {
                        return h(R(t));
                    }, this.lastResolved = function() {
                        return d;
                    }, this.generate = I, this.getLinkPath = function(t) {
                        return t.getAttribute("href");
                    }, this.match = function(t) {
                        var n = {
                            instance: r,
                            currentLocationPath: t,
                            to: t,
                            navigateOptions: {},
                            resolveOptions: o
                        };
                        return _(n, function() {}), !!n.matches && n.matches;
                    }, this.matchLocation = function(t, n, e) {
                        void 0 === n || void 0 !== e && !e || (n = E(n));
                        var o = {
                            instance: r,
                            to: n,
                            currentLocationPath: n
                        };
                        return y(o, function() {}), "string" == typeof t && (t = void 0 === e || e ? E(t) : t), l(o, {
                            name: String(t),
                            path: t,
                            handler: function() {},
                            hooks: {}
                        }) || !1;
                    }, this.getCurrentLocation = function() {
                        return M(s(a(i)).replace(new RegExp("^" + i), ""));
                    }, this.addBeforeHook = T.bind(this, "before"), this.addAfterHook = T.bind(this, "after"), this.addAlreadyHook = T.bind(this, "already"), this.addLeaveHook = T.bind(this, "leave"), this.getRoute = z, this._pathToMatchObject = M, this._clean = s, this._checkForAHash = R, this._setCurrent = function(t) {
                        return d = r.current = t;
                    }, (function() {
                        A && (this.__popstateListener = function() {
                            r.__freezeListening || U();
                        }, window.addEventListener("popstate", this.__popstateListener));
                    }).call(this), F.call(this);
                }
            }
        }, n = {};
        function e(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                exports: {}
            };
            return t[o](r, r.exports, e), r.exports;
        }
        return e.d = function(t, n) {
            for(var o in n)e.o(n, o) && !e.o(t, o) && Object.defineProperty(t, o, {
                enumerable: !0,
                get: n[o]
            });
        }, e.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n);
        }, e(407);
    }().default;
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gP8EL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getHeader", ()=>getHeader);
var _headerMenu = require("/src/js/components/Header__menu/Header__menu");
var _headerCss = require("./Header.css");
var _logoJs = require("/src/js/components/logo/Logo.js");
var _scrollbar = require("../Scrollbar/Scrollbar");
function getHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
    const container = document.createElement("div");
    container.classList.add("container", "header__container");
    const logo = (0, _logoJs.getLogo)();
    logo.classList.add("header__logo");
    const headerMenu = (0, _headerMenu.getHeaderMenu)();
    const progressBar = (0, _scrollbar.getProgressBar)();
    container.append(logo, headerMenu);
    header.append(progressBar, container);
    return header;
}

},{"/src/js/components/Header__menu/Header__menu":"99DHK","./Header.css":"a0VBO","/src/js/components/logo/Logo.js":"kAche","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../Scrollbar/Scrollbar":"anrst"}],"99DHK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getHeaderMenu", ()=>getHeaderMenu);
var _headerMenuCss = require("./Header__menu.css");
var _basketJs = require("/src/js/components/Basket/Basket.js");
var _navLink = require("/src/js/components/NavLink/NavLink");
var _main = require("../../main");
function getHeaderMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu", "header__menu");
    const navigation = document.createElement("nav");
    navigation.classList.add("navigation", "header__navigation");
    const basketBtn = (0, _basketJs.getBasketBtn)();
    const links = {
        "catalog": (0, _navLink.getNavLink)("/catalog", "\u041A\u0430\u0442\u0430\u043B\u043E\u0433"),
        "about": (0, _navLink.getNavLink)("/about", "\u041E \u043D\u0430\u0441"),
        "pay": (0, _navLink.getNavLink)("/pay", "\u041E\u043F\u043B\u0430\u0442\u0430"),
        "delivery": (0, _navLink.getNavLink)("/delivery", "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430")
    };
    for(const elem in links)navigation.append(links[elem]);
    menu.append(navigation, basketBtn);
    return menu;
}

},{"./Header__menu.css":"jbew9","/src/js/components/Basket/Basket.js":"OLafT","/src/js/components/NavLink/NavLink":"4DtYj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../main":"1SICI"}],"jbew9":[function() {},{}],"OLafT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBasketBtn", ()=>getBasketBtn);
var _basketCss = require("./basket.css");
var _basket2Svg = require("bundle-text:/src/assets/img/basket2.svg");
var _basket2SvgDefault = parcelHelpers.interopDefault(_basket2Svg);
function getBasketBtn() {
    const basketBtn = document.createElement("a");
    basketBtn.classList.add("basket-btn");
    basketBtn.href = "/basket";
    basketBtn.innerHTML = (0, _basket2SvgDefault.default);
    return basketBtn;
}

},{"./basket.css":"ilSAs","bundle-text:/src/assets/img/basket2.svg":"hkip4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ilSAs":[function() {},{}],"hkip4":[function(require,module,exports) {
module.exports = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\n<svg fill=\"#000000\" height=\"800px\" width=\"800px\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 189.948 189.948\" xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<g>\n\t\t\t<path d=\"M164.613,56.66L132.259,9.34c-2.371-3.467-7.106-4.357-10.576-1.986c-3.469,2.374-4.357,7.106-1.986,10.576\n\t\t\t\tl26.437,38.659H43.815L70.247,17.93c2.374-3.469,1.484-8.202-1.986-10.576C64.792,4.98,60.057,5.873,57.688,9.34L25.334,56.66\n\t\t\t\tC11.248,57.375,0,69.026,0,83.29c0,7.033,2.787,13.69,7.74,18.682l10.708,63.311c0.378,10.343,8.91,18.641,19.341,18.641h114.367\n\t\t\t\tc10.431,0,18.963-8.296,19.341-18.641l10.708-63.308c4.953-4.994,7.743-11.651,7.743-18.684\n\t\t\t\tC189.947,69.029,178.699,57.375,164.613,56.66z M170.373,92.179l-2.252,1.811l-11.722,69.306l-0.107,1.268\n\t\t\t\tc0,2.28-1.854,4.139-4.137,4.139H37.789c-2.283,0-4.139-1.856-4.139-4.139L21.821,93.992l-2.25-1.811\n\t\t\t\tc-2.77-2.229-4.357-5.471-4.357-8.894c0-6.333,5.148-11.481,11.476-11.481h136.558c6.328,0,11.476,5.151,11.476,11.481\n\t\t\t\tC174.73,86.713,173.143,89.955,170.373,92.179z\"></path>\n\t\t\t<path d=\"M131.793,91.687c-4.202,0-7.609,3.406-7.609,7.609v53.333c0,4.202,3.406,7.609,7.609,7.609s7.609-3.406,7.609-7.609\n\t\t\t\tV99.295C139.401,95.093,135.995,91.687,131.793,91.687z\"></path>\n\t\t\t<path d=\"M94.975,91.687c-4.202,0-7.609,3.406-7.609,7.609v53.333c0,4.202,3.406,7.609,7.609,7.609\n\t\t\t\tc4.202,0,7.609-3.406,7.609-7.609V99.295C102.584,95.093,99.177,91.687,94.975,91.687z\"></path>\n\t\t\t<path d=\"M58.152,91.687c-4.202,0-7.609,3.406-7.609,7.609v53.333c0,4.202,3.406,7.609,7.609,7.609s7.609-3.406,7.609-7.609\n\t\t\t\tV99.295C65.763,95.093,62.355,91.687,58.152,91.687z\"></path>\n\t\t</g>\n\t</g>\n</g>\n</svg>";

},{}],"4DtYj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getNavLink", ()=>getNavLink);
var _mainJs = require("/src/js/main.js");
var _navLinkCss = require("./NavLink.css");
function getNavLink(path, title = "") {
    const link = document.createElement("a");
    link.href = path;
    link.classList.add("navigation__link");
    link.textContent = title;
    link.addEventListener("click", function(event) {
        event.preventDefault();
        (0, _mainJs.router).navigate(path);
    });
    return link;
}

},{"./NavLink.css":"hHZ1Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","/src/js/main.js":"1SICI"}],"hHZ1Z":[function() {},{}],"a0VBO":[function() {},{}],"kAche":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getLogo", ()=>getLogo);
var _logoCss = require("./logo.css");
var _logoSvg = require("/src/assets/img/logo.svg");
var _logoSvgDefault = parcelHelpers.interopDefault(_logoSvg);
function getLogo() {
    const logoLink = document.createElement("a");
    logoLink.classList.add("logo-link");
    logoLink.href = "/";
    const logoImg = document.createElement("img");
    logoImg.classList.add("logo");
    logoImg.src = (0, _logoSvgDefault.default);
    logoLink.append(logoImg);
    return logoLink;
}

},{"./logo.css":"fgPjk","/src/assets/img/logo.svg":"1diId","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fgPjk":[function() {},{}],"1diId":[function(require,module,exports) {
module.exports = require("5b3aa14cd0d9bc14").getBundleURL("10Mjw") + "logo.e1e57082.svg" + "?" + Date.now();

},{"5b3aa14cd0d9bc14":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"anrst":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getProgressBar", ()=>getProgressBar);
var _scrollbarCss = require("./Scrollbar.css");
function getProgressBar() {
    const progressBar = document.createElement("div");
    progressBar.classList.add("progressbar");
    const progressBarLine = document.createElement("div");
    progressBarLine.classList.add("progressbar__line");
    progressBar.append(progressBarLine);
    window.addEventListener("scroll", fillProgressLine);
    window.addEventListener("resize", fillProgressLine);
    let fullHeight, innerHeight;
    function fillProgressLine() {
        fullHeight = document.body.scrollHeight;
        innerHeight = window.innerHeight;
        progressBarLine.style.width = pageYOffset * 100 / (fullHeight - innerHeight) + "%";
        console.log(fullHeight);
        console.log(innerHeight);
    }
    fillProgressLine();
    return progressBar;
}

},{"./Scrollbar.css":"cOgah","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cOgah":[function() {},{}],"jroh0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPageContainer", ()=>getPageContainer);
function getPageContainer() {
    const main = document.createElement("main");
    main.classList.add("main", "page-container");
    return main;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jazuh":[function(require,module,exports) {
module.exports = Promise.all([
    require("d72c1a5c51984937")(require("9c6c8a12c057d5a7").getBundleURL("10Mjw") + "mainPage.5679f0c2.css" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("d6d80187216049eb")(require("9c6c8a12c057d5a7").getBundleURL("10Mjw") + "mainPage.8511ce7f.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("dw5RR"));

},{"d72c1a5c51984937":"1MWPE","9c6c8a12c057d5a7":"lgJ39","d6d80187216049eb":"61B45"}],"1MWPE":[function(require,module,exports) {
"use strict";
var cacheLoader = require("ae7c5e215a4907e2");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same link element twice (e.g. if it was already in the HTML)
        var existingLinks = document.getElementsByTagName("link");
        if ([].concat(existingLinks).some(function isCurrentBundle(link) {
            return link.href === bundle && link.rel.indexOf("stylesheet") > -1;
        })) {
            resolve();
            return;
        }
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = bundle;
        link.onerror = function(e) {
            link.onerror = link.onload = null;
            link.remove();
            reject(e);
        };
        link.onload = function() {
            link.onerror = link.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(link);
    });
});

},{"ae7c5e215a4907e2":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"4iSxT":[function(require,module,exports) {
module.exports = Promise.all([
    require("efb275057ef4eb1b")(require("cbdd5019a1e57eb6").getBundleURL("10Mjw") + "catalogPage.6fcf4cc7.css" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("f1a8e268b7603702")(require("cbdd5019a1e57eb6").getBundleURL("10Mjw") + "catalogPage.8117584d.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("bzkxp"));

},{"efb275057ef4eb1b":"1MWPE","cbdd5019a1e57eb6":"lgJ39","f1a8e268b7603702":"61B45"}],"cYpNA":[function(require,module,exports) {
module.exports = Promise.all([
    require("dfc4898aafec2988")(require("36011c6f19c574e9").getBundleURL("10Mjw") + "AboutPage.cefe105d.css" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("acc243b1494221e4")(require("36011c6f19c574e9").getBundleURL("10Mjw") + "AboutPage.33d74b54.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("6uxau"));

},{"dfc4898aafec2988":"1MWPE","36011c6f19c574e9":"lgJ39","acc243b1494221e4":"61B45"}],"9u3nA":[function(require,module,exports) {
module.exports = Promise.all([
    require("c74cbde51e5625e9")(require("b9de02346e70529f").getBundleURL("10Mjw") + "payPage.761a1554.css" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("e89eb6d268976d1d")(require("b9de02346e70529f").getBundleURL("10Mjw") + "payPage.7301daac.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("lcaQj"));

},{"c74cbde51e5625e9":"1MWPE","b9de02346e70529f":"lgJ39","e89eb6d268976d1d":"61B45"}],"3ofVA":[function(require,module,exports) {
module.exports = Promise.all([
    require("f645a4c9ba879421")(require("f6a2fc4e23bedab7").getBundleURL("10Mjw") + "deliveryPage.d1fd7bea.css" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("7816681940279241")(require("f6a2fc4e23bedab7").getBundleURL("10Mjw") + "deliveryPage.aa8f3133.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("dUqX0"));

},{"f645a4c9ba879421":"1MWPE","f6a2fc4e23bedab7":"lgJ39","7816681940279241":"61B45"}],"3oO4f":[function(require,module,exports) {
module.exports = Promise.all([
    require("a7728c1103f87359")(require("ac67de57fd2b8334").getBundleURL("10Mjw") + "basketPage.a11ed590.css" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("b84df7aea5f49614")(require("ac67de57fd2b8334").getBundleURL("10Mjw") + "basketPage.a51be6ca.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("fSLNN"));

},{"a7728c1103f87359":"1MWPE","ac67de57fd2b8334":"lgJ39","b84df7aea5f49614":"61B45"}]},["j2YDk","1SICI"], "1SICI", "parcelRequire26f1")

//# sourceMappingURL=index.18dbc454.js.map
