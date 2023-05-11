function handlePropagation(evt) {
  evt.stopPropagation();
}

function handleEscKey(evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
}

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', closePopup);             // Закрыть попап кликом на оверлей
  const popupContainer = popup.querySelector('.popup__container');
  popupContainer.addEventListener('mousedown', handlePropagation);
  document.addEventListener('keydown', handleEscKey);  // Закрыть попап клавишей ESC
  };

export function closePopup() {
  const popup = document.querySelector('.popup_opened');
  popup.classList.remove('popup_opened');
  popup.removeEventListener('mousedown', closePopup);
  const popupContainer = popup.querySelector('.popup__container');
  popupContainer.removeEventListener('mousedown', handlePropagation);
  document.removeEventListener('keydown', handleEscKey);
};


