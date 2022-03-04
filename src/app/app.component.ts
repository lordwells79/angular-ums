import { Component } from '@angular/core';
import { User } from './Classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ums';
  selected = false;
  user: User = new User();
  showForm: boolean = false;
  osci = new Date();

  onUpdate(user: User) {
    this.selected = true;
    this.user = user;
    this.showForm = true;
  }
  onUserCreate() {
    this.user = new User();
    this.showForm = true;
  }
}
