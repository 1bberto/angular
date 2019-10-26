import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './models/client';

@Injectable()
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  getClients(): Promise<Client[]> {
    return new Promise<Client[]>((resolve, reject) => {
      this.httpClient.get<Client[]>('https://jsonplaceholder.typicode.com/users')
        .subscribe(
          (clients: Client[]) => {
            setTimeout(() => resolve(clients), 2000);
          },
          (err) => setTimeout(() => reject(err), 5000));
    });
  }

  getClient(id: number): Promise<Client> {
    return new Promise<Client>((resolve, reject) => {
      this.httpClient.get<Client>('https://jsonplaceholder.typicode.com/users/' + id)
        .subscribe(
          (client: Client) => {
            setTimeout(() => resolve(client), 2000);
          },
          (err) => {
            setTimeout(() => reject(err), 5000);
          });
    });
  }
}
