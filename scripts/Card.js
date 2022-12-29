export class Card {
  constructor(cardData, templateSelector, onCardImageClick) {
    this._name = cardData.name;
    this._alt = cardData.name;
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
    this._element.querySelector('.elements__like-button').addEventListener('click', this._likeButtonHandler);
    this._element.querySelector('.elements__delete-button').addEventListener('click', this._deleteElementsHandler);
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
    this._setEventListeners();
    this._element.querySelector('.elements__title').textContent = this._name;
    const cardImage = this._element.querySelector('.elements__image');
    cardImage.src = this._link;
    cardImage.alt = this._alt;
    return this._element;
  }

  _likeButtonHandler(evt) {
    evt.stopPropagation()
    evt.target.classList.toggle('elements__like-button_active');
  }
  _deleteElementsHandler(evt) {
    evt.stopPropagation()
    evt.target.closest('.elements__item').remove();
  }
}
