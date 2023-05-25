import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popup = document.querySelector(popupSelector);
    this._form = this._popup.querySelector('.form');
    this._inputList = this._form.querySelectorAll('.form__input');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
    this._handleFormClosure();
  }

  _handleFormClosure() {
    this._inputList.forEach(element => { // Удалить выделение инвалидного поля ввода при закрытии попапа
      element.classList.remove('form__input_type_error');
    });
    this._inputErrors = Array.from(this._form.querySelectorAll('.form__error')); // Удалить сообщение об ошибке при закрытии попапа
    this._inputErrors.forEach(error => {
      error.classList.remove('form__error_visible');
      error.textContent = '';
    });
  }
}