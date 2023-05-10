const popupViewImage = document.querySelector('.popup_type_image-popup');
const popupContainer = popupViewImage.querySelector('.popup__container');
const imageViewImage = popupViewImage.querySelector('.popup__image');
const captionViewImage = popupViewImage.querySelector('.popup__caption');
const closeButtonViewImage = popupViewImage.querySelector('.button_place_image-popup');

export const initialCards = [
  {
    name: 'Санкт-Петербург',
    link: './images/daniil-smetanin-St_Petersburg.jpg'
  },
  {
    name: 'Красная Поляна',
    link: './images/arseny-togulev-Krasnaya_Polyana.jpg'
  },
  {
    name: 'Москва',
    link: './images/alexandr-bormotin-Moscow.jpg'
  },
  {
    name: 'Байкал',
    link: './images/alex-tolstov-Baikal.jpg'
  },
  {
    name: 'Карелия',
    link: './images/victor-malyushev-Karelia.jpg'
  },
  {
    name: 'Великий Новгород',
    link: './images/egor-myznik-Velikiy_Novgorod.jpg'
  }
];

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
    closeButtonViewImage.addEventListener('click', () => {  // Закрыть попап кликом на крестик
      this._handleClosePopup();
    });
    popupViewImage.addEventListener('click', () => {       // Закрыть попап кликом на оверлей
      this._handleClosePopup();
  });
    popupContainer.addEventListener('click', (evt) => {
    evt.stopPropagation();
  });
    document.addEventListener('keydown', (evt) => {  // Закрыть попап клавишей ESC
    if (evt.key === 'Escape') {
      this._handleClosePopup();
    }
  });
  }

  _handleLikeButtonClick() {
    this._cardElement.querySelector('.button_type_like-button').classList.toggle('button_active');
  }

  _handleDeleteCard() {
    this._cardElement.closest('.card').remove();
  }

  _handleOpenPopup() {
    popupViewImage.classList.add('popup_opened');
    imageViewImage.setAttribute('src', this._link);
    imageViewImage.setAttribute('alt', this._name);
    captionViewImage.textContent = this._cardElement.querySelector('.card__location').textContent;
  }

  _handleClosePopup() {
    popupViewImage.classList.remove('popup_opened');
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    this._cardElement.querySelector('.card__location').textContent = this._name;
    this._cardElement.querySelector('.card__image').src = this._link;
    return this._cardElement;
  }
}










