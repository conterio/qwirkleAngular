import { Component, Input } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { HubConnection, HubConnectionState } from '@aspnet/signalr';

@Component({
  selector: 'app-qwirkle-register-component',
  templateUrl: './qwirkle-register.component.html'
})

export class QwirkleRegisterComponent {

  name: string;
  @Input() connection: HubConnection;
  @Input() logs: string[];

  constructor() {

  }

  registerPlayer(playerName) {
    if (this.checkConnection()) {
      if (this.connection.state == HubConnectionState.Connected) {
        this.connection.invoke("Register", playerName, false)//TODO let the user choose this option
          .catch(err => {
            this.logs.push(err.toString())
          })
          .then(success => {
            this.logs.push("Player Registered.");
          });
      }
    }
  }

  private checkConnection() {
    if (this.connection == undefined) {
      this.logs.push("Not Connected to Hub. Try connecting first.");
      return false;
    }
    return true;
  }


}//end class
