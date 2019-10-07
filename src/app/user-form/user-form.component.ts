import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User = new User();

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    if (this.activatedRoute.firstChild) {
      this.activatedRoute.firstChild.params.subscribe(parameters => {
        const user = this.userService.getUser(+parameters.id);
        if (user) {
          this.user = user;
        } else {
          alert('User Not found!');
          this.router.navigate(['user-list']);
        }
      });
    }
  }

  addUser() {
    if (!this.user.Id) {
      this.userService.add(this.user);
    } else {
      this.userService.edit(this.user);
    }
    this.router.navigate(['/user-list']);
  }

  canCreateUser() {
    return this.user && this.user.Name && this.user.Age > 0;
  }
}
