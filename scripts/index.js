 const popUp = document.querySelector('.popup');
 const openPopup = document.querySelector('.profile__edit-button');
 const closePopup = document.querySelector('.popup__close-button');

 let formElement = document.querySelector('.popup__form');
 let nameInput = document.querySelector('.popup__input_type_name');
 let jobInput = document.querySelector('.popup__input_type_info');
 let profileTitle = document.querySelector('.profile__title');
 let profileSubtitle = document.querySelector('.profile__subtitle');

 const popupOpen = function () {
   nameInput.value = profileTitle.textContent;
   jobInput.value = profileSubtitle.textContent;

   popUp.classList.add('popup_opened');
 }

 const popupClose = function () {
   popUp.classList.remove('popup_opened');
 }

 function formSubmitHandler(evt) {
   evt.preventDefault();
   profileTitle.textContent = nameInput.value;
   profileSubtitle.textContent = jobInput.value;

   popupClose();
 }

 openPopup.addEventListener('click', popupOpen);
 closePopup.addEventListener('click', popupClose);
 formElement.addEventListener('submit', formSubmitHandler);
