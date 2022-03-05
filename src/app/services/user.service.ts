import { User } from './../Classes/user';
import { UserInterface } from '../interfaces/UserInterface';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: 'Victor Plains',
      phone: '1-770-736-8031 x56442',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: 'Via Bortone 5',
      phone: '010-692-6593 x09125',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      address: 'Via Acuario 159',
      phone: '1-463-123-4447',
    },
  ];
  constructor() {}

  getUsers() {
    return this.users;
  }
  updateUser(user: UserInterface) {
    const idx = this.users.findIndex((v) => v.id == user.id);
    alert(idx);
    if (idx != -1) {
      this.users[idx] = { ...user };
    }
  }
  createUser(user: UserInterface) {
    this.users.splice(0, 0, { ...user });
  }
  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
}
