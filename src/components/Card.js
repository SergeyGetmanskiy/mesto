export class Card {
  constructor({data, templateSelector, handleCardClick, handleDeleteClick, putLike, deleteLike}) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._likeCount = data.likes.length;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._putLike = putLike;
    this._deleteLike = deleteLike;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true)
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => { // Поставить/удалить лайк
      this._checkLikeButtonState();
    });
    this._deleteButton.addEventListener('click', () => { // Удалить карточку
      this._handleDeleteClick(this._id);
    });
    this._cardImage.addEventListener('click', () => { // Открыть попап карточки кликом на изображение
      this._handleCardClick(this._name, this._link);
    });
  }

  _checkLikeButtonState() {
    if(!this._likeButton.classList.contains('button_active')) {
      this._toggleLikeButton();
      this._putLike(this._id);
    } else {
      this._toggleLikeButton();
      this._deleteLike(this._id);
    }
  }

  _toggleLikeButton() {
    this._likeButton.classList.toggle('button_active');
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardElement.id = this._id;
    this._deleteButton = this._cardElement.querySelector('.button_type_delete-button');
    this._likeButton = this._cardElement.querySelector('.button_type_like-button');
    if(this._ownerId === '972f9c4c15e96e81412b9ce9') {
      this._deleteButton.classList.remove('button_hidden');
    } else {
      this._deleteButton.classList.add('button_hidden');
    }
    this._cardElement.querySelector('.card__location').textContent = this._name;
    this._cardElement.querySelector('#like-count').textContent = this._likeCount;
    this._cardImage = this._cardElement.querySelector('.card__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._setEventListeners();
    return this._cardElement;
  }
}










