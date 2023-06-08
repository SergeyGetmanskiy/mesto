// Переменные для попапов с формами
const profile = document.querySelector('.profile');
export const buttonOpenEditProfilePopup = profile.querySelector('.button_type_edit-button');
export const buttonOpenAddCardPopup = profile.querySelector('.button_type_add-button');
export const avatarImage = profile.querySelector('.profile__image');

// Конфиг для FormValidator.js
export const params = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-btn',
  inactiveButtonClass: 'form__submit-btn_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
};