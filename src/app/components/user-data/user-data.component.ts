import { AfterViewInit, Component, Input } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GameInfo } from 'src/app/models/GameInfo';
import { UserGame } from 'src/app/models/UserGame';
import { GamesService } from 'src/app/services/games.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements AfterViewInit {
  @Input() userId: number = 0;
  public userGamesList: UserGame[] = [];
  public gamesList: Game[] = [];
  public gamesInfoList: GameInfo[] = [];
  isLogged: boolean = false;
  displayedColumns: string[] = ['Game', 'Plays'];

  constructor(
    private userDataService: UserDataService,
    private gameService: GamesService
  ) {}

  ngAfterViewInit(): void {
    this.gameService.getGamesListService().subscribe((gamesList) => {
      this.userDataService
        .getUserGamesListService(this.userId)
        .subscribe(async (ug) => {
          this.gamesInfoList = this.getValues(gamesList, ug);
        });
    });
    if (sessionStorage.getItem('token')) {
      this.isLogged = true;
    }
  }

  public getValues(gamesList: Game[], userGamesList: UserGame[]): GameInfo[] {
    var gamesInfoList: GameInfo[]= [];
    for (let game of gamesList) {
      var gameInfo: GameInfo = {
        id: game.id,
        gameName: game.quizzName,
        gameImgUri: game.quizzImgUri,
        gamePlays:
          userGamesList.find(
            (ug) => ug.game == game.id && ug.user == this.userId
          )?.plays || 0,
      };
      gamesInfoList.push(gameInfo);
    }
    return gamesInfoList;
  }
}
