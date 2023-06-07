import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, handleClickYes }) {
    super(popupSelector);
    this.handleClickYes = handleClickYes;
    this._form = this._popup.querySelector('.form');
  }

  open(cardId) {
    super.open();
    this._cardId = cardId;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.handleClickYes(this._cardId);
      this.close();
    });
  }
}