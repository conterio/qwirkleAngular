import { Component, Input } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { HubConnection, HubConnectionState } from '@aspnet/signalr';
import { LobbyViewModel } from '../../Models/LobbyViewModel';
import { GameSettings } from 'src/app/Models/CreateGameModel';

@Component({
  selector: 'app-qwirkle-lobbies-component',
  templateUrl: './qwirkle-lobbies.component.html'
})

export class QwirkleLobbiesComponent {

  name: string;
  public lobbies: Array<LobbyViewModel> = [];
  @Input() connection: HubConnection;
  @Input() logs: string[];

  constructor() {
    
  }
  ngOnInit(){
    this.getLobbies();
  }

  public getLobbies(){
    if(this.checkConnection()) {
      if (this.connection.state == HubConnectionState.Connected) {
        this.connection.invoke("AvailableGAmes")
          .catch(err => {
            this.logs.push(err.toString())
          })
          .then(success => {

            this.logs.push("Got Lobbies", success);
            for (var i = 0; i < success.length; ++i) {
              var lobby = new LobbyViewModel();
              lobby.gameSettings = new GameSettings();
              lobby.avaiableSpots = success[i].avaiableSpots;
              lobby.gameName = success[i].gameSettings.name;
              lobby.gameid = success[i].gameId;
              lobby.gameSettings.aiTimeout = success[i].gameSettings.aiTimeout;
              lobby.gameSettings.handSize = success[i].gameSettings.handSize;
              lobby.gameSettings.humanTimeout = success[i].gameSettings.humanTimeout;
              lobby.gameSettings.maxPlayers = success[i].gameSettings.maxPlayers;
              lobby.gameSettings.name = success[i].gameSettings.name;
              lobby.gameSettings.numberOfTiles = success[i].gameSettings.numberOfTiles;
              this.lobbies.push(lobby);
            }
           
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
