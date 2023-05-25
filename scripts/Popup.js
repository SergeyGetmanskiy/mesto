export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.button_type_close-popup');
    this._container = this._popup.querySelector('.popup__container');
    this._handleEscClose = this._handleEscClose.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);  // Слушатель закрытия попапа клавишей ESC
  }

  close() {
    this._popup.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
      document.removeEventListener('keydown', this._handleEscClose);
  }
}

  setEventListeners() {
    this._closeButton.addEventListener('click', this.close); // Слушатель закрытия попапа кликом на иконку закрытия
    this._popup.addEventListener('mousedown', this.close); // Слушатель закрытия попапа кликом на оверлей
    this._container.addEventListener('mousedown', (evt) => {evt.stopPropagation()});
  }
}