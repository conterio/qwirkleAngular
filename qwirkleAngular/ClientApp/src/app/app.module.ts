import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SticksComponent } from './sticks/sticks.component';
import { QwirkleComponent } from './qwirkle/Qwirkle.component';
import { QwirkleMenuComponent } from './qwirkle/qwirkle-menu/qwirkle-menu.component';
import { QwirkleRegisterComponent } from './qwirkle/qwirkle-register/qwirkle-register.component';
import { HubDataService } from './services/HubDataService';
import { QwirkleLobbiesComponent } from './qwirkle/lobbies/qwirkle-lobbies.component';
import { QwirklePlayersComponent } from './qwirkle/players/qwirkle-players.component';
import { QwirkleCreateGameComponent } from './qwirkle/create-game/qwirkle-create-game.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SticksComponent,
    QwirkleComponent,
    QwirkleMenuComponent,
    QwirkleRegisterComponent,
    QwirkleLobbiesComponent,
    QwirklePlayersComponent,
    QwirkleCreateGameComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'sticks', component: SticksComponent },
      { path: 'qwirkle', component: QwirkleComponent },
      { path: 'lobbies', component: QwirkleLobbiesComponent },
      { path: 'players', component: QwirklePlayersComponent },
      { path: 'create-game', component: QwirkleCreateGameComponent },
    ])
  ],
  providers: [HubDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
