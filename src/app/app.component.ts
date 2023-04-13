import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialQuizzsLibService } from 'projects/social-quizzs-lib/src/public-api';
import { GAMES } from './data/games';
import { Game } from './models/Game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'social-quizzs-app';
  opened: boolean = false;
  imgMenuIcon: string = "./assets/rubik.png";
  imgMenuIconHover: string = "./assets/rubik-hover.png";
  imgSrc: string = this.imgMenuIcon;
  isUserLogged: boolean = false;
  userName = "Your profile";

  games: Game[] = GAMES;

   constructor(
    private quizzLibService: SocialQuizzsLibService,
    private router: Router,
    private route: ActivatedRoute
    ){}

  ngAfterViewInit(): void { 
    if(sessionStorage.getItem('token') != null){
      this.isUserLogged = true;
    }
    else{
      this.isUserLogged = false;
    }
  }

  public onClick(gameName: string){
    this.router.navigate([`/instructions/`,gameName]);
  }

  public onClick_GamesSideNav(){
    this.opened != this.opened;
  }
}
