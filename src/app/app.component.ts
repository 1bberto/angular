import { Component, OnInit } from "@angular/core";
import { User } from "./models/user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  userName: string;
  userList: User[] = [];
  activePage: string;

  constructor() {
    this.activePage = "userList";
    this.userName = "";
    this.userList.push(new User("Humberto", 10));
    this.userList.push(new User("Nahuel", 7));
    this.userList.push(new User("Luciano", 15));
  }

  ngOnInit() {}

  onLogin(userName: string) {
    this.userName = userName;
  }

  logout() {
    this.userName = "";
  }

  changePage(page: string) {
    this.activePage = page;
  }

  onUserCreated(newUser: User) {
    this.userList.push(newUser);
    this.activePage = 'userList';
   }
}
