(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){if(t){if("string"==typeof t)return r(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,a(r.key),r)}}function a(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==t(n)?n:n+""}var i=function(){return r=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.foundForms=[],this.params=null,this.observing=!1,this.darkElement=null,this.darkClass=null,this.callback=this.callback.bind(this),this.validate=this.validate.bind(this),this.addedDCLCallbacks=new Set},a=[{key:"generateID",value:function(){var t=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return t()+"-"+t()+"-"+t()+"-"+t()}},{key:"getFoundFormById",value:function(t){var e;return null!==(e=this.foundForms.filter((function(e){return t===e.hCaptchaId}))[0])&&void 0!==e?e:null}},{key:"getWidgetId",value:function(t){var e,n,r;if(void 0===t)return"";var o=null!==(e=null===(n=t.closest(this.formSelector))||void 0===n||null===(n=n.dataset)||void 0===n?void 0:n.hCaptchaId)&&void 0!==e?e:"";if(!o)return"";var a=this.getFoundFormById(o);return null!==(r=null==a?void 0:a.widgetId)&&void 0!==r?r:""}},{key:"reset",value:function(t){var e=this.getWidgetId(t);e&&hcaptcha.reset(e)}},{key:"isSameOrDescendant",value:function(t,e){for(var n=e;n;){if(n===t)return!0;n=n.parentElement}return!1}},{key:"validate",value:function(t){var e=t.currentTarget.closest(this.formSelector),n=this.getFoundFormById(e.dataset.hCaptchaId),r=n.submitButtonElement,o=n.widgetId;if(this.isSameOrDescendant(r,t.target)&&(t.preventDefault(),t.stopPropagation(),this.currentForm={formElement:e,submitButtonElement:r},o)){var a=e.querySelector(this.responseSelector),i=a?a.value:"";""===i?hcaptcha.execute(o):this.callback(i)}}},{key:"isValidated",value:function(){return void 0!==this.currentForm}},{key:"getForms",value:function(){return e(document.querySelectorAll(this.formSelector))}},{key:"getParams",value:function(){if(null!==this.params)return this.params;var t;try{var e,n;t=JSON.parse(wp.hooks.applyFilters("hcaptcha.params",null!==(e=null===(n=HCaptchaMainObject)||void 0===n?void 0:n.params)&&void 0!==e?e:""))}catch(e){t={}}return t.callback=this.callback,t}},{key:"setParams",value:function(t){this.params=t}},{key:"setDarkData",value:function(){var t={"twenty-twenty-one":{darkStyleId:"twenty-twenty-one-style-css",darkElement:document.body,darkClass:"is-dark-theme"},"wp-dark-mode":{darkStyleId:"wp-dark-mode-frontend-css",darkElement:document.documentElement,darkClass:"wp-dark-mode-active"},"droit-dark-mode":{darkStyleId:"dtdr-public-inline-css",darkElement:document.documentElement,darkClass:"drdt-dark-mode"}};t=wp.hooks.applyFilters("hcaptcha.darkData",t);for(var e=0,n=Object.values(t);e<n.length;e++){var r=n[e];if(document.getElementById(r.darkStyleId))return this.darkElement=r.darkElement,void(this.darkClass=r.darkClass)}}},{key:"observeDarkMode",value:function(){var t=this;this.observing||(this.observing=!0,"auto"!==this.getParams().theme)||(this.setDarkData(),this.darkElement&&this.darkClass&&new MutationObserver((function(e){var r,o=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=n(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){c=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw i}}}}(e);try{var a=function(){var e=r.value.oldValue,n=t.darkElement.getAttribute("class");e=e?e.split(" "):[],(n=n?n.split(" "):[]).filter((function(t){return!e.includes(t)})).concat(e.filter((function(t){return!n.includes(t)}))).includes(t.darkClass)&&t.bindEvents()};for(o.s();!(r=o.n()).done;)a()}catch(t){o.e(t)}finally{o.f()}})).observe(this.darkElement,{attributes:!0,attributeOldValue:!0}))}},{key:"getWidgetByToken",value:function(t){var n=e(document.querySelectorAll(this.responseSelector)).find((function(e){return e.value===t}));return n?n.closest(".h-captcha"):null}},{key:"callback",value:function(t){document.dispatchEvent(new CustomEvent("hCaptchaSubmitted",{detail:{token:t}}));var e=this.getParams(),n=this.getWidgetByToken(t),r=n?n.dataset.force:null;("invisible"===e.size||"true"===r&&this.isValidated())&&this.submit()}},{key:"applyAutoTheme",value:function(t){if("auto"!==t.theme)return t;if(t.theme="light",!this.darkElement)return t;var e=this.darkElement.getAttribute("class");return(e=e||"").includes(this.darkClass)&&(t.theme="dark"),t}},{key:"render",value:function(e){this.observeDarkMode();var n,r,o=this.getParams();return"object"===t(o.theme)?null!==(n=null===(r=o)||void 0===r||null===(r=r.theme)||void 0===r||null===(r=r.component)||void 0===r||null===(r=r.checkbox)||void 0===r||null===(r=r.main)||void 0===r?void 0:r.fill)&&void 0!==n&&n&&(e.dataset.theme="custom"):o.theme=e.dataset.theme,o.size=e.dataset.size,o=this.applyAutoTheme(o),hcaptcha.render(e,o)}},{key:"addSyncedEventListener",value:function(t){if("loading"===document.readyState){if(this.addedDCLCallbacks.has(t))return;this.addedDCLCallbacks.add(t),window.addEventListener("DOMContentLoaded",t)}else t()}},{key:"bindEvents",value:function(){var t=this;"undefined"!=typeof hcaptcha&&(this.formSelector=wp.hooks.applyFilters("hcaptcha.formSelector","form, section.cwginstock-subscribe-form, div.sdm_download_item, .gform_editor, #nf-builder, .wpforms-captcha-preview"),this.submitButtonSelector=wp.hooks.applyFilters("hcaptcha.submitButtonSelector",'*[type="submit"]:not(.quform-default-submit), #check_config, button[type="button"].ff-btn, a.et_pb_newsletter_button.et_pb_button, .forminator-button-submit, .frm_button_submit, a.sdm_download, .uagb-forms-main-submit-button'),this.responseSelector='textarea[name="h-captcha-response"]',this.getForms().map((function(e){var n=e.querySelector(".h-captcha");if(null===n)return e;if(n.classList.contains("hcaptcha-widget-id"))return e;n.innerHTML="";var r=t.generateID(),o=e.querySelectorAll(t.submitButtonSelector)[0],a=t.render(n);return e.dataset.hCaptchaId=r,t.foundForms.push({hCaptchaId:r,submitButtonElement:o,widgetId:a}),"invisible"!==n.dataset.size&&"true"!==n.dataset.force?e:o?(o.addEventListener("click",t.validate,!0),e):e}),this))}},{key:"isAjaxSubmitButton",value:function(t){var e=t.getAttribute("type"),n="submit"!==(e=e?e.toLowerCase():"");return wp.hooks.applyFilters("hcaptcha.ajaxSubmitButton",n,t)}},{key:"submit",value:function(){var t=this.currentForm.formElement,e=this.currentForm.submitButtonElement;if("form"!==t.tagName.toLowerCase()||this.isAjaxSubmitButton(e))return e.removeEventListener("click",this.validate,!0),void e.click();t.requestSubmit?t.requestSubmit(e):t.submit()}}],a&&o(r.prototype,a),i&&o(r,i),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,a,i}();window.HCaptchaMainObject=window.HCaptchaMainObject||{};const u=i;function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function s(t){var e=function(t,e){if("object"!=c(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==c(e)?e:e+""}function d(t,e,n){return e=p(e),function(t,e){if(e&&("object"==c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,h()?Reflect.construct(e,n||[],p(t).constructor):e.apply(t,n))}function f(t){var e="function"==typeof Map?new Map:void 0;return f=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(h())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var o=new(t.bind.apply(t,r));return n&&m(o,n.prototype),o}(t,arguments,p(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),m(n,t)},f(t)}function h(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(h=function(){return!!t})()}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}const v=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(e,t),n=e,(r=[{key:"connectedCallback",value:function(){window.hCaptcha.addSyncedEventListener(window.hCaptchaBindEvents)}}])&&l(n.prototype,r),o&&l(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r,o}(f(HTMLElement));var y=new u;window.hCaptcha=y,window.hCaptchaGetWidgetId=function(t){y.getWidgetId(t)},window.hCaptchaReset=function(t){y.reset(t)},window.hCaptchaBindEvents=function(){y.bindEvents()},window.hCaptchaSubmit=function(){y.submit()},window.hCaptchaOnLoad=function(){y.addSyncedEventListener((function(){document.dispatchEvent(new CustomEvent("hCaptchaBeforeBindEvents")),window.hCaptchaBindEvents(),document.dispatchEvent(new CustomEvent("hCaptchaLoaded"))}))},window.customElements.define("h-captcha",v),document.dispatchEvent(new CustomEvent("hCaptchaBeforeAPI"))})();