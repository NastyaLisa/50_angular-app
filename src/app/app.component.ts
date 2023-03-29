import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user = {
    name: '',
    status: '',
    avatarUrl: '',
  };
  addUser(newUser: any) {
    this.user.name = newUser.name;
    this.user.status = newUser.status;
    this.user.avatarUrl = newUser.avatarUrl;
  }

  removeUser() {
    this.user.name = '';
    this.user.status = '';
    this.user.avatarUrl = '';
  }
}
