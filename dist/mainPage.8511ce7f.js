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
})({"59s19":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fdcb27bd8511ce7f";
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

},{}],"dw5RR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getMainPage", ()=>getMainPage);
var _pageTitleJs = require("/src/js/components/PageTitle/PageTitle.js");
var _slider = require("/src/js/components/Slider/slider");
var _sectionCollection = require("/src/js/components/Section-collection/Section-collection");
var _scrollbar = require("../../components/Scrollbar/Scrollbar");
function getMainPage() {
    const mainPage = document.createElement("div");
    mainPage.classList.add("page", "main");
    const container = document.createElement("div");
    container.classList.add("container", "main__container");
    // const mainTitle = getTitle("Главное меню", "main__title");
    const slider = (0, _slider.getSlider)();
    const collectionSect = (0, _sectionCollection.getSectionCollection)();
    container.append(slider, collectionSect);
    mainPage.append(container);
    return mainPage;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","/src/js/components/PageTitle/PageTitle.js":"3YEz6","/src/js/components/Slider/slider":"jivPq","/src/js/components/Section-collection/Section-collection":"bJGlR","../../components/Scrollbar/Scrollbar":"anrst"}],"3YEz6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTitle", ()=>getTitle);
var _pageTitleCss = require("./PageTitle.css");
function getTitle(text, titleClass = "") {
    const title = document.createElement("h1");
    title.classList.add("title", titleClass);
    title.textContent = text;
    return title;
}

},{"./PageTitle.css":"cKyqo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cKyqo":[function() {},{}],"jivPq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSlider", ()=>getSlider);
var _sliderCss = require("./slider.css");
var _airmaxPng = require("/src/assets/img/airmax.png");
var _airmaxPngDefault = parcelHelpers.interopDefault(_airmaxPng);
var _snapJpeg = require("/src/assets/img/snap.jpeg");
var _snapJpegDefault = parcelHelpers.interopDefault(_snapJpeg);
var _bomberPng = require("/src/assets/img/bomber.png");
var _bomberPngDefault = parcelHelpers.interopDefault(_bomberPng);
function getSlider() {
    const slider = document.createElement("div");
    slider.classList.add("slider");
    const sliderMask = document.createElement("div");
    sliderMask.classList.add("slider__mask");
    const image1 = document.createElement("img");
    image1.classList.add("slider__image");
    image1.src = (0, _airmaxPngDefault.default);
    const image2 = document.createElement("img");
    image2.classList.add("slider__image");
    image2.src = (0, _snapJpegDefault.default);
    const image3 = document.createElement("img");
    image3.classList.add("slider__image");
    image3.src = (0, _bomberPngDefault.default);
    const prevButton = document.createElement("button");
    prevButton.classList.add("prev-button");
    prevButton.setAttribute("label", "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0441\u043B\u0430\u0439\u0434");
    const nextButton = document.createElement("button");
    nextButton.classList.add("next-button");
    nextButton.setAttribute("label", "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0441\u043B\u0430\u0439\u0434");
    const leftArrow = document.createElement("i");
    leftArrow.classList.add("fa-solid", "fa-chevron-left");
    const rightArrow = document.createElement("i");
    rightArrow.classList.add("fa-solid", "fa-chevron-right");
    const titleMask = document.createElement("div");
    titleMask.classList.add("slider__title-mask");
    const sliderTitle = document.createElement("h2");
    sliderTitle.classList.add("slider__title");
    sliderTitle.textContent = "New collection";
    const slides = [
        image1,
        image2,
        image3
    ];
    const slideCount = slides.length;
    let slideIndex = 0;
    prevButton.addEventListener("click", showPrevSlide);
    nextButton.addEventListener("click", showNextSlide);
    function showPrevSlide() {
        slideIndex = (slideIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }
    function showNextSlide() {
        slideIndex = (slideIndex + 1) % slideCount;
        updateSlider();
    }
    function updateSlider() {
        slides.forEach((slide, index)=>{
            if (index === slideIndex) slide.style.display = "block";
            else slide.style.display = "none";
        });
    }
    updateSlider();
    prevButton.append(leftArrow);
    nextButton.append(rightArrow);
    // sliderMask.append(image1, image2, image3,)
    slider.append(sliderMask, image1, image2, image3, prevButton, nextButton, sliderTitle);
    return slider;
}

},{"./slider.css":"a4zBS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","/src/assets/img/airmax.png":"5E2Kh","/src/assets/img/snap.jpeg":"3uAKn","/src/assets/img/bomber.png":"4FCsV"}],"a4zBS":[function() {},{}],"5E2Kh":[function(require,module,exports) {
module.exports = require("17e85b0721501957").getBundleURL("lMW6L") + "airmax.f3361950.png" + "?" + Date.now();

},{"17e85b0721501957":"lgJ39"}],"3uAKn":[function(require,module,exports) {
module.exports = require("86726c9b4a672ff8").getBundleURL("lMW6L") + "snap.d09fc46b.jpeg" + "?" + Date.now();

},{"86726c9b4a672ff8":"lgJ39"}],"4FCsV":[function(require,module,exports) {
module.exports = require("f517ae352acda42f").getBundleURL("lMW6L") + "bomber.39243730.png" + "?" + Date.now();

},{"f517ae352acda42f":"lgJ39"}],"bJGlR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSectionCollection", ()=>getSectionCollection);
var _sectionCollectionCss = require("./Section-collection.css");
var _child2Jpg = require("/src/assets/img/child2.jpg");
var _child2JpgDefault = parcelHelpers.interopDefault(_child2Jpg);
var _man2Jpg = require("/src/assets/img/man2.jpg");
var _man2JpgDefault = parcelHelpers.interopDefault(_man2Jpg);
var _woman2Jpg = require("/src/assets/img/woman2.jpg");
var _woman2JpgDefault = parcelHelpers.interopDefault(_woman2Jpg);
function getSectionCollection() {
    const section = document.createElement("section");
    section.classList.add("section", "hero");
    const topPart = document.createElement("div");
    topPart.classList.add("hero__top");
    const bottomPart = document.createElement("div");
    bottomPart.classList.add("hero__bottom");
    const heroCard = document.createElement("div");
    heroCard.classList.add("hero__card");
    const heroCard2 = document.createElement("div");
    heroCard2.classList.add("hero__card");
    const heroCard3 = document.createElement("div");
    heroCard3.classList.add("hero__card");
    const childImg = document.createElement("img");
    childImg.classList.add("hero-card__image");
    childImg.src = (0, _child2JpgDefault.default);
    const manImg = document.createElement("img");
    manImg.classList.add("hero-card__image");
    manImg.src = (0, _man2JpgDefault.default);
    const womanImg = document.createElement("img");
    womanImg.classList.add("hero-card__image");
    womanImg.src = (0, _woman2JpgDefault.default);
    const cardTitleLink = document.createElement("a");
    cardTitleLink.classList.add("hero-card__link");
    cardTitleLink.href = "/";
    const cardTitleLink2 = document.createElement("a");
    cardTitleLink2.classList.add("hero-card__link");
    cardTitleLink2.href = "/";
    const cardTitleLink3 = document.createElement("a");
    cardTitleLink3.classList.add("hero-card__link");
    cardTitleLink3.href = "/";
    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("hero-card__title");
    cardTitle.textContent = "\u041D\u043E\u0432\u0430\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F";
    const cardText = document.createElement("p");
    cardText.classList.add("hero-card__text");
    cardText.textContent = "\u0414\u043B\u044F \u0434\u0435\u0442\u0435\u0439";
    const cardTitle2 = document.createElement("h4");
    cardTitle2.classList.add("hero-card__title");
    cardTitle2.textContent = "\u041D\u043E\u0432\u0430\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F";
    const cardText2 = document.createElement("p");
    cardText2.classList.add("hero-card__text");
    cardText2.textContent = "\u0414\u043B\u044F \u043C\u0443\u0436\u0447\u0438\u043D";
    const cardTitle3 = document.createElement("h4");
    cardTitle3.classList.add("hero-card__title");
    cardTitle3.textContent = "\u041D\u043E\u0432\u0430\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F";
    const cardText3 = document.createElement("p");
    cardText3.classList.add("hero-card__text");
    cardText3.textContent = "\u0414\u043B\u044F \u0436\u0435\u043D\u0449\u0438\u043D";
    cardTitleLink.append(cardText, cardTitle);
    cardTitleLink2.append(cardText2, cardTitle2);
    cardTitleLink3.append(cardText3, cardTitle3);
    heroCard.append(childImg, cardTitleLink);
    heroCard2.append(manImg, cardTitleLink2);
    heroCard3.append(womanImg, cardTitleLink3);
    topPart.append(heroCard, heroCard2, heroCard3);
    section.append(topPart, bottomPart);
    return section;
}

},{"./Section-collection.css":"cdEdO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","/src/assets/img/child2.jpg":"eazOP","/src/assets/img/man2.jpg":"18nP4","/src/assets/img/woman2.jpg":"3SDW5"}],"cdEdO":[function() {},{}],"eazOP":[function(require,module,exports) {
module.exports = require("c106d1f1229753be").getBundleURL("lMW6L") + "child2.6d1d9217.jpg" + "?" + Date.now();

},{"c106d1f1229753be":"lgJ39"}],"18nP4":[function(require,module,exports) {
module.exports = require("e026b82b067271cd").getBundleURL("lMW6L") + "man2.95eb242f.jpg" + "?" + Date.now();

},{"e026b82b067271cd":"lgJ39"}],"3SDW5":[function(require,module,exports) {
module.exports = require("873920beab2e3f82").getBundleURL("lMW6L") + "woman2.8896db89.jpg" + "?" + Date.now();

},{"873920beab2e3f82":"lgJ39"}]},["59s19"], null, "parcelRequire26f1")

//# sourceMappingURL=mainPage.8511ce7f.js.map
