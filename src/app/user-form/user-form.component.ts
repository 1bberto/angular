import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Output() createUser = new EventEmitter<User>();
  user: User;

  constructor() { }

  ngOnInit() {
    this.user = new User('', 0);
  }

  addUser() {
    this.createUser.emit(this.user);
  }

  canCreateUser() {
    return this.user.name.length > 0 && this.user.age > 0;
  }
}
