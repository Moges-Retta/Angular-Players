import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from 'src/model/player';

@Component({
  selector: 'app-top-inwoners',
  templateUrl: './top-inwoners.component.html',
  styleUrls: ['./top-inwoners.component.css']
})
export class TopPlayersComponent implements OnInit {
  players: Player[] = [];
  constructor(private playerService: PlayerService) { }
  ngOnInit(): void {
    this.playerService.getTopPlayers(3).subscribe(topPlayers => this.players = topPlayers);
  }
}
