import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/user';
import { UserService } from 'src/app/user-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  userList: User[] = [];
  userListUpdated: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userList = this.userService.getUsers();
    this.userListUpdated = this.userService.userListUpdated.subscribe((list: User[]) => {
      this.userList = list;
    });
  }

  ngOnDestroy() {
    if (this.userListUpdated) {
      this.userListUpdated.unsubscribe();
    }
  }

}
