import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionState } from '@aspnet/signalr';

@Injectable()
export class HubDataService {  
  connection: HubConnection;
  ipaddress: string;
  status: string;
  logs: string[];

  constructor() {
    this.ipaddress = "http://localhost:21891/hub";
    this.status = HubConnectionState[0];
    this.logs = [];
    this.connection = undefined;
  }

}
