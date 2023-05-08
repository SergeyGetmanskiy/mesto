
import { Card } from "./Card.js";
import * as FormValidator from "./FormValidator.js";

const initialCards = [
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

const cards = document.querySelector('.cards');

const profile = document.querySelector('.profile');
const userName = profile.querySelector('.profile__user-name');
const userOccupation = profile.querySelector('.profile__user-occupation');
const buttonOpenEditProfilePopup = profile.querySelector('.button_type_edit-button');
const buttonOpenAddCardPopup = profile.querySelector('.button_type_add-button');

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const closeButtonEditProfilePopup = popupEditProfile.querySelector('.button_place_edit-profile');
const formEditProfile = popupEditProfile.querySelector('.form_type_edit-profile');
const nameInput = popupEditProfile.querySelector('.form__input_type_user-name');
const occupationInput =  popupEditProfile.querySelector('.form__input_type_user-occupation');
const submitButtonEditProfile = popupEditProfile.querySelector('.form__submit-btn_place_edit-profile');

const popupAddLocation = document.querySelector('.popup_type_add-location');
const locationNameInput = popupAddLocation.querySelector('.form__input_type_location-name');
const locationLinkInput = popupAddLocation.querySelector('.form__input_type_location-link');
const closeButtonAddCardPopup = popupAddLocation.querySelector('.button_place_add-location');
const formAddLocation = popupAddLocation.querySelector('.form_type_add-location');
const submitButtonAddLocation = popupAddLocation.querySelector('.form__submit-btn_place_add-location');

function renderInitialCards() {
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
  popup.addEventListener('click', () => {       //Закрыть попап кликом на оверлей
    closePopup(popup);
  });
  const popupContainer = popup.querySelector('.popup__container');
  popupContainer.addEventListener('click', (evt) => {
    evt.stopPropagation();
  });
  document.addEventListener('keydown', (evt) => {  //Закрыть попап клавишей ESC
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
  })
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userOccupation.textContent = occupationInput.value;
  closePopup(popupEditProfile);
}

function handleFormSubmitAddLocation(evt) {
  evt.preventDefault();
  const newCard = createCard(locationNameInput.value, locationLinkInput.value);
  addCard(newCard);
  closePopup(popupAddLocation);
  locationNameInput.value = '';
  locationLinkInput.value = '';
};

//Автозаполнение полей попапа "Редактировать профиль"
nameInput.value = userName.textContent;
occupationInput.value = userOccupation.textContent;

// Слушатели попапа "Редактировать профиль"
buttonOpenEditProfilePopup.addEventListener('click', () => {
  openPopup(popupEditProfile);
});

closeButtonEditProfilePopup.addEventListener('click', () => {
  closePopup(popupEditProfile);
});

formEditProfile.addEventListener('submit', handleFormSubmitEditProfile);

// Слушатели попапа "Новое место"
buttonOpenAddCardPopup.addEventListener('click', () => {
  openPopup(popupAddLocation);
});

closeButtonAddCardPopup.addEventListener('click', () => {
  closePopup(popupAddLocation);

});
formAddLocation.addEventListener('submit', handleFormSubmitAddLocation);




















