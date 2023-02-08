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
    this._id = id;
    this._name.textContent = name;
    this._info.textContent = job;
    this._avatar.src = link;
  }
}
