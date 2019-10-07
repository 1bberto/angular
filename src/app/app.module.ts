import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { UserNameComponent } from "./user-name/user-name.component";
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Services
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UserService } from './user-service';

const appRoutes: Routes = [
  { path: '', component: UserListComponent, canActivate: [AuthGuard]},
  { path: 'user-list', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserFormComponent, canActivate: [AuthGuard], children: [
     { path: ':id', component: UserFormComponent }
  ] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserNameComponent,
    UserListComponent,
    UserListItemComponent,
    UserFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
