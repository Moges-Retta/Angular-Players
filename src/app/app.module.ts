import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayerService } from './player.service';
import { PlayersComponent } from './players/players.component';
import { TopPlayersComponent } from './top-players/top-players.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlayerZoekComponent } from './player-zoek/player-zoek.component';
@NgModule({
  declarations: [
    AppComponent,
    PlayerDetailsComponent,
    PlayersComponent,
    TopPlayersComponent,
    PlayerZoekComponent
  ],
  imports: [
    BrowserModule, FormsModule, FontAwesomeModule, AppRoutingModule, HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService
    )
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
