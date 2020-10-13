import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Player } from 'src/model/player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-zoek',
  templateUrl: './player-zoek.component.html',
  styleUrls: ['./player-zoek.component.css']
})
export class PlayerZoekComponent implements OnInit {
  players$: Observable<Player[]>;
  private zoekString = new Subject<string>();
  constructor(private playerService: PlayerService) { }
  zoek(term: string): void {
    this.zoekString.next(term);
  }
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.players$ = this.zoekString.pipe (
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.playerService.zoekPlayer(term))
    );
  }

}
