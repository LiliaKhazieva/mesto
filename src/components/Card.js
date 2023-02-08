export default class Card {
  constructor({ cardData, isBasketShow, userId, handleCardClick, handleCardDelete, handleCardLike }, templateSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardId = cardData._id;
    this._likes = cardData.likes;
    this._userId = userId;
    this._isBasketShow = isBasketShow;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;
  }

  _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._handleCardClick({
        name: this._name,
        link: this._link,
      })
    });
    this._likeButton.addEventListener('click', (evt) => {
      // не пробрасываем дальше, чтобы не вызвался handleCardClick
      evt.stopPropagation();
      this._handleCardLike(this._cardId, this.isUserLiked());
    });
    this._removeButton.addEventListener('click', (evt) => {
      // не пробрасываем дальше, чтобы не вызвался handleCardClick
      evt.stopPropagation();
      this._handleCardDelete(this._cardId);
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
    this._likesCount = this._element.querySelector('.elements__count');
    this._setEventListeners();
    this._showBasket();
    this._updateLikes();
    this._title.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    return this._element;
  }

  deleteCard() {
    this._element.remove();
  }

  setLikes(likes) {
    this._likes = likes;
    this._updateLikes();
  }

  isUserLiked() {
    return !!this._likes.find(item => item._id === this._userId);
  }

  _showBasket() {
    if (this._isBasketShow) {
      this._removeButton.classList.add('elements__delete-button_show');
    }
  }

  _updateLikes() {
    this._likesCount.textContent = this._likes.length;
    this._likeButton.classList.toggle('elements__like-button_active', this.isUserLiked());
  }
}
