import {Friends} from "./friends";
export class FriendsService{

  getDate() {
    let friends: Friends[] = [
      {name: "Geller", age: 30, gender: "Male"},
      {name: "Geller", age: 28, gender: "Female"},
      {name: "Tribbiani", age: 29, gender: "Male"},
      {name: "Bing", age: 30, gender: "Male"},
      {name: "Green", age: 28, gender: "Female"},
      {name: "Buffay", age: 29, gender: "Female"},
    ];
    return friends
  }
}