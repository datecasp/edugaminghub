import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GAMES } from 'src/app/data/games';
import { INSTRUCTIONS_SETS } from 'src/app/data/game-instructions';
import { Game } from 'src/app/models/Game';
import { InstructionsSet } from 'src/app/models/InstructionsSet';

@Component({
  selector: 'app-game-instructions',
  templateUrl: './game-instructions.component.html',
  styleUrls: ['./game-instructions.component.css'],
})
export class GameInstructionsComponent implements AfterViewInit {
  title: string = 'App tittle';
  instructionsSet1: string = 'Here goes first set of instructions of the game';
  instructionsSet2: string = 'Here goes second set of instructions of the game';
  game: Game | any;
  gamesData = GAMES;
  gamesInstructions = INSTRUCTIONS_SETS;
  gameName: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.params.subscribe((params) => {
      this.gameName = params['gameName'];
      this.loadGameData();
    });
  }

  loadGameData() {
    for (const g of this.gamesData) {
      if (g.quizzNameValue == this.gameName) {
        this.game = g;
        this.title = g.quizzName;
        this.instructionsSet1 = this.gamesInstructions[g.id].set1;
        this.instructionsSet2 = this.gamesInstructions[g.id].set2;
      }
    }
  }

  onClick() {
    this.router.navigate([this.game.quizzNameValue]);
  }
}
