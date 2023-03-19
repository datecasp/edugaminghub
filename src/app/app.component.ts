import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialQuizzsLibService } from 'projects/social-quizzs-lib/src/public-api';
import { GAMES } from './data/games';
import { Game } from './models/Game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'social-quizzs-app';
  opened: boolean = false;
  imgMenuIcon: string = "./assets/rubik.png";
  imgMenuIconHover: string = "./assets/rubik-hover.png";
  imgSrc: string = this.imgMenuIcon;

  games: Game[] = GAMES;

   constructor(
    private quizzLibService: SocialQuizzsLibService,
    private router: Router
    ){}

  ngOnInit(): void { 
  }

  public onClick(gameName: string){
    this.router.navigate([`/instructions/`+gameName]);
  }

  public onClick_GamesSideNav(){
    this.opened != this.opened;
  }
}
