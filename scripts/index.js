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

const popupViewImage = document.querySelector('.popup_type_image-popup');
const imageViewImage = popupViewImage.querySelector('.popup__image');
const captionViewImage = popupViewImage.querySelector('.popup__caption');
const closeButtonImagePopup = popupViewImage.querySelector('.button_place_image-popup');

const cards = document.querySelector('.cards');
const cardTemplate = cards.querySelector('#card-template').content;

// Обработчики попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

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

// Обработчики карточек
function createCard(name, link) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__location').textContent = name;
  card.querySelector('.card__image').src = link;
  card.querySelector('.button_type_like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('button_active');
  });
  card.querySelector('.button_type_delete-button').addEventListener('click', () => {
    card.closest('.card').remove();
  });
  card.querySelector('.card__image').addEventListener('click', function showImagePopup(evt) {
    popupViewImage.classList.toggle('popup_opened');
    imageViewImage.setAttribute('src', link);
    imageViewImage.setAttribute('alt', name);
    captionViewImage.textContent = card.querySelector('.card__location').textContent;
  });
  return card;
};

function addCard(card) {
  cards.prepend(card);
}

function renderInitialCards() {
  initialCards.forEach(function(item) {
    const card = createCard(item.name, item.link);
    addCard(card);
  });
}

// Добавить начальные карточки
renderInitialCards();

// Слушатели попапа "Редактировать профиль"
buttonOpenEditProfilePopup.addEventListener('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = userName.textContent;
  occupationInput.value = userOccupation.textContent;
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

// Слушатели попапа "Попап с картинкой"
closeButtonImagePopup.addEventListener('click', () => {
  closePopup(popupViewImage)
});
















