import { Component, Input } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { HubConnection, HubConnectionState } from '@aspnet/signalr';
import { GameSettings } from '../../Models/CreateGameModel';

@Component({
  selector: 'app-qwirkle-create-game-component',
  templateUrl: './qwirkle-create-game.component.html'
})

export class QwirkleCreateGameComponent {

  name: string;
  @Input() connection: HubConnection;
  @Input() logs: string[];
  gameSettings: GameSettings;


  constructor() {

  }
  ngOnInit(){
    
  }

  public createGame(){
    if(this.checkConnection()) {
      if (this.connection.state == HubConnectionState.Connected) {
        this.connection.invoke("CreateGame", this.gameSettings)
          .catch(err => {
            this.logs.push(err.toString())
          })
          .then(success => {            
            this.logs.push("Created Game successfully", success)
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
