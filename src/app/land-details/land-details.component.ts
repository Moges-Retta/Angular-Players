import { Component, Input } from '@angular/core';
import { Land } from 'src/model/land';

@Component({
  selector: 'app-land-details',
  templateUrl: './land-details.component.html',
  styleUrls: ['./land-details.component.css']
})
export class LandDetailsComponent {
@Input () land: Land;
}
