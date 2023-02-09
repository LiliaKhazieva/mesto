export default class UserInfo {
  constructor({ userName, userInfo, userAvatar }) {
    this._name = document.querySelector(userName);
    this._info = document.querySelector(userInfo);
    this._avatar = document.querySelector(userAvatar);
  }

  getUserInfo() {
    return {
      id: this._id,
      name: this._name.textContent,
      job: this._info.textContent,
      link: this._avatar.src,
    };
  }

  setUserInfo({ id, name, job, link }) {
    if (id) {this._id = id}
    if (name) {this._name.textContent = name}
    if (job) {this._info.textContent = job}
    if (link) {this._avatar.src = link}
  }
}
