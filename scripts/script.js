const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.button_type_edit-button');
const addButton = profile.querySelector('.button_type_add-button');
const profileUserName = profile.querySelector('.profile__user-name');
const profileUserOccupation = profile.querySelector('.profile__user-occupation');

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const closeButtonEditProfile = popupEditProfile.querySelector('.button_place_edit-profile');
const formEditProfile = popupEditProfile.querySelector('.form_type_edit-profile');
const nameInput = popupEditProfile.querySelector('.form__input_type_user-name');
const occupationInput =  popupEditProfile.querySelector('.form__input_type_user-occupation');
const submitButtonEditProfile = popupEditProfile.querySelector('.form__submit-btn_place_edit-profile');

const popupAddLocation = document.querySelector('.popup_type_add-location');
const closeButtonAddLocation = popupAddLocation.querySelector('.button_place_add-location');
const formAddLocation = popupAddLocation.querySelector('.form_type_add-location');
const submitButtonAddLocation = popupAddLocation.querySelector('.form__submit-btn_place_add-location');

const popupImage = document.querySelector('.popup_type_image-popup');

const cards = document.querySelector('.cards');
const cardTemplate = cards.querySelector('#card-template').content;
const imagePopupButton = cardTemplate.querySelector('.card__image');

const initialCards = [
  {
    name: 'Санкт-Петербург',
    link: './images/daniil-smetanin-St_Petersburg.jpg'
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
    name: 'Великий Новгород',
    link: './images/ivan-bobrov-Velikiy_Novgorod.jpg'
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
  const locationNameInput = popupAddLocation.querySelector('.form__input_type_location-name');
  const locationLinkInput = popupAddLocation.querySelector('.form__input_type_location-link');
  handleCard(locationNameInput.value, locationLinkInput.value);
  locationNameInput.value = 'Название';
  locationLinkInput.value = 'Ссылка на картинку';
  closePopUpAddLocation();
};


// Обработчики попапа "Попап с картинкой"
function showImagePopUp() {
  popupImage.classList.add('popup_opened');
}


// Обработчик добавления / удаления карточки и лайка
function handleCard(name, link) {
  let card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__location').textContent = name;
  card.querySelector('.card__image').setAttribute('src', link);
  card.querySelector('.button_type_like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('button_active');
  });
  card.querySelector('.button_type_delete-button').addEventListener('click', () => {
    const deleteCard = cards.querySelector('.button_type_delete-button').closest('.card');
    deleteCard.remove();
  });
  cards.prepend(card);
}


// Добавить начальные карточки
for (i = 0; i < initialCards.length; i++) {
  handleCard(initialCards[i].name, initialCards[i].link);
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

// Слушатели попапа "Попап с картинкой"
imagePopupButton.addEventListener('click', showImagePopUp);
/*formAddLocation.addEventListener('submit', handleFormSubmitAddLocation);
closeButtonAddLocation.addEventListener('click', closePopUpAddLocation);*/












