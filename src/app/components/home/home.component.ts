import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GAMES } from 'src/app/data/games';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  gamesList = GAMES;
  title = 'Edugaming Hub';
  HomeText1 = 'Text 1 for home page. Put this text in a resource file please.';
  HomeText2 =
    'Another Text for home page. Put it also in a resource file please.';
  constructor(private router: Router) {}
  public onClick(gameName: string) {
    this.router.navigate([`/instructions/`, gameName]);
  }
}
