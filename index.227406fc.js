// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hkXzs":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "b3bb0a59227406fc";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"23obh":[function(require,module,exports) {
var _menu = require("./menu");
var _displaysections = require("./displaysections");
var _shoppingcart = require("./shoppingcart");
var _darkmode = require("./darkmode");
// ------------------------ DARK/LIGHT THEME BTN (victor)-------------------------------
const logo = document.querySelector('#logo');
// Creation [themeBtn] Light/Dark Theme
const themeBtn = document.createElement('button');
themeBtn.classList.add('themeBtn');
themeBtn.innerHTML = 'Go Dark';
// Add [addEventListener] + [function] flechee qui switch theme dark/light
if (themeBtn) themeBtn.addEventListener('click', ()=>{
    _darkmode.darkThemeActivateButtonsAndLinks(themeBtn, logo);
});
// Deplacement [themeBtn] in <aside>
const shoppingcartBtn = document.getElementById('shopping-cart-btn');
const vraiAside = document.getElementById('vraiAside');
vraiAside.insertBefore(themeBtn, shoppingcartBtn);
// ------------------------ CREATING SECTIONS AND ARTICLES WITH DISHES -----------------------------
const courses = [
    'All',
    'Pizza',
    'Pasta',
    'Desserts'
];
const courseList = document.createElement('ul');
courseList.classList.add('meals');
const menuArticles = document.createElement('section');
menuArticles.classList.add('menuArticle');
for (const course of courses){
    const item = document.createElement('li');
    const itemBtn = document.createElement('a');
    itemBtn.classList.add(course);
    itemBtn.classList.add('inactive');
    itemBtn.setAttribute('href', 'javascript:void(0);');
    if (itemBtn) itemBtn.addEventListener('click', _displaysections.displayCourseSection);
    const image = document.createElement('img');
    image.setAttribute('src', `Images/${course}.png`);
    const name = document.createTextNode(course);
    const courseSection = document.createElement('section');
    courseSection.classList.add(`${course}Section`);
    itemBtn.appendChild(image);
    itemBtn.appendChild(name);
    item.appendChild(itemBtn);
    courseList.appendChild(item);
    document.querySelector('.menuArticle').appendChild(courseSection);
}
for (const dish of _menu.MENU){
    const dishArticle = document.createElement('article');
    dishArticle.classList.add('food');
    for (let feature of dish.categories){
        if (feature === 'Comfort food') feature = 'Comfort';
        dishArticle.classList.add(feature);
    }
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    image.setAttribute('src', dish.image);
    const caption = document.createElement('figcaption');
    caption.innerText = dish.name;
    const ingredientP = document.createElement('p');
    ingredientP.innerHTML = 'Ingredients: ';
    for(let i = 0; i < dish.ingredients.length - 1; i++)ingredientP.innerHTML += `${dish.ingredients[i]}, `;
    ingredientP.innerHTML += dish.ingredients[dish.ingredients.length - 1];
    const price = document.createElement('p');
    price.innerHTML = `€${dish.price}`;
    const buy = document.createElement('button');
    buy.classList.add('cartBtn'); // VICTOR ADD THIS CLASS [cartBtn] FOR THE SHOPPING CART
    if (buy) buy.addEventListener('click', ()=>{
        _shoppingcart.cartFunction(dish);
    });
    buy.innerHTML = 'Add to cart';
    figure.appendChild(image);
    figure.appendChild(caption);
    dishArticle.appendChild(figure);
    dishArticle.appendChild(ingredientP);
    dishArticle.appendChild(price);
    dishArticle.appendChild(buy);
    document.querySelector('.selectMenu').appendChild(courseList);
    const clonedDish = dishArticle.cloneNode(true);
    const dishType = dish.type;
    document.getElementsByClassName('AllSection')[0].appendChild(clonedDish);
    document.getElementsByClassName(`${dishType}Section`)[0].appendChild(dishArticle);
}
// -------------------------------- CREATING EXTRA FILTER BUTTONS (VEGGIE, SPICY, COMFORT FOOD) --------------------------
const filters = [
    'Vegetarian',
    'Spicy',
    'Comfort Food'
];
const selectorMenu = document.querySelector('.selectMenu');
const filterList = document.createElement('ul');
filterList.classList.add('filters');
for (let filter of filters){
    if (filter === 'Comfort Food') filter = 'Comfort';
    const item = document.createElement('li');
    const itemBtn = document.createElement('a');
    itemBtn.classList.add(filter);
    itemBtn.classList.add('inactive');
    itemBtn.setAttribute('href', 'javascript:void(0);');
    if (itemBtn) itemBtn.addEventListener('click', _displaysections.displayFilteredDishes);
    const image = document.createElement('img');
    image.setAttribute('src', `Images/${filter}.png`);
    const name = document.createTextNode(filter);
    itemBtn.appendChild(image);
    itemBtn.appendChild(name);
    item.appendChild(itemBtn);
    filterList.appendChild(item);
}
selectorMenu.appendChild(filterList);
// ------------------------ SHOPPING CART (victor) --------------------------------------
const clearAll = document.querySelectorAll('.clearAll'); // Select all .clearAll buttons
const shoppingCartBtn = document.querySelector('#shopping-cart-btn');
// -- CREATION EVENTLISTENER --
// LOOP creation [eventListener] on each [clearAll] button  ===>>>  Function for clear shopping list + call disparuFunction + display an alert
for (const button of clearAll)if (button) button.addEventListener('click', (e)=>{
    _shoppingcart.emptyOrBuyShoppingList(e);
});
// Creation [eventListener] on #shopping-cart-btn  ===>>>  Function for call disparuFunction
if (shoppingCartBtn) shoppingCartBtn.addEventListener('click', ()=>{
    _shoppingcart.disparuFunction();
});

},{"./menu":"lGdvw","./displaysections":"lSbEP","./shoppingcart":"ea2QH","./darkmode":"iQ8mk"}],"lGdvw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MENU", ()=>MENU
);
const MENU = [
    {
        type: 'Pizza',
        name: 'Sarda',
        categories: [
            'Spicy'
        ],
        ingredients: [
            'mozzarella',
            'pecorino cheese',
            'spicy salami'
        ],
        price: 9,
        image: 'Images/sarda.jpeg',
        quantity: 1
    },
    {
        type: 'Pizza',
        name: 'Pizza Romana',
        categories: [],
        ingredients: [
            'mozzarella',
            'anchovies',
            'capers',
            'oregano'
        ],
        price: 9,
        image: 'Images/Pizza-Romana-1-800x477.jpeg',
        quantity: 1
    },
    {
        type: 'Pizza',
        name: 'Pizza Napoletana',
        categories: [
            'Vegetarian'
        ],
        ingredients: [
            'mozzarella',
            'tomato',
            'oregano'
        ],
        price: 8,
        image: 'Images/napoletana.jpeg',
        quantity: 1
    },
    {
        type: 'Pizza',
        name: 'Four seasons pizza',
        categories: [
            'Comfort food'
        ],
        ingredients: [
            'artichokes',
            'tomatoes',
            'basil',
            'mushrooms',
            'ham'
        ],
        price: 11,
        image: 'Images/four-seasons-pizza.jpeg',
        quantity: 1
    },
    {
        type: 'Pasta',
        name: 'Pasta Carbonara',
        categories: [
            'Comfort food'
        ],
        ingredients: [
            'egg',
            'lardons',
            'Pecorino romano'
        ],
        price: 8,
        image: 'Images/pasta-carbonara_b-864x413.jpeg',
        quantity: 1
    },
    {
        type: 'Pasta',
        name: 'Spaghetti bolognese',
        categories: [
            'Comfort food'
        ],
        ingredients: [
            'beef',
            'chopped tomatoes',
            'garlic'
        ],
        price: 8,
        image: 'Images/bolognaise.jpeg',
        quantity: 1
    },
    {
        type: 'Pasta',
        name: 'Lasagna bolognese',
        categories: [
            'Comfort food'
        ],
        ingredients: [
            'mozzarella',
            'tomato',
            'beef'
        ],
        price: 10,
        image: 'Images/lasagna-bolognese.jpeg',
        quantity: 1
    },
    {
        type: 'Pasta',
        name: 'Cacio e pepe',
        categories: [
            'Vegetarian'
        ],
        ingredients: [
            'pecorino romano',
            'black pepper'
        ],
        price: 9,
        image: 'Images/Spaghetti-Cacio-e-Pepe-Pecorino-and-black-pepper-spaghetti_1200x800.jpeg',
        quantity: 1
    },
    {
        type: 'Desserts',
        name: 'Torrone Semifreddo',
        categories: [
            'Desserts',
            'Vegetarian'
        ],
        ingredients: [
            'honey',
            'egg whites',
            'nuts'
        ],
        price: 4,
        image: 'Images/Torrone Semifreddo.jpeg',
        quantity: 1
    },
    {
        type: 'Desserts',
        name: 'Mixed-Nut-Milk Panna Cotta',
        categories: [
            'Desserts',
            'Vegetarian'
        ],
        ingredients: [
            'nut milk',
            'honey',
            'strawberry jam'
        ],
        price: 10,
        image: 'Images/pannacotta.jpeg',
        quantity: 1
    },
    {
        type: 'Desserts',
        name: 'Chocolate and Pistachio Biscotti',
        categories: [
            'Desserts',
            'Vegetarian'
        ],
        ingredients: [
            'dark chocolate',
            'egg',
            'nuts'
        ],
        price: 9,
        image: 'Images/biscotti.jpeg',
        quantity: 1
    }, 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
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

},{}],"lSbEP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayCourseSection", ()=>displayCourseSection
);
// ------- DISPLAY WITH FILTERS (VEGGIE, SPICY, COMFORT FOOD) -----------
parcelHelpers.export(exports, "displayFilteredDishes", ()=>displayFilteredDishes
);
var _activateordeactive = require("./activateordeactive");
var _noresults = require("./noresults");
function displayCourseSection(e) {
    _activateordeactive.activateOrDeactivateCourses(e);
    const type = e.target.classList[0];
    const articles = document.querySelectorAll('.food');
    const filters = document.querySelectorAll('li a');
    if (e.target.classList.contains('active')) for (const article of articles){
        const articleParent = article.parentNode;
        if (articleParent.classList.contains(`${type}Section`)) {
            if (filters[4].classList.contains('inactive') && filters[5].classList.contains('inactive') && filters[6].classList.contains('inactive')) article.style.display = 'flex';
            else if (article.classList.contains('active')) article.style.display = 'flex';
            else article.style.display = 'none';
        } else article.style.display = 'none';
    }
    else for (const article1 of articles){
        const articleParent = article1.parentNode;
        if (articleParent.classList.contains(`${type}Section`)) article1.style.display = 'none';
    }
    _noresults.displayNoResults();
}
function displayFilteredDishes(e) {
    _activateordeactive.activateOrDeactivateAdditionalFilters(e);
    const filter = e.target.classList[0];
    const articles = document.querySelectorAll('.food');
    if (e.target.classList.contains('active')) for (const article of articles){
        const articleParent = article.parentNode;
        if (articleParent.classList.contains('active') && article.classList.contains(filter)) article.style.display = 'flex';
        else article.style.display = 'none';
    }
    else {
        const filters = document.querySelectorAll('li a');
        if (filters[4].classList.contains('inactive') && filters[5].classList.contains('inactive') && filters[6].classList.contains('inactive')) for (const article1 of articles){
            const articleParent = article1.parentNode;
            if (articleParent.classList.contains('active')) article1.style.display = 'flex';
        }
    }
    _noresults.displayNoResults();
}

},{"./activateordeactive":"6n2qE","./noresults":"kUwgo","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6n2qE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "activateOrDeactivateCourses", ()=>activateOrDeactivateCourses
);
parcelHelpers.export(exports, "activateOrDeactivateAdditionalFilters", ()=>activateOrDeactivateAdditionalFilters
);
var _getsiblings = require("./getsiblings");
function activateSection(section) {
    section.classList.remove('inactive');
    section.classList.add('active');
    section.style.background = 'hsl(229, 100%, 76%)';
    section.style.color = 'white';
}
function deactivateSection(section) {
    section.classList.remove('active');
    section.classList.add('inactive');
    section.style.background = 'inherit';
    section.style.color = 'inherit';
}
function deactivateSiblingSectionsOfParent(section) {
    const parent = section.parentNode;
    const allUnselectedParents = _getsiblings.getSiblings(parent);
    for (const unselectedParent of allUnselectedParents)if (unselectedParent.firstChild.classList.contains('active')) deactivateSection(unselectedParent.firstChild);
}
function removeActiveClassFromUnselectedSiblings(selectedElement) {
    const allNotSelected = _getsiblings.getSiblings(selectedElement);
    for (const notSelected of allNotSelected)if (notSelected.classList.contains('active')) notSelected.classList.remove('active');
}
function activateOrDeactivateCourses(e) {
    const type = e.target.classList[0];
    const selected = document.getElementsByClassName(`${type}Section`)[0];
    if (e.target.classList.contains('inactive')) {
        activateSection(e.target);
        selected.classList.add('active');
    } else if (e.target.classList.contains('active')) {
        deactivateSection(e.target);
        selected.classList.remove('active');
    }
    removeActiveClassFromUnselectedSiblings(selected);
    deactivateSiblingSectionsOfParent(e.target);
}
function removeTypeFromArray(arr, type) {
    const arrWithoutType = arr.slice();
    for(let i = 0; i < arrWithoutType.length; i++)if (arrWithoutType[i] === type) arrWithoutType.splice(i, 1);
    return arrWithoutType;
}
function activateOrDeactivateAdditionalFilters(e) {
    const type = e.target.classList[0];
    const selected = document.getElementsByClassName(type);
    if (e.target.classList.contains('inactive')) {
        activateSection(e.target);
        for (const select of selected)if (select.classList.contains('food')) select.classList.add('active');
    } else if (e.target.classList.contains('active')) {
        deactivateSection(e.target);
        for (const select of selected)if (select.classList.contains('food')) select.classList.remove('active');
    }
    const arr = [
        'Vegetarian',
        'Spicy',
        'Comfort'
    ];
    const arrWithoutSelectedType = removeTypeFromArray(arr, type);
    for (const unselectedType of arrWithoutSelectedType){
        const articles = document.querySelectorAll('.food');
        for (const article of articles)if (article.classList.contains(unselectedType)) article.classList.remove('active');
    }
    deactivateSiblingSectionsOfParent(e.target);
}

},{"./getsiblings":"5FFPg","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"5FFPg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSiblings", ()=>getSiblings
);
function getSiblings(elem) {
    // create an empty array
    const siblings = [];
    const parent = elem.parentNode;
    // if no parent, return empty list
    if (!parent) return siblings;
    // first child of the parent node
    let sibling = parent.firstElementChild;
    // loop through next siblings until `null`
    do // push sibling to array
    if (sibling !== elem) siblings.push(sibling);
    while (sibling = sibling.nextElementSibling)
    return siblings;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"kUwgo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayNoResults", ()=>displayNoResults
);
// --------------------- NO RESULTS/NO ARTICLES DISPLAYED -------------------
function removeMatchingMessages(message) {
    const paragraphs = document.querySelectorAll('p');
    for (const info of paragraphs)if (info.innerHTML === message) info.parentNode.removeChild(info);
}
function displayNoResults() {
    const message = 'No results found';
    removeMatchingMessages(message);
    const articles = document.querySelectorAll('.food');
    let yes = 0;
    for (const article of articles)if (article.style.display !== 'none') yes++;
    if (yes === 0) {
        const p = document.createElement('p');
        p.classList.add('noResults');
        p.innerHTML = 'No results found';
        document.querySelector('.menuArticle').append(p);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"ea2QH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// -- CREATION FUNCTIONS --
// Creation FUNCTION [disparuFunction] for display the shopping-cart
parcelHelpers.export(exports, "disparuFunction", ()=>disparuFunction
);
// Creation FUNCTION [cartFunction]
parcelHelpers.export(exports, "cartFunction", ()=>cartFunction
);
parcelHelpers.export(exports, "emptyOrBuyShoppingList", ()=>emptyOrBuyShoppingList
);
// ------------------------ SHOPPING CART (victor) --------------------------------------
const arrayRespons = [];
// Selection elements a pointer dans js
const achatsContainer = document.querySelector('#achats-container');
const totalDiv = document.querySelector('#total-price');
// -- €$TOTAL$€ --
let total = 0;
totalDiv.innerHTML = `Your total: ${total}€`;
function disparuFunction() {
    achatsContainer.parentNode.classList.toggle('disparu');
}
function removeItemFromCart(dish) {
    total -= dish.price * dish.quantity;
    totalDiv.innerHTML = `Your total: ${total}€`;
    dish.quantity = 1;
    arrayRespons.splice(arrayRespons.indexOf(dish), 1);
}
function refreshShoppingList() {
    const articleTest = document.querySelectorAll('.article-test'); // ? QUESTION POUR LE COACH
    for(let i = 0; i < articleTest.length; i++){
        arrayRespons[i].quantity = 1;
        articleTest[i].remove();
    }
    total = 0;
    totalDiv.innerHTML = `Your total: ${total}€`;
    arrayRespons.splice(0);
}
function addFirstOfTypetoCart(dish) {
    // Copie de element clické dans arrayRespons
    arrayRespons.push(dish);
    // Creation article + Add class
    const newArticleCart = document.createElement('article');
    newArticleCart.classList.add('article-test');
    newArticleCart.classList.add('article-cart');
    // Creation 4 DIV pour flex: nombreitem/img/infos/removeBtn
    const newDivQuantity = document.createElement('div');
    newDivQuantity.innerHTML = dish.quantity;
    const newDivImg = document.createElement('div');
    const newDivInfos = document.createElement('div');
    const newDivRemoveBtn = document.createElement('div');
    // Creation image pour article + Add src
    const newImageCart = document.createElement('img');
    newImageCart.setAttribute('src', dish.image);
    newImageCart.classList.add('article-cart');
    // Creation titre pour article
    const newTitleCart = document.createElement('h6');
    newTitleCart.innerHTML = dish.name;
    newTitleCart.classList.add('article-cart');
    // Creation prix pour article + Add the item PRICE to the TOTAL
    const newPrixCart = document.createElement('h6');
    newPrixCart.innerHTML = `€${dish.price}`;
    newPrixCart.classList.add('article-cart');
    total += dish.price;
    totalDiv.innerHTML = `Your total: ${total}€`;
    // Creation removeItem btn
    const removeItemBtn = document.createElement('button');
    removeItemBtn.innerText = 'Remove';
    removeItemBtn.classList.add('article-cart');
    if (document.body.classList.contains('darkTheme')) removeItemBtn.classList.add('darkTheme');
    removeItemBtn.addEventListener('click', ()=>{
        newArticleCart.remove();
        removeItemFromCart(dish);
    });
    // Deplacement img + titre + prix + removeBtn dans la DIV correspondante
    newDivImg.appendChild(newImageCart);
    newDivInfos.appendChild(newTitleCart);
    newDivInfos.appendChild(newPrixCart);
    newDivRemoveBtn.appendChild(removeItemBtn);
    // Deplacement des 4 DIV dans [newArticleCart]
    newArticleCart.appendChild(newDivQuantity);
    newArticleCart.appendChild(newDivImg);
    newArticleCart.appendChild(newDivInfos);
    newArticleCart.appendChild(newDivRemoveBtn);
    // Deplacement de [newArticleCart] dans <div.achats-container>
    achatsContainer.appendChild(newArticleCart);
}
function moreThanOneoftypeInCart(dish, elemePizza) {
    // Modification TOTAL PRICE before modify quantity
    // total = total - (dish.price * arrayRespons[indexToModifyQuantity].quantity);
    // Modification QUANTITY
    const indexToModifyQuantity = arrayRespons.indexOf(elemePizza);
    const divQuantity = achatsContainer.children[indexToModifyQuantity];
    arrayRespons[indexToModifyQuantity].quantity++;
    divQuantity.children[0].innerHTML = arrayRespons[indexToModifyQuantity].quantity;
    // Modification TOTAL PRICE after modify quantity
    // total = total + (dish.price * arrayRespons[indexToModifyQuantity].quantity);
    total += dish.price;
    totalDiv.innerHTML = `Your total: ${total}€`;
}
function cartFunction(dish) {
    // QUANTITY OF ITEM IN THE SHOPPING CART (part1)
    const fnTrouverPizza = (element)=>element.name === dish.name
    ;
    const elemePizza = arrayRespons.find(fnTrouverPizza);
    if (elemePizza !== undefined) moreThanOneoftypeInCart(dish, elemePizza);
    else addFirstOfTypetoCart(dish);
}
function emptyOrBuyShoppingList(e) {
    disparuFunction();
    if (e.target.innerHTML === 'Purchase' && achatsContainer.hasChildNodes()) alert('Commande enregistrée, vous allez être redirigé vers la page de votre banque pour effectuer le paiement.');
    else if (e.target.innerHTML === 'Empty cart' && achatsContainer.hasChildNodes()) alert('Panier supprimé !');
    refreshShoppingList();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"iQ8mk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "darkThemeActivateButtonsAndLinks", ()=>darkThemeActivateButtonsAndLinks
);
function darkThemeAesthetics(themeBtn, logo) {
    if (themeBtn.classList.contains('darkTheme')) {
        themeBtn.innerHTML = 'Go Light';
        logo.setAttribute('src', 'Images/LogoNoir-removebg-preview.png');
    } else {
        themeBtn.innerHTML = 'Go Dark';
        logo.setAttribute('src', 'Images/logo.png');
    }
    document.body.classList.toggle('darkTheme');
}
function darkThemeActivateButtonsAndLinks(themeBtn, logo) {
    const allBtn = document.querySelectorAll('button');
    const allBtnLi = document.querySelectorAll('a');
    for (const btn of allBtn)btn.classList.toggle('darkTheme');
    for (const btnLi of allBtnLi)btnLi.classList.toggle('darkTheme');
    darkThemeAesthetics(themeBtn, logo);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["hkXzs","23obh"], "23obh", "parcelRequire0daf")

//# sourceMappingURL=index.227406fc.js.map
