import piter from '../images/daniil-smetanin-St_Petersburg.jpg';
import polyana from '../images/arseny-togulev-Krasnaya_Polyana.jpg';
import moscow from '../images/alexandr-bormotin-moscow.jpg';
import baikal from '../images/alex-tolstov-baikal.jpg';
import karelia from '../images/victor-malyushev-karelia.jpg';
import novgorod from '../images/egor-myznik-Velikiy_Novgorod.jpg';

export const initialCards = [ // Массив начальных карточек
  {
    name: 'Санкт-Петербург',
    link: piter
  },
  {
    name: 'Красная Поляна',
    link: polyana
  },
  {
    name: 'Москва',
    link: moscow
  },
  {
    name: 'Байкал',
    link: baikal
  },
  {
    name: 'Карелия',
    link: karelia
  },
  {
    name: 'Великий Новгород',
    link: novgorod
  }
];

// Переменные для попапов с формами
const profile = document.querySelector('.profile');
export const buttonOpenEditProfilePopup = profile.querySelector('.button_type_edit-button');
export const buttonOpenAddCardPopup = profile.querySelector('.button_type_add-button');

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