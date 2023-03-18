import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GAME_NAMES } from 'src/app/data/games';
import { GameName } from 'src/app/models/gameName';

@Component({
  selector: 'app-game-instructions',
  templateUrl: './game-instructions.component.html',
  styleUrls: ['./game-instructions.component.css'],
})
export class GameInstructionsComponent implements OnInit {
  title: string = 'App tittle';
  instructionsSet1: string = 'Here goes first set of instructions of the game';
  instructionsSet2: string = 'Here goes second set of instructions of the game';
  game: GameName | any;
  gamesData = GAME_NAMES;
  gameName: string = "";

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.gameName = params['gameName'];
    });

    this.loadGameData();
  }

  loadGameData(){
    for (const g of this.gamesData) {
      if (g.quizzNameValue == this.gameName){
        this.game = g;
      }
    }
  }

  onClick() {
    this.router.navigate([this.game.quizzNameValue]);
  }
}
