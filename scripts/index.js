// находим попапы
const popUpEditProfile = document.querySelector('.popup_edit-profile');
const popUpAddItem = document.querySelector('.popup_add-item');
const popUpBigImage = document.querySelector('.popup_big-image');
// кнопки открытия
const openPopupEditButton = document.querySelector('.profile__edit-button');
const openProfileAddButton = document.querySelector('.profile__add-button');
// кнопки закрытия
const closePopupEditButton = document.querySelector('.popup__close_edit-profile');
const closePopupAddButton = document.querySelector('.popup__close_add-item');
const closePopupImageButton = document.querySelector('.popup__close_big-image');

const openToPopup = function (open) {
  open.classList.add('popup_opened');
}
const closeToPopup = function (close) {
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
  openToPopup(popUpEditProfile);
});
closePopupEditButton.addEventListener('click', function () {
  closeToPopup(popUpEditProfile);
});

function formEditSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closeToPopup(popUpEditProfile);
}
formElementEdit.addEventListener('submit', formEditSubmitHandler);

// попап добавления изображения
openProfileAddButton.addEventListener('click', function () {
  openToPopup(popUpAddItem);
});
closePopupAddButton.addEventListener('click', function () {
  closeToPopup(popUpAddItem);
});

const popupInputTitle = document.querySelector('.popup__input_type_title')
const popupInputLink = document.querySelector('.popup__input_type_link')
const formElementAdd = document.querySelector('.popup__form-add')

function formSubmitAdd(evt) {
  evt.preventDefault();
  const cardData = {
    name: popupInputTitle.value,
    link: popupInputLink.value,
  };
  renderCard(cardData);
  closeToPopup(popUpAddItem);
  formElementAdd.reset();
}
formElementAdd.addEventListener('submit', formSubmitAdd);

//попап с изображением
const bigImagePopup = document.querySelector('.popup__image');
const titleImagePopup = document.querySelector('.popup__title-image')
const openImagePopup = function (cardObj){
  openToPopup(popUpBigImage);
  titleImagePopup.textContent = cardObj.name;
  bigImagePopup.src = cardObj.link;
  bigImagePopup.alt = cardObj.name;
};
closePopupImageButton.addEventListener('click', function () {
  closeToPopup(popUpBigImage);
});
const elementsList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template');
const cardNote = cardTemplate.content.querySelector('.elements__item');
// создаем карточку из шаблона
const createCard = (obj) => {
  const newCard = cardNote.cloneNode(true);
  const cardTitle = newCard.querySelector('.elements__title')
  const cardImage = newCard.querySelector('.elements__image')
  const cardLikeButton = newCard.querySelector('.elements__like-button')
  const elementsDeleteButton = newCard.querySelector('.elements__delete-button');
  cardTitle.textContent = obj.name;
  cardImage.src = obj.link;
  cardImage.alt = obj.name;
  cardLikeButton.addEventListener('click', likeButtonHandler);
  elementsDeleteButton.addEventListener('click', deleteElementsHandler);
  cardImage.addEventListener('click', function () {
    openImagePopup(obj);
  });
  return newCard;
}
//функция добавления новой карточки в верстку
const renderCard = (data) => {
  const newCard = createCard(data);
  elementsList.prepend(newCard);
}
initialCards.forEach(card => {
  renderCard(card, elementsList);
});
