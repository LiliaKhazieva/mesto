// находим попапы
const popUpEditProfile = document.querySelector('.popup_edit-profile');
const popUpAddItem = document.querySelector('.popup_add-item');
const popUpBigImage = document.querySelector('.popup_big-image');
// кнопки открытия
const openPopupEditButton = document.querySelector('.profile__edit-button');
const openProfileAddButton = document.querySelector('.profile__add-button');
// кнопки закрытия
const closePopupEditProfile = document.querySelector('.popup__close_edit-profile');
const closePopupAddItem = document.querySelector('.popup__close_add-item');
const closePopupBigImage = document.querySelector('.popup__close_big-image');

const popUpOpen = function (open) {
  open.classList.add('popup_opened');
}
const popUpClose = function (close) {
  close.classList.remove('popup_opened');
}
const likeButtonHandler = function (evt){
  evt.target.classList.toggle('elements__like-button_active');
}
const deleteElementsHandler = function (evt){
  evt.target.closest('.elements__item').remove();
}
// попап редактирования профиля
const formElementEdit = document.querySelector('.popup__form-edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_info');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

openPopupEditButton.addEventListener('click', function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  popUpOpen(popUpEditProfile);
});
closePopupEditProfile.addEventListener('click', function () {
  popUpClose(popUpEditProfile);
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  popUpClose(popUpEditProfile);
}
formElementEdit.addEventListener('submit', formSubmitHandler);

// попап добавления изображения
openProfileAddButton.addEventListener('click', function () {
  popUpOpen(popUpAddItem);
});
closePopupAddItem.addEventListener('click', function () {
  popUpClose(popUpAddItem);
});

const popupInputTitle = document.querySelector('.popup__input_type_title')
const popupInputLink = document.querySelector('.popup__input_type_link')
const formElementAdd = document.querySelector('.popup__form-add')

function formSubmitAdd(evt) {
  evt.preventDefault();
  const todo = {
    name: popupInputTitle.value,
    link: popupInputLink.value,
  };
  renderCard(todo);
  popUpClose(popUpAddItem);
  popupInputTitle.value = "";
  popupInputLink.value = "";
}
formElementAdd.addEventListener('submit', formSubmitAdd);

//попап с изображением
const addImagePopupHandler = function (obj){
  const popupBig = document.querySelector('.popup__image');
  const titleImagePop = document.querySelector('.popup__title-image')
  popUpOpen(popUpBigImage);
  titleImagePop.textContent = obj.name;
  popupBig.src = obj.link;
  popupBig.alt = obj.name;
  closePopupBigImage.addEventListener('click', function () {
    popUpClose(popUpBigImage);
  })
};
// карточки массив
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const elementsList = document.querySelector('.elements__list');
// создаем карточку из шаблона
const createCard = (obj) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const elementsCard = cardTemplate.cloneNode(true);
  const cardTitle = elementsCard.querySelector('.elements__title')
  const cardImage = elementsCard.querySelector('.elements__image')
  const cardLikeButton = elementsCard.querySelector('.elements__like-button')
  const elementsDeleteButton = elementsCard.querySelector('.elements__delete-button');
  cardTitle.textContent = obj.name;
  cardImage.src = obj.link;
  cardImage.alt = obj.name;
  cardLikeButton.addEventListener('click', likeButtonHandler);
  elementsDeleteButton.addEventListener('click', deleteElementsHandler);
  cardImage.addEventListener('click', function () {
    addImagePopupHandler(obj);
  });
  return elementsCard;
}
//функция добавления новой карточки в верстку
const renderCard = (data) => {
  const elementsCard = createCard(data);
  elementsList.prepend(elementsCard);
}
initialCards.forEach(card => {
  renderCard(card, elementsList);
});
