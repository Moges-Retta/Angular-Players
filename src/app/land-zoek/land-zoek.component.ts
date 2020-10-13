import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Land } from 'src/model/land';
import { LandService } from '../land.service';

@Component({
  selector: 'app-land-zoek',
  templateUrl: './land-zoek.component.html',
  styleUrls: ['./land-zoek.component.css']
})
export class LandZoekComponent implements OnInit {
  landen$: Observable<Land[]>;
  private zoekString = new Subject<string>();
  constructor(private landService: LandService) { }
  zoek(term: string): void {
    this.zoekString.next(term);
  }
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.landen$ = this.zoekString.pipe (
      // wacht 300 ms na elke toetsaanslag
      debounceTime(300),
      // negeer als de term hetzelfde is de vorige
      distinctUntilChanged(),
      // switch naar een nieuwe observable elke keer de term verandert
      switchMap((term: string) => this.landService.zoekLand(term))
    );
  }

}
