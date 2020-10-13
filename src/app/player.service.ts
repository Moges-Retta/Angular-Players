import { Injectable } from '@angular/core';
import { LANDEN } from 'src/app/mock-players';
import { Land } from 'src/model/player';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map} from 'rxjs/operators';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'applica-tion/json' }) };

@Injectable({
  providedIn: 'root'
})
export class LandService {
  private landenUrl = 'api/landen';
  constructor(private http: HttpClient) {}

  getLanden(): Observable<Land[]> {
    return this.http.get<Land[]>(this.landenUrl)
      .pipe(
        catchError(this.handleError('getLanden', []))
      );
  }
  getTopLanden(top: number): Observable<Land[]> {
    return this.http.get<Land[]>(this.landenUrl)
      .pipe(
        // tslint:disable-next-line: typedef
        map(landen => landen.sort(function(a, b) { return b.inwoners - a.inwoners; }).slice(0, top)),
        catchError(this.handleError('getTopLanden', []))
      );
  }
  getLand(id: number): Observable<Land> {
    const url = `${this.landenUrl}/${id}`;
    return this.http.get<Land>(url)
      .pipe(
        catchError(this.handleError<Land>(`getLand id=${id}`))
      );
  }
  // tslint:disable-next-line: typedef
  handleError<T>(operation= 'operation', result?: T) {
    // TODO: explain generics in Typescript intro!!
    return (error: any): Observable<T> => {
      // todo beter error logging
      console.log(operation, error);
      return of(result as T);
    };
  }
  updateLand(land: Land): Observable<any> {
    return this.http.put(this.landenUrl, land, httpOptions).pipe(
      catchError(this.handleError<any>('updateLand'))
    );
}
addLand(land: Land): Observable<Land> {
  return this.http.post<Land>(this.landenUrl, land, httpOptions).pipe(
    catchError(this.handleError<Land>('addLand'))
  );
}
// een user kan een land verwijderen door een landid in de url te typen
  // of door de delete knop te klikken in de lijst en dus een Land object naar de service opsturen
  // we gebruiken hier a 'union type', daarmee moet de gebruiker ofwel een land ofwel een getal (id) meegeven
  deleteLand(land: Land | number): Observable<Land> {
    // we hebben in elk geval een id nodig
    const id = typeof land === 'number' ? land : land.id;
    const url = `${this.landenUrl}/${id}`;
    return this.http.delete<Land>(url, httpOptions).pipe(
      catchError(this.handleError<Land>('deleteLand'))
    );
  }
  zoekLand(zoekString: string): Observable<Land[]>{
    if (!zoekString.trim()) {
      return of([]);
    }
    return this.http.get<Land[]>(`${this.landenUrl}/?name=${zoekString}`).pipe(
      catchError(this.handleError<Land[]>('zoekLand', []))
    );
  }

}
