import { Injectable } from '@angular/core';
import { LANDEN } from 'src/app/mock-landen';
import { Land } from 'src/model/Land';
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
}
