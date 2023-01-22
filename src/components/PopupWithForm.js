import Popup from './Popup';
import { popupForm, popupInput } from './constants';

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._form = this._popup.querySelector(popupForm);
    this._submitHandler = submitHandler;
    this._input = this._form.querySelectorAll(popupInput);
  }

  _getInputValues() {
    this._values = {};
    this._input.forEach((input) => {
      this._values[input.name] = input.value;
    });
    return this._values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._submitHandler(this._getInputValues());
    })
  }

  close() {
    super.close();
    this._form.reset();
  }
}
