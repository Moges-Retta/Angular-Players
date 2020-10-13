import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayersComponent } from './players/players.component';
import { TopPlayersComponent } from './top-players/top-players.component';

const routes: Routes = [
  {path: 'players', component: PlayersComponent},
  {path: 'top', component: TopPlayersComponent},
  {path: '', redirectTo: '/top', pathMatch: 'full'},
  {path: 'detail/:id', component: PlayerDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

