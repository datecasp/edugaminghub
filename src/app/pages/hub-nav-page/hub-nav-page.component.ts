import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Game } from 'src/app/models/Game';
import { GAMES } from 'src/app/data/games';
import { SocialQuizzsLibService } from 'social-quizzs-lib';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-hub-nav-page',
  templateUrl: './hub-nav-page.component.html',
  styleUrls: ['./hub-nav-page.component.css'],
})
export class HubNavPageComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  title = 'Edugaming Hub';
  opened: boolean = false;
  imgMenuIcon: string = './assets/rubik.png';
  imgMenuIconHover: string = './assets/rubik-hover.png';
  imgSrc: string = this.imgMenuIcon;
  imgHomeBtn: string = './assets/home2.png';
  isUserLogged: boolean = false;
  isUserLogged$!: Observable<boolean>;
  userName = 'Your profile';
  loggingSubscription: Subscription = new Subscription();
  games: Game[] = GAMES;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('token') != null) {
      this.isUserLogged = true;
    } else {
      this.isUserLogged = false;
    }
    this.loggingSubscription = this.authService.isLogged().subscribe(() =>document.location.reload());
  }

  public onClick(gameName: string) {
    this.router.navigate([`/instructions/`, gameName]);
  }

  public goHome() {
    this.router.navigate(['/home/']);
  }

  public onClick_GamesSideNav() {
    this.opened != this.opened;
  }

  public logout() {
    this.authService.logout();
    this.authService.loggedObs.next(this.isUserLogged);
    this.router.navigate(['/home/']);
  }
}
