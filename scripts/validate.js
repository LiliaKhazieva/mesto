function enableValidation(obj) {
  const formList = document.querySelectorAll(obj.formSelector);
  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(form, obj);
  });
}

function validate(form, input, obj) {
  if (input.validity.valid) {
    hideInputError(form, input, obj);
  } else {
    showInputError(form, input, obj);
  }
}

const setEventListeners = (formElement, obj) => {
  const inputList = formElement.querySelectorAll(obj.inputSelector);
  const submitButton = formElement.querySelector(obj.submitButtonSelector);
  inputList.forEach((input) => {
    input.addEventListener('input', function () {
      validate(formElement, input, obj);
      if (formElement.checkValidity()) {
        submitButton.classList.remove(obj.inactiveButtonClass);
      } else {
        submitButton.classList.add(obj.inactiveButtonClass);
      }
    });
  });
};

const showInputError = (formElement, inputElement, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(obj.errorClass);
  inputElement.classList.add(obj.inputErrorClass);
}

const hideInputError = (formElement, inputElement, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = '';
  errorElement.classList.remove(obj.errorClass);
  inputElement.classList.remove(obj.inputErrorClass);
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
