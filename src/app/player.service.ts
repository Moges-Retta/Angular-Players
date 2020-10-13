import { Injectable } from '@angular/core';
import { Player } from 'src/model/player';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map} from 'rxjs/operators';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'applica-tion/json' }) };

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playersUrl = 'api/players';
  constructor(private http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl)
      .pipe(
        catchError(this.handleError('getPlayers', []))
      );
  }
  getTopPlayers(top: number): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl)
      .pipe(
        // tslint:disable-next-line: typedef
        map(landen => landen.sort(function(a, b) { return b.points - a.points; }).slice(0, top)),
        catchError(this.handleError('getTopPlayers', []))
      );
  }
  getPlayer(id: number): Observable<Player> {
    const url = `${this.playersUrl}/${id}`;
    return this.http.get<Player>(url)
      .pipe(
        catchError(this.handleError<Player>(`getPlayer id=${id}`))
      );
  }
  // tslint:disable-next-line: typedef
  handleError<T>(operation= 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(operation, error);
      return of(result as T);
    };
  }
  updatePlayer(player: Player): Observable<any> {
    return this.http.put(this.playersUrl, player, httpOptions).pipe(
      catchError(this.handleError<any>('updatePlayer'))
    );
}
addPlayer(player: Player): Observable<Player> {
  return this.http.post<Player>(this.playersUrl, player, httpOptions).pipe(
    catchError(this.handleError<Player>('addPlayer'))
  );
}
  deletePlayer(player: Player | number): Observable<Player> {
    const id = typeof player === 'number' ? player : player.id;
    const url = `${this.playersUrl}/${id}`;
    return this.http.delete<Player>(url, httpOptions).pipe(
      catchError(this.handleError<Player>('deletePlayer'))
    );
  }
  zoekPlayer(zoekString: string): Observable<Player[]>{
    if (!zoekString.trim()) {
      return of([]);
    }
    return this.http.get<Player[]>(`${this.playersUrl}/?name=${zoekString}`).pipe(
      catchError(this.handleError<Player[]>('zoekPlayer', []))
    );
  }

}
