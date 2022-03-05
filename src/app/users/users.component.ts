import { User } from './../Classes/user';
import { UserService } from './../services/user.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public users: any[] = [];
  constructor(private userService: UserService) {}
  @Output() userUpdate: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  onUserUpdate(user: User) {
    const userCopy = Object.assign({}, user);
    this.userUpdate.emit(userCopy);
  }
  onUserDelete(user: User) {
    this.userService.deleteUser(user);
  }
}
