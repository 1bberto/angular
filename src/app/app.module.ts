import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { UserNameComponent } from "./user-name/user-name.component";
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, UserNameComponent, UserListComponent, UserListItemComponent, UserFormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
