import { Component, Input } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { HubConnection, HubConnectionState } from '@aspnet/signalr';

@Component({
  selector: 'app-qwirkle-players-component',
  templateUrl: './qwirkle-players.component.html'
})

export class QwirklePlayersComponent {
  
  @Input() connection: HubConnection;
  @Input() logs: string[];
  public players: any;

  constructor() {
    
  }

  ngOnInit() {
    this.getPlayers();
  }

  public getPlayers() {
    if(this.checkConnection()) {
      if(this.connection.state == HubConnectionState.Connected) {
        this.connection.invoke("GetAvailablePlayers")
        .catch(err => {
          this.logs.push(err.toString())
        })
        .then(players => {          
          this.logs.push("Got Players")
          this.players = players;
        })
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
