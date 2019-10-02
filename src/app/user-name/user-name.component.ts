import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-user-name",
  templateUrl: "./user-name.component.html",
  styleUrls: ["./user-name.component.css"]
})
export class UserNameComponent implements OnInit {
  @Input() user: string;
  nameName: string;
  constructor() {}

  ngOnInit() {
    this.nameName = this.user;
  }
}
