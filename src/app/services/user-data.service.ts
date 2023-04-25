import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserGame } from '../models/UserGame';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private baseUrl: string = 'https://localhost:7057/api/';

  constructor(private http: HttpClient) { }

  public getUserGamesListService(userId: number): Observable<UserGame[]> {
    return this.http.get<UserGame[]>(this.baseUrl + 'usergames/'+ userId);
  }

  public addOrUpdateUserGame(userId: number, gameId: number): Observable<UserGame> {
    let body = {
      id: 0,
      user: userId,
      game: gameId,
      plays: 0
    }
    return this.http.post<UserGame>(this.baseUrl + 'usergames', body);
  }
}
