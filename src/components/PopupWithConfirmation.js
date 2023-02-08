import Popup from './Popup';
import { popupConfirmationConfirm } from './constants';

export class PopupWithConfirmation extends Popup{
  constructor(popupSelector, confirmHandle) {
    super(popupSelector);
    this._confirmHandle = confirmHandle;
    this._confirmButton = this._popup.querySelector(popupConfirmationConfirm)
  }
  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener('click', () => {
      this._confirmHandle(this._data);
    })
  }
  setData(data) {
    this._data = data;
  }
}
