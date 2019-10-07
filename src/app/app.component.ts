import { Component, OnInit } from "@angular/core";
import { User } from "./models/user";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  userName: string;
  userList: User[] = [];
  activePage: string;

  constructor(
    public authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {}

  onLogin(userName: string) {
    this.userName = userName;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
