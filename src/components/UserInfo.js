export class UserInfo {
  constructor({userNameSelector, userOccupationSelector}) {
    this._userName = document.querySelector(userNameSelector);
    this._userOccupation = document.querySelector(userOccupationSelector);
  }

  getUserInfo() {
    this._userInfo = {};
    this._userInfo.name = this._userName.textContent;
    this._userInfo.occupation = this._userOccupation.textContent;
    return this._userInfo
  }

  setUserInfo(formData) {
    this._userName.textContent = formData.name;
    this._userOccupation.textContent = formData.occupation;
  }
}