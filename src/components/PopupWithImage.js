import Popup from './Popup';
import { popupImage, popupTitleImage } from './constants';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(popupImage);
    this._title = this._popup.querySelector(popupTitleImage)
  }

  open(cardData) {
    this._image.src = cardData.link;
    this._title.textContent = cardData.name;
    super.open();
  }
}
