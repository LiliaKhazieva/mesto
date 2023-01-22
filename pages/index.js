import Section from '../scripts/Section.js';

import { FormValidator } from '../scripts/FormValidator.js';
import Card from '../scripts/Card.js';
import { initialCards } from '../scripts/cards.js';
import {
  validationSettings,
  elementsList,
  templateSelector,
  popUpBigImage,
  popupAddItemSelector,
  buttonOpenPopupAdd,
  popUpEditProfile,
  popupInputTitle,
  nameInput,
  profileTitle,
  profileSubtitle,
  buttonOpenPopupProfile, jobInput, popupInput,
} from '../scripts/constants.js';
import PopupWithImage from "../scripts/PopupWithImage.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import UserInfo from "../scripts/UserInfo.js";

const validators = {};


function submitFormAddCard(card) {
  const newCard = new Card({cardData: card, handleCardClick}, templateSelector)
  const cardElement = newCard.createCard();
  Cards.addItem(cardElement);
  popupAddItem.close();
}

const popupAddItem = new PopupWithForm(popupAddItemSelector, submitFormAddCard);
popupAddItem.setEventListeners();
buttonOpenPopupAdd.addEventListener('click', () => popupAddItem.open())

const forms = document.querySelectorAll('.popup__form');

forms.forEach(form => {
  const formValidator = new FormValidator(validationSettings, form);
  formValidator.enableValidation();
  validators[form.getAttribute('name')] = formValidator;
});
validators.createForm.disableSubmitButton();

const popupWithImage = new PopupWithImage(popUpBigImage);
popupWithImage.setEventListeners();
function handleCardClick(cardData) {
  popupWithImage.open(cardData);
}

// const userInfo = new UserInfo({
//  name: profileTitle,
//  info: profileSubtitle,
// });

const userInfo = new UserInfo({userName: profileTitle, userInfo: profileSubtitle});
function handlerSubmitFormProfile({name, job}) {
  userInfo.setUserInfo({name, job});
  popupProfileEdit.close()
}
const popupProfileEdit = new PopupWithForm(popUpEditProfile, handlerSubmitFormProfile);
popupProfileEdit.setEventListeners();

buttonOpenPopupProfile.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  popupProfileEdit.open();
});




/*buttonOpenPopupProfile.addEventListener('click', function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  validators.editForm.disableSubmitButton();
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
  validators.createForm.disableSubmitButton();
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
});*/

//функция добавления новой карточки в верстку
const Cards = new Section({
  items: initialCards,
  renderer: (card) => {
    const newCard = new Card({cardData: card, handleCardClick}, templateSelector)
    const cardElement = newCard.createCard();
    Cards.addItem(cardElement);
  }
}, elementsList);
Cards.renderItems();

// const renderCard = (card) => {
//   const newCard = new Card(card, '#card-template', onCardImageClick);
//   elementsList.prepend(newCard.createCard());
// }
// initialCards.forEach(card => {
//   renderCard(card, elementsList);
// });
