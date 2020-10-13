import { Component, OnInit } from '@angular/core';
import { Land } from 'src/model/land';
import { LandService } from 'src/app/land.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landen',
  templateUrl: 'landen.component.html',
  styleUrls: ['landen.component.css']
})
export class LandenComponent implements OnInit {

  landen: Land[];
  nieuwLand: Land = {} as Land; // of = new Land()
  constructor(private landService: LandService,  private router: Router) { }
  selectedLand: Land;
  totalVotes: number;
  onSelect(land: Land): void{
    this.selectedLand = land;
  }
  onValueChange(event: number): void {
    this.totalVotes = event;
  }
  ngOnInit(): void {
     // this.landen = this.landService.getLanden();
    this.landService.getLanden().subscribe(landen => this.landen = landen);
  }
  gotoDetail():void{
    this.router.navigate(['/detail',this.selectedLand.id]);
}
add(): void {
  if (!this.nieuwLand.name.trim() || isNaN(this.nieuwLand.inwoners)) { return; }
  this.landService.addLand({ name: this.nieuwLand.name, inwoners: this.nieuwLand.inwoners } as Land)
    .subscribe(land => {
      this.landen.push(land);
      this.nieuwLand = {} as Land; // of = new Land()
    });
}

}
