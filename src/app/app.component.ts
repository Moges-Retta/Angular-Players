import { Component } from '@angular/core';
import { Land } from 'src/model/land';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  static readonly LANDEN: Land[] = [
    { id: 11, name: 'België' },
    { id: 12, name: 'Nederland' },
    { id: 13, name: 'Engeland' },
    { id: 14, name: 'Ierland' },
    { id: 15, name: 'Frankrijk' },
    { id: 16, name: 'Spanje' },
    { id: 17, name: 'Portugal' },
    { id: 18, name: 'Italië' },
    { id: 19, name: 'Zwitserland' },
    { id: 20, name: 'Duitsland' }
  ];

  title = 'Een lijstje van landen';
  landen = AppComponent.LANDEN;
  selectedLand: Land;
  land: Land = {
    id: 1,
    name: 'Belgie'
  };
  onSelect(land: Land): void{
    this.selectedLand = land;
  }
}
