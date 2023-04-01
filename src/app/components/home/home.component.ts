import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GAMES } from 'src/app/data/games';
import { HOME_TEXTS } from 'src/app/data/home-texts';
import { Game } from 'src/app/models/Game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  gamesList: Game[] = [
    { id: 0, quizzName: '', quizzImg: '', quizzNameValue: '' },
  ];
  homeTexts = HOME_TEXTS;
  title = this.homeTexts.at(0)?.title;
  HomeText1 = this.homeTexts.at(0)?.text1;
  HomeText2 = this.homeTexts.at(0)?.text2;
  constructor(
    private router: Router,
    private gameService: GamesService,
    public dialog: MatDialog
  ) {}

  ngAfterViewInit(): void {
    this.getValues();
  }

  getValues() {
    this.gameService.getGamesListService().subscribe(async (games) => {
      this.gamesList = games;
    });
  }

  public onClick(gameName: string) {
    this.router.navigate([`/instructions/`, gameName]);
  }

  public openLogin() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
