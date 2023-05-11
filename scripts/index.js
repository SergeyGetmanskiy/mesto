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

new FormValidator(params, '.form_type_edit-profile').enableValidation(); // Валидация формы "Редактировать профиль"
new FormValidator(params, '.form_type_add-location').enableValidation(); // Валидация формы "Новое место"

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

// Слушатели попапа "Редактировать профиль"
buttonOpenEditProfilePopup.addEventListener('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = userName.textContent; // Автозаполнение полей попапа "Редактировать профиль"
  occupationInput.value = userOccupation.textContent;
});

buttonCloseEditProfilePopup.addEventListener('click', () => {
  closePopup();
});

formEditProfile.addEventListener('submit', handleFormSubmitEditProfile);

// Слушатели попапа "Новое место"
buttonOpenAddCardPopup.addEventListener('click', () => {
  openPopup(popupAddLocation);
});

buttonCloseAddCardPopup.addEventListener('click', () => {
  closePopup();
});

formAddLocation.addEventListener('submit', handleFormSubmitAddLocation);

// Слушатель попапа "Модальное окно с картинкой"
closeButtonViewImage.addEventListener('click', () => {  // Закрыть попап кликом на крестик
  closePopup();
});
