import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clientList: Client[] = [];

  constructor(
    private clientService: ClientService,
    private router: Router) { }

  async ngOnInit() {
    this.clientList = await this.clientService.getClients();
  }

  getClientDetail(id: number): void {
    this.router.navigate(['clients', id]);
  }

}
