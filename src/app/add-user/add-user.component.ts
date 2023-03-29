import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  @Output() onUser = new EventEmitter();
  // nameInputValue = 'dfvedrgd';
  // statusInputValue = 'ghhhhhhhhhhhkldjfgkndfgv,jngvednjbvkfjhnknv123456789';
  // avatarUrlInputValue = 'https://focus.ua/static/storage/thumbs/740x375/d/a2/6555bfc4-e4acc1ce0ecce47e575ba79703bcba2d.jpg?v=3749_1';

  nameInputValue = '';
  statusInputValue = '';
  avatarUrlInputValue = '';

  onName(event: any) {
    this.nameInputValue = event.target.value;
  }
  onStatus(event: any) {
    this.statusInputValue = event.target.value;
  }

  onAvatarUrl(event: any) {
    this.avatarUrlInputValue = event.target.value;
  }
  addNewUser(nameValue: string, statusValue: string, avatarUrlValue: string) {
    const value = {
      name: nameValue,
      status: statusValue,
      avatarUrl: avatarUrlValue,
    };
    if (statusValue.length > 50) {
      value.status = statusValue.substring(0, 50);
    }
    this.onUser.emit(value);
    this.nameInputValue = '';
    this.statusInputValue = '';
    this.avatarUrlInputValue = '';
  }
}
