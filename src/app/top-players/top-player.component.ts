import { Component, OnInit } from '@angular/core';
import { LandService } from '../player.service';
import { Land } from 'src/model/player';

@Component({
  selector: 'app-top-inwoners',
  templateUrl: './top-inwoners.component.html',
  styleUrls: ['./top-inwoners.component.css']
})
export class TopInwonersComponent implements OnInit {
  landen: Land[] = [];
  constructor(private landService: LandService) { }
  ngOnInit(): void {
    this.landService.getTopLanden(3).subscribe(toplanden => this.landen = toplanden);
  }
}
