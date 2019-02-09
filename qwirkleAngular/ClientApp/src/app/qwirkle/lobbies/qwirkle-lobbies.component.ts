import { Component, Input } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { HubConnection, HubConnectionState } from '@aspnet/signalr';

@Component({
  selector: 'app-qwirkle-lobbies-component',
  templateUrl: './qwirkle-lobbies.component.html'
})

export class QwirkleLobbiesComponent {

  name: string;
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
            this.logs.push("Got Lobbies", success)
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
