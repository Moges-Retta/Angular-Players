import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Land } from 'src/model/land';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LandService } from '../land.service';

@Component({
  selector: 'app-land-details',
  templateUrl: './land-details.component.html',
  styleUrls: ['./land-details.component.css']
})
export class LandDetailsComponent implements OnInit{
  land: Land;
  constructor(private landService: LandService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getLand();
  }
  getLand(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.landService.getLand(id).subscribe(land => this.land = land);
  }
  goBack(): void {
    this.location.back();
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
