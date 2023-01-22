import {
  validationSettings,
  elementsList,
  templateSelector,
  popUpBigImage,
  popupAddItemSelector,
  buttonOpenPopupAdd,
  popUpEditProfile,
  nameInput,
  profileTitle,
  profileSubtitle,
  buttonOpenPopupProfile,
  jobInput,
  popupForm,
} from '../components/constants';

import { initialCards } from '../components/cards';
import Section from '../components/Section';
import { FormValidator } from '../components/FormValidator';
import Card from '../components/Card';
import PopupWithImage from '../components/PopupWithImage';
import { PopupWithForm } from '../components/PopupWithForm';
import UserInfo from '../components/UserInfo';

// валидация
const validators = {};
const forms = document.querySelectorAll(popupForm);
forms.forEach(form => {
  const formValidator = new FormValidator(validationSettings, form);
  formValidator.enableValidation();
  validators[form.getAttribute('name')] = formValidator;
});
validators.createForm.disableSubmitButton();

// создание карточки
function submitFormAddCard(card) {
  const newCard = new Card({ cardData: card, handleCardClick }, templateSelector)
  const cardElement = newCard.createCard();
  Cards.addItem(cardElement);
  popupAddItem.close();
}

// создание формы добавления карточки
const popupAddItem = new PopupWithForm(popupAddItemSelector, submitFormAddCard);
popupAddItem.setEventListeners();
buttonOpenPopupAdd.addEventListener('click', () => popupAddItem.open());

// создание попапа изображения
const popupWithImage = new PopupWithImage(popUpBigImage);
popupWithImage.setEventListeners();
function handleCardClick(cardData) {
  popupWithImage.open(cardData);
}

// создание формы редактирования инфы пользователя
const userInfo = new UserInfo({ userName: profileTitle, userInfo: profileSubtitle });
function handlerSubmitFormProfile({name, job}) {
  userInfo.setUserInfo({name, job});
  popupProfileEdit.close();
}
const popupProfileEdit = new PopupWithForm(popUpEditProfile, handlerSubmitFormProfile);
popupProfileEdit.setEventListeners();

buttonOpenPopupProfile.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  popupProfileEdit.open();
});

// вставка карточек
const Cards = new Section({
  items: initialCards,
  renderer: (card) => {
    const newCard = new Card({ cardData: card, handleCardClick }, templateSelector)
    const cardElement = newCard.createCard();
    Cards.addItem(cardElement);
  }
}, elementsList);
Cards.renderItems();
