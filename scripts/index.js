 const openPopup = document.querySelector('.profile__edit-button');
 const closePopup = document.querySelector('.popup__close-button');
 const popUp = document.querySelector('.popup');

 openPopup.addEventListener('click', function (e){
   e.preventDefault();
   popUp.classList.add('active');
 })

 closePopup.addEventListener('click', () => {
   popUp.classList.remove('active');
 });

 let formElement = document.querySelector('.popup__form');

 let nameInput = document.querySelector('.input-name');
 let jobInput = document.querySelector('.input-job');
 let popupFormButton = document.querySelector('.popup__form-button');

   function formSubmitHandler (evt) {
     evt.preventDefault();
     nameInput.value;
     jobInput.value;

     let profileTitle = document.querySelector('.profile__title');
     let profileSubtitle = document.querySelector('.profile__subtitle');

     profileTitle.textContent = nameInput.value;
     profileSubtitle.textContent = jobInput.value;
     popUp.classList.remove('active');
   }

 formElement.addEventListener('submit', formSubmitHandler);
