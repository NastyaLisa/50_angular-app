import { Component, Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
@Input() name = ''
@Input() status = ''
@Input() charsetAmount = 0;
@Input() avatarUrl = ''
@Output() removeUser = new EventEmitter();

  onRemoveUser() {
    this.removeUser.emit();
  }
}
