let profile=document.querySelector('.profile');
let editButton=profile.querySelector('.profile__edit-button');
let profileUserName = profile.querySelector('.profile__user-name');
let profileUserOccupation = profile.querySelector('.profile__user-occupation');
let popup=document.querySelector('.popup');
let closeButton=popup.querySelector('.button-image_place_close-popup');
let formElement = document.querySelector('.input');
let nameInput = formElement.querySelector('.input__text_type_user-name');
let occupationInput =  formElement.querySelector('.input__text_type_user-occupation');


function showPopUp() {
  popup.classList.add('popup_opened');
  nameInput.setAttribute('value', profileUserName.textContent);
  occupationInput.setAttribute('value', profileUserOccupation.textContent);
}


function closePopUp () {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', showPopUp);
closeButton.addEventListener('click', closePopUp);


// Обработчик «отправки» формы
function handleFormSubmit (evt) {
    evt.preventDefault();
    let userName = nameInput.value;
    let userOccupation = occupationInput.value;
    profileUserName.textContent = userName;
    profileUserOccupation.textContent = userOccupation;
    closePopUp();
}

formElement.addEventListener('submit', handleFormSubmit);