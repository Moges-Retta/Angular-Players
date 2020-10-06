import { Component } from '@angular/core';
import { Land } from 'src/model/land';
@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  <h2>Details van {{land.name}}</h2>
  <div><label>id: </label>{{land.id}}</div>
  <div><label>naam: </label>{{land.name}}
  <input [(ngModel)]="land.name" placeholder="name"></div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Een lijstje van landen';
  land: Land = {
    id: 1,
    name: 'Belgie'
  };
}
