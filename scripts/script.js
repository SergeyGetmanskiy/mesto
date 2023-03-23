let profile=document.querySelector('.profile');
let editButton=document.querySelector('.button_place_edit-button');
let profileUserName = profile.querySelector('.profile__user-name');
let profileUserOccupation = profile.querySelector('.profile__user-occupation');
let popup=document.querySelector('.popup');
let closeButton=popup.querySelector('.button_place_close-popup');
let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__input_type_user-name');
let occupationInput =  formElement.querySelector('.form__input_type_user-occupation');


function showPopUp() {
  popup.classList.add('popup_opened');
}

function closePopUp() {
  popup.classList.remove('popup_opened');
}

// Обработчик значения поля 'user-name'
function handleUserName() {
  nameInput.setAttribute('value', profileUserName.textContent);
}

// Обработчик значения поля 'user-occupation'
function handleUserOccupation() {
  occupationInput.setAttribute('value', profileUserOccupation.textContent);
}

// Обработчик «отправки» формы
function handleFormSubmit (evt) {
  evt.preventDefault();
  let userName = nameInput.value;
  let userOccupation = occupationInput.value;
  profileUserName.textContent = userName;
  profileUserOccupation.textContent = userOccupation;
  closePopUp();
}

editButton.addEventListener('click', showPopUp);
editButton.addEventListener('click', handleUserName);
editButton.addEventListener('click', handleUserOccupation);
closeButton.addEventListener('click', closePopUp);
formElement.addEventListener('submit', handleFormSubmit);