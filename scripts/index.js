import { initialCards } from "./constants.js";
import { openPopup, closePopup } from "./utils.js";
import { Card, popupViewImage } from "./Card.js";
import { FormValidator, params } from "./FormValidator.js";

const cards = document.querySelector('.cards');

const closeButtonViewImage = popupViewImage.querySelector('.button_place_image-popup');

const profile = document.querySelector('.profile');
const userName = profile.querySelector('.profile__user-name');
const userOccupation = profile.querySelector('.profile__user-occupation');
const buttonOpenEditProfilePopup = profile.querySelector('.button_type_edit-button');
const buttonOpenAddCardPopup = profile.querySelector('.button_type_add-button');

const popupList = Array.from(document.querySelectorAll('.popup'));

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const buttonCloseEditProfilePopup = popupEditProfile.querySelector('.button_place_edit-profile');
const formEditProfile = popupEditProfile.querySelector('.form_type_edit-profile');
const nameInput = popupEditProfile.querySelector('.form__input_type_user-name');
const occupationInput =  popupEditProfile.querySelector('.form__input_type_user-occupation');

const popupAddLocation = document.querySelector('.popup_type_add-location');
const locationNameInput = popupAddLocation.querySelector('.form__input_type_location-name');
const locationLinkInput = popupAddLocation.querySelector('.form__input_type_location-link');
const buttonCloseAddCardPopup = popupAddLocation.querySelector('.button_place_add-location');
const formAddLocation = popupAddLocation.querySelector('.form_type_add-location');

function createCard(data, templateId) { // Создать карточку
  const card = new Card(data, templateId);
  const cardElement = card.generateCard();
  return cardElement;
}

function renderInitialCards() { // Добавить начальные карточки
  initialCards.forEach((item) => {
    const cardElement = createCard(item, '#card-template');
    cards.append(cardElement);
  });
}

renderInitialCards();

const validatorEditProfile = new FormValidator(params, '.form_type_edit-profile'); // Валидация формы "Редактировать профиль"
validatorEditProfile.enableValidation();

const validatorAddCard = new FormValidator(params, '.form_type_add-location'); // Валидация формы "Новое место"
validatorAddCard.enableValidation();

// Обработчики форм
function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userOccupation.textContent = occupationInput.value;
  closePopup(popupEditProfile);
}

function handleFormSubmitAddLocation(evt) {
  evt.preventDefault();
  const inputData = {};
  inputData.name = locationNameInput.value;
  inputData.link = locationLinkInput.value;
  const cardElement = createCard(inputData, '#card-template');
  cards.prepend(cardElement);
  closePopup(popupAddLocation);
  formAddLocation.reset();
};

function handleFormClosure(form) {
  const inputElements = Array.from(form.querySelectorAll('.form__input')); // Удалить выделение инвалидного поля ввода при закрытии попапа
  inputElements.forEach(element => {
    element.classList.remove(params.inputErrorClass);
  });
  const inputErrors = Array.from(form.querySelectorAll('.form__error')); // Удалить сообщение об ошибке при закрытии попапа
  inputErrors.forEach(error => {
    error.classList.remove('form__error_visible');
    error.textContent = '';
  });
}

// Слушатели попапа "Редактировать профиль"
buttonOpenEditProfilePopup.addEventListener('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = userName.textContent; // Автозаполнение полей попапа "Редактировать профиль"
  occupationInput.value = userOccupation.textContent;
});

buttonCloseEditProfilePopup.addEventListener('click', () => {
  closePopup();
  handleFormClosure(formEditProfile);
});

formEditProfile.addEventListener('submit', handleFormSubmitEditProfile);

// Слушатели попапа "Новое место"
buttonOpenAddCardPopup.addEventListener('click', () => {
  openPopup(popupAddLocation);
});

buttonCloseAddCardPopup.addEventListener('click', () => {
  closePopup();
  formAddLocation.reset();
  handleFormClosure(formAddLocation);
});

formAddLocation.addEventListener('submit', handleFormSubmitAddLocation);

// Слушатель попапа "Модальное окно с картинкой"
closeButtonViewImage.addEventListener('click', () => {  // Закрыть попап кликом на крестик
  closePopup();
});
