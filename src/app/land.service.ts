import { Injectable } from '@angular/core';
import { LANDEN } from 'src/app/mock-landen';
import { Land } from 'src/model/Land';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LandService {
  getLanden(): Observable<Land[]> {
    return of(LANDEN);
}
getTopLanden(top: number): Observable<Land[]> {
  return of(LANDEN.sort((a, b) => b.inwoners - a.inwoners).slice(0, top));
  }
getLand(id: number): Observable<Land> {
    return of(LANDEN.find(land => land.id === id));
  }
}
