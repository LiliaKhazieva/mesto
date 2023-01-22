export class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
    this._setEventListeners();
  }

  _setEventListeners() {
    this._inputList = this._form.querySelectorAll(this._settings.inputSelector);
    this._submitButton = this._form.querySelector(this._settings.submitButtonSelector);
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._validate(input);
        if (this._form.checkValidity()) {
          this.enableSubmitButton();
        } else {
          this.disableSubmitButton();
        }
      });
    });
  };

  _validate(input) {
    if (input.validity.valid) {
      this._hideInputError(input);
    } else {
      this._showInputError(input);
    }
  }

  enableValidation() {
    this._setEventListeners();
  }

  _showInputError(input) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this._settings.errorClass);
    input.classList.add(this._settings.inputErrorClass);
  }

  _hideInputError(input) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove(this._settings.errorClass);
    input.classList.remove(this._settings.inputErrorClass);
  }

  disableSubmitButton() {
    this._submitButton.setAttribute('disabled', true);
    this._submitButton.classList.add(this._settings.inactiveButtonClass);
  }

  enableSubmitButton() {
    this._submitButton.removeAttribute('disabled');
    this._submitButton.classList.remove(this._settings.inactiveButtonClass);
  }
}
