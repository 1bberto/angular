import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user';
import { UserService } from '../../user-service';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {
  @Input() userItem: User;

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  removeUser(user: User): void {
    if (confirm("Do you realy want to delete the user " + user.Name)) {
      this.userService.remove(user);
    }
  }

  editUser(user: User): void {
    this.router.navigate(['user', user.Id]);
  }
}
