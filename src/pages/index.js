import './index.css'
import { initialCards,
         params,
         nameInput,
         occupationInput,
         buttonOpenEditProfilePopup,
         buttonOpenAddCardPopup, } from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";

// Добавление начальных карточек
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card({
    data: item,
    templateSelector: '#card-template',
    handleCardClick: (name, link) => { // Обработчик клика по карточке
      const popupWithImage = new PopupWithImage('.popup_type_image-popup', name, link);
      popupWithImage.open();
      popupWithImage.setEventListeners();
    }});
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, '.cards');
cardList.renderItems();

// Экземпляр попапа "Редактировать профиль"
const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_edit-profile',
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
    }
  }
);
popupEditProfile.setEventListeners();

// Валидация формы "Редактировать профиль"
const validatorEditProfile = new FormValidator(params, '.form_type_edit-profile');
validatorEditProfile.enableValidation();

// Экземпляр данных о пользователе
const userInfo = new UserInfo ({
  userNameSelector: '.profile__user-name',
  userOccupationSelector: '.profile__user-occupation'
});

// Слушатель клика открытия попапа "Редактировать профиль"
buttonOpenEditProfilePopup.addEventListener('click', () => {
  popupEditProfile.open();
  const user = userInfo.getUserInfo();      // Автозаполнение полей попапа "Редактировать профиль"
  nameInput.value = user.name;              //
  occupationInput.value = user.occupation;  //
});

// Экземпляр попапа "Новое место"
const popupAddLocation = new PopupWithForm({
  popupSelector: '.popup_type_add-location',
  handleFormSubmit: (formData) => {
    const newCard = new Section({
      items: [formData],
      renderer: (item) => {
        const card = new Card({
        data: item,
        templateSelector: '#card-template',
        handleCardClick: (name, link) => { // Обработчик клика по карточке
          const popupWithImage = new PopupWithImage('.popup_type_image-popup', name, link);
          popupWithImage.open();
          popupWithImage.setEventListeners();
        }});
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
      }
    }, '.cards');
    newCard.renderItems();
    }
  }
);
popupAddLocation.setEventListeners();

// Валидация формы "Новое место"
const validatorAddCard = new FormValidator(params, '.form_type_add-location');
validatorAddCard.enableValidation();

// Слушатель клика открытия попапа "Новое место"
buttonOpenAddCardPopup.addEventListener('click', () => {
  popupAddLocation.open();
});

