import './index.css'
import { params,
         buttonOpenEditProfilePopup,
         buttonOpenAddCardPopup,
         avatarImage } from "../utils/constants.js";
import Api from "../components/Api.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { UserInfo } from "../components/UserInfo.js";

// Идентификатор пользователя
let userId

// Экземпляр класса Api ///////////////////////////////////////////////////////////////////
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-68',
  headers: {
    authorization: '67946861-92e8-4557-a9a9-8d5d3aee631d',
    'Content-Type': 'application/json'
  }
});

// Экземпляр класса "данных о пользователе" //////////////////////////////////////////////
const userInfo = new UserInfo ({
  userNameSelector: '#name',
  userOccupationSelector: '#about',
  userAvatarSelector: '#avatar'
});

// Функция создания карточки /////////////////////////////////////////////////////////////
const createCard = (item) => {
  const card = new Card({
    data: item,
    templateSelector: '#card-template',
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link);
    },
    handleDeleteClick: (cardId) => {
      popupWithConfirmation.open(cardId);
    },
    putLike: (cardId) => {
      api.putLike(cardId)
        .then(result => {
          card.handleLikeButtonClick(result);
        })
        .catch((err) => {
          console.log(err);
      });
    },
    deleteLike: (cardId) => {
      api.deleteLike(cardId)
        .then(result => {
          card.handleLikeButtonClick(result);
        })
        .catch((err) => {
          console.log(err);
      });
    }
}, userId);
  const cardElement = card.generateCard();
  return cardElement
};

// Экземпляр списка карточек ///////////////////////////////////////////////////////////
const cardList = new Section({
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
}, '.cards');

// Promise.all для загрузки карточек и данных о пользователе ////////////////////////////
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    cardList.renderItems(initialCards);
  })
  .catch(err => {
    console.log(err);
  });

// Экземпляр попапа "Редактировать профиль" /////////////////////////////////////////////
const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_edit-profile',
  handleFormSubmit: (formData, submitBtn, submitBtnInitialText) => {
    api.patchUserInfo(formData)
      .then((result) => {
        userInfo.setUserInfo(result);
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(err);
    })
      .finally(() => {
        setTimeout(() => {
          submitBtn.textContent = submitBtnInitialText;
        }, 500);
      });
    }
  }
);
popupEditProfile.setEventListeners();

// Валидация формы "Редактировать профиль" /////////////////////////////////////////////
const validatorEditProfile = new FormValidator(params, '.form_type_edit-profile');
validatorEditProfile.enableValidation();

// Слушатель клика открытия попапа "Редактировать профиль" ///////////////////////////
buttonOpenEditProfilePopup.addEventListener('click', () => {
  popupEditProfile.open();
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  validatorEditProfile.handleInputErrors();
});

// Экземпляр попапа "Обновить аватар" /////////////////////////////////////////////////
const popupEditAvatar = new PopupWithForm({
  popupSelector: '.popup_type_edit-avatar',
  handleFormSubmit: (formData, submitBtn, submitBtnInitialText) => {
    api.patchUserAvatar(formData)
      .then((result) => {
        userInfo.setUserInfo(result);
        popupEditAvatar.close();
    })
      .catch((err) => {
        console.log(err);
    })
      .finally(() => {
        setTimeout(() => {
          submitBtn.textContent = submitBtnInitialText;
        }, 500);
    });
    }
  }
);
popupEditAvatar.setEventListeners();

// Валидация формы "Обновить аватар" /////////////////////////////////////////////////
const validatorEditAvatar = new FormValidator(params, '.form_type_edit-avatar');
validatorEditAvatar.enableValidation();

// Слушатель клика открытия попапа "Обновить аватар" /////////////////////////////////
avatarImage.addEventListener('click', () => {
  popupEditAvatar.open();
  validatorEditAvatar.handleInputErrors();
  validatorEditAvatar.toggleButtonState();
});

// Экземпляр попапа "Новое место" /////////////////////////////////////////////////////
const popupAddLocation = new PopupWithForm({
  popupSelector: '.popup_type_add-location',
  handleFormSubmit: (formData, submitBtn, submitBtnInitialText) => {
    api.postUserCard(formData)
      .then((result) => {
      cardList.addItem(createCard(result));
      popupAddLocation.close();
    })
      .catch((err) => {
        console.log(err);
    })
      .finally(() => {
        setTimeout(() => {
          submitBtn.textContent = submitBtnInitialText;
        }, 500);
    });
    }
  }
);
popupAddLocation.setEventListeners();

// Валидация формы "Новое место" /////////////////////////////////////////////////////
const validatorAddCard = new FormValidator(params, '.form_type_add-location');
validatorAddCard.enableValidation();

// Слушатель клика открытия попапа "Новое место" ////////////////////////////////////
buttonOpenAddCardPopup.addEventListener('click', () => {
  popupAddLocation.open();
  validatorAddCard.handleInputErrors();
  validatorAddCard.toggleButtonState();
});

// Экземпляр попапа с картинкой /////////////////////////////////////////////////////
const popupWithImage = new PopupWithImage('.popup_type_image-popup');
popupWithImage.setEventListeners();

// Экземпляр попапа удаления карточки //////////////////////////////////////////////
const popupWithConfirmation = new PopupWithConfirmation({
  popupSelector: '.popup_type_confirmation',
  handleClickYes: (cardId) => {
    api.deleteUserCard(cardId)
    .then(() => {
      document.getElementById(`${cardId}`).remove();
      popupWithConfirmation.close();
  })
    .catch((err) => {
    console.log(err);
})
  }
})
popupWithConfirmation.setEventListeners();
