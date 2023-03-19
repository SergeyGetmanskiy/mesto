let profile=document.querySelector('.profile');
let editButton=profile.querySelector('.profile__edit-button');
let popup=document.querySelector('.popup');
let closeButton=popup.querySelector('.popup__close-btn')

function popUp() {
  popup.classList.add('popup_opened');
}

function closePopUp () {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', popUp);
closeButton.addEventListener('click', closePopUp);


// Обработчик «отправки» формы
let formElement = document.querySelector('.input');
let nameInput = formElement.querySelector('.input__text_type_username');
let occupationInput =  formElement.querySelector('.input__text_type_useroccupation');

function handleFormSubmit (evt) {
    evt.preventDefault();
    let userName = nameInput.value;
    let userOccupation = occupationInput.value;
    let profileUserName = profile.querySelector('.profile__username');
    let profileUserOccupation = profile.querySelector('.profile__useroccupation');
    profileUserName.textContent = userName;
    profileUserOccupation.textContent = userOccupation;
}

formElement.addEventListener('submit', handleFormSubmit);