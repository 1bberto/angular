import { User } from './models/user';
import { EventEmitter } from '@angular/core';

export class UserService {
  public userListUpdated = new EventEmitter<User[]>();

  private users: User[] = [];

  constructor() {}

  getUsers(): User[] {
    return this.users;
  }

  add(user: User): void {
    // Getting the next user's id
    if (this.users.length) {
      const lastUser = this.users.reduce((prev, current) => (prev.Id > current.Id) ? prev : current);
      user.Id = lastUser.Id + 1;
    } else {
      user.Id = 1;
    }

    this.users.push(user);
    this.userListUpdated.emit(this.users);
  }

  remove(user: User): void {
    const index = this.users.findIndex(x => x.Id === user.Id);

    if (index !== undefined) {
      this.users.splice(index, 1);
    }

    this.userListUpdated.emit(this.users);
  }

  edit(user: User): void {
    const index = this.users.findIndex(x => x.Id === user.Id);
    this.users[index] = user;
    this.userListUpdated.emit(this.users);
  }

  getUser(id: number): User {
    const index = this.users.findIndex(x => x.Id === id);
    return this.users[index];
  }
}
