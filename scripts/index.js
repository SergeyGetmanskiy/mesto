
import { Card, initialCards } from "./Card.js";
import { FormValidator, params } from "./FormValidator.js";

const cards = document.querySelector('.cards');

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

function renderInitialCards() { // Добавить начальные карточки
  initialCards.forEach((item) => {
    const card = new Card(item, '#card-template');
    const cardElement = card.generateCard();
    cards.append(cardElement);
  });
}

renderInitialCards();

// Обработчики попапов
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', () => {       // Закрыть попап кликом на оверлей
    closePopup(popup);
  });
  const popupContainer = popup.querySelector('.popup__container');
  popupContainer.addEventListener('mousedown', (evt) => {
    evt.stopPropagation();
  });
  document.addEventListener('keydown', (evt) => {  // Закрыть попап клавишей ESC
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
  })
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

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
  const card = new Card(inputData, '#card-template');
  const cardElement = card.generateCard();
  cards.prepend(cardElement);
  closePopup(popupAddLocation);
  formAddLocation.reset();
};

// Слушатели попапа "Редактировать профиль"
buttonOpenEditProfilePopup.addEventListener('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = userName.textContent; // Автозаполнение полей попапа "Редактировать профиль"
  occupationInput.value = userOccupation.textContent;
  const formValidator = new FormValidator(params, '.form_type_edit-profile'); // Валидация формы "Редактировать профиль"
  formValidator.enableValidation();
});

buttonCloseEditProfilePopup.addEventListener('click', () => {
  closePopup(popupEditProfile);
});

formEditProfile.addEventListener('submit', handleFormSubmitEditProfile);

// Слушатели попапа "Новое место"
buttonOpenAddCardPopup.addEventListener('click', () => {
  openPopup(popupAddLocation);
  const formValidator = new FormValidator(params, '.form_type_add-location'); // Валидация формы "Новое место"
  formValidator.enableValidation();
});

buttonCloseAddCardPopup.addEventListener('click', () => {
  closePopup(popupAddLocation);

});
formAddLocation.addEventListener('submit', handleFormSubmitAddLocation);

