// открытый попап
let openedPopup;

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
}
