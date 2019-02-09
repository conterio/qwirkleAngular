import { Component, Input } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { HubConnection, HubConnectionState } from '@aspnet/signalr';

@Component({
  selector: 'app-qwirkle-menu-component',
  templateUrl: './qwirkle-menu.component.html',
  styleUrls: ['./qwirkle-menu.component.css']
})

export class QwirkleMenuComponent {

  @Input() connection: HubConnection;
  @Input() logs: string[];

  public renderMe = "default";

  constructor() {

  }

  public displayMe(val) {    
    this.renderMe = val;
  }

}//end class
