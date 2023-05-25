import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__image');
    this._caption = this._popup.querySelector('.popup__caption');
  }

  open(name, link) {
    super.open();
    this._image.setAttribute('src', link);
    this._image.setAttribute('alt', name);
    this._caption.textContent = name;
  }
}