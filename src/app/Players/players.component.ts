import { Component, OnInit } from '@angular/core';
import { Player } from 'src/model/player';
import { PlayerService } from 'src/app/player.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-players',
  templateUrl: 'players.component.html',
  styleUrls: ['players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Player[];
  nieuwPlayer: Player = {} as Player; 
  public show:boolean = false;
  public buttonName:any = 'Show Add Form';

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
  if (!this.nieuwPlayer.name.trim() || !this.nieuwPlayer.country.trim() || isNaN(this.nieuwPlayer.points || this.nieuwPlayer.age || this.nieuwPlayer.tournamentsPlayed)) { return; }
  this.playService.addPlayer({
    name: this.nieuwPlayer.name,
    country: this.nieuwPlayer.country,
    age: this.nieuwPlayer.age,
    points: this.nieuwPlayer.points,
    tournamentsPlayed: this.nieuwPlayer.tournamentsPlayed 
    } as Player)
    .subscribe(player => {
      this.players.push(player);
      this.nieuwPlayer = {} as Player; 
    });
}
delete(player: Player): void {
  this.players  = this.players.filter(p => p !== player);
  this.playService.deletePlayer(player).subscribe();
}
toggle() {
  this.show = !this.show;
  // CHANGE THE NAME OF THE BUTTON.
  if(this.show)  
    this.buttonName = "Hide Add Form";
  else
    this.buttonName = "Show Add Form";
}
}
