import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../models/client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  clientId: number;
  client: Client;
  clientFound: boolean;
  loading: boolean;
  editMode: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService) { }

  ngOnInit() {
    this.loading = true;
    this.editMode = false;
    this.activatedRoute.params.subscribe(async (params) => {
      try {
        this.clientId = +params.id;
        this.client = await this.clientService.getClient(this.clientId);
        this.clientFound = true;
        this.loading = false;
      } catch {
       this.clientFound = false;
       this.loading = false;
      }
    });
  }

  canEdit(): boolean {
    return this.editMode;
  }

  toggleEdit(): void {
    this.editMode = !this.editMode;
  }
}
