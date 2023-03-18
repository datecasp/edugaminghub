import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialQuizzsLibService } from 'projects/social-quizzs-lib/src/public-api';
import { GAME_NAMES } from './data/games';
import { GameName } from './models/gameName';

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

  games: GameName[] = GAME_NAMES;

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
