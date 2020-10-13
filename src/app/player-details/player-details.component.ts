import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Player } from 'src/model/player';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit{
  player: Player;
  constructor(private playerService: PlayerService, private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getPlayer();
  }
  getPlayer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.playerService.getPlayer(id).subscribe(player => this.player = player);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.playerService.updatePlayer(this.player)
    .subscribe(() => this.goBack());
  }
}
/*@Input () land: Land;
@Output() valueChange = new EventEmitter();
  votes = 0;
  onClick(): void{
    this.votes++;
    this.valueChange.emit(this.votes);
  }
}*/
