export class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
    this._setEventListeners();
  }

  _setEventListeners() {
    const inputList = this._form.querySelectorAll(this._settings.inputSelector);
    const submitButton = this._form.querySelector(this._settings.submitButtonSelector);
    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._validate(input);
        if (this._form.checkValidity()) {
          FormValidator.enableSubmitButton(submitButton, this._settings.inactiveButtonClass);
        } else {
          FormValidator.disableSubmitButton(submitButton, this._settings.inactiveButtonClass);
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
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
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

  static disableSubmitButton(button, inactiveButtonClass) {
    button.setAttribute('disabled', 'disabled');
    button.classList.add(inactiveButtonClass);
  }

  static enableSubmitButton(button, inactiveButtonClass) {
    button.removeAttribute('disabled');
    button.classList.remove(inactiveButtonClass);
  }
}
