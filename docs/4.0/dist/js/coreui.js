/*!
  * CoreUI v4.0.0-alpha.2 (https://coreui.io)
  * Copyright 2021 The CoreUI Team (https://github.com/orgs/coreui/people)
  * Licensed under MIT (https://coreui.io)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@popperjs/core')) :
  typeof define === 'function' && define.amd ? define(['@popperjs/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.coreui = factory(global.Popper));
}(this, (function (Popper) { 'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () {
              return e[k];
            }
          });
        }
      });
    }
    n['default'] = e;
    return Object.freeze(n);
  }

  var Popper__namespace = /*#__PURE__*/_interopNamespace(Popper);

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;

    _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v4.0.0-alpha.2): alert.js
   * Licensed under MIT (https://coreui.io/license)
   *
   * This component is a modified version of the Bootstrap's  util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000;
  var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  var toType = function toType(obj) {
    if (obj === null || obj === undefined) {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var getUID = function getUID(prefix) {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));

    return prefix;
  };

  var getSelector = function getSelector(element) {
    var selector = element.getAttribute('data-coreui-target');

    if (!selector || selector === '#') {
      var hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273

      if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
        return null;
      } // Just in case some CMS puts out a full URL with the anchor appended


      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = '#' + hrefAttr.split('#')[1];
      }

      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }

    return selector;
  };

  var getSelectorFromElement = function getSelectorFromElement(element) {
    var selector = getSelector(element);

    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }

    return null;
  };

  var getElementFromSelector = function getElementFromSelector(element) {
    var selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };

  var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    var _window$getComputedSt = window.getComputedStyle(element),
        transitionDuration = _window$getComputedSt.transitionDuration,
        transitionDelay = _window$getComputedSt.transitionDelay;

    var floatTransitionDuration = Number.parseFloat(transitionDuration);
    var floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };

  var triggerTransitionEnd = function triggerTransitionEnd(element) {
    element.dispatchEvent(new Event(TRANSITION_END));
  };

  var isElement = function isElement(obj) {
    return (obj[0] || obj).nodeType;
  };

  var emulateTransitionEnd = function emulateTransitionEnd(element, duration) {
    var called = false;
    var durationPadding = 5;
    var emulatedDuration = duration + durationPadding;

    function listener() {
      called = true;
      element.removeEventListener(TRANSITION_END, listener);
    }

    element.addEventListener(TRANSITION_END, listener);
    setTimeout(function () {
      if (!called) {
        triggerTransitionEnd(element);
      }
    }, emulatedDuration);
  };

  var typeCheckConfig = function typeCheckConfig(componentName, config, configTypes) {
    Object.keys(configTypes).forEach(function (property) {
      var expectedTypes = configTypes[property];
      var value = config[property];
      var valueType = value && isElement(value) ? 'element' : toType(value);

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
      }
    });
  };

  var isVisible = function isVisible(element) {
    if (!element) {
      return false;
    }

    if (element.style && element.parentNode && element.parentNode.style) {
      var elementStyle = getComputedStyle(element);
      var parentNodeStyle = getComputedStyle(element.parentNode);
      return elementStyle.display !== 'none' && parentNodeStyle.display !== 'none' && elementStyle.visibility !== 'hidden';
    }

    return false;
  };

  var findShadowRoot = function findShadowRoot(element) {
    if (!document.documentElement.attachShadow) {
      return null;
    } // Can find the shadow root otherwise it'll return the document


    if (typeof element.getRootNode === 'function') {
      var root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
      return element;
    } // when we don't find a shadow root


    if (!element.parentNode) {
      return null;
    }

    return findShadowRoot(element.parentNode);
  };

  var noop = function noop() {
    return function () {};
  };

  var reflow = function reflow(element) {
    return element.offsetHeight;
  };

  var getjQuery = function getjQuery() {
    var _window = window,
        jQuery = _window.jQuery;

    if (jQuery && !document.body.hasAttribute('data-coreui-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  var onDOMContentLoaded = function onDOMContentLoaded(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };

  var isRTL = function isRTL() {
    return document.documentElement.dir === 'rtl';
  };

  var defineJQueryPlugin = function defineJQueryPlugin(name, plugin) {
    onDOMContentLoaded(function () {
      var $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        var JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;

        $.fn[name].noConflict = function () {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v4.0.0-alpha.2): dom/data.js
   * Licensed under MIT (https://coreui.io/license)
   *
   * This component is a modified version of the Bootstrap's dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var elementMap = new Map();
  var Data = {
    set: function set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }

      var instanceMap = elementMap.get(element); // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used

      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: " + Array.from(instanceMap.keys())[0] + ".");
        return;
      }

      instanceMap.set(key, instance);
    },
    get: function get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }

      return null;
    },
    remove: function remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }

      var instanceMap = elementMap.get(element);
      instanceMap.delete(key); // free up element references if there are no instances left for an element

      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v4.0.0-alpha.2): dom/event-handler.js
   * Licensed under MIT (https://coreui.io/license)
   *
   * This component is a modified version of the Bootstrap's  dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {}; // Events storage

  var uidEvent = 1;
  var customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * ------------------------------------------------------------------------
   * Private methods
   * ------------------------------------------------------------------------
   */

  function getUidEvent(element, uid) {
    return uid && uid + "::" + uidEvent++ || element.uidEvent || uidEvent++;
  }

  function getEvent(element) {
    var uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }

  function bootstrapHandler(element, fn) {
    return function handler(event) {
      event.delegateTarget = element;

      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }

      return fn.apply(element, [event]);
    };
  }

  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      var domElements = element.querySelectorAll(selector);

      for (var target = event.target; target && target !== this; target = target.parentNode) {
        for (var i = domElements.length; i--;) {
          if (domElements[i] === target) {
            event.delegateTarget = target;

            if (handler.oneOff) {
              // eslint-disable-next-line unicorn/consistent-destructuring
              EventHandler.off(element, event.type, fn);
            }

            return fn.apply(target, [event]);
          }
        }
      } // To please ESLint


      return null;
    };
  }

  function findHandler(events, handler, delegationSelector) {
    if (delegationSelector === void 0) {
      delegationSelector = null;
    }

    var uidEventList = Object.keys(events);

    for (var i = 0, len = uidEventList.length; i < len; i++) {
      var event = events[uidEventList[i]];

      if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
        return event;
      }
    }

    return null;
  }

  function normalizeParams(originalTypeEvent, handler, delegationFn) {
    var delegation = typeof handler === 'string';
    var originalHandler = delegation ? delegationFn : handler; // allow to get the native events from namespaced events ('click.coreui.button' --> 'click')

    var typeEvent = originalTypeEvent.replace(stripNameRegex, '');
    var custom = customEvents[typeEvent];

    if (custom) {
      typeEvent = custom;
    }

    var isNative = nativeEvents.has(typeEvent);

    if (!isNative) {
      typeEvent = originalTypeEvent;
    }

    return [delegation, originalHandler, typeEvent];
  }

  function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    if (!handler) {
      handler = delegationFn;
      delegationFn = null;
    }

    var _normalizeParams = normalizeParams(originalTypeEvent, handler, delegationFn),
        delegation = _normalizeParams[0],
        originalHandler = _normalizeParams[1],
        typeEvent = _normalizeParams[2];

    var events = getEvent(element);
    var handlers = events[typeEvent] || (events[typeEvent] = {});
    var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

    if (previousFn) {
      previousFn.oneOff = previousFn.oneOff && oneOff;
      return;
    }

    var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    var fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn.delegationSelector = delegation ? handler : null;
    fn.originalHandler = originalHandler;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, delegation);
  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    var fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {
      return;
    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    var storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(function (handlerKey) {
      if (handlerKey.includes(namespace)) {
        var event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  }

  var EventHandler = {
    on: function on(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, false);
    },
    one: function one(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, true);
    },
    off: function off(element, originalTypeEvent, handler, delegationFn) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }

      var _normalizeParams2 = normalizeParams(originalTypeEvent, handler, delegationFn),
          delegation = _normalizeParams2[0],
          originalHandler = _normalizeParams2[1],
          typeEvent = _normalizeParams2[2];

      var inNamespace = typeEvent !== originalTypeEvent;
      var events = getEvent(element);
      var isNamespace = originalTypeEvent.startsWith('.');

      if (typeof originalHandler !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!events || !events[typeEvent]) {
          return;
        }

        removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
        return;
      }

      if (isNamespace) {
        Object.keys(events).forEach(function (elementEvent) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
      }

      var storeElementEvent = events[typeEvent] || {};
      Object.keys(storeElementEvent).forEach(function (keyHandlers) {
        var handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          var event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
      });
    },
    trigger: function trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }

      var $ = getjQuery();
      var typeEvent = event.replace(stripNameRegex, '');
      var inNamespace = event !== typeEvent;
      var isNative = nativeEvents.has(typeEvent);
      var jQueryEvent;
      var bubbles = true;
      var nativeDispatch = true;
      var defaultPrevented = false;
      var evt = null;

      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }

      if (isNative) {
        evt = document.createEvent('HTMLEvents');
        evt.initEvent(typeEvent, bubbles, true);
      } else {
        evt = new CustomEvent(event, {
          bubbles: bubbles,
          cancelable: true
        });
      } // merge custom information in our event


      if (typeof args !== 'undefined') {
        Object.keys(args).forEach(function (key) {
          Object.defineProperty(evt, key, {
            get: function get() {
              return args[key];
            }
          });
        });
      }

      if (defaultPrevented) {
        evt.preventDefault();
      }

      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }

      if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
        jQueryEvent.preventDefault();
      }

      return evt;
    }
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var VERSION = '4.0.0-alpha.2';

  var BaseComponent = /*#__PURE__*/function () {
    function BaseComponent(element) {
      element = typeof element === 'string' ? document.querySelector(element) : element;

      if (!element) {
        return;
      }

      this._element = element;
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }

    var _proto = BaseComponent.prototype;

    _proto.dispose = function dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      this._element = null;
    }
    /** Static */
    ;

    BaseComponent.getInstance = function getInstance(element) {
      return Data.get(element, this.DATA_KEY);
    };

    _createClass(BaseComponent, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return BaseComponent;
  }();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$f = 'alert';
  var DATA_KEY$f = 'coreui.alert';
  var EVENT_KEY$f = "." + DATA_KEY$f;
  var DATA_API_KEY$b = '.data-api';
  var SELECTOR_DISMISS = '[data-coreui-dismiss="alert"]';
  var EVENT_CLOSE = "close" + EVENT_KEY$f;
  var EVENT_CLOSED = "closed" + EVENT_KEY$f;
  var EVENT_CLICK_DATA_API$a = "click" + EVENT_KEY$f + DATA_API_KEY$b;
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE$6 = 'fade';
  var CLASS_NAME_SHOW$b = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Alert, _BaseComponent);

    function Alert() {
      return _BaseComponent.apply(this, arguments) || this;
    }

    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = element ? this._getRootElement(element) : this._element;

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent === null || customEvent.defaultPrevented) {
        return;
      }

      this._removeElement(rootElement);
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      return getElementFromSelector(element) || element.closest("." + CLASS_NAME_ALERT);
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      return EventHandler.trigger(element, EVENT_CLOSE);
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      element.classList.remove(CLASS_NAME_SHOW$b);

      if (!element.classList.contains(CLASS_NAME_FADE$6)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = getTransitionDurationFromElement(element);
      EventHandler.one(element, 'transitionend', function () {
        return _this._destroyElement(element);
      });
      emulateTransitionEnd(element, transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }

      EventHandler.trigger(element, EVENT_CLOSED);
    } // Static
    ;

    Alert.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        var data = Data.get(this, DATA_KEY$f);

        if (!data) {
          data = new Alert(this);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert.handleDismiss = function handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "DATA_KEY",
      get: // Getters
      function get() {
        return DATA_KEY$f;
      }
    }]);

    return Alert;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$a, SELECTOR_DISMISS, Alert.handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Alert to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME$f, Alert);

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$e = 'button';
  var DATA_KEY$e = 'coreui.button';
  var EVENT_KEY$e = "." + DATA_KEY$e;
  var DATA_API_KEY$a = '.data-api';
  var CLASS_NAME_ACTIVE$4 = 'active';
  var SELECTOR_DATA_TOGGLE$6 = '[data-coreui-toggle="button"]';
  var EVENT_CLICK_DATA_API$9 = "click" + EVENT_KEY$e + DATA_API_KEY$a;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Button, _BaseComponent);

    function Button() {
      return _BaseComponent.apply(this, arguments) || this;
    }

    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$4));
    } // Static
    ;

    Button.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        var data = Data.get(this, DATA_KEY$e);

        if (!data) {
          data = new Button(this);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "DATA_KEY",
      get: // Getters
      function get() {
        return DATA_KEY$e;
      }
    }]);

    return Button;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$9, SELECTOR_DATA_TOGGLE$6, function (event) {
    event.preventDefault();
    var button = event.target.closest(SELECTOR_DATA_TOGGLE$6);
    var data = Data.get(button, DATA_KEY$e);

    if (!data) {
      data = new Button(button);
    }

    data.toggle();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Button to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME$e, Button);

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v4.0.0-alpha.2): dom/manipulator.js
   * Licensed under MIT (https://coreui.io/license)
   *
   * This component is a modified version of the Bootstrap's  dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  function normalizeData(val) {
    if (val === 'true') {
      return true;
    }

    if (val === 'false') {
      return false;
    }

    if (val === Number(val).toString()) {
      return Number(val);
    }

    if (val === '' || val === 'null') {
      return null;
    }

    return val;
  }

  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, function (chr) {
      return "-" + chr.toLowerCase();
    });
  }

  var Manipulator = {
    setDataAttribute: function setDataAttribute(element, key, value) {
      element.setAttribute("data-coreui-" + normalizeDataKey(key), value);
    },
    removeDataAttribute: function removeDataAttribute(element, key) {
      element.removeAttribute("data-coreui-" + normalizeDataKey(key));
    },
    getDataAttributes: function getDataAttributes(element) {
      if (!element) {
        return {};
      }

      var attributes = {};
      Object.keys(element.dataset).filter(function (key) {
        return key.startsWith('coreui');
      }).forEach(function (key) {
        var pureKey = key.replace(/^coreui/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      });
      return attributes;
    },
    getDataAttribute: function getDataAttribute(element, key) {
      return normalizeData(element.getAttribute("data-coreui-" + normalizeDataKey(key)));
    },
    offset: function offset(element) {
      var rect = element.getBoundingClientRect();
      return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      };
    },
    position: function position(element) {
      return {
        top: element.offsetTop,
        left: element.offsetLeft
      };
    }
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v4.0.0-alpha.2): dom/selector-engine.js
   * Licensed under MIT (https://coreui.io/license)
   *
   * This component is a modified version of the Bootstrap's  dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NODE_TEXT = 3;
  var SelectorEngine = {
    find: function find(selector, element) {
      var _ref;

      if (element === void 0) {
        element = document.documentElement;
      }

      return (_ref = []).concat.apply(_ref, Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne: function findOne(selector, element) {
      if (element === void 0) {
        element = document.documentElement;
      }

      return Element.prototype.querySelector.call(element, selector);
    },
    children: function children(element, selector) {
      var _ref2;

      return (_ref2 = []).concat.apply(_ref2, element.children).filter(function (child) {
        return child.matches(selector);
      });
    },
    parents: function parents(element, selector) {
      var parents = [];
      var ancestor = element.parentNode;

      while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (ancestor.matches(selector)) {
          parents.push(ancestor);
        }

        ancestor = ancestor.parentNode;
      }

      return parents;
    },
    prev: function prev(element, selector) {
      var previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

      return [];
    },
    next: function next(element, selector) {
      var next = element.nextElementSibling;

      while (next) {
        if (next.matches(selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    }
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$d = 'carousel';
  var DATA_KEY$d = 'coreui.carousel';
  var EVENT_KEY$d = "." + DATA_KEY$d;
  var DATA_API_KEY$9 = '.data-api';
  var ARROW_LEFT_KEY = 'ArrowLeft';
  var ARROW_RIGHT_KEY = 'ArrowRight';
  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default$b = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType$b = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$d;
  var EVENT_SLID = "slid" + EVENT_KEY$d;
  var EVENT_KEYDOWN$1 = "keydown" + EVENT_KEY$d;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$d;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$d;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$d;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$d;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$d;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$d;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$d;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$d;
  var EVENT_LOAD_DATA_API$4 = "load" + EVENT_KEY$d + DATA_API_KEY$9;
  var EVENT_CLICK_DATA_API$8 = "click" + EVENT_KEY$d + DATA_API_KEY$9;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_END = 'carousel-item-end';
  var CLASS_NAME_START = 'carousel-item-start';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_INDICATOR = '[data-coreui-target]';
  var SELECTOR_DATA_SLIDE = '[data-coreui-slide], [data-coreui-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-coreui-ride="carousel"]';
  var POINTER_TYPE_TOUCH = 'touch';
  var POINTER_TYPE_PEN = 'pen';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Carousel, _BaseComponent);

    function Carousel(element, config) {
      var _this;

      _this = _BaseComponent.call(this, element) || this;
      _this._items = null;
      _this._interval = null;
      _this._activeElement = null;
      _this._isPaused = false;
      _this._isSliding = false;
      _this.touchTimeout = null;
      _this.touchStartX = 0;
      _this.touchDeltaX = 0;
      _this._config = _this._getConfig(config);
      _this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this._element);
      _this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      _this._pointerEvent = Boolean(window.PointerEvent);

      _this._addEventListeners();

      return _this;
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
        triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config && this._config.interval && !this._isPaused) {
        this._updateInterval();

        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this2 = this;

      this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, function () {
          return _this2.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      EventHandler.off(this._element, EVENT_KEY$d);
      this._items = null;
      this._config = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;

      _BaseComponent.prototype.dispose.call(this);
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$b, config);
      typeCheckConfig(NAME$d, config, DefaultType$b);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        if (isRTL()) {
          this.next();
        } else {
          this.prev();
        }
      } // swipe right


      if (direction < 0) {
        if (isRTL()) {
          this.prev();
        } else {
          this.next();
        }
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this3 = this;

      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN$1, function (event) {
          return _this3._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        EventHandler.on(this._element, EVENT_MOUSEENTER, function (event) {
          return _this3.pause(event);
        });
        EventHandler.on(this._element, EVENT_MOUSELEAVE, function (event) {
          return _this3.cycle(event);
        });
      }

      if (this._config.touch && this._touchSupported) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this4 = this;

      var start = function start(event) {
        if (_this4._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
          _this4.touchStartX = event.clientX;
        } else if (!_this4._pointerEvent) {
          _this4.touchStartX = event.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.touches && event.touches.length > 1) {
          _this4.touchDeltaX = 0;
        } else {
          _this4.touchDeltaX = event.touches[0].clientX - _this4.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this4._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
          _this4.touchDeltaX = event.clientX - _this4.touchStartX;
        }

        _this4._handleSwipe();

        if (_this4._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this4.pause();

          if (_this4.touchTimeout) {
            clearTimeout(_this4.touchTimeout);
          }

          _this4.touchTimeout = setTimeout(function (event) {
            return _this4.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this4._config.interval);
        }
      };

      SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(function (itemImg) {
        EventHandler.on(itemImg, EVENT_DRAG_START, function (e) {
          return e.preventDefault();
        });
      });

      if (this._pointerEvent) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        EventHandler.on(this._element, EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        EventHandler.on(this._element, EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        EventHandler.on(this._element, EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      if (event.key === ARROW_LEFT_KEY) {
        event.preventDefault();

        if (isRTL()) {
          this.next();
        } else {
          this.prev();
        }
      } else if (event.key === ARROW_RIGHT_KEY) {
        event.preventDefault();

        if (isRTL()) {
          this.prev();
        } else {
          this.next();
        }
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

      return EventHandler.trigger(this._element, EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
        activeIndicator.classList.remove(CLASS_NAME_ACTIVE$3);
        activeIndicator.removeAttribute('aria-current');
        var indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);

        for (var i = 0; i < indicators.length; i++) {
          if (Number.parseInt(indicators[i].getAttribute('data-coreui-slide-to'), 10) === this._getItemIndex(element)) {
            indicators[i].classList.add(CLASS_NAME_ACTIVE$3);
            indicators[i].setAttribute('aria-current', 'true');
            break;
          }
        }
      }
    };

    _proto._updateInterval = function _updateInterval() {
      var element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      if (!element) {
        return;
      }

      var elementInterval = Number.parseInt(element.getAttribute('data-coreui-interval'), 10);

      if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this5 = this;

      var activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName = direction === DIRECTION_NEXT ? CLASS_NAME_START : CLASS_NAME_END;
      var orderClassName = direction === DIRECTION_NEXT ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      var eventDirectionName = direction === DIRECTION_NEXT ? DIRECTION_LEFT : DIRECTION_RIGHT;

      if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$3)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.defaultPrevented) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      this._activeElement = nextElement;

      if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
        nextElement.classList.add(orderClassName);
        reflow(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);
        var transitionDuration = getTransitionDurationFromElement(activeElement);
        EventHandler.one(activeElement, 'transitionend', function () {
          nextElement.classList.remove(directionalClassName, orderClassName);
          nextElement.classList.add(CLASS_NAME_ACTIVE$3);
          activeElement.classList.remove(CLASS_NAME_ACTIVE$3, orderClassName, directionalClassName);
          _this5._isSliding = false;
          setTimeout(function () {
            EventHandler.trigger(_this5._element, EVENT_SLID, {
              relatedTarget: nextElement,
              direction: eventDirectionName,
              from: activeElementIndex,
              to: nextElementIndex
            });
          }, 0);
        });
        emulateTransitionEnd(activeElement, transitionDuration);
      } else {
        activeElement.classList.remove(CLASS_NAME_ACTIVE$3);
        nextElement.classList.add(CLASS_NAME_ACTIVE$3);
        this._isSliding = false;
        EventHandler.trigger(this._element, EVENT_SLID, {
          relatedTarget: nextElement,
          direction: eventDirectionName,
          from: activeElementIndex,
          to: nextElementIndex
        });
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel.carouselInterface = function carouselInterface(element, config) {
      var data = Data.get(element, DATA_KEY$d);

      var _config = _extends({}, Default$b, Manipulator.getDataAttributes(element));

      if (typeof config === 'object') {
        _config = _extends({}, _config, config);
      }

      var action = typeof config === 'string' ? config : _config.slide;

      if (!data) {
        data = new Carousel(element, _config);
      }

      if (typeof config === 'number') {
        data.to(config);
      } else if (typeof action === 'string') {
        if (typeof data[action] === 'undefined') {
          throw new TypeError("No method named \"" + action + "\"");
        }

        data[action]();
      } else if (_config.interval && _config.ride) {
        data.pause();
        data.cycle();
      }
    };

    Carousel.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        Carousel.carouselInterface(this, config);
      });
    };

    Carousel.dataApiClickHandler = function dataApiClickHandler(event) {
      var target = getElementFromSelector(this);

      if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _extends({}, Manipulator.getDataAttributes(target), Manipulator.getDataAttributes(this));

      var slideIndex = this.getAttribute('data-coreui-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel.carouselInterface(target, config);

      if (slideIndex) {
        Data.get(target, DATA_KEY$d).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "Default",
      get: function get() {
        return Default$b;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$d;
      }
    }]);

    return Carousel;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$8, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
  EventHandler.on(window, EVENT_LOAD_DATA_API$4, function () {
    var carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

    for (var i = 0, len = carousels.length; i < len; i++) {
      Carousel.carouselInterface(carousels[i], Data.get(carousels[i], DATA_KEY$d));
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Carousel to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME$d, Carousel);

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$c = 'collapse';
  var DATA_KEY$c = 'coreui.collapse';
  var EVENT_KEY$c = "." + DATA_KEY$c;
  var DATA_API_KEY$8 = '.data-api';
  var Default$a = {
    toggle: true,
    parent: ''
  };
  var DefaultType$a = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var EVENT_SHOW$7 = "show" + EVENT_KEY$c;
  var EVENT_SHOWN$7 = "shown" + EVENT_KEY$c;
  var EVENT_HIDE$7 = "hide" + EVENT_KEY$c;
  var EVENT_HIDDEN$7 = "hidden" + EVENT_KEY$c;
  var EVENT_CLICK_DATA_API$7 = "click" + EVENT_KEY$c + DATA_API_KEY$8;
  var CLASS_NAME_SHOW$a = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var WIDTH = 'width';
  var HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$5 = '[data-coreui-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Collapse, _BaseComponent);

    function Collapse(element, config) {
      var _this;

      _this = _BaseComponent.call(this, element) || this;
      _this._isTransitioning = false;
      _this._config = _this._getConfig(config);
      _this._triggerArray = SelectorEngine.find(SELECTOR_DATA_TOGGLE$5 + "[href=\"#" + _this._element.id + "\"]," + (SELECTOR_DATA_TOGGLE$5 + "[data-coreui-target=\"#" + _this._element.id + "\"]"));
      var toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$5);

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = getSelectorFromElement(elem);
        var filterElement = SelectorEngine.find(selector).filter(function (foundElem) {
          return foundElem === _this._element;
        });

        if (selector !== null && filterElement.length) {
          _this._selector = selector;

          _this._triggerArray.push(elem);
        }
      }

      _this._parent = _this._config.parent ? _this._getParent() : null;

      if (!_this._config.parent) {
        _this._addAriaAndCollapsedClass(_this._element, _this._triggerArray);
      }

      if (_this._config.toggle) {
        _this.toggle();
      }

      return _this;
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.classList.contains(CLASS_NAME_SHOW$a)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this2 = this;

      if (this._isTransitioning || this._element.classList.contains(CLASS_NAME_SHOW$a)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = SelectorEngine.find(SELECTOR_ACTIVES, this._parent).filter(function (elem) {
          if (typeof _this2._config.parent === 'string') {
            return elem.getAttribute('data-coreui-parent') === _this2._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      var container = SelectorEngine.findOne(this._selector);

      if (actives) {
        var tempActiveData = actives.find(function (elem) {
          return container !== elem;
        });
        activesData = tempActiveData ? Data.get(tempActiveData, DATA_KEY$c) : null;

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = EventHandler.trigger(this._element, EVENT_SHOW$7);

      if (startEvent.defaultPrevented) {
        return;
      }

      if (actives) {
        actives.forEach(function (elemActive) {
          if (container !== elemActive) {
            Collapse.collapseInterface(elemActive, 'hide');
          }

          if (!activesData) {
            Data.set(elemActive, DATA_KEY$c, null);
          }
        });
      }

      var dimension = this._getDimension();

      this._element.classList.remove(CLASS_NAME_COLLAPSE);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        this._triggerArray.forEach(function (element) {
          element.classList.remove(CLASS_NAME_COLLAPSED);
          element.setAttribute('aria-expanded', true);
        });
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2._element.classList.remove(CLASS_NAME_COLLAPSING);

        _this2._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$a);

        _this2._element.style[dimension] = '';

        _this2.setTransitioning(false);

        EventHandler.trigger(_this2._element, EVENT_SHOWN$7);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, 'transitionend', complete);
      emulateTransitionEnd(this._element, transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this3 = this;

      if (this._isTransitioning || !this._element.classList.contains(CLASS_NAME_SHOW$a)) {
        return;
      }

      var startEvent = EventHandler.trigger(this._element, EVENT_HIDE$7);

      if (startEvent.defaultPrevented) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      reflow(this._element);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$a);

      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var elem = getElementFromSelector(trigger);

          if (elem && !elem.classList.contains(CLASS_NAME_SHOW$a)) {
            trigger.classList.add(CLASS_NAME_COLLAPSED);
            trigger.setAttribute('aria-expanded', false);
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this3.setTransitioning(false);

        _this3._element.classList.remove(CLASS_NAME_COLLAPSING);

        _this3._element.classList.add(CLASS_NAME_COLLAPSE);

        EventHandler.trigger(_this3._element, EVENT_HIDDEN$7);
      };

      this._element.style[dimension] = '';
      var transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, 'transitionend', complete);
      emulateTransitionEnd(this._element, transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      _BaseComponent.prototype.dispose.call(this);

      this._config = null;
      this._parent = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$a, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      typeCheckConfig(NAME$c, config, DefaultType$a);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      return this._element.classList.contains(WIDTH) ? WIDTH : HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this4 = this;

      var parent = this._config.parent;

      if (isElement(parent)) {
        // it's a jQuery object
        if (typeof parent.jquery !== 'undefined' || typeof parent[0] !== 'undefined') {
          parent = parent[0];
        }
      } else {
        parent = SelectorEngine.findOne(parent);
      }

      var selector = SELECTOR_DATA_TOGGLE$5 + "[data-coreui-parent=\"" + parent + "\"]";
      SelectorEngine.find(selector, parent).forEach(function (element) {
        var selected = getElementFromSelector(element);

        _this4._addAriaAndCollapsedClass(selected, [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      if (!element || !triggerArray.length) {
        return;
      }

      var isOpen = element.classList.contains(CLASS_NAME_SHOW$a);
      triggerArray.forEach(function (elem) {
        if (isOpen) {
          elem.classList.remove(CLASS_NAME_COLLAPSED);
        } else {
          elem.classList.add(CLASS_NAME_COLLAPSED);
        }

        elem.setAttribute('aria-expanded', isOpen);
      });
    } // Static
    ;

    Collapse.collapseInterface = function collapseInterface(element, config) {
      var data = Data.get(element, DATA_KEY$c);

      var _config = _extends({}, Default$a, Manipulator.getDataAttributes(element), typeof config === 'object' && config ? config : {});

      if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }

      if (!data) {
        data = new Collapse(element, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    };

    Collapse.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        Collapse.collapseInterface(this, config);
      });
    };

    _createClass(Collapse, null, [{
      key: "Default",
      get: function get() {
        return Default$a;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$c;
      }
    }]);

    return Collapse;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$7, SELECTOR_DATA_TOGGLE$5, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
      event.preventDefault();
    }

    var triggerData = Manipulator.getDataAttributes(this);
    var selector = getSelectorFromElement(this);
    var selectorElements = SelectorEngine.find(selector);
    selectorElements.forEach(function (element) {
      var data = Data.get(element, DATA_KEY$c);
      var config;

      if (data) {
        // update parent attribute
        if (data._parent === null && typeof triggerData.parent === 'string') {
          data._config.parent = triggerData.parent;
          data._parent = data._getParent();
        }

        config = 'toggle';
      } else {
        config = triggerData;
      }

      Collapse.collapseInterface(element, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Collapse to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME$c, Collapse);

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$b = 'dropdown';
  var DATA_KEY$b = 'coreui.dropdown';
  var EVENT_KEY$b = "." + DATA_KEY$b;
  var DATA_API_KEY$7 = '.data-api';
  var ESCAPE_KEY$2 = 'Escape';
  var SPACE_KEY = 'Space';
  var TAB_KEY$1 = 'Tab';
  var ARROW_UP_KEY = 'ArrowUp';
  var ARROW_DOWN_KEY = 'ArrowDown';
  var RIGHT_MOUSE_BUTTON$1 = 2; // MouseEvent.button value for the secondary button, usually the right button

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEY + "|" + ARROW_DOWN_KEY + "|" + ESCAPE_KEY$2);
  var EVENT_HIDE$6 = "hide" + EVENT_KEY$b;
  var EVENT_HIDDEN$6 = "hidden" + EVENT_KEY$b;
  var EVENT_SHOW$6 = "show" + EVENT_KEY$b;
  var EVENT_SHOWN$6 = "shown" + EVENT_KEY$b;
  var EVENT_CLICK$1 = "click" + EVENT_KEY$b;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$b + DATA_API_KEY$7;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$b + DATA_API_KEY$7;
  var EVENT_KEYUP_DATA_API$1 = "keyup" + EVENT_KEY$b + DATA_API_KEY$7;
  var CLASS_NAME_DISABLED$2 = 'disabled';
  var CLASS_NAME_SHOW$9 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPEND = 'dropend';
  var CLASS_NAME_DROPSTART = 'dropstart';
  var CLASS_NAME_NAVBAR = 'navbar';
  var SELECTOR_DATA_TOGGLE$4 = '[data-coreui-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
  var PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
  var PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
  var PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
  var PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
  var PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
  var Default$9 = {
    offset: [0, 2],
    boundary: 'clippingParents',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$9 = {
    offset: '(array|string|function)',
    boundary: '(string|element)',
    reference: '(string|element|object)',
    display: 'string',
    popperConfig: '(null|object|function)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Dropdown, _BaseComponent);

    function Dropdown(element, config) {
      var _this;

      _this = _BaseComponent.call(this, element) || this;
      _this._popper = null;
      _this._config = _this._getConfig(config);
      _this._menu = _this._getMenuElement();
      _this._inNavbar = _this._detectNavbar();

      _this._addEventListeners();

      return _this;
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED$2)) {
        return;
      }

      var isActive = this._element.classList.contains(CLASS_NAME_SHOW$9);

      Dropdown.clearMenus();

      if (isActive) {
        return;
      }

      this.show();
    };

    _proto.show = function show() {
      if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED$2) || this._menu.classList.contains(CLASS_NAME_SHOW$9)) {
        return;
      }

      var parent = Dropdown.getParentFromElement(this._element);
      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$6, relatedTarget);

      if (showEvent.defaultPrevented) {
        return;
      } // Totally disable Popper for Dropdowns in Navbar


      if (this._inNavbar) {
        Manipulator.setDataAttribute(this._menu, 'popper', 'none');
      } else {
        if (typeof Popper__namespace === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } else if (typeof this._config.reference === 'object') {
          referenceElement = this._config.reference;
        }

        var popperConfig = this._getPopperConfig();

        var isDisplayStatic = popperConfig.modifiers.find(function (modifier) {
          return modifier.name === 'applyStyles' && modifier.enabled === false;
        });
        this._popper = Popper.createPopper(referenceElement, this._menu, popperConfig);

        if (isDisplayStatic) {
          Manipulator.setDataAttribute(this._menu, 'popper', 'static');
        }
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
        var _ref;

        (_ref = []).concat.apply(_ref, document.body.children).forEach(function (elem) {
          return EventHandler.on(elem, 'mouseover', null, noop());
        });
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      this._menu.classList.toggle(CLASS_NAME_SHOW$9);

      this._element.classList.toggle(CLASS_NAME_SHOW$9);

      EventHandler.trigger(this._element, EVENT_SHOWN$6, relatedTarget);
    };

    _proto.hide = function hide() {
      if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED$2) || !this._menu.classList.contains(CLASS_NAME_SHOW$9)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$6, relatedTarget);

      if (hideEvent.defaultPrevented) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      this._menu.classList.toggle(CLASS_NAME_SHOW$9);

      this._element.classList.toggle(CLASS_NAME_SHOW$9);

      Manipulator.removeDataAttribute(this._menu, 'popper');
      EventHandler.trigger(this._element, EVENT_HIDDEN$6, relatedTarget);
    };

    _proto.dispose = function dispose() {
      EventHandler.off(this._element, EVENT_KEY$b);
      this._menu = null;

      if (this._popper) {
        this._popper.destroy();

        this._popper = null;
      }

      _BaseComponent.prototype.dispose.call(this);
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper) {
        this._popper.update();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      EventHandler.on(this._element, EVENT_CLICK$1, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this2.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, Manipulator.getDataAttributes(this._element), config);
      typeCheckConfig(NAME$b, config, this.constructor.DefaultType);

      if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(NAME$b.toUpperCase() + ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method.");
      }

      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
    };

    _proto._getPlacement = function _getPlacement() {
      var parentDropdown = this._element.parentNode;

      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      } // We need to trim the value because custom properties can also include spaces


      var isEnd = getComputedStyle(this._menu).getPropertyValue('--coreui-position').trim() === 'end';

      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }

      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return this._element.closest("." + CLASS_NAME_NAVBAR) !== null;
    };

    _proto._getOffset = function _getOffset() {
      var _this3 = this;

      var offset = this._config.offset;

      if (typeof offset === 'string') {
        return offset.split(',').map(function (val) {
          return Number.parseInt(val, 10);
        });
      }

      if (typeof offset === 'function') {
        return function (popperData) {
          return offset(popperData, _this3._element);
        };
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }]
      }; // Disable Popper if we have a static display

      if (this._config.display === 'static') {
        defaultBsPopperConfig.modifiers = [{
          name: 'applyStyles',
          enabled: false
        }];
      }

      return _extends({}, defaultBsPopperConfig, typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
    } // Static
    ;

    Dropdown.dropdownInterface = function dropdownInterface(element, config) {
      var data = Data.get(element, DATA_KEY$b);

      var _config = typeof config === 'object' ? config : null;

      if (!data) {
        data = new Dropdown(element, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    };

    Dropdown.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        Dropdown.dropdownInterface(this, config);
      });
    };

    Dropdown.clearMenus = function clearMenus(event) {
      if (event && (event.button === RIGHT_MOUSE_BUTTON$1 || event.type === 'keyup' && event.key !== TAB_KEY$1)) {
        return;
      }

      var toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

      for (var i = 0, len = toggles.length; i < len; i++) {
        var context = Data.get(toggles[i], DATA_KEY$b);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!toggles[i].classList.contains(CLASS_NAME_SHOW$9)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.key === TAB_KEY$1) && dropdownMenu.contains(event.target)) {
          continue;
        }

        var hideEvent = EventHandler.trigger(toggles[i], EVENT_HIDE$6, relatedTarget);

        if (hideEvent.defaultPrevented) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          var _ref2;

          (_ref2 = []).concat.apply(_ref2, document.body.children).forEach(function (elem) {
            return EventHandler.off(elem, 'mouseover', null, noop());
          });
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        dropdownMenu.classList.remove(CLASS_NAME_SHOW$9);
        toggles[i].classList.remove(CLASS_NAME_SHOW$9);
        Manipulator.removeDataAttribute(dropdownMenu, 'popper');
        EventHandler.trigger(toggles[i], EVENT_HIDDEN$6, relatedTarget);
      }
    };

    Dropdown.getParentFromElement = function getParentFromElement(element) {
      return getElementFromSelector(element) || element.parentNode;
    };

    Dropdown.dataApiKeydownHandler = function dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || this.classList.contains(CLASS_NAME_DISABLED$2)) {
        return;
      }

      var parent = Dropdown.getParentFromElement(this);
      var isActive = this.classList.contains(CLASS_NAME_SHOW$9);

      if (event.key === ESCAPE_KEY$2) {
        var button = this.matches(SELECTOR_DATA_TOGGLE$4) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$4)[0];
        button.focus();
        Dropdown.clearMenus();
        return;
      }

      if (!isActive && (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY)) {
        var _button = this.matches(SELECTOR_DATA_TOGGLE$4) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$4)[0];

        _button.click();

        return;
      }

      if (!isActive || event.key === SPACE_KEY) {
        Dropdown.clearMenus();
        return;
      }

      var items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, parent).filter(isVisible);

      if (!items.length) {
        return;
      }

      var index = items.indexOf(event.target); // Up

      if (event.key === ARROW_UP_KEY && index > 0) {
        index--;
      } // Down


      if (event.key === ARROW_DOWN_KEY && index < items.length - 1) {
        index++;
      } // index is -1 if the first keydown is an ArrowUp


      index = index === -1 ? 0 : index;
      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "Default",
      get: function get() {
        return Default$9;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$9;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$b;
      }
    }]);

    return Dropdown;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$4, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$6, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API$1, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
    event.preventDefault();
    event.stopPropagation();
    Dropdown.dropdownInterface(this, 'toggle');
  });
  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_FORM_CHILD, function (e) {
    return e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Dropdown to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME$b, Dropdown);

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'loading-button';
  var DATA_KEY$a = 'coreui.loading-button';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var MAX_PERCENT = 100;
  var MILLISECONDS = 10;
  var PROGRESS_BAR_BG_COLOR_LIGHT = 'rgba(255, 255, 255, .2)';
  var PROGRESS_BAR_BG_COLOR_DARK = 'rgba(0, 0, 0, .2)';
  var EVENT_START = "start" + EVENT_KEY$a;
  var EVENT_STOP = "stop" + EVENT_KEY$a;
  var EVENT_COMPLETE = "complete" + EVENT_KEY$a;
  var CLASS_NAME_IS_LOADING = 'is-loading';
  var CLASS_NAME_LOADING_BUTTON_PROGRESS = 'btn-loading-progress';
  var CLASS_NAME_LOADING_BUTTON_SPINNER = 'btn-loading-spinner';
  var Default$8 = {
    percent: 0,
    progress: false,
    spinner: true,
    spinnerType: 'border',
    timeout: 1000
  };
  var DefaultType$8 = {
    percent: 'number',
    progress: 'boolean',
    spinner: 'boolean',
    spinnerType: 'string',
    timeout: 'number'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var LoadingButton = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(LoadingButton, _BaseComponent);

    function LoadingButton(element, config) {
      var _this;

      _this = _BaseComponent.call(this, element) || this;
      _this._config = _this._getConfig(config);
      _this._pause = false;
      _this._percent = _this._config.percent;
      _this._timeout = _this._config.timeout;
      _this._progressBar = null;
      _this._spinner = null;
      _this._state = 'idle';

      if (_this._element) {
        Data.set(element, DATA_KEY$a, _assertThisInitialized(_this));
      }

      return _this;
    } // Getters


    var _proto = LoadingButton.prototype;

    // Public
    _proto.start = function start() {
      var _this2 = this;

      if (this._state !== 'loading') {
        this._createSpinner();

        this._createProgressBar();

        setTimeout(function () {
          _this2._element.classList.add(CLASS_NAME_IS_LOADING);

          _this2._loading();

          EventHandler.trigger(_this2._element, EVENT_START);
        }, 1);
      }
    };

    _proto.stop = function stop() {
      var _this3 = this;

      this._element.classList.remove(CLASS_NAME_IS_LOADING);

      var stoped = function stoped() {
        _this3._removeSpinner();

        _this3._removeProgressBar();

        _this3._state = 'idle';
        EventHandler.trigger(_this3._element, EVENT_STOP);

        if (_this3._percent >= 100) {
          EventHandler.trigger(_this3._element, EVENT_COMPLETE);
        }

        _this3._percent = _this3._config.percent;
        _this3._timeout = _this3._config.timeout;
      };

      if (this._spinner) {
        var transitionDuration = getTransitionDurationFromElement(this._spinner);
        EventHandler.one(this._spinner, 'transitionend', stoped);
        emulateTransitionEnd(this._spinner, transitionDuration);
        return;
      }

      stoped();
    };

    _proto.pause = function pause() {
      this._pause = true;
      this._state = 'pause';
    };

    _proto.resume = function resume() {
      this._pause = false;

      this._loading();
    };

    _proto.complete = function complete() {
      this._timeout = 1000;
    };

    _proto.updatePercent = function updatePercent(percent) {
      var diff = (this._percent - percent) / 100;
      this._timeout *= 1 + diff;
      this._percent = percent;
    };

    _proto.dispose = function dispose() {
      Data.removeData(this._element, DATA_KEY$a);
      this._element = null;
    };

    _proto.update = function update(config) {
      this._config = this._getConfig(config);
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$8, Manipulator.getDataAttributes(this._element), config);
      typeCheckConfig(NAME$a, config, DefaultType$8);
      return config;
    };

    _proto._loading = function _loading() {
      var _this4 = this;

      var progress = setInterval(function () {
        _this4._state = 'loading';

        if (_this4._percent >= MAX_PERCENT) {
          _this4.stop();

          clearInterval(progress);
          return;
        }

        if (_this4._pause) {
          clearInterval(progress);
          return;
        }

        var frames = _this4._timeout / (MAX_PERCENT - _this4._percent) / MILLISECONDS;
        _this4._percent = Math.round((_this4._percent + 1 / frames) * 100) / 100;
        _this4._timeout -= MILLISECONDS;

        _this4._animateProgressBar();
      }, MILLISECONDS);
    };

    _proto._createProgressBar = function _createProgressBar() {
      if (this._config.progress) {
        var progress = document.createElement('div');
        progress.classList.add(CLASS_NAME_LOADING_BUTTON_PROGRESS);
        progress.setAttribute('role', 'progressbar');
        progress.setAttribute('aria-hidden', 'true');
        progress.style.backgroundColor = this._progressBarBg();

        this._element.insertBefore(progress, this._element.firstChild);

        this._progressBar = progress;
      }
    };

    _proto._createSpinner = function _createSpinner() {
      if (this._config.spinner) {
        var spinner = document.createElement('span');
        var type = this._config.spinnerType;
        spinner.classList.add(CLASS_NAME_LOADING_BUTTON_SPINNER, "spinner-" + type, "spinner-" + type + "-sm");
        spinner.setAttribute('role', 'status');
        spinner.setAttribute('aria-hidden', 'true');

        this._element.insertBefore(spinner, this._element.firstChild);

        this._spinner = spinner;
      }
    };

    _proto._removeProgressBar = function _removeProgressBar() {
      if (this._config.progress) {
        this._progressBar.remove();

        this._progressBar = null;
      }
    };

    _proto._removeSpinner = function _removeSpinner() {
      if (this._config.spinner) {
        this._spinner.remove();

        this._spinner = null;
      }
    };

    _proto._progressBarBg = function _progressBarBg() {
      // The yiq lightness value that determines when the lightness of color changes from "dark" to "light". Acceptable values are between 0 and 255.
      var yiqContrastedThreshold = 150;
      var color = window.getComputedStyle(this._element).getPropertyValue('background-color') === 'rgba(0, 0, 0, 0)' ? 'rgb(255, 255, 255)' : window.getComputedStyle(this._element).getPropertyValue('background-color');
      var rgb = color.match(/^rgb?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
      var r = Number.parseInt(rgb[1], 10);
      var g = Number.parseInt(rgb[2], 10);
      var b = Number.parseInt(rgb[3], 10);
      var yiq = (r * 299 + g * 587 + b * 114) / 1000;

      if (yiq > yiqContrastedThreshold) {
        return PROGRESS_BAR_BG_COLOR_DARK;
      }

      return PROGRESS_BAR_BG_COLOR_LIGHT;
    };

    _proto._animateProgressBar = function _animateProgressBar() {
      if (this._config.progress) {
        this._progressBar.style.width = this._percent + "%";
      }
    } // Static
    ;

    LoadingButton.loadingButtonInterface = function loadingButtonInterface(element, config) {
      var data = Data.get(element, DATA_KEY$a);

      var _config = _extends({}, Default$8, Manipulator.getDataAttributes(element));

      if (typeof config === 'object') {
        _config = _extends({}, _config, config);
      }

      if (!data) {
        data = new LoadingButton(element, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    };

    LoadingButton.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        LoadingButton.loadingButtonInterface(this, config);
      });
    };

    _createClass(LoadingButton, null, [{
      key: "Default",
      get: function get() {
        return Default$8;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$8;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$a;
      }
    }]);

    return LoadingButton;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .LoadingButton to jQuery only if jQuery is present
   */


  defineJQueryPlugin(NAME$a, LoadingButton);

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'modal';
  var DATA_KEY$9 = 'coreui.modal';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$6 = '.data-api';
  var ESCAPE_KEY$1 = 'Escape';
  var Default$7 = {
    backdrop: true,
    keyboard: true,
    focus: true
  };
  var DefaultType$7 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean'
  };
  var EVENT_HIDE$5 = "hide" + EVENT_KEY$9;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$9;
  var EVENT_HIDDEN$5 = "hidden" + EVENT_KEY$9;
  var EVENT_SHOW$5 = "show" + EVENT_KEY$9;
  var EVENT_SHOWN$5 = "shown" + EVENT_KEY$9;
  var EVENT_FOCUSIN$1 = "focusin" + EVENT_KEY$9;
  var EVENT_RESIZE = "resize" + EVENT_KEY$9;
  var EVENT_CLICK_DISMISS$2 = "click.dismiss" + EVENT_KEY$9;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$9;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$9;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$9;
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$9 + DATA_API_KEY$6;
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP$1 = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_SHOW$8 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$3 = '[data-coreui-toggle="modal"]';
  var SELECTOR_DATA_DISMISS$2 = '[data-coreui-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT$1 = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT$1 = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Modal, _BaseComponent);

    function Modal(element, config) {
      var _this;

      _this = _BaseComponent.call(this, element) || this;
      _this._config = _this._getConfig(config);
      _this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, _this._element);
      _this._backdrop = null;
      _this._isShown = false;
      _this._isBodyOverflowing = false;
      _this._ignoreBackdropClick = false;
      _this._isTransitioning = false;
      _this._scrollbarWidth = 0;
      return _this;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this2 = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if (this._element.classList.contains(CLASS_NAME_FADE$5)) {
        this._isTransitioning = true;
      }

      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, {
        relatedTarget: relatedTarget
      });

      if (this._isShown || showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, SELECTOR_DATA_DISMISS$2, function (event) {
        return _this2.hide(event);
      });
      EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, function () {
        EventHandler.one(_this2._element, EVENT_MOUSEUP_DISMISS, function (event) {
          if (event.target === _this2._element) {
            _this2._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this2._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this3 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._isShown = false;

      var transition = this._element.classList.contains(CLASS_NAME_FADE$5);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      EventHandler.off(document, EVENT_FOCUSIN$1);

      this._element.classList.remove(CLASS_NAME_SHOW$8);

      EventHandler.off(this._element, EVENT_CLICK_DISMISS$2);
      EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = getTransitionDurationFromElement(this._element);
        EventHandler.one(this._element, 'transitionend', function (event) {
          return _this3._hideModal(event);
        });
        emulateTransitionEnd(this._element, transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return EventHandler.off(htmlElement, EVENT_KEY$9);
      });

      _BaseComponent.prototype.dispose.call(this);
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */


      EventHandler.off(document, EVENT_FOCUSIN$1);
      this._config = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$7, config);
      typeCheckConfig(NAME$9, config, DefaultType$7);
      return config;
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = this._element.classList.contains(CLASS_NAME_FADE$5);

      var modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.scrollTop = 0;

      if (modalBody) {
        modalBody.scrollTop = 0;
      }

      if (transition) {
        reflow(this._element);
      }

      this._element.classList.add(CLASS_NAME_SHOW$8);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        EventHandler.trigger(_this4._element, EVENT_SHOWN$5, {
          relatedTarget: relatedTarget
        });
      };

      if (transition) {
        var transitionDuration = getTransitionDurationFromElement(this._dialog);
        EventHandler.one(this._dialog, 'transitionend', transitionComplete);
        emulateTransitionEnd(this._dialog, transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      EventHandler.off(document, EVENT_FOCUSIN$1); // guard against infinite focus loop

      EventHandler.on(document, EVENT_FOCUSIN$1, function (event) {
        if (document !== event.target && _this5._element !== event.target && !_this5._element.contains(event.target)) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.key === ESCAPE_KEY$1) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.key === ESCAPE_KEY$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else {
        EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        EventHandler.on(window, EVENT_RESIZE, function () {
          return _this7._adjustDialog();
        });
      } else {
        EventHandler.off(window, EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        document.body.classList.remove(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        EventHandler.trigger(_this8._element, EVENT_HIDDEN$5);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      this._backdrop.parentNode.removeChild(this._backdrop);

      this._backdrop = null;
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = this._element.classList.contains(CLASS_NAME_FADE$5) ? CLASS_NAME_FADE$5 : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP$1;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        document.body.appendChild(this._backdrop);
        EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this9._config.backdrop === 'static') {
            _this9._triggerBackdropTransition();
          } else {
            _this9.hide();
          }
        });

        if (animate) {
          reflow(this._backdrop);
        }

        this._backdrop.classList.add(CLASS_NAME_SHOW$8);

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = getTransitionDurationFromElement(this._backdrop);
        EventHandler.one(this._backdrop, 'transitionend', callback);
        emulateTransitionEnd(this._backdrop, backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        this._backdrop.classList.remove(CLASS_NAME_SHOW$8);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          callback();
        };

        if (this._element.classList.contains(CLASS_NAME_FADE$5)) {
          var _backdropTransitionDuration = getTransitionDurationFromElement(this._backdrop);

          EventHandler.one(this._backdrop, 'transitionend', callbackRemove);
          emulateTransitionEnd(this._backdrop, _backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else {
        callback();
      }
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this10 = this;

      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

      if (hideEvent.defaultPrevented) {
        return;
      }

      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }

      this._element.classList.add(CLASS_NAME_STATIC);

      var modalTransitionDuration = getTransitionDurationFromElement(this._dialog);
      EventHandler.off(this._element, 'transitionend');
      EventHandler.one(this._element, 'transitionend', function () {
        _this10._element.classList.remove(CLASS_NAME_STATIC);

        if (!isModalOverflowing) {
          EventHandler.one(_this10._element, 'transitionend', function () {
            _this10._element.style.overflowY = '';
          });
          emulateTransitionEnd(_this10._element, modalTransitionDuration);
        }
      });
      emulateTransitionEnd(this._element, modalTransitionDuration);

      this._element.focus();
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing && !isRTL() || this._isBodyOverflowing && !isModalOverflowing && isRTL()) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing && !isRTL() || !this._isBodyOverflowing && isModalOverflowing && isRTL()) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this11 = this;

      if (this._isBodyOverflowing) {
        this._setElementAttributes(SELECTOR_FIXED_CONTENT$1, 'paddingRight', function (calculatedValue) {
          return calculatedValue + _this11._scrollbarWidth;
        });

        this._setElementAttributes(SELECTOR_STICKY_CONTENT$1, 'marginRight', function (calculatedValue) {
          return calculatedValue - _this11._scrollbarWidth;
        });

        this._setElementAttributes('body', 'paddingRight', function (calculatedValue) {
          return calculatedValue + _this11._scrollbarWidth;
        });
      }

      document.body.classList.add(CLASS_NAME_OPEN);
    };

    _proto._setElementAttributes = function _setElementAttributes(selector, styleProp, callback) {
      var _this12 = this;

      SelectorEngine.find(selector).forEach(function (element) {
        if (element !== document.body && window.innerWidth > element.clientWidth + _this12._scrollbarWidth) {
          return;
        }

        var actualValue = element.style[styleProp];
        var calculatedValue = window.getComputedStyle(element)[styleProp];
        Manipulator.setDataAttribute(element, styleProp, actualValue);
        element.style[styleProp] = callback(Number.parseFloat(calculatedValue)) + 'px';
      });
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT$1, 'paddingRight');

      this._resetElementAttributes(SELECTOR_STICKY_CONTENT$1, 'marginRight');

      this._resetElementAttributes('body', 'paddingRight');
    };

    _proto._resetElementAttributes = function _resetElementAttributes(selector, styleProp) {
      SelectorEngine.find(selector).forEach(function (element) {
        var value = Manipulator.getDataAttribute(element, styleProp);

        if (typeof value === 'undefined' && element === document.body) {
          element.style[styleProp] = '';
        } else {
          Manipulator.removeDataAttribute(element, styleProp);
          element.style[styleProp] = value;
        }
      });
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal.jQueryInterface = function jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = Data.get(this, DATA_KEY$9);

        var _config = _extends({}, Default$7, Manipulator.getDataAttributes(this), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$9;
      }
    }]);

    return Modal;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
    var _this13 = this;

    var target = getElementFromSelector(this);

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    EventHandler.one(target, EVENT_SHOW$5, function (showEvent) {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      EventHandler.one(target, EVENT_HIDDEN$5, function () {
        if (isVisible(_this13)) {
          _this13.focus();
        }
      });
    });
    var data = Data.get(target, DATA_KEY$9);

    if (!data) {
      var config = _extends({}, Manipulator.getDataAttributes(target), Manipulator.getDataAttributes(this));

      data = new Modal(target, config);
    }

    data.toggle(this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Modal to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME$9, Modal);

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'mutli-select';
  var DATA_KEY$8 = 'coreui.mutli-select';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$5 = '.data-api';
  var TAB_KEY = 'Tab';
  var RIGHT_MOUSE_BUTTON = 2;
  var SELECTOR_INPUT = '.form-multi-select-search';
  var SELECTOR_OPTGROUP = '.form-multi-select-optgroup';
  var SELECTOR_OPTION = '.form-multi-select-option';
  var SELECTOR_OPTIONS = '.form-multi-select-options';
  var SELECTOR_OPTIONS_EMPTY = '.form-multi-select-options-empty';
  var SELECTOR_SELECT = '.form-multi-select';
  var SELECTOR_SELECTED = '.form-multi-selected';
  var SELECTOR_SELECTION = '.form-multi-select-selection';
  var SELECTOR_SELECTION_CLEANER = '.form-multi-select-selection-cleaner';
  var EVENT_CHANGED = "changed" + EVENT_KEY$8;
  var EVENT_CLICK = "click" + EVENT_KEY$8;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$8;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$8;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$8;
  var EVENT_KEYUP = "keyup" + EVENT_KEY$8;
  var EVENT_SEARCH = "search" + EVENT_KEY$8;
  var EVENT_SHOW$4 = "show" + EVENT_KEY$8;
  var EVENT_SHOWN$4 = "showN" + EVENT_KEY$8;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$8 + DATA_API_KEY$5;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$8 + DATA_API_KEY$5;
  var EVENT_LOAD_DATA_API$3 = "load" + EVENT_KEY$8 + DATA_API_KEY$5;
  var CLASS_NAME_SELECT = 'form-multi-select';
  var CLASS_NAME_SELECT_INLINE = 'form-multi-select-inline';
  var CLASS_NAME_SELECT_MULTIPLE = 'form-multi-select-multiple';
  var CLASS_NAME_OPTGROUP = 'form-multi-select-optgroup';
  var CLASS_NAME_OPTGROUP_LABEL = 'form-multi-select-optgroup-label';
  var CLASS_NAME_OPTION = 'form-multi-select-option';
  var CLASS_NAME_OPTIONS = 'form-multi-select-options';
  var CLASS_NAME_OPTIONS_EMPTY = 'form-multi-select-options-empty';
  var CLASS_NAME_SEARCH = 'form-multi-select-search';
  var CLASS_NAME_SELECTED = 'form-multi-selected';
  var CLASS_NAME_SELECTION = 'form-multi-select-selection';
  var CLASS_NAME_SELECTION_CLEANER = 'form-multi-select-selection-cleaner';
  var CLASS_NAME_SELECTION_TAGS = 'form-multi-select-selection-tags';
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_TAG = 'form-multi-select-tag';
  var CLASS_NAME_TAG_DELETE = 'form-multi-select-tag-delete';
  var CLASS_NAME_LABEL = 'label';
  var Default$6 = {
    inline: false,
    multiple: true,
    options: false,
    optionsEmptyPlaceholder: 'no items',
    search: false,
    searchPlaceholder: 'Select...',
    selection: true,
    selectionType: 'counter',
    selectionTypeCounterText: 'item(s) selected'
  };
  var DefaultType$6 = {
    inline: 'boolean',
    multiple: 'boolean',
    options: '(boolean|array)',
    optionsEmptyPlaceholder: 'string',
    search: 'boolean',
    searchPlaceholder: 'string',
    selection: 'boolean',
    selectionType: 'string',
    selectionTypeCounterText: 'string'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var MultiSelect = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(MultiSelect, _BaseComponent);

    function MultiSelect(element, config) {
      var _this;

      _this = _BaseComponent.call(this, element) || this;
      _this._selectionElement = null;
      _this._selectionCleanerElement = null;
      _this._searchElement = null;
      _this._optionsElement = null;
      _this._config = _this._getConfig(config);
      _this._clone = null;
      _this._options = _this._getOptions();
      _this._search = '';
      _this._selection = _this._getSelectedOptions(_this._options);

      if (_this._config.options.length > 0) {
        _this._createNativeSelect(_this._config.options);
      }

      _this._createSelect();

      _this._addEventListeners();

      Data.set(_this._element, DATA_KEY$8, _assertThisInitialized(_this));
      return _this;
    } // Getters


    var _proto = MultiSelect.prototype;

    // Public
    _proto.show = function show() {
      EventHandler.trigger(this._element, EVENT_SHOW$4);

      this._clone.classList.add(CLASS_NAME_SHOW$7);

      if (this._config.search) {
        SelectorEngine.findOne(SELECTOR_INPUT, this._clone).focus();
      }

      EventHandler.trigger(this._element, EVENT_SHOWN$4);
    };

    _proto.hide = function hide() {
      EventHandler.trigger(this._element, EVENT_HIDE$4);

      this._clone.classList.remove(CLASS_NAME_SHOW$7);

      EventHandler.trigger(this._element, EVENT_HIDDEN$4);
    };

    _proto.search = function search(text) {
      this._search = text.length > 0 ? text.toLowerCase() : text;

      this._filterOptionsList();

      EventHandler.trigger(this._element, EVENT_SEARCH);
    };

    _proto.update = function update(config) {
      this._config = this._getConfig(config);
      this._options = this._getOptions();
      this._selection = this._getSelectedOptions(this._options);

      this._clone.remove();

      this._element.innerHTML = '';

      this._createNativeOptions(this._element, this._options);

      this._createSelect();

      this._addEventListeners();
    };

    _proto.getValue = function getValue() {
      return this._selection;
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      EventHandler.on(this._clone, EVENT_CLICK, function () {
        _this2.show();
      });
      EventHandler.on(this._searchElement, EVENT_KEYUP, function () {
        _this2._onSearchChange(_this2._searchElement);
      });
      EventHandler.on(this._searchElement, EVENT_KEYDOWN, function (event) {
        var key = event.keyCode || event.charCode;

        if ((key === 8 || key === 46) && event.target.value.length === 0) {
          _this2._selectionDeleteLast();
        }
      });
      EventHandler.on(this._optionsElement, EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this2._onOptionsClick(event.target);
      });
      EventHandler.on(this._selectionCleanerElement, EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this2._selectionClear();

        _this2._updateSelection(); // this._updateSelectionCleaner()


        _this2._updateSearch();

        _this2._updateSearchSize();
      });
      EventHandler.on(this._optionsElement, EVENT_KEYDOWN, function (event) {
        var key = event.keyCode || event.charCode;

        if (key === 13) {
          _this2._onOptionsClick(event.target);

          SelectorEngine.findOne(SELECTOR_INPUT, _this2._clone).focus();
        }
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$6, Manipulator.getDataAttributes(this._element), config);
      typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getClassNames = function _getClassNames() {
      return [].concat(this._element.classList.value.split(' '));
    };

    _proto._getOptions = function _getOptions(node) {
      var _this3 = this;

      if (node === void 0) {
        node = this._element;
      }

      if (this._config.options) {
        return this._config.options;
      }

      var nodes = Array.from(node.childNodes).filter(function (element) {
        return element.nodeName === 'OPTION' || element.nodeName === 'OPTGROUP';
      });
      var options = [];
      nodes.forEach(function (node) {
        if (node.nodeName === 'OPTION') {
          options.push({
            value: node.value,
            text: node.innerHTML,
            selected: node.selected
          });
        }

        if (node.nodeName === 'OPTGROUP') {
          options.push({
            label: node.label,
            options: _this3._getOptions(node)
          });
        }
      });
      return options;
    };

    _proto._getSelectedOptions = function _getSelectedOptions(options) {
      var _this4 = this;

      var selected = [];
      options.forEach(function (e) {
        if (typeof e.value === 'undefined') {
          _this4._getSelectedOptions(e.options);

          return;
        }

        if (e.selected) {
          // Add only the last option if single select
          if (!_this4._config.multiple) {
            selected.length = 0;
          }

          selected.push({
            value: String(e.value),
            text: e.text
          });
        }
      });
      return selected;
    };

    _proto._createNativeSelect = function _createNativeSelect(data) {
      var select = document.createElement('select');
      select.classList.add(CLASS_NAME_SELECT);

      if (this._element.id) {
        select.id = this._element.id;
      }

      if (this._config.multiple) {
        select.multiple = true;
      }

      this._createNativeOptions(select, data);

      this._element.replaceWith(select);

      this._element = select;
    };

    _proto._createNativeOptions = function _createNativeOptions(parentElement, options) {
      var _this5 = this;

      options.forEach(function (option) {
        // eslint-disable-next-line no-negated-condition
        if (typeof option.options !== 'undefined') {
          var optgroup = document.createElement('optgroup');
          optgroup.label = option.label;

          _this5._createNativeOptions(optgroup, option.options);

          parentElement.append(optgroup);
        } else {
          var opt = document.createElement('OPTION');
          opt.value = option.value;

          if (option.selected === true) {
            opt.setAttribute('selected', 'selected');
          }

          opt.innerHTML = option.text;
          parentElement.append(opt);
        }
      });
    };

    _proto._hideNativeSelect = function _hideNativeSelect() {
      this._element.tabIndex = '-1';
      this._element.style.display = 'none';
    };

    _proto._createSelect = function _createSelect() {
      var div = document.createElement('div');
      div.classList.add(CLASS_NAME_SELECT);

      this._getClassNames().forEach(function (className) {
        div.classList.add(className);
      });

      if (this._config.multiple) {
        div.classList.add(CLASS_NAME_SELECT_MULTIPLE);
      }

      if (this._config.inline) {
        div.classList.add(CLASS_NAME_SELECT_INLINE);
      }

      if (this._config.selectionType === 'tags') {
        div.classList.add(CLASS_NAME_SELECTION_TAGS);
      }

      this._clone = div;

      this._element.parentNode.insertBefore(div, this._element.nextSibling);

      if (!this._config.inline || this._config.inline && this._config.selection) {
        this._createSelection(); // this._createSelectionCleaner()

      }

      if (this._config.search) {
        this._createSearchInput();

        this._updateSearch();
      }

      this._createOptionsContainer();

      this._hideNativeSelect();

      this._updateOptionsList();
    };

    _proto._createSelection = function _createSelection() {
      var span = document.createElement('span');
      span.classList.add(CLASS_NAME_SELECTION);

      this._clone.append(span);

      this._updateSelection();

      this._selectionElement = span;
    };

    _proto._createSelectionCleaner = function _createSelectionCleaner() {
      var cleaner = document.createElement('span');
      cleaner.classList.add(CLASS_NAME_SELECTION_CLEANER);
      cleaner.innerHTML = '&times;';

      this._clone.append(cleaner); // this._updateSelectionCleaner()


      this._selectionCleanerElement = cleaner;
    };

    _proto._createSearchInput = function _createSearchInput() {
      var input = document.createElement('input');
      input.classList.add(CLASS_NAME_SEARCH);
      this._searchElement = input;

      this._updateSearchSize();

      this._clone.append(input);
    };

    _proto._createOptionsContainer = function _createOptionsContainer() {
      var div = document.createElement('div');
      div.classList.add(CLASS_NAME_OPTIONS);

      this._clone.append(div);

      this._createOptions(div, this._options);

      this._optionsElement = div;
    };

    _proto._createOptions = function _createOptions(parentElement, options) {
      var _this6 = this;

      options.forEach(function (option) {
        if (typeof option.value !== 'undefined') {
          var optionDiv = document.createElement('div');
          optionDiv.classList.add(CLASS_NAME_OPTION);
          optionDiv.dataset.value = String(option.value);
          optionDiv.tabIndex = 0;
          optionDiv.innerHTML = option.text;
          parentElement.append(optionDiv);
        }

        if (typeof option.label !== 'undefined') {
          var optgroup = document.createElement('div');
          optgroup.classList.add(CLASS_NAME_OPTGROUP);
          var optgrouplabel = document.createElement('div');
          optgrouplabel.innerHTML = option.label;
          optgrouplabel.classList.add(CLASS_NAME_OPTGROUP_LABEL);
          optgroup.append(optgrouplabel);

          _this6._createOptions(optgroup, option.options);

          parentElement.append(optgroup);
        }
      });
    };

    _proto._createTag = function _createTag(value, text) {
      var _this7 = this;

      var tag = document.createElement('span');
      tag.classList.add(CLASS_NAME_TAG);
      tag.dataset.value = value;
      tag.innerHTML = text;
      var closeBtn = document.createElement('span');
      closeBtn.classList.add(CLASS_NAME_TAG_DELETE, 'close');
      closeBtn.setAttribute('aria-label', 'Close');
      closeBtn.innerHTML = '<span aria-hidden="true">&times;</span>';
      tag.append(closeBtn); // eslint-disable-next-line no-warning-comments
      // TODO: zastanowić się czy nie zrobić tego globalnie

      EventHandler.on(closeBtn, EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();
        tag.remove();

        _this7._selectionDelete(value);

        _this7._updateOptionsList();

        _this7._updateSearch();
      });
      return tag;
    };

    _proto._onOptionsClick = function _onOptionsClick(element) {
      if (!element.classList.contains(CLASS_NAME_OPTION) || element.classList.contains(CLASS_NAME_LABEL)) {
        return;
      }

      var value = String(element.dataset.value);
      var text = element.textContent;

      if (this._config.multiple && element.classList.contains(CLASS_NAME_SELECTED)) {
        this._selectionDelete(value);
      } else if (this._config.multiple && !element.classList.contains(CLASS_NAME_SELECTED)) {
        this._selectionAdd(value, text);
      } else if (!this._config.multiple) {
        this._selectionAdd(value, text);
      }

      this._updateSelection(); // this._updateSelectionCleaner()


      this._updateSearch();

      this._updateSearchSize();
    };

    _proto._selectionAdd = function _selectionAdd(value, text) {
      if (!this._config.multiple) {
        this._selectionClear();
      }

      if (this._selection.filter(function (e) {
        return e.value === value;
      }).length === 0) {
        this._selection.push({
          value: value,
          text: text
        });
      }

      this._selectOption(value);
    };

    _proto._selectionClear = function _selectionClear() {
      this._selection.length = 0;

      this._clearOptions();
    };

    _proto._selectionDelete = function _selectionDelete(value) {
      var selected = this._selection.filter(function (e) {
        return e.value !== value;
      });

      this._selection = selected;

      this._unSelectOption(value);
    };

    _proto._selectionDeleteLast = function _selectionDeleteLast() {
      if (this._selection.length > 0) {
        var last = this._selection.pop();

        this._selectionDelete(last.value);

        this._updateSelection(); // this._updateSelectionCleaner()


        this._updateSearch();
      }
    } // .form-multi-select-selections
    ;

    _proto._updateSelection = function _updateSelection() {
      var _this8 = this;

      if (this._config.inline && !this._config.selection) {
        return;
      }

      var selection = SelectorEngine.findOne(SELECTOR_SELECTION, this._clone);

      if (this._config.multiple && this._config.selectionType === 'counter') {
        selection.innerHTML = this._selection.length + " " + this._config.selectionTypeCounterText;
        return;
      }

      if (this._config.multiple && this._config.selectionType === 'tags') {
        selection.innerHTML = '';

        this._selection.forEach(function (e) {
          selection.append(_this8._createTag(e.value, e.text));
        });

        return;
      }

      if (this._config.multiple && this._config.selectionType === 'text') {
        selection.innerHTML = this._selection.map(function (e) {
          return e.text;
        }).join(', ');
        return;
      }

      if (this._selection.length > 0) {
        selection.innerHTML = this._selection[0].text;
      }
    };

    _proto._updateSelectionCleaner = function _updateSelectionCleaner() {
      if (this._selectionCleanerElement === null) {
        return;
      }

      var selectionCleaner = SelectorEngine.findOne(SELECTOR_SELECTION_CLEANER, this._clone);

      if (this._selection.length > 0) {
        selectionCleaner.style.removeProperty('display');
        return;
      }

      selectionCleaner.style.display = 'none';
    };

    _proto._updateSearch = function _updateSearch() {
      if (!this._config.search) {
        return;
      }

      if (this._selection.length === 0 && (this._config.selectionType === 'tags' || this._config.selectionType === 'text')) {
        this._searchElement.removeAttribute('size');
      }

      if (this._selection.length > 0 && !this._config.multiple && !this._config.inline) {
        this._searchElement.placeholder = this._selection[0].text;
        this._selectionElement.style.display = 'none';
        return;
      }

      if (this._selection.length > 0 && this._config.multiple && this._config.selectionType !== 'counter' && !this._config.inline) {
        this._searchElement.placeholder = '';

        this._selectionElement.style.removeProperty('display');

        return;
      }

      if (this._selection.length === 0 && this._config.multiple && !this._config.inline) {
        this._searchElement.placeholder = this._config.searchPlaceholder;
        this._selectionElement.style.display = 'none';
        return;
      }

      if (this._config.multiple && this._config.selectionType === 'counter' && !this._config.inline) {
        this._searchElement.placeholder = this._selection.length + " item(s) selected";
        this._selectionElement.style.display = 'none';
        return;
      }

      if (this._config.inline) {
        this._searchElement.placeholder = this._config.searchPlaceholder;
      }
    };

    _proto._updateSearchSize = function _updateSearchSize(size) {
      if (size === void 0) {
        size = 2;
      }

      if (!this._config.inline && this._selection.length > 0 && (this._config.selectionType === 'tags' || this._config.selectionType === 'text')) {
        this._searchElement.size = size;
        return;
      }

      if (this._selection.length === 0 && (this._config.selectionType === 'tags' || this._config.selectionType === 'text')) {
        this._searchElement.removeAttribute('size');
      }
    } // .form-multi-select-selections
    ;

    _proto._selectOption = function _selectOption(value) {
      SelectorEngine.findOne("option[value=\"" + value + "\"]", this._element).selected = true; // eslint-disable-next-line no-warning-comments
      // TODO: improve this solution

      var option = SelectorEngine.findOne("[data-value=\"" + value + "\"]", this._optionsElement);

      if (option) {
        option.classList.add(CLASS_NAME_SELECTED);
      }

      EventHandler.trigger(this._element, EVENT_CHANGED, {
        value: this._selection
      });
    };

    _proto._unSelectOption = function _unSelectOption(value) {
      SelectorEngine.findOne("option[value=\"" + value + "\"]", this._element).selected = false; // eslint-disable-next-line no-warning-comments
      // TODO: improve this solution

      var option = SelectorEngine.findOne("[data-value=\"" + value + "\"]", this._optionsElement);

      if (option) {
        option.classList.remove(CLASS_NAME_SELECTED);
      }

      EventHandler.trigger(this._element, EVENT_CHANGED, {
        value: this._selection
      });
    };

    _proto._clearOptions = function _clearOptions() {
      this._element.value = null;
      SelectorEngine.find(SELECTOR_SELECTED, this._clone).forEach(function (element) {
        element.classList.remove(CLASS_NAME_SELECTED);
      });
    } // eslint-disable-next-line no-warning-comments
    // TODO: poprawić tą nazwę
    ;

    _proto._onSearchChange = function _onSearchChange(element) {
      if (element) {
        this.search(element.value);

        this._updateSearchSize(element.value.length + 1);
      }
    };

    _proto._updateOptionsList = function _updateOptionsList() {
      var _this9 = this;

      var options = SelectorEngine.find(SELECTOR_OPTION, this._clone);
      options.forEach(function (option) {
        if (_this9._selection.filter(function (e) {
          return e.value === option.dataset.value;
        }).length !== 0) {
          option.classList.add(CLASS_NAME_SELECTED);
        }

        if (_this9._selection.filter(function (e) {
          return e.value === option.dataset.value;
        }).length === 0) {
          option.classList.remove(CLASS_NAME_SELECTED);
        }
      });
    };

    _proto._isHidden = function _isHidden(element) {
      return element.offsetParent === null;
    };

    _proto._isVisible = function _isVisible(element) {
      var style = window.getComputedStyle(element);
      return style.display !== 'none';
    };

    _proto._filterOptionsList = function _filterOptionsList() {
      var _this10 = this;

      var options = SelectorEngine.find(SELECTOR_OPTION, this._clone);
      var visibleOptions = 0;
      options.forEach(function (option) {
        // eslint-disable-next-line unicorn/prefer-includes
        if (option.textContent.toLowerCase().indexOf(_this10._search) === -1) {
          option.style.display = 'none';
        } else {
          option.style.removeProperty('display');
          visibleOptions++;
        }

        var optgroup = option.closest(SELECTOR_OPTGROUP);

        if (optgroup) {
          if (SelectorEngine.children(optgroup, SELECTOR_OPTION).filter(function (element) {
            return _this10._isVisible(element);
          }).length > 0) {
            optgroup.style.removeProperty('display');
          } else {
            optgroup.style.display = 'none';
          }
        }
      });

      if (visibleOptions > 0) {
        if (SelectorEngine.findOne(SELECTOR_OPTIONS_EMPTY, this._clone)) {
          SelectorEngine.findOne(SELECTOR_OPTIONS_EMPTY, this._clone).remove();
        }

        return;
      }

      if (visibleOptions === 0) {
        var placeholder = document.createElement('div');
        placeholder.classList.add(CLASS_NAME_OPTIONS_EMPTY);
        placeholder.innerHTML = this._config.optionsEmptyPlaceholder;

        if (!SelectorEngine.findOne(SELECTOR_OPTIONS_EMPTY, this._clone)) {
          SelectorEngine.findOne(SELECTOR_OPTIONS, this._clone).append(placeholder);
        }
      }
    } // Static
    ;

    MultiSelect.multiSelectInterface = function multiSelectInterface(element, config) {
      var data = Data.get(element, DATA_KEY$8);

      var _config = _extends({}, Default$6, Manipulator.getDataAttributes(element));

      if (typeof config === 'object') {
        _config = _extends({}, _config, config);
      }

      if (!data) {
        data = new MultiSelect(element, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    };

    MultiSelect.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        MultiSelect.multiSelectInterface(this, config);
      });
    };

    MultiSelect.clearMenus = function clearMenus(event) {
      if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY)) {
        return;
      }

      var selects = SelectorEngine.find(SELECTOR_SELECT);

      for (var i = 0, len = selects.length; i < len; i++) {
        var context = Data.get(selects[i], DATA_KEY$8);
        var relatedTarget = {
          relatedTarget: selects[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        if (!context._clone.classList.contains(CLASS_NAME_SHOW$7)) {
          continue;
        }

        if (context._clone.contains(event.target)) {
          continue;
        }

        context._clone.classList.remove(CLASS_NAME_SHOW$7);

        EventHandler.trigger(context._element, EVENT_HIDDEN$4);
      }
    };

    _createClass(MultiSelect, null, [{
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$8;
      }
    }]);

    return MultiSelect;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(window, EVENT_LOAD_DATA_API$3, function () {
    SelectorEngine.find(SELECTOR_SELECT).forEach(function (ms) {
      if (ms.tabIndex !== -1) {
        MultiSelect.multiSelectInterface(ms);
      }
    });
  });
  EventHandler.on(document, EVENT_CLICK_DATA_API$4, MultiSelect.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, MultiSelect.clearMenus);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .MultiSelect to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME$8, MultiSelect);

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'navigation';
  var DATA_KEY$7 = 'coreui.navigation';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var DATA_API_KEY$4 = '.data-api';
  var Default$5 = {
    activeLinksExact: true,
    groupsAutoCollapse: true
  };
  var DefaultType$5 = {
    activeLinksExact: 'boolean',
    groupsAutoCollapse: '(string|boolean)'
  };
  var CLASS_NAME_ACTIVE$2 = 'active';
  var CLASS_NAME_SHOW$6 = 'show';
  var CLASS_NAME_NAV_GROUP = 'nav-group';
  var CLASS_NAME_NAV_GROUP_TOGGLE = 'nav-group-toggle';
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$7 + DATA_API_KEY$4;
  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$7 + DATA_API_KEY$4;
  var SELECTOR_NAV_GROUP = '.nav-group';
  var SELECTOR_NAV_GROUP_ITEMS = '.nav-group-items';
  var SELECTOR_NAV_GROUP_TOGGLE = '.nav-group-toggle';
  var SELECTOR_NAV_LINK = '.nav-link';
  var SELECTOR_DATA_NAVIGATION = '[data-coreui="navigation"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Navigation = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Navigation, _BaseComponent);

    function Navigation(element, config) {
      var _this;

      _this = _BaseComponent.call(this, element) || this;
      _this._config = _this._getConfig(config);

      _this._setActiveLink();

      _this._addEventListeners();

      Data.set(element, DATA_KEY$7, _assertThisInitialized(_this));
      return _this;
    } // Getters


    var _proto = Navigation.prototype;

    // Private
    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$5, config);
      typeCheckConfig(NAME$7, config, DefaultType$5);
      return config;
    };

    _proto._setActiveLink = function _setActiveLink() {
      var _this2 = this;

      Array.from(this._element.querySelectorAll(SELECTOR_NAV_LINK)).forEach(function (element) {
        var currentUrl = String(window.location);
        var urlHasParams = /\?.*=/;
        var urlHasQueryString = /\?./;
        var urlHasHash = /#./;

        if (urlHasParams.test(currentUrl) || urlHasQueryString.test(currentUrl)) {
          currentUrl = currentUrl.split('?')[0];
        }

        if (urlHasHash.test(currentUrl)) {
          currentUrl = currentUrl.split('#')[0];
        }

        if (_this2._config.activeLinksExact && element.href === currentUrl) {
          element.classList.add(CLASS_NAME_ACTIVE$2);
          Array.from(_this2._getParents(element, SELECTOR_NAV_GROUP)).forEach(function (element) {
            element.classList.add(CLASS_NAME_SHOW$6);
            element.setAttribute('aria-expanded', true);
          });
        }

        if (!_this2._config.activeLinksExact && element.href.startsWith(currentUrl)) {
          element.classList.add(CLASS_NAME_ACTIVE$2);
          Array.from(_this2._getParents(element, SELECTOR_NAV_GROUP)).forEach(function (element) {
            element.classList.add(CLASS_NAME_SHOW$6);
            element.setAttribute('aria-expanded', true);
          });
        }
      });
    };

    _proto._getParents = function _getParents(element, selector) {
      // Setup parents array
      var parents = []; // Get matching parent elements

      for (; element && element !== document; element = element.parentNode) {
        // Add matching parents to array
        if (selector) {
          if (element.matches(selector)) {
            parents.push(element);
          }
        } else {
          parents.push(element);
        }
      }

      return parents;
    };

    _proto._getAllSiblings = function _getAllSiblings(element, filter) {
      var siblings = [];
      element = element.parentNode.firstChild;

      do {
        if (element.nodeType === 3) {
          continue; // text node
        }

        if (element.nodeType === 8) {
          continue; // comment node
        }

        if (!filter || filter(element)) {
          siblings.push(element);
        } // eslint-disable-next-line no-cond-assign

      } while (element = element.nextSibling);

      return siblings;
    };

    _proto._getChildren = function _getChildren(n, skipMe) {
      var children = [];

      for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== skipMe) {
          children.push(n);
        }
      }

      return children;
    };

    _proto._getSiblings = function _getSiblings(element, filter) {
      var siblings = this._getChildren(element.parentNode.firstChild, element).filter(filter);

      return siblings;
    };

    _proto._slideDown = function _slideDown(element) {
      element.style.height = 'auto';
      var height = element.clientHeight;
      element.style.height = '0px';
      setTimeout(function () {
        element.style.height = height + "px";
      }, 0);
      var transitionDuration = getTransitionDurationFromElement(element);
      EventHandler.one(element, 'transitionend', function () {
        element.style.height = 'auto';
      });
      emulateTransitionEnd(element, transitionDuration);
    };

    _proto._slideUp = function _slideUp(element, callback) {
      var height = element.clientHeight;
      element.style.height = height + "px";
      setTimeout(function () {
        element.style.height = '0px';
      }, 0);
      var transitionDuration = getTransitionDurationFromElement(element);
      EventHandler.one(element, 'transitionend', function () {
        if (typeof callback === 'function') {
          callback();
        }
      });
      emulateTransitionEnd(element, transitionDuration);
    };

    _proto._toggleGroupItems = function _toggleGroupItems(event) {
      var _this3 = this;

      var toggler = event.target;

      if (!toggler.classList.contains(CLASS_NAME_NAV_GROUP_TOGGLE)) {
        toggler = toggler.closest(SELECTOR_NAV_GROUP_TOGGLE);
      }

      var filter = function filter(element) {
        return Boolean(element.classList.contains(CLASS_NAME_NAV_GROUP) && element.classList.contains(CLASS_NAME_SHOW$6));
      }; // Close other groups


      if (this._config.groupsAutoCollapse === true) {
        this._getSiblings(toggler.parentNode, filter).forEach(function (element) {
          _this3._slideUp(SelectorEngine.findOne(SELECTOR_NAV_GROUP_ITEMS, element), function () {
            element.classList.remove(CLASS_NAME_SHOW$6);
            element.setAttribute('aria-expanded', false);
          });
        });
      }

      if (toggler.parentNode.classList.contains(CLASS_NAME_SHOW$6)) {
        this._slideUp(SelectorEngine.findOne(SELECTOR_NAV_GROUP_ITEMS, toggler.parentNode), function () {
          toggler.parentNode.classList.remove(CLASS_NAME_SHOW$6);
          toggler.parentNode.setAttribute('aria-expanded', false);
        });

        return;
      }

      toggler.parentNode.classList.add(CLASS_NAME_SHOW$6);
      toggler.parentNode.setAttribute('aria-expanded', true);

      this._slideDown(SelectorEngine.findOne(SELECTOR_NAV_GROUP_ITEMS, toggler.parentNode));
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this4 = this;

      EventHandler.on(this._element, EVENT_CLICK_DATA_API$3, SELECTOR_NAV_GROUP_TOGGLE, function (event) {
        event.preventDefault();

        _this4._toggleGroupItems(event, _this4);
      });
    } // Static
    ;

    Navigation.navigationInterface = function navigationInterface(element, config) {
      var data = Data.get(element, DATA_KEY$7);

      var _config = _extends({}, Default$5, Manipulator.getDataAttributes(element), typeof config === 'object' && config ? config : {});

      if (!data) {
        data = new Navigation(element, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    };

    Navigation.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        Navigation.navigationInterface(this, config);
      });
    };

    _createClass(Navigation, null, [{
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Navigation;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(window, EVENT_LOAD_DATA_API$2, function () {
    Array.from(document.querySelectorAll(SELECTOR_DATA_NAVIGATION)).forEach(function (element) {
      Navigation.navigationInterface(element);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Navigation to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME$7, Navigation);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta2): util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';

  var getWidth = function getWidth() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    var documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  };

  var hide = function hide(width) {
    if (width === void 0) {
      width = getWidth();
    }

    document.body.style.overflow = 'hidden';

    _setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', function (calculatedValue) {
      return calculatedValue + width;
    });

    _setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', function (calculatedValue) {
      return calculatedValue - width;
    });

    _setElementAttributes('body', 'paddingRight', function (calculatedValue) {
      return calculatedValue + width;
    });
  };

  var _setElementAttributes = function _setElementAttributes(selector, styleProp, callback) {
    var scrollbarWidth = getWidth();
    SelectorEngine.find(selector).forEach(function (element) {
      if (element !== document.body && window.innerWidth > element.clientWidth + scrollbarWidth) {
        return;
      }

      var actualValue = element.style[styleProp];
      var calculatedValue = window.getComputedStyle(element)[styleProp];
      Manipulator.setDataAttribute(element, styleProp, actualValue);
      element.style[styleProp] = callback(Number.parseFloat(calculatedValue)) + 'px';
    });
  };

  var reset = function reset() {
    document.body.style.overflow = 'auto';

    _resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

    _resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');

    _resetElementAttributes('body', 'paddingRight');
  };

  var _resetElementAttributes = function _resetElementAttributes(selector, styleProp) {
    SelectorEngine.find(selector).forEach(function (element) {
      var value = Manipulator.getDataAttribute(element, styleProp);

      if (typeof value === 'undefined' && element === document.body) {
        element.style.removeProperty(styleProp);
      } else {
        Manipulator.removeDataAttribute(element, styleProp);
        element.style[styleProp] = value;
      }
    });
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'offcanvas';
  var DATA_KEY$6 = 'coreui.offcanvas';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var DATA_API_KEY$3 = '.data-api';
  var ESCAPE_KEY = 'Escape';
  var DATA_BODY_ACTIONS = 'data-coreui-body';
  var CLASS_NAME_BACKDROP_BODY = 'offcanvas-backdrop';
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_SHOW$5 = 'show';
  var CLASS_NAME_TOGGLING = 'offcanvas-toggling';
  var ACTIVE_SELECTOR = ".offcanvas.show, ." + CLASS_NAME_TOGGLING;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$6;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$6;
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$6;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$6;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$6;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$6 + DATA_API_KEY$3;
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$6;
  var SELECTOR_DATA_DISMISS$1 = '[data-coreui-dismiss="offcanvas"]';
  var SELECTOR_DATA_TOGGLE$2 = '[data-coreui-toggle="offcanvas"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var OffCanvas = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(OffCanvas, _BaseComponent);

    function OffCanvas(element) {
      var _this;

      _this = _BaseComponent.call(this, element) || this;
      _this._isShown = element.classList.contains(CLASS_NAME_SHOW$5);
      _this._bodyOptions = element.getAttribute(DATA_BODY_ACTIONS) || '';

      _this._addEventListeners();

      return _this;
    } // Public


    var _proto = OffCanvas.prototype;

    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this2 = this;

      if (this._isShown) {
        return;
      }

      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget: relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;
      this._element.style.visibility = 'visible';

      if (this._bodyOptionsHas('backdrop') || !this._bodyOptions.length) {
        document.body.classList.add(CLASS_NAME_BACKDROP_BODY);
      }

      if (!this._bodyOptionsHas('scroll')) {
        hide();
      }

      this._element.classList.add(CLASS_NAME_TOGGLING);

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.classList.add(CLASS_NAME_SHOW$5);

      var completeCallBack = function completeCallBack() {
        _this2._element.classList.remove(CLASS_NAME_TOGGLING);

        EventHandler.trigger(_this2._element, EVENT_SHOWN$3, {
          relatedTarget: relatedTarget
        });

        _this2._enforceFocusOnElement(_this2._element);
      };

      setTimeout(completeCallBack, getTransitionDurationFromElement(this._element));
    };

    _proto.hide = function hide() {
      var _this3 = this;

      if (!this._isShown) {
        return;
      }

      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._element.classList.add(CLASS_NAME_TOGGLING);

      EventHandler.off(document, EVENT_FOCUSIN);

      this._element.blur();

      this._isShown = false;

      this._element.classList.remove(CLASS_NAME_SHOW$5);

      var completeCallback = function completeCallback() {
        _this3._element.setAttribute('aria-hidden', true);

        _this3._element.removeAttribute('aria-modal');

        _this3._element.removeAttribute('role');

        _this3._element.style.visibility = 'hidden';

        if (_this3._bodyOptionsHas('backdrop') || !_this3._bodyOptions.length) {
          document.body.classList.remove(CLASS_NAME_BACKDROP_BODY);
        }

        if (!_this3._bodyOptionsHas('scroll')) {
          reset();
        }

        EventHandler.trigger(_this3._element, EVENT_HIDDEN$3);

        _this3._element.classList.remove(CLASS_NAME_TOGGLING);
      };

      setTimeout(completeCallback, getTransitionDurationFromElement(this._element));
    };

    _proto._enforceFocusOnElement = function _enforceFocusOnElement(element) {
      EventHandler.off(document, EVENT_FOCUSIN); // guard against infinite focus loop

      EventHandler.on(document, EVENT_FOCUSIN, function (event) {
        if (document !== event.target && element !== event.target && !element.contains(event.target)) {
          element.focus();
        }
      });
      element.focus();
    };

    _proto._bodyOptionsHas = function _bodyOptionsHas(option) {
      return this._bodyOptions.split(',').includes(option);
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this4 = this;

      EventHandler.on(this._element, EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
        return _this4.hide();
      });
      EventHandler.on(document, 'keydown', function (event) {
        if (event.key === ESCAPE_KEY) {
          _this4.hide();
        }
      });
      EventHandler.on(document, EVENT_CLICK_DATA_API$2, function (event) {
        var target = SelectorEngine.findOne(getSelectorFromElement(event.target));

        if (!_this4._element.contains(event.target) && target !== _this4._element) {
          _this4.hide();
        }
      });
    } // Static
    ;

    OffCanvas.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        var data = Data.get(this, DATA_KEY$6) || new OffCanvas(this);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    return OffCanvas;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
    var _this5 = this;

    var target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (this.disabled || this.classList.contains(CLASS_NAME_DISABLED$1)) {
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$3, function () {
      // focus on trigger when it is closed
      if (isVisible(_this5)) {
        _this5.focus();
      }
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

    var allReadyOpen = SelectorEngine.findOne(ACTIVE_SELECTOR);

    if (allReadyOpen && allReadyOpen !== target) {
      return;
    }

    var data = Data.get(target, DATA_KEY$6) || new OffCanvas(target);
    data.toggle(this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  defineJQueryPlugin(NAME$6, OffCanvas);

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v4.0.0-alpha.2): alert.js
   * Licensed under MIT (https://coreui.io/license)
   *
   * This component is a modified version of the Bootstrap's  util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  var allowedAttribute = function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.includes(attrName)) {
      if (uriAttrs.has(attrName)) {
        return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (regExp[i].test(attrName)) {
        return true;
      }
    }

    return false;
  };

  var DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
    var _ref;

    if (!unsafeHtml.length) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var allowlistKeys = Object.keys(allowList);

    var elements = (_ref = []).concat.apply(_ref, createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var _ref2;

      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (!allowlistKeys.includes(elName)) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = (_ref2 = []).concat.apply(_ref2, el.attributes);

      var allowedAttributes = [].concat(allowList['*'] || [], allowList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, allowedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'tooltip';
  var DATA_KEY$5 = 'coreui.tooltip';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var CLASS_PREFIX$1 = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(array|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacements: 'array',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    allowList: 'object',
    popperConfig: '(null|object|function)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: [0, 0],
    container: false,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    boundary: 'clippingParents',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    allowList: DefaultAllowlist,
    popperConfig: null
  };
  var Event$2 = {
    HIDE: "hide" + EVENT_KEY$5,
    HIDDEN: "hidden" + EVENT_KEY$5,
    SHOW: "show" + EVENT_KEY$5,
    SHOWN: "shown" + EVENT_KEY$5,
    INSERTED: "inserted" + EVENT_KEY$5,
    CLICK: "click" + EVENT_KEY$5,
    FOCUSIN: "focusin" + EVENT_KEY$5,
    FOCUSOUT: "focusout" + EVENT_KEY$5,
    MOUSEENTER: "mouseenter" + EVENT_KEY$5,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$5
  };
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_MODAL = 'modal';
  var CLASS_NAME_SHOW$4 = 'show';
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Tooltip, _BaseComponent);

    function Tooltip(element, config) {
      var _this;

      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      }

      _this = _BaseComponent.call(this, element) || this; // private

      _this._isEnabled = true;
      _this._timeout = 0;
      _this._hoverState = '';
      _this._activeTrigger = {};
      _this._popper = null; // Protected

      _this.config = _this._getConfig(config);
      _this.tip = null;

      _this._setListeners();

      return _this;
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var context = this._initializeOnDelegatedTarget(event);

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$4)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      EventHandler.off(this._element.closest("." + CLASS_NAME_MODAL), 'hide.coreui.modal', this._hideModalHandler);

      if (this.tip && this.tip.parentNode) {
        this.tip.parentNode.removeChild(this.tip);
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.config = null;
      this.tip = null;

      _BaseComponent.prototype.dispose.call(this);
    };

    _proto.show = function show() {
      var _this2 = this;

      if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
      }

      if (!(this.isWithContent() && this._isEnabled)) {
        return;
      }

      var showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
      var shadowRoot = findShadowRoot(this._element);
      var isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }

      var tip = this.getTipElement();
      var tipId = getUID(this.constructor.NAME);
      tip.setAttribute('id', tipId);

      this._element.setAttribute('aria-describedby', tipId);

      this.setContent();

      if (this.config.animation) {
        tip.classList.add(CLASS_NAME_FADE$4);
      }

      var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this._element) : this.config.placement;

      var attachment = this._getAttachment(placement);

      this._addAttachmentClass(attachment);

      var container = this._getContainer();

      Data.set(tip, this.constructor.DATA_KEY, this);

      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.appendChild(tip);
      }

      EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
      this._popper = Popper.createPopper(this._element, tip, this._getPopperConfig(attachment));
      tip.classList.add(CLASS_NAME_SHOW$4);
      var customClass = typeof this.config.customClass === 'function' ? this.config.customClass() : this.config.customClass;

      if (customClass) {
        var _tip$classList;

        (_tip$classList = tip.classList).add.apply(_tip$classList, customClass.split(' '));
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement) {
        var _ref;

        (_ref = []).concat.apply(_ref, document.body.children).forEach(function (element) {
          EventHandler.on(element, 'mouseover', noop());
        });
      }

      var complete = function complete() {
        var prevHoverState = _this2._hoverState;
        _this2._hoverState = null;
        EventHandler.trigger(_this2._element, _this2.constructor.Event.SHOWN);

        if (prevHoverState === HOVER_STATE_OUT) {
          _this2._leave(null, _this2);
        }
      };

      if (this.tip.classList.contains(CLASS_NAME_FADE$4)) {
        var transitionDuration = getTransitionDurationFromElement(this.tip);
        EventHandler.one(this.tip, 'transitionend', complete);
        emulateTransitionEnd(this.tip, transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      var _this3 = this;

      if (!this._popper) {
        return;
      }

      var tip = this.getTipElement();

      var complete = function complete() {
        if (_this3._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this3._cleanTipClass();

        _this3._element.removeAttribute('aria-describedby');

        EventHandler.trigger(_this3._element, _this3.constructor.Event.HIDDEN);

        if (_this3._popper) {
          _this3._popper.destroy();

          _this3._popper = null;
        }
      };

      var hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      tip.classList.remove(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        var _ref2;

        (_ref2 = []).concat.apply(_ref2, document.body.children).forEach(function (element) {
          return EventHandler.off(element, 'mouseover', noop);
        });
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if (this.tip.classList.contains(CLASS_NAME_FADE$4)) {
        var transitionDuration = getTransitionDurationFromElement(tip);
        EventHandler.one(tip, 'transitionend', complete);
        emulateTransitionEnd(tip, transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.update();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.getTipElement = function getTipElement() {
      if (this.tip) {
        return this.tip;
      }

      var element = document.createElement('div');
      element.innerHTML = this.config.template;
      this.tip = element.children[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent(SelectorEngine.findOne(SELECTOR_TOOLTIP_INNER, tip), this.getTitle());
      tip.classList.remove(CLASS_NAME_FADE$4, CLASS_NAME_SHOW$4);
    };

    _proto.setElementContent = function setElementContent(element, content) {
      if (element === null) {
        return;
      }

      if (typeof content === 'object' && isElement(content)) {
        if (content.jquery) {
          content = content[0];
        } // content is a DOM node or a jQuery


        if (this.config.html) {
          if (content.parentNode !== element) {
            element.innerHTML = '';
            element.appendChild(content);
          }
        } else {
          element.textContent = content.textContent;
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.allowList, this.config.sanitizeFn);
        }

        element.innerHTML = content;
      } else {
        element.textContent = content;
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this._element.getAttribute('data-coreui-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this._element) : this.config.title;
      }

      return title;
    };

    _proto.updateAttachment = function updateAttachment(attachment) {
      if (attachment === 'right') {
        return 'end';
      }

      if (attachment === 'left') {
        return 'start';
      }

      return attachment;
    } // Private
    ;

    _proto._initializeOnDelegatedTarget = function _initializeOnDelegatedTarget(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || Data.get(event.delegateTarget, dataKey);

      if (!context) {
        context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
        Data.set(event.delegateTarget, dataKey, context);
      }

      return context;
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = this.config.offset;

      if (typeof offset === 'string') {
        return offset.split(',').map(function (val) {
          return Number.parseInt(val, 10);
        });
      }

      if (typeof offset === 'function') {
        return function (popperData) {
          return offset(popperData, _this4._element);
        };
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this5 = this;

      var defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: 'flip',
          options: {
            altBoundary: true,
            fallbackPlacements: this.config.fallbackPlacements
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }, {
          name: 'preventOverflow',
          options: {
            boundary: this.config.boundary
          }
        }, {
          name: 'arrow',
          options: {
            element: "." + this.constructor.NAME + "-arrow"
          }
        }, {
          name: 'onChange',
          enabled: true,
          phase: 'afterWrite',
          fn: function fn(data) {
            return _this5._handlePopperPlacementChange(data);
          }
        }],
        onFirstUpdate: function onFirstUpdate(data) {
          if (data.options.placement !== data.placement) {
            _this5._handlePopperPlacementChange(data);
          }
        }
      };
      return _extends({}, defaultBsPopperConfig, typeof this.config.popperConfig === 'function' ? this.config.popperConfig(defaultBsPopperConfig) : this.config.popperConfig);
    };

    _proto._addAttachmentClass = function _addAttachmentClass(attachment) {
      this.getTipElement().classList.add(CLASS_PREFIX$1 + "-" + this.updateAttachment(attachment));
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (isElement(this.config.container)) {
        return this.config.container;
      }

      return SelectorEngine.findOne(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this6 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          EventHandler.on(_this6._element, _this6.constructor.Event.CLICK, _this6.config.selector, function (event) {
            return _this6.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this6.constructor.Event.MOUSEENTER : _this6.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this6.constructor.Event.MOUSELEAVE : _this6.constructor.Event.FOCUSOUT;
          EventHandler.on(_this6._element, eventIn, _this6.config.selector, function (event) {
            return _this6._enter(event);
          });
          EventHandler.on(_this6._element, eventOut, _this6.config.selector, function (event) {
            return _this6._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this6._element) {
          _this6.hide();
        }
      };

      EventHandler.on(this._element.closest("." + CLASS_NAME_MODAL), 'hide.coreui.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _extends({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var title = this._element.getAttribute('title');

      var originalTitleType = typeof this._element.getAttribute('data-coreui-original-title');

      if (title || originalTitleType !== 'string') {
        this._element.setAttribute('data-coreui-original-title', title || '');

        if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
          this._element.setAttribute('aria-label', title);
        }

        this._element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = Manipulator.getDataAttributes(this._element);
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
          delete dataAttributes[dataAttr];
        }
      });

      if (config && typeof config.container === 'object' && config.container.jquery) {
        config.container = config.container[0];
      }

      config = _extends({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      typeCheckConfig(NAME$5, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var tip = this.getTipElement();
      var tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.map(function (token) {
          return token.trim();
        }).forEach(function (tClass) {
          return tip.classList.remove(tClass);
        });
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      var state = popperData.state;

      if (!state) {
        return;
      }

      this.tip = state.elements.popper;

      this._cleanTipClass();

      this._addAttachmentClass(this._getAttachment(state.placement));
    } // Static
    ;

    Tooltip.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        var data = Data.get(this, DATA_KEY$5);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$5;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$5;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$2;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$5;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tooltip to jQuery only if jQuery is present
   */


  defineJQueryPlugin(NAME$5, Tooltip);

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'popover';
  var DATA_KEY$4 = 'coreui.popover';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var CLASS_PREFIX = 'bs-popover';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');

  var Default$3 = _extends({}, Tooltip.Default, {
    placement: 'right',
    offset: [0, 8],
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
  });

  var DefaultType$3 = _extends({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    INSERTED: "inserted" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    FOCUSIN: "focusin" + EVENT_KEY$4,
    FOCUSOUT: "focusout" + EVENT_KEY$4,
    MOUSEENTER: "mouseenter" + EVENT_KEY$4,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$4
  };
  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$3 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement(); // we use append for html objects to maintain js events

      this.setElementContent(SelectorEngine.findOne(SELECTOR_TITLE, tip), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this._element);
      }

      this.setElementContent(SelectorEngine.findOne(SELECTOR_CONTENT, tip), content);
      tip.classList.remove(CLASS_NAME_FADE$3, CLASS_NAME_SHOW$3);
    } // Private
    ;

    _proto._addAttachmentClass = function _addAttachmentClass(attachment) {
      this.getTipElement().classList.add(CLASS_PREFIX + "-" + this.updateAttachment(attachment));
    };

    _proto._getContent = function _getContent() {
      return this._element.getAttribute('data-coreui-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var tip = this.getTipElement();
      var tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.map(function (token) {
          return token.trim();
        }).forEach(function (tClass) {
          return tip.classList.remove(tClass);
        });
      }
    } // Static
    ;

    Popover.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        var data = Data.get(this, DATA_KEY$4);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          Data.set(this, DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "Default",
      get: // Getters
      function get() {
        return Default$3;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$4;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$4;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$4;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$3;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Popover to jQuery only if jQuery is present
   */


  defineJQueryPlugin(NAME$4, Popover);

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'scrollspy';
  var DATA_KEY$3 = 'coreui.scrollspy';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$2 = '.data-api';
  var Default$2 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$2 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$3;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$3;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$3 + DATA_API_KEY$2;
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var SELECTOR_DATA_SPY = '[data-coreui-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(ScrollSpy, _BaseComponent);

    function ScrollSpy(element, config) {
      var _this;

      _this = _BaseComponent.call(this, element) || this;
      _this._scrollElement = _this._element.tagName === 'BODY' ? window : _this._element;
      _this._config = _this._getConfig(config);
      _this._selector = _this._config.target + " " + SELECTOR_NAV_LINKS + ", " + _this._config.target + " " + SELECTOR_LIST_ITEMS + ", " + _this._config.target + " ." + CLASS_NAME_DROPDOWN_ITEM;
      _this._offsets = [];
      _this._targets = [];
      _this._activeTarget = null;
      _this._scrollHeight = 0;
      EventHandler.on(_this._scrollElement, EVENT_SCROLL, function () {
        return _this._process();
      });

      _this.refresh();

      _this._process();

      return _this;
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = SelectorEngine.find(this._selector);
      targets.map(function (element) {
        var targetSelector = getSelectorFromElement(element);
        var target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      _BaseComponent.prototype.dispose.call(this);

      EventHandler.off(this._scrollElement, EVENT_KEY$3);
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$2, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && isElement(config.target)) {
        var id = config.target.id;

        if (!id) {
          id = getUID(NAME$3);
          config.target.id = id;
        }

        config.target = "#" + id;
      }

      typeCheckConfig(NAME$3, config, DefaultType$2);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-coreui-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var link = SelectorEngine.findOne(queries.join(','));

      if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
        link.classList.add(CLASS_NAME_ACTIVE$1);
      } else {
        // Set triggered link as active
        link.classList.add(CLASS_NAME_ACTIVE$1);
        SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(function (listGroup) {
          // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
          SelectorEngine.prev(listGroup, SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).forEach(function (item) {
            return item.classList.add(CLASS_NAME_ACTIVE$1);
          }); // Handle special case when .nav-link is inside .nav-item

          SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(function (navItem) {
            SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(function (item) {
              return item.classList.add(CLASS_NAME_ACTIVE$1);
            });
          });
        });
      }

      EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      SelectorEngine.find(this._selector).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$1);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$1);
      });
    } // Static
    ;

    ScrollSpy.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        var data = Data.get(this, DATA_KEY$3);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$3;
      }
    }]);

    return ScrollSpy;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
    SelectorEngine.find(SELECTOR_DATA_SPY).forEach(function (spy) {
      return new ScrollSpy(spy, Manipulator.getDataAttributes(spy));
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .ScrollSpy to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME$3, ScrollSpy);

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'sidebar';
  var DATA_KEY$2 = 'coreui.sidebar';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$1 = '.data-api';
  var Default$1 = {
    breakpoint: false
  };
  var DefaultType$1 = {
    breakpoint: '(boolean|string)'
  };
  var CLASS_NAME_BACKDROP = 'sidebar-backdrop';
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_HIDE$1 = 'hide';
  var CLASS_NAME_SHOW$2 = 'show';
  var CLASS_NAME_SIDEBAR = 'sidebar';
  var CLASS_NAME_SIDEBAR_NARROW = 'sidebar-narrow';
  var CLASS_NAME_SIDEBAR_OVERLAID = 'sidebar-overlaid';
  var CLASS_NAME_SIDEBAR_NARROW_UNFOLDABLE = 'sidebar-narrow-unfoldable';
  var REGEXP_SIDEBAR_SELF_HIDING = /sidebar-self-hiding/; // const REGEXP_SIDEBAR_SHOW_BREAKPOINT = /sidebar-(sm|md|lg|xl|xxl)-show/

  var EVENT_HIDE$2 = "hide" + EVENT_KEY$2;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$2;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$2;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$2;
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$2 + DATA_API_KEY$1;
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$2 + DATA_API_KEY$1;
  var SELECTOR_DATA_CLOSE = '[data-coreui-close="sidebar"]';
  var SELECTOR_DATA_TOGGLE$1 = '[data-coreui-toggle]';
  var SELECTOR_SIDEBAR = '.sidebar';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Sidebar = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Sidebar, _BaseComponent);

    function Sidebar(element, config) {
      var _this;

      _this = _BaseComponent.call(this, element) || this;
      _this._config = _this._getConfig(config); // this._breakpoint = this._getBreakpoint()

      _this._show = _this._isVisible();
      _this._mobile = _this._isMobile();
      _this._overlaid = _this._isOverlaid();
      _this._narrow = _this._isNarrow();
      _this._unfoldable = _this._isUnfoldable();
      _this._backdrop = null;

      _this._addEventListeners(); // Data.set(element, DATA_KEY, this)


      return _this;
    } // Getters


    var _proto = Sidebar.prototype;

    // Public
    _proto.show = function show() {
      var _this2 = this;

      EventHandler.trigger(this._element, EVENT_SHOW$2);

      if (this._element.classList.contains(CLASS_NAME_HIDE$1)) {
        this._element.classList.remove(CLASS_NAME_HIDE$1);
      }

      if (REGEXP_SIDEBAR_SELF_HIDING.test(this._element.className)) {
        // if (this._element.className.match(REGEXP_SIDEBAR_SELF_HIDING)) {
        this._element.classList.add(CLASS_NAME_SHOW$2);
      }

      if (this._isMobile()) {
        this._showBackdrop();
      }

      var complete = function complete() {
        if (_this2._isVisible() === true) {
          _this2._show = true;

          if (_this2._isMobile() || _this2._isOverlaid()) {
            _this2._addClickOutListener();
          }

          EventHandler.trigger(_this2._element, EVENT_SHOWN$2);
        }
      };

      var transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, 'transitionend', complete);
      emulateTransitionEnd(this._element, transitionDuration);
    };

    _proto.hide = function hide() {
      var _this3 = this;

      EventHandler.trigger(this._element, EVENT_HIDE$2);

      if (this._element.classList.contains(CLASS_NAME_SHOW$2)) {
        this._element.classList.remove(CLASS_NAME_SHOW$2);
      }

      this._element.classList.add(CLASS_NAME_HIDE$1);

      if (this._isMobile()) {
        this._removeBackdrop();
      }

      var complete = function complete() {
        if (_this3._isVisible() === false) {
          _this3._show = false;

          if (_this3._isMobile() || _this3._isOverlaid()) {
            _this3._removeClickOutListener();
          }

          EventHandler.trigger(_this3._element, EVENT_HIDDEN$2);
        }
      };

      var transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, 'transitionend', complete);
      emulateTransitionEnd(this._element, transitionDuration);
    };

    _proto.toggle = function toggle() {
      if (this._show) {
        this.hide();
        return;
      }

      this.show();
    };

    _proto.narrow = function narrow() {
      if (!this._isMobile()) {
        this._addClassName(CLASS_NAME_SIDEBAR_NARROW);

        this._narrow = true;
      }
    };

    _proto.unfoldable = function unfoldable() {
      if (!this._isMobile()) {
        this._addClassName(CLASS_NAME_SIDEBAR_NARROW_UNFOLDABLE);

        this._unfoldable = true;
      }
    };

    _proto.reset = function reset() {
      if (!this._isMobile()) {
        if (this._narrow) {
          this._element.classList.remove(CLASS_NAME_SIDEBAR_NARROW);

          this._narrow = false;
        }

        if (this._unfoldable) {
          this._element.classList.remove(CLASS_NAME_SIDEBAR_NARROW_UNFOLDABLE);

          this._unfoldable = false;
        }
      }
    };

    _proto.toggleNarrow = function toggleNarrow() {
      if (this._narrow) {
        this.reset();
        return;
      }

      this.narrow();
    };

    _proto.toggleUnfoldable = function toggleUnfoldable() {
      if (this._unfoldable) {
        this.reset();
        return;
      }

      this.unfoldable();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, Manipulator.getDataAttributes(this._element), config);
      typeCheckConfig(NAME$2, config, this.constructor.DefaultType);
      return config;
    } // _getBreakpoint() {
    //   if (this._config.breakpoint) {
    //     return this._config.breakpoint
    //   }
    //   const breakpoint = this._element.className.match(REGEXP_SIDEBAR_SHOW_BREAKPOINT)
    //   if (breakpoint) {
    //     return breakpoint[1]
    //   }
    //   return false
    // }
    ;

    _proto._createShowClass = function _createShowClass() {
      if (this._breakpoint && !this._isMobile()) {
        return CLASS_NAME_SIDEBAR + "-" + this._breakpoint + "-" + CLASS_NAME_SHOW$2;
      }

      return CLASS_NAME_SIDEBAR + "-" + CLASS_NAME_SHOW$2;
    };

    _proto._isMobile = function _isMobile() {
      return Boolean(window.getComputedStyle(this._element, null).getPropertyValue('--is-mobile'));
    };

    _proto._isIOS = function _isIOS() {
      var iOSDevices = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'];
      var platform = Boolean(navigator.platform);

      if (platform) {
        while (iOSDevices.length) {
          if (navigator.platform === iOSDevices.pop()) {
            return true;
          }
        }
      }

      return false;
    };

    _proto._isNarrow = function _isNarrow() {
      return this._element.classList.contains(CLASS_NAME_SIDEBAR_NARROW);
    };

    _proto._isOverlaid = function _isOverlaid() {
      return this._element.classList.contains(CLASS_NAME_SIDEBAR_OVERLAID);
    };

    _proto._isUnfoldable = function _isUnfoldable() {
      return this._element.classList.contains(CLASS_NAME_SIDEBAR_NARROW_UNFOLDABLE);
    } // eslint-disable-next-line no-warning-comments
    // TODO: this method is not bulletproof
    ;

    _proto._isVisible = function _isVisible() {
      var rect = this._element.getBoundingClientRect();

      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      /* or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      /* or $(window).width() */
      ;
    };

    _proto._addClassName = function _addClassName(className) {
      this._element.classList.add(className);
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        this._backdrop.parentNode.removeChild(this._backdrop);

        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop() {
      if (!this._backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        this._backdrop.classList.add(CLASS_NAME_FADE$2);

        document.body.appendChild(this._backdrop);
        reflow(this._backdrop);

        this._backdrop.classList.add(CLASS_NAME_SHOW$2);
      }
    };

    _proto._clickOutListener = function _clickOutListener(event, sidebar) {
      if (event.target.closest(SELECTOR_SIDEBAR) === null) {
        // or use:
        event.preventDefault();
        event.stopPropagation();
        sidebar.hide();
      }
    };

    _proto._addClickOutListener = function _addClickOutListener() {
      var _this4 = this;

      EventHandler.on(document, EVENT_CLICK_DATA_API$1, function (event) {
        _this4._clickOutListener(event, _this4);
      });
    };

    _proto._removeClickOutListener = function _removeClickOutListener() {
      EventHandler.off(document, EVENT_CLICK_DATA_API$1);
    } // Sidebar navigation
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this5 = this;

      if (this._mobile && this._show) {
        this._addClickOutListener();
      }

      if (this._overlaid && this._show) {
        this._addClickOutListener();
      }

      EventHandler.on(this._element, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
        event.preventDefault();
        var toggle = Manipulator.getDataAttribute(event.target, 'toggle');

        if (toggle === 'narrow') {
          _this5.toggleNarrow();
        }

        if (toggle === 'unfoldable') {
          _this5.toggleUnfoldable();
        }
      });
      EventHandler.on(this._element, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_CLOSE, function (event) {
        event.preventDefault();

        _this5.hide();
      });
    } // Static
    ;

    Sidebar.sidebarInterface = function sidebarInterface(element, config) {
      var data = Data.get(element, DATA_KEY$2);

      var _config = typeof config === 'object' && config;

      if (!data) {
        data = new Sidebar(element, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    };

    Sidebar.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        Sidebar.sidebarInterface(this, config);
      });
    };

    _createClass(Sidebar, null, [{
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$1;
      }
    }]);

    return Sidebar;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
    Array.from(document.querySelectorAll(SELECTOR_SIDEBAR)).forEach(function (element) {
      Sidebar.sidebarInterface(element);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  defineJQueryPlugin(NAME$2, Sidebar);

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'tab';
  var DATA_KEY$1 = 'coreui.tab';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY = '.data-api';
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$1;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$1;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$1;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$1;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY$1 + DATA_API_KEY;
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$1 = 'show';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_ACTIVE_UL = ':scope > li > .active';
  var SELECTOR_DATA_TOGGLE = '[data-coreui-toggle="tab"], [data-coreui-toggle="pill"], [data-coreui-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Tab, _BaseComponent);

    function Tab() {
      return _BaseComponent.apply(this, arguments) || this;
    }

    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE) || this._element.classList.contains(CLASS_NAME_DISABLED)) {
        return;
      }

      var previous;
      var target = getElementFromSelector(this._element);

      var listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
        previous = SelectorEngine.find(itemSelector, listElement);
        previous = previous[previous.length - 1];
      }

      var hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
        relatedTarget: this._element
      }) : null;
      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
        relatedTarget: previous
      });

      if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
        return;
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        EventHandler.trigger(previous, EVENT_HIDDEN$1, {
          relatedTarget: _this._element
        });
        EventHandler.trigger(_this._element, EVENT_SHOWN$1, {
          relatedTarget: previous
        });
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = getTransitionDurationFromElement(active);
        active.classList.remove(CLASS_NAME_SHOW$1);
        EventHandler.one(active, 'transitionend', complete);
        emulateTransitionEnd(active, transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        active.classList.remove(CLASS_NAME_ACTIVE);
        var dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

        if (dropdownChild) {
          dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      element.classList.add(CLASS_NAME_ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$1)) {
        element.classList.add(CLASS_NAME_SHOW$1);
      }

      if (element.parentNode && element.parentNode.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = element.closest(SELECTOR_DROPDOWN);

        if (dropdownElement) {
          SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE).forEach(function (dropdown) {
            return dropdown.classList.add(CLASS_NAME_ACTIVE);
          });
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        var data = Data.get(this, DATA_KEY$1) || new Tab(this);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "DATA_KEY",
      get: // Getters
      function get() {
        return DATA_KEY$1;
      }
    }]);

    return Tab;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    event.preventDefault();
    var data = Data.get(this, DATA_KEY$1) || new Tab(this);
    data.show();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tab to jQuery only if jQuery is present
   */

  defineJQueryPlugin(NAME$1, Tab);

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'toast';
  var DATA_KEY = 'coreui.toast';
  var EVENT_KEY = "." + DATA_KEY;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY;
  var EVENT_HIDE = "hide" + EVENT_KEY;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY;
  var EVENT_SHOW = "show" + EVENT_KEY;
  var EVENT_SHOWN = "shown" + EVENT_KEY;
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default = {
    animation: true,
    autohide: true,
    delay: 5000
  };
  var SELECTOR_DATA_DISMISS = '[data-coreui-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(Toast, _BaseComponent);

    function Toast(element, config) {
      var _this;

      _this = _BaseComponent.call(this, element) || this;
      _this._config = _this._getConfig(config);
      _this._timeout = null;

      _this._setListeners();

      return _this;
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this2 = this;

      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

      if (showEvent.defaultPrevented) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }

      var complete = function complete() {
        _this2._element.classList.remove(CLASS_NAME_SHOWING);

        _this2._element.classList.add(CLASS_NAME_SHOW);

        EventHandler.trigger(_this2._element, EVENT_SHOWN);

        if (_this2._config.autohide) {
          _this2._timeout = setTimeout(function () {
            _this2.hide();
          }, _this2._config.delay);
        }
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      if (this._config.animation) {
        var transitionDuration = getTransitionDurationFromElement(this._element);
        EventHandler.one(this._element, 'transitionend', complete);
        emulateTransitionEnd(this._element, transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      var _this3 = this;

      if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }

      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      var complete = function complete() {
        _this3._element.classList.add(CLASS_NAME_HIDE);

        EventHandler.trigger(_this3._element, EVENT_HIDDEN);
      };

      this._element.classList.remove(CLASS_NAME_SHOW);

      if (this._config.animation) {
        var transitionDuration = getTransitionDurationFromElement(this._element);
        EventHandler.one(this._element, 'transitionend', complete);
        emulateTransitionEnd(this._element, transitionDuration);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }

      EventHandler.off(this._element, EVENT_CLICK_DISMISS);

      _BaseComponent.prototype.dispose.call(this);

      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, Manipulator.getDataAttributes(this._element), typeof config === 'object' && config ? config : {});
      typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this4 = this;

      EventHandler.on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function () {
        return _this4.hide();
      });
    };

    _proto._clearTimeout = function _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static
    ;

    Toast.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        var data = Data.get(this, DATA_KEY);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY;
      }
    }]);

    return Toast;
  }(BaseComponent);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Toast to jQuery only if jQuery is present
   */


  defineJQueryPlugin(NAME, Toast);

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v4.0.0-alpha.2): index.esm.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */
  var index_umd = {
    Alert: Alert,
    Button: Button,
    Carousel: Carousel,
    Collapse: Collapse,
    Dropdown: Dropdown,
    LoadingButton: LoadingButton,
    Modal: Modal,
    MultiSelect: MultiSelect,
    Navigation: Navigation,
    OffCanvas: OffCanvas,
    Popover: Popover,
    ScrollSpy: ScrollSpy,
    Sidebar: Sidebar,
    Tab: Tab,
    Toast: Toast,
    Tooltip: Tooltip
  };

  return index_umd;

})));
//# sourceMappingURL=coreui.js.map