import { openPopup } from "./utils.js";

export const popupViewImage = document.querySelector('.popup_type_image-popup');
const imageViewImage = popupViewImage.querySelector('.popup__image');
const captionViewImage = popupViewImage.querySelector('.popup__caption');

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true)
  }

  _setEventListeners() {
    this._cardElement.querySelector('.button_type_like-button').addEventListener('click', () => {   // Поставить лайк
      this._handleLikeButtonClick();
    });
    this._cardElement.querySelector('.button_type_delete-button').addEventListener('click', () => { // Удалить карточку
      this._handleDeleteCard();
    });
    this._cardElement.querySelector('.card__image').addEventListener('click', () => {               // Открыть попап карточки кликом на изображение
      this._handleOpenPopup();
    });
  }

  _handleLikeButtonClick() {
    this._cardElement.querySelector('.button_type_like-button').classList.toggle('button_active');
  }

  _handleDeleteCard() {
    this._cardElement.closest('.card').remove();
  }

  _handleOpenPopup() {
    openPopup(popupViewImage);
    imageViewImage.setAttribute('src', this._link);
    imageViewImage.setAttribute('alt', this._name);
    captionViewImage.textContent = this._cardElement.querySelector('.card__location').textContent;
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










