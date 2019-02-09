import { Component, Input } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { HubConnection, HubConnectionState } from '@aspnet/signalr';
import { HubDataService } from '../services/HubDataService';

@Component({
  selector: 'app-qwirkle-component',
  templateUrl: './qwirkle.component.html'
})

export class QwirkleComponent {

  get ipaddress(): string {
    return this.hubData.ipaddress;
  }
  set ipaddress(value: string) {
    this.hubData.ipaddress = value;
  }
  get connection(): HubConnection {
    return this.hubData.connection;
  }
  set connection(value: HubConnection) {
    this.hubData.connection = value;
  }
  get status(): string {
    return this.hubData.status;
  }
  set status(value: string) {
    this.hubData.status = value;
  }
  get logs(): string[] {
    return this.hubData.logs;
  }
  set logs(value: string[]) {
    this.hubData.logs = value;
  }

  constructor(public hubData: HubDataService) { }


  connectToServer(value) {   
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(value)
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this.connection
      .start()
      .then(() => {
        this.status = HubConnectionState[1];
        this.logs.push("Connected to hub.");
      })
      .catch(err => {
        this.status = `Did not connect ${err}`;
        this.logs.push("Failed to connect to hub.");
      });    

    this.registerEndpoints();    

  }


  private registerEndpoints() {
    //register endpoints
    this.connection.on("ReceiveMessage", (user, message) => {
      this.logs.push(`Message recieved! from ${user} and message ${message}`);
    });

    this.connection.on("Register", status => {
      this.logs.push(`Player Added ${status}`);
    });

    this.connection.on("AvailableGAmes", games => {
      console.log("games:", games);
    });

    this.connection.on("GetAvailablePlayers", players => {
      console.log("players: ", players);
    })



    
  }






}//end class
