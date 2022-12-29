import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { initialCards } from './cards.js';
import { openPopup, closePopup } from './popup.js';

const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const forms = document.querySelectorAll(validationSettings.formSelector);
const bigImagePopup = document.querySelector('.popup__image');
const titleImagePopup = document.querySelector('.popup__title-image')

forms.forEach(form => {
  const formValidator = new FormValidator(validationSettings, form);
  formValidator.enableValidation();
});

function onCardImageClick(cardData) {
  titleImagePopup.textContent = cardData.name;
  bigImagePopup.src = cardData.link;
  bigImagePopup.alt = cardData.name;
  openPopup(popUpBigImage);
}

// находим попапы
const popUpEditProfile = document.querySelector('.popup_edit-profile');
const popUpAddItem = document.querySelector('.popup_add-item');
const popUpBigImage = document.querySelector('.popup_big-image');
// кнопки открытия
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');
// кнопки закрытия
const buttonClosePopupProfile = document.querySelector('.popup__close_edit-profile');
const buttonClosePopupAdd = document.querySelector('.popup__close_add-item');
const buttonClosePopupImage = document.querySelector('.popup__close_big-image');

// попап редактирования профиля
const formElementEdit = document.querySelector('.popup__form-edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_info');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

buttonOpenPopupProfile.addEventListener('click', function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  const submitButton = popUpEditProfile.querySelector(validationSettings.submitButtonSelector);
  FormValidator.disableSubmitButton(submitButton, validationSettings.inactiveButtonClass);
  openPopup(popUpEditProfile);
});
buttonClosePopupProfile.addEventListener('click', function () {
  closePopup(popUpEditProfile);
});

function submitFormProfileHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popUpEditProfile);
}
formElementEdit.addEventListener('submit', submitFormProfileHandler);

// попап добавления изображения
buttonOpenPopupAdd.addEventListener('click', function () {
  const submitButton = popUpAddItem.querySelector(validationSettings.submitButtonSelector);
  FormValidator.disableSubmitButton(submitButton, validationSettings.inactiveButtonClass);
  openPopup(popUpAddItem);
});
buttonClosePopupAdd.addEventListener('click', function () {
  closePopup(popUpAddItem);
});

const popupInputTitle = document.querySelector('.popup__input_type_title')
const popupInputLink = document.querySelector('.popup__input_type_link')
const formElementAdd = document.querySelector('.popup__form-add')

function submitFormAddCard(evt) {
  evt.preventDefault();
  const cardData = {
    name: popupInputTitle.value,
    link: popupInputLink.value,
  };
  renderCard(cardData);
  closePopup(popUpAddItem);
  formElementAdd.reset();
}
formElementAdd.addEventListener('submit', submitFormAddCard);
buttonClosePopupImage.addEventListener('click', function () {
  closePopup(popUpBigImage);
});
const elementsList = document.querySelector('.elements__list');
//функция добавления новой карточки в верстку
const renderCard = (card) => {
  const newCard = new Card(card, '#card-template', onCardImageClick);
  elementsList.prepend(newCard.createCard());
}
initialCards.forEach(card => {
  renderCard(card, elementsList);
});
