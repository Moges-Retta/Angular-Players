import { Component } from '@angular/core';
import { Land } from 'src/model/land';
@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  <h2>Details van {{land.name}}</h2>
  <div><label>id: </label>{{land.id}}</div>
  <div><label>naam: </label>{{land.name}}
  <input [(ngModel)]="land.name" placeholder="name"></div>
  <h1>{{title}}</h1>
            <h2>Mijn landen</h2>
            <ul>
              <li *ngFor="let l of landen">
                <span>{{l.id}}</span>{{l.name}}
              </li>
            </ul>`,
  styleUrls: ['./app.component.css']
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
  land: Land = {
    id: 1,
    name: 'Belgie'
  };
}
