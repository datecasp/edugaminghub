import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private baseUrl: string = 'https://localhost:7057/api/';

  constructor(private http: HttpClient) {}

  public getGamesListService(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl + 'games');
  }
}
