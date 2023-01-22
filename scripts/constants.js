export const validationSettings = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
// попапы
export const popUpEditProfile = '.popup_edit-profile';
export const popUpBigImage = '.popup_big-image';
// кнопки открытия
export const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
export const buttonOpenPopupAdd = document.querySelector('.profile__add-button');
// кнопки закрытия
export const buttonClosePopupProfile = document.querySelector('.popup__close_edit-profile');
export const buttonClosePopupAdd = document.querySelector('.popup__close_add-item');
export const buttonClosePopupImage = document.querySelector('.popup__close_big-image');
// попап редактирования профиля
export const formElementEdit = document.querySelector('.popup__form-edit');
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_info');
export const profileTitle = '.profile__title';
export const profileSubtitle = '.profile__subtitle';


const bigImagePopup = document.querySelector('.popup__image');
const titleImagePopup = document.querySelector('.popup__title-image')

export const elementsList = '.elements__list';
export const templateSelector = '#card-template';
export const popupCloseSelector = '.popup__close';
export const popupForm = '.popup__form';
export const popupImage = '.popup__image';
export const popupTitleImage = '.popup__title-image';
export const popupAddItemSelector = '.popup_add-item';
export const popupInput = '.popup__input';
export const popupInputTitle = '.popup__input_type_title';
export const popupInputLink = '.popup__input_type_link';
