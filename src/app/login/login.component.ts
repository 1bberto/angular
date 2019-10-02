import { Component, Output, OnInit } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  @Output() userLogin = new EventEmitter<string>();

  userName: string;
  constructor() {}

  ngOnInit() {
    this.userName = "";
  }

  loginUser() {
    this.userLogin.emit(this.userName);
  }

  canLogin() {
    return this.userName.length > 5;
  }
}
