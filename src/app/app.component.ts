import { Component, OnInit } from '@angular/core';
import { Land } from 'src/model/land';
import { LandService } from './land.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Een lijstje van landen';
  land: Land = {
    id: 1,
    name: 'Belgie'
  };
  landen: Land[];
  constructor(private landService: LandService) { }
  selectedLand: Land;
  totalVotes: number;
  onSelect(land: Land): void{
    this.selectedLand = land;
  }
  onValueChange(event: number): void {
    this.totalVotes = event;
  }
  ngOnInit(): void {
    this.landen = this.landService.getLanden();
  }

}
