const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.button_type_edit-button');
const addButton = profile.querySelector('.button_type_add-button');
const profileUserName = profile.querySelector('.profile__user-name');
const profileUserOccupation = profile.querySelector('.profile__user-occupation');

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const closeButtonEditProfile = document.querySelector('.button_place_edit-profile');
const formEditProfile = document.querySelector('.form_type_edit-profile');
const nameInput = document.querySelector('.form__input_type_user-name');
const occupationInput =  document.querySelector('.form__input_type_user-occupation');
const submitButtonEditProfile = document.querySelector('.form__submit-btn_place_edit-profile');

const popupAddLocation = document.querySelector('.popup_type_add-location');
const closeButtonAddLocation = document.querySelector('.button_place_add-location');
const formAddLocation = document.querySelector('.form_type_add-location');
const submitButtonAddLocation = document.querySelector('.form__submit-btn_place_add-location');

const cards = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card-template').content;
const initialCards = [
  {
    name: 'Великий Новгород',
    link: './images/ivan-bobrov-Velikiy_Novgorod.jpg'
  },
  {
    name: 'Красная Поляна',
    link: './images/olga-nayda-Krasnaya_Polyana.jpg'
  },
  {
    name: 'Москва',
    link: './images/alexandr-bormotin-Moscow.jpg'
  },
  {
    name: 'Байкал',
    link: './images/philipp-trubchenko-Baikal.jpg'
  },
  {
    name: 'Карелия',
    link: './images/victor-malyushev-Karelia.jpg'
  },
  {
    name: 'Санкт-Петербург',
    link: './images/daniil-smetanin-St_Petersburg.jpg'
  }
];


// Обработчики попапа "Редактировать профиль"
function showPopUpEditProfile() {
  popupEditProfile.classList.add('popup_opened');
}

function closePopUpEditProfile() {
  popupEditProfile.classList.remove('popup_opened');
}

function handleUserName() {
  nameInput.setAttribute('value', profileUserName.textContent);
}

function handleUserOccupation() {
  occupationInput.setAttribute('value', profileUserOccupation.textContent);
}

function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();
  profileUserName.textContent = nameInput.value;
  profileUserOccupation.textContent = occupationInput.value;
  closePopUpEditProfile();
}


// Обработчики попапа "Новое место"
function showPopUpAddLocation() {
  popupAddLocation.classList.add('popup_opened');
}

function closePopUpAddLocation() {
  popupAddLocation.classList.remove('popup_opened');
}

function handleFormSubmitAddLocation(evt) {
  evt.preventDefault();
  const locationNameInput = document.querySelector('.form__input_type_location-name');
  const locationLinkInput = document.querySelector('.form__input_type_location-link');
  createCard(locationNameInput.value, locationLinkInput.value);
  locationNameInput.value = 'Название';
  locationLinkInput.value = 'Ссылка на картинку';
  closePopUpAddLocation();
};


// Обработчик добавления карточек
function createCard(name, link) {
  let card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__location').textContent = name;
  card.querySelector('.card__image').setAttribute('src', link);
  cards.prepend(card);
}


// Добавить начальные карточки
for (i = 0; i < initialCards.length; i++) {
  createCard(initialCards[i].name, initialCards[i].link);
}


// Слушатели попапа "Редактировать профиль"
editButton.addEventListener('click', showPopUpEditProfile);
editButton.addEventListener('click', handleUserName);
editButton.addEventListener('click', handleUserOccupation);
formEditProfile.addEventListener('submit', handleFormSubmitEditProfile);
closeButtonEditProfile.addEventListener('click', closePopUpEditProfile);


// Слушатели попапа "Новое место"
addButton.addEventListener('click', showPopUpAddLocation);
formAddLocation.addEventListener('submit', handleFormSubmitAddLocation);
closeButtonAddLocation.addEventListener('click', closePopUpAddLocation);


