import { Component, Output, OnInit } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  @Output() userLogin = new EventEmitter<string>();

  userName: string;
  constructor(
    private authService: AuthService,
    private router: Router) {}

  ngOnInit() {
    this.userName = "";
  }

  loginUser() {
    this.authService.login(this.userName);
  }

  canLogin() {
    return this.userName.length > 5;
  }
}
