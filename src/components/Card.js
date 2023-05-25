export class Card {
  constructor({data, templateSelector, handleCardClick}) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true)
  }

  _setEventListeners() {
    this._cardElement.querySelector('.button_type_like-button').addEventListener('click', this._handleLikeButtonClick.bind(this));   // Поставить лайк
    this._cardElement.querySelector('.button_type_delete-button').addEventListener('click', this._handleDeleteCard.bind(this));  // Удалить карточку
    this._cardElement.querySelector('.card__image').addEventListener('click', () => { // Открыть попап карточки кликом на изображение
      this._handleCardClick(this._name, this._link);
    });
  }

  _handleLikeButtonClick() {
    this._cardElement.querySelector('.button_type_like-button').classList.toggle('button_active');
  }

  _handleDeleteCard() {
    this._cardElement.closest('.card').remove();
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    this._cardElement.querySelector('.card__location').textContent = this._name;
    this._cardImage = this._cardElement.querySelector('.card__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    return this._cardElement;
  }
}










