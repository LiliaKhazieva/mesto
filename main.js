(()=>{"use strict";var t=document.querySelector(".profile__edit-button"),e=document.querySelector(".profile__add-button"),n=document.querySelector(".profile__avatar-edit"),r=document.querySelector(".popup__input_type_name"),o=document.querySelector(".popup__input_type_info"),i=".popup__form",u={inputSelector:".popup__input",submitButtonSelector:".popup__form-button",inactiveButtonClass:"popup__form-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var c=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var p=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._settings=e,this._form=n,this._setEventListeners()}var e,n;return e=t,(n=[{key:"_setEventListeners",value:function(){var t=this;this._inputList=this._form.querySelectorAll(this._settings.inputSelector),this._submitButton=this._form.querySelector(this._settings.submitButtonSelector),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._validate(e),t._form.checkValidity()?t.enableSubmitButton():t.disableSubmitButton()}))}))}},{key:"_validate",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_showInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));e.textContent=t.validationMessage,e.classList.add(this._settings.errorClass),t.classList.add(this._settings.inputErrorClass)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));e.textContent="",e.classList.remove(this._settings.errorClass),t.classList.remove(this._settings.inputErrorClass)}},{key:"clearErrors",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"disableSubmitButton",value:function(){this._submitButton.setAttribute("disabled",!0),this._submitButton.classList.add(this._settings.inactiveButtonClass)}},{key:"enableSubmitButton",value:function(){this._submitButton.removeAttribute("disabled"),this._submitButton.classList.remove(this._settings.inactiveButtonClass)}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}var d=function(){function t(e,n){var r=e.cardData,o=e.isBasketShow,i=e.userId,u=e.handleCardClick,a=e.handleCardDelete,s=e.handleCardLike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=r.name,this._link=r.link,this._cardId=r._id,this._likes=r.likes,this._userId=i,this._isBasketShow=o,this._templateSelector=n,this._handleCardClick=u,this._handleCardDelete=a,this._handleCardLike=s}var e,n;return e=t,(n=[{key:"_setEventListeners",value:function(){var t=this;this._element.addEventListener("click",(function(){t._handleCardClick({name:t._name,link:t._link})})),this._likeButton.addEventListener("click",(function(e){e.stopPropagation(),t._handleCardLike(t._cardId,t.isUserLiked())})),this._removeButton.addEventListener("click",(function(e){e.stopPropagation(),t._handleCardDelete(t._cardId)}))}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__item").cloneNode(!0)}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".elements__like-button"),this._removeButton=this._element.querySelector(".elements__delete-button"),this._image=this._element.querySelector(".elements__image"),this._title=this._element.querySelector(".elements__title"),this._likesCount=this._element.querySelector(".elements__count"),this._setEventListeners(),this._showBasket(),this._updateLikes(),this._title.textContent=this._name,this._image.src=this._link,this._image.alt=this._name,this._element}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"setLikes",value:function(t){this._likes=t,this._updateLikes()}},{key:"isUserLiked",value:function(){var t=this;return!!this._likes.find((function(e){return e._id===t._userId}))}},{key:"_showBasket",value:function(){this._isBasketShow&&this._removeButton.classList.add("elements__delete-button_show")}},{key:"_updateLikes",value:function(){this._likesCount.textContent=this._likes.length,this._likeButton.classList.toggle("elements__like-button_active",this.isUserLiked())}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}var m=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseUrl=e.baseUrl,this.headers=e.headers}var e,n;return e=t,(n=[{key:"_getResponseCheck",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(this._getResponseCheck)}},{key:"saveUserInfo",value:function(t){var e=t.name,n=t.about;return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,about:n})}).then(this._getResponseCheck)}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then(this._getResponseCheck)}},{key:"addNewCard",value:function(t){var e=t.name,n=t.link;return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e,link:n})}).then(this._getResponseCheck)}},{key:"deleteCard",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this.headers}).then(this._getResponseCheck)}},{key:"likeCard",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this.headers}).then(this._getResponseCheck)}},{key:"unlikeCard",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this.headers}).then(this._getResponseCheck)}},{key:"saveUserAvatar",value:function(t){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:t})}).then(this._getResponseCheck)}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}var S=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this),this.close=this.close.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._closeButton.addEventListener("click",this.close),this._popup.addEventListener("click",(function(e){e.target.classList.contains("popup")&&t.close()}))}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=O(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function O(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function P(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return P(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".popup__image"),e._title=e._popup.querySelector(".popup__title-image"),e}return e=u,(n=[{key:"open",value:function(t){this._image.src=t.link,this._image.alt=t.name,this._title.textContent=t.name,j(C(u.prototype),"open",this).call(this)}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=R(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},I.apply(this,arguments)}function R(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}function U(t,e){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},U(t,e)}function q(t,e){if(e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&U(t,e)}(a,t);var e,n,r,o,u=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(r);if(o){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return q(this,t)});function a(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=u.call(this,t))._form=r._popup.querySelector(i),r._submitHandler=e,r._openHandler=n,r._input=r._form.querySelectorAll(".popup__input"),r._submitButton=r._form.querySelector(".popup__form-button"),r._defaultText=r._submitButton.textContent,r._loadingText="Сохранение...",r}return e=a,(n=[{key:"_getInputValues",value:function(){var t=this;return this._values={},this._input.forEach((function(e){t._values[e.name]=e.value})),this._values}},{key:"setEventListeners",value:function(){var t=this;I(x(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitHandler(t._getInputValues())}))}},{key:"open",value:function(){I(x(a.prototype),"open",this).call(this),this._openHandler()}},{key:"close",value:function(){I(x(a.prototype),"close",this).call(this),this._form.reset()}},{key:"startLoading",value:function(){this._submitButton.textContent=this._loadingText}},{key:"endLoading",value:function(){this._submitButton.textContent=this._defaultText}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(S);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}var N=function(){function t(e){var n=e.userName,r=e.userInfo,o=e.userAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._info=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{id:this._id,name:this._name.textContent,job:this._info.textContent,link:this._avatar.src}}},{key:"setUserInfo",value:function(t){var e=t.id,n=t.name,r=t.job,o=t.link;e&&(this._id=e),n&&(this._name.textContent=n),r&&(this._info.textContent=r),o&&(this._avatar.src=o)}}])&&H(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}function J(){return J="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=M(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},J.apply(this,arguments)}function M(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=G(t)););return t}function z(t,e){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},z(t,e)}function $(t,e){if(e&&("object"===V(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function G(t){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},G(t)}var K=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&z(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=G(r);if(o){var n=G(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return $(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._confirmHandle=e,n._confirmButton=n._popup.querySelector(".popup__form-button_confirm"),n}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;J(G(u.prototype),"setEventListeners",this).call(this),this._confirmButton.addEventListener("click",(function(){t._confirmHandle(t._data)}))}},{key:"setData",value:function(t){this._data=t}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function W(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function X(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?W(Object(n),!0).forEach((function(e){Y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Y(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==Q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===Q(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var tt,et=new N({userName:".profile__title",userInfo:".profile__subtitle",userAvatar:".profile__avatar"}),nt=new m({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-59",headers:{authorization:"342c5125-3193-41dd-94d4-70f64e8689ce","Content-Type":"application/json"}});Promise.all([nt.getUserInfo(),nt.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],s=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);s=!0);}catch(t){c=!0,o=t}finally{try{if(!s&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return Z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];et.setUserInfo({id:o._id,name:o.name,link:o.avatar,job:o.about}),(tt=new c({items:i.reverse(),renderer:function(t){it(t)}},".elements__list")).renderItems()})).catch((function(t){console.log(t)}));var rt={};document.querySelectorAll(i).forEach((function(t){var e=new p(u,t);e.enableValidation(),rt[t.getAttribute("name")]=e}));var ot={};function it(t){var e=et.getUserInfo().id,n=new d({cardData:t,isBasketShow:e===t.owner._id,userId:e,handleCardClick:ct,handleCardDelete:pt,handleCardLike:ut},"#card-template");ot[t._id]=n;var r=n.createCard();tt.addItem(r)}function ut(t,e){e?nt.unlikeCard(t).then((function(e){ot[t].setLikes(e.likes)})).catch((function(t){console.log(t)})):nt.likeCard(t).then((function(e){ot[t].setLikes(e.likes)})).catch((function(t){console.log(t)}))}var at=new D(".popup_add-item",(function(t){at.startLoading(),nt.addNewCard(t).then((function(t){it(t),at.close()})).catch((function(t){console.log(t)})).finally((function(){at.endLoading()}))}),(function(){rt.createForm.clearErrors(),rt.createForm.disableSubmitButton()}));at.setEventListeners(),e.addEventListener("click",(function(){return at.open()}));var st=new L(".popup_big-image");function ct(t){st.open(t)}st.setEventListeners();var lt=new D(".popup_edit-profile",(function(t){var e=t.name,n=t.job;lt.startLoading(),nt.saveUserInfo({name:e,about:n}).then((function(t){et.setUserInfo({id:t._id,name:t.name,job:t.about,link:t.avatar}),lt.close()})).catch((function(t){console.log(t)})).finally((function(){lt.endLoading()}))}),(function(){rt.editForm.clearErrors(),rt.editForm.disableSubmitButton()}));lt.setEventListeners(),t.addEventListener("click",(function(){var t=et.getUserInfo();r.value=t.name,o.value=t.job,lt.open()}));var ft=new K(".popup_delete-card",(function(t){var e=t.id;nt.deleteCard(e).then((function(){ot[e].deleteCard(),ft.setData({}),ft.close()})).catch((function(t){console.log(t)}))}));function pt(t){ft.setData({id:t}),ft.open()}ft.setEventListeners();var yt=new D(".popup_avatar-edit",(function(t){var e=t.link;yt.startLoading(),nt.saveUserAvatar(e).then((function(){et.setUserInfo(X(X({},et.getUserInfo()),{},{link:e})),yt.close()})).catch((function(t){console.log(t)})).finally((function(){yt.endLoading()}))}),(function(){rt.createAvatar.clearErrors(),rt.createAvatar.disableSubmitButton()}));yt.setEventListeners(),n.addEventListener("click",(function(){yt.open()}))})();