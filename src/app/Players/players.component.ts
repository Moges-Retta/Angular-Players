import { Component, OnInit } from '@angular/core';
import { Player } from 'src/model/player';
import { PlayerService } from 'src/app/player.service';
import { Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-players',
  templateUrl: 'players.component.html',
  styleUrls: ['players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Player[];
  nieuwPlayer: Player = {} as Player; 
  fatrash = faTrash;
  constructor(private playService: PlayerService,  private router: Router) { }
  selectedPlayer: Player;

  onSelect(player: Player): void{
    this.selectedPlayer = player;
  }

  ngOnInit(): void {
    this.playService.getPlayers().subscribe(players => this.players = players);
  }
  gotoDetail():void{
    this.router.navigate(['/detail',this.selectedPlayer.id]);
}
add(): void {
  if (!this.nieuwPlayer.name.trim() || !this.nieuwPlayer.name.trim() || isNaN(this.nieuwPlayer.points || this.nieuwPlayer.age || this.nieuwPlayer.tournamentsPlayed)) { return; }
  this.playService.addPlayer({
    name: this.nieuwPlayer.name,
    country: this.nieuwPlayer.country,
    age: this.nieuwPlayer.age,
    points: this.nieuwPlayer.points,
    tournamentsPlayed: this.nieuwPlayer.tournamentsPlayed 
    } as Player)
    .subscribe(player => {
      this.players.push(player);
      this.nieuwPlayer = {} as Player; // of = new Land()
    });
}
delete(player: Player): void {
  this.players  = this.players.filter(p => p !== player);
  this.playService.deletePlayer(player).subscribe();
}

}
