import { Popup } from "./Popup.js";
import { imageViewImage, captionViewImage } from "../utils/constants.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector, name, link) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._name = name;
    this._link = link;
  }

  open() {
    super.open();
    imageViewImage.setAttribute('src', this._link);
    imageViewImage.setAttribute('alt', this._name);
    captionViewImage.textContent = this._name;
  }
}