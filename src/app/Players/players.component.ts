import { Component, OnInit } from '@angular/core';
import { Land } from 'src/model/player';
import { LandService } from 'src/app/player.service';
import { Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-landen',
  templateUrl: 'landen.component.html',
  styleUrls: ['landen.component.css']
})
export class LandenComponent implements OnInit {

  landen: Land[];
  nieuwLand: Land = {} as Land; // of = new Land()
  fatrash = faTrash;
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
delete(land: Land): void {
  this.landen  = this.landen.filter(l => l !== land);
  this.landService.deleteLand(land).subscribe();
}

}
