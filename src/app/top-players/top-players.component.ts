import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from 'src/model/player';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent implements OnInit {
  players: Player[] = [];
  constructor(private playerService: PlayerService) { }
  ngOnInit(): void {
    this.playerService.getTopPlayers(3).subscribe(topPlayers => this.players = topPlayers);
  }
}
