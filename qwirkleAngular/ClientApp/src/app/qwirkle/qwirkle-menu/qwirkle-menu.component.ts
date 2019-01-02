import { Component, Input } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { HubConnection, HubConnectionState } from '@aspnet/signalr';
import { QwirkleRegisterComponent } from '../qwirkle-register/qwirkle-register.component';

@Component({
  selector: 'app-qwirkle-menu-component',
  templateUrl: './qwirkle-menu.component.html'
})

export class QwirkleMenuComponent {

  @Input() connection: HubConnection;
  @Input() logs: string[];

  constructor() {

  }


}//end class
