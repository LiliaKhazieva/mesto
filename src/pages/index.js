import {
  elementsList,
  templateSelector,
  popUpBigImage,
  popupAddItemSelector,
  buttonOpenPopupAdd,
  popUpEditProfile,
  buttonOpenPopupProfile,
  nameInput,
  profileTitle,
  profileSubtitle,
  jobInput,
  popupForm,
  popUpDeleteCard,
  popUpAvatarEdit,
  buttonOpenPopupAvatarEdit,
  profileAvatar,
} from '../utils/constants';
import { validationSettings } from '../utils/validations';
import Section from '../components/Section';
import { FormValidator } from '../components/FormValidator';
import Card from '../components/Card';
import { Api } from '../components/Api';
import PopupWithImage from '../components/PopupWithImage';
import { PopupWithForm } from '../components/PopupWithForm';
import UserInfo from '../components/UserInfo';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation';

const userInfo = new UserInfo({
  userName: profileTitle,
  userInfo: profileSubtitle,
  userAvatar: profileAvatar });

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: '342c5125-3193-41dd-94d4-70f64e8689ce',
    'Content-Type': 'application/json'
  }
});

let cardsList;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, cards]) => {
    userInfo.setUserInfo({
      id: user._id,
      name: user.name,
      link: user.avatar,
      job: user.about,
    })
    cardsList = new Section({
      items: cards.reverse(),
      renderer: (card) => {
        createCard(card);
      }
    }, elementsList);
    cardsList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

// валидация
const validators = {};
const forms = document.querySelectorAll(popupForm);
forms.forEach(form => {
  const formValidator = new FormValidator(validationSettings, form);
  formValidator.enableValidation();
  validators[form.getAttribute('name')] = formValidator;
});

// дизейблим кнопку создать когда открывается попап и очищаем форму от ошибок
function openFormAddCard() {
  validators.createForm.clearErrors();
  validators.createForm.disableSubmitButton();
}

// создание карточки
const cards = {};
function createCard(card) {
  const userId = userInfo.getUserInfo().id;
  const newCard = new Card({
    cardData: card,
    isBasketShow: userId === card.owner._id,
    userId: userId,
    handleCardClick,
    handleCardDelete,
    handleCardLike,
  }, templateSelector)
  cards[card._id] = newCard;
  const cardElement = newCard.createCard();
  cardsList.addItem(cardElement);
}

function handleCardLike(id, isUserliked) {
  if (isUserliked) {
    api.unlikeCard(id)
      .then(card => {
        cards[id].setLikes(card.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api.likeCard(id)
      .then(card => {
        cards[id].setLikes(card.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function submitFormAddCard(card) {
  popupAddItem.startLoading();
  api.addNewCard(card)
    .then(newCard => {
      createCard(newCard)
      popupAddItem.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
    popupAddItem.endLoading();
  })
}

// создание формы добавления карточки
const popupAddItem = new PopupWithForm(
  popupAddItemSelector,
  submitFormAddCard,
  openFormAddCard);
popupAddItem.setEventListeners();
buttonOpenPopupAdd.addEventListener('click', () => popupAddItem.open());

// создание попапа изображения
const popupWithImage = new PopupWithImage(popUpBigImage);
popupWithImage.setEventListeners();
function handleCardClick(cardData) {
  popupWithImage.open(cardData);
}

// создание формы редактирования инфы пользователя
function handlerSubmitFormProfile({ name, job }) {
  popupProfileEdit.startLoading();
  api.saveUserInfo({ name, about: job })
    .then(info => {
      userInfo.setUserInfo({
        id: info._id,
        name: info.name,
        job: info.about,
        link: info.avatar,
      });
      popupProfileEdit.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupProfileEdit.endLoading();
    })
}
function openProfileEdit() {
  validators.editForm.clearErrors();
  validators.editForm.disableSubmitButton();
}
const popupProfileEdit = new PopupWithForm(
  popUpEditProfile,
  handlerSubmitFormProfile,
  openProfileEdit);
popupProfileEdit.setEventListeners();

buttonOpenPopupProfile.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  popupProfileEdit.open();
});


function deleteConfirmHandle({ id }) {
  api.deleteCard(id)
    .then(() => {
      cards[id].deleteCard();
      popupDeleteCard.setData({});
      popupDeleteCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
}

// Попап удаления карточки
const popupDeleteCard = new PopupWithConfirmation(popUpDeleteCard, deleteConfirmHandle);
popupDeleteCard.setEventListeners();

function handleCardDelete(id) {
  popupDeleteCard.setData({ id: id })
  popupDeleteCard.open();
}

// Аватар
const popupAvatar = new PopupWithForm(popUpAvatarEdit, handlerSubmitFormAvatar, openAvatarEdit);
popupAvatar.setEventListeners();

buttonOpenPopupAvatarEdit.addEventListener('click', () => {
  popupAvatar.open();
})

function handlerSubmitFormAvatar({link}) {
  popupAvatar.startLoading();
  api.saveUserAvatar(link)
    .then(() => {
      userInfo.setUserInfo({
        ...userInfo.getUserInfo(),
        link,
      });
      popupAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAvatar.endLoading();
    })
}

function openAvatarEdit() {
  validators.createAvatar.clearErrors();
  validators.createAvatar.disableSubmitButton();
}
