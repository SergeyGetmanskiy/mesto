const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.button_type_edit-button');
const addButton = profile.querySelector('.button_type_add-button');

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

const popupViewImage = document.querySelector('.popup_type_image-popup');
const imageViewImage = popupViewImage.querySelector('.popup__image');
const captionViewImage = popupViewImage.querySelector('.popup__caption');
const closeButtonImagePopup = popupViewImage.querySelector('.button_place_image-popup');

const cards = document.querySelector('.cards');
const cardTemplate = cards.querySelector('#card-template').content;



// Обработчики попапа "Редактировать профиль"
function showPopUpEditProfile() {
  popupEditProfile.classList.add('popup_opened');
  popupEditProfile.querySelector('.popup__container').classList.add('popup__container_type_form');
  nameInput.setAttribute('value', profile.querySelector('.profile__user-name').textContent);
  occupationInput.setAttribute('value', profile.querySelector('.profile__user-occupation').textContent);
}

function closePopUpEditProfile() {
  popupEditProfile.classList.remove('popup_opened');
}

function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();
  profile.querySelector('.profile__user-name').textContent = nameInput.value;
  profile.querySelector('.profile__user-occupation').textContent = occupationInput.value;
  closePopUpEditProfile();
}


// Обработчики попапа "Новое место"
function showPopUpAddLocation() {
  popupAddLocation.querySelector('.popup__container').classList.add('popup__container_type_form');
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


// Обработчики карточки
function handleCard(name, link) {
  let card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__location').textContent = name;
  card.querySelector('.card__image').setAttribute('src', link);
  card.querySelector('.button_type_like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('button_active');
  });
  card.querySelector('.button_type_delete-button').addEventListener('click', () => {
    card.closest('.card').remove();
  });
  card.querySelector('.card__image').addEventListener('click', function showImagePopup(evt) {
    popupViewImage.classList.toggle('popup_opened');
    popupViewImage.querySelector('.popup__container').classList.add('popup__container_type_image-popup');
    const imageLink = card.querySelector('.card__image').getAttribute('src');
    imageViewImage.setAttribute('src', imageLink);
    captionViewImage.textContent = card.querySelector('.card__location').textContent;
  }
  );
  cards.prepend(card);
}

function closePopUpImagePopup() {
  popupViewImage.classList.remove('popup_opened');
}


// Добавить начальные карточки
initialCards.forEach(function(item) {
  handleCard(item.name, item.link);
});


// Слушатели попапа "Редактировать профиль"
editButton.addEventListener('click', showPopUpEditProfile);
formEditProfile.addEventListener('submit', handleFormSubmitEditProfile);
closeButtonEditProfile.addEventListener('click', closePopUpEditProfile);


// Слушатели попапа "Новое место"
addButton.addEventListener('click', showPopUpAddLocation);
formAddLocation.addEventListener('submit', handleFormSubmitAddLocation);
closeButtonAddLocation.addEventListener('click', closePopUpAddLocation);

// Слушатели попапа "Попап с картинкой"
closeButtonImagePopup.addEventListener('click', closePopUpImagePopup);














