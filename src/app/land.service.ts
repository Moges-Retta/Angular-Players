import { Injectable } from '@angular/core';
import { LANDEN } from 'src/app/mock-landen';
import { Land } from 'src/model/Land';

@Injectable({
  providedIn: 'root'
})
export class LandService {
getLanden(): Land[]{
  return LANDEN;
}
}
