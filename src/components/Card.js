export class Card {
  constructor({data, templateSelector, handleCardClick, handleDeleteClick, putLike, deleteLike}, userId) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._likeCount = data.likes.length;
    this._likeOwners = Array.from(data.likes);
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._putLike = putLike;
    this._deleteLike = deleteLike;
    this._userId = userId;
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
      this._putLike(this._id);
    } else {
      this._deleteLike(this._id);
    }
  }

  // Обработчик счетчика лайков и закрашивания сердечка
  handleLikeButtonClick(serverResponse) {
  this._likeCountElement.textContent = serverResponse.likes.length;
  this._likeButton.classList.toggle('button_active');
}


  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardElement.id = this._id;
    this._deleteButton = this._cardElement.querySelector('.button_type_delete-button');
    this._likeButton = this._cardElement.querySelector('.button_type_like-button');
    this._likeCountElement = this._cardElement.querySelector('#like-count');
    if(this._likeOwners.some(owner => {return owner._id === this._userId})) {
      this._likeButton.classList.add('button_active');
    } else {
      this._likeButton.classList.remove('button_active');
    }
    if(this._ownerId === this._userId) {
      this._deleteButton.classList.remove('button_hidden');
    } else {
      this._deleteButton.classList.add('button_hidden');
    }
    this._cardElement.querySelector('.card__location').textContent = this._name;
    this._likeCountElement.textContent = this._likeCount;
    this._cardImage = this._cardElement.querySelector('.card__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._setEventListeners();
    return this._cardElement;
  }
}










