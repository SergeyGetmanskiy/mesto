export const initialCards = [ // Массив начальных карточек
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

// Переменные для попапов с формами
const profile = document.querySelector('.profile');
export const buttonOpenEditProfilePopup = profile.querySelector('.button_type_edit-button');
export const buttonOpenAddCardPopup = profile.querySelector('.button_type_add-button');

// Переменные для PopupWithImage.js
const popupViewImage = document.querySelector('.popup_type_image-popup');
export const imageViewImage = popupViewImage.querySelector('.popup__image');
export const captionViewImage = popupViewImage.querySelector('.popup__caption');

// Конфиг для FormValidator.js
export const params = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-btn',
  inactiveButtonClass: 'form__submit-btn_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
};

// Переменные для UserInfo.js
export const nameInput = document.querySelector('.form__input_type_user-name');
export const occupationInput =  document.querySelector('.form__input_type_user-occupation');