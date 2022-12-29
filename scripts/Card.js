export class Card {
  constructor(cardData, templateSelector, onCardImageClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._onCardImageClick = onCardImageClick;
  }

  _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._onCardImageClick({
        name: this._name,
        link: this._link,
      })
    });
    this._likeButton.addEventListener('click', (evt) => {
      // не пробрасываем дальше, чтобы не вызвался onCardImageClick
      evt.stopPropagation();
      this._likeButtonHandler();
    });
    this._removeButton.addEventListener('click', (evt) => {
      // не пробрасываем дальше, чтобы не вызвался onCardImageClick
      evt.stopPropagation();
      this._deleteElementsHandler();
    });
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.elements__item')
      .cloneNode(true);
  }

  createCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.elements__like-button');
    this._removeButton = this._element.querySelector('.elements__delete-button');
    this._image = this._element.querySelector('.elements__image');
    this._title = this._element.querySelector('.elements__title');
    this._setEventListeners();
    this._title.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    return this._element;
  }

  _likeButtonHandler() {
    this._likeButton.classList.toggle('elements__like-button_active');
  }

  _deleteElementsHandler() {
    this._element.remove();
  }
}
