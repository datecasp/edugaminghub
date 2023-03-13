import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { btnQuizzDrawer } from './social-quizzs-lib.models';
import { Observable } from 'rxjs';
import { SOCIAL_SPAIN_RIVERS } from './data/social-spain';

@Injectable({
  providedIn: 'root'
})
export class SocialQuizzsLibService {
  private readonly baseUrl = "https://datecasp.github.io";
  private rivers: string[] = SOCIAL_SPAIN_RIVERS;

  constructor(private http: HttpClient) { }

  getQuizzGame(gameName: string){
    let url: string ="";
    if(gameName == 'fill-the-gaps'){
        url = `${this.baseUrl}/${gameName}`;
    }
    else{
      url = `localhost:4200/${gameName}`;
    }
    window.open(url);
  }

  getData(data: string): string[]{
    return this.rivers;
  }
}
