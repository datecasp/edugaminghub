import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Game } from 'src/app/models/Game';
import { GAMES } from 'src/app/data/games';
import { SocialQuizzsLibService } from 'social-quizzs-lib';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hub-nav-page',
  templateUrl: './hub-nav-page.component.html',
  styleUrls: ['./hub-nav-page.component.css']
})
export class HubNavPageComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    
  title = 'Edugaming Hub';
  opened: boolean = false;
  imgMenuIcon: string = "./assets/rubik.png";
  imgMenuIconHover: string = "./assets/rubik-hover.png";
  imgSrc: string = this.imgMenuIcon;
  isUserLogged: boolean = false;
  userName = "Your profile";

  games: Game[] = GAMES;

   constructor(
    private breakpointObserver: BreakpointObserver,
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
