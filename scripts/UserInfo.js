// import { profileSubtitle, profileTitle } from "./constants";

export default class UserInfo {
  constructor({userName, userInfo}) {
    this._name = document.querySelector(userName);
    this._info = document.querySelector(userInfo);
  }
  getUserInfo(){
    return {
      name: this._name.textContent,
      job: this._info.textContent,
    };
  }
  setUserInfo({name, job}){
    this._name.textContent = name;
    this._info.textContent = job;
  }
}
