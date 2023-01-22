import { popupCloseSelector } from "./constants.js";

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector(popupCloseSelector);
  }
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  }
  _handleEscClose(e) {
    if (e.key === 'Escape') {
      this.close();
    }
  }
  setEventListeners() {
    this._closeButton.addEventListener("click", this.close.bind(this))
    this._popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains('popup')) {
        this.close();
      }
    })
  }
}

// открытый попап
/*let openedPopup;

const openPopup = function (popup) {
  popup.classList.add('popup_opened');
  openedPopup = popup;
  document.addEventListener('keydown', handlePopupEscape)
  document.addEventListener('click', handlePopupClick);
}

const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
  openedPopup = null;
  document.removeEventListener('keydown', handlePopupEscape);
  document.removeEventListener('click', handlePopupClick);
}

function handlePopupEscape(evt) {
  if (evt.key === 'Escape') {
    closePopup(openedPopup);
  }
}

function handlePopupClick(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}

export {
  openPopup,
  closePopup,
} */
