import { User } from '../Classes/user';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-dettail',
  templateUrl: './user-dettail.component.html',
  styleUrls: ['./user-dettail.component.css'],
})
export class UserDettailComponent implements OnInit {
  private userCopy: User = new User();
  private __user: User = new User();
  @Input() set user(user: User) {
    this.__user = user;
    this.userCopy = Object.assign({}, user);
  }
  get user() {
    return this.__user;
  }
  constructor(private userService: UserService) {
    this.user = new User();
  }

  ngOnInit(): void {}

  saveUser() {
    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
    }
  }
  resetForm() {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.userCopy;
    }
  }
}
