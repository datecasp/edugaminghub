import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GAMES } from 'src/app/data/games';
import { INSTRUCTIONS_SETS } from 'src/app/data/game-instructions';
import { Game } from 'src/app/models/Game';
import { InstructionsSet } from 'src/app/models/InstructionsSet';
import { AuthService } from 'src/app/services/auth-service.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { LoginFormDTO } from 'src/app/models/login-form-DTO';
import { MatDialog } from '@angular/material/dialog';

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
  isLogged: boolean = false;

  loginForm: LoginFormDTO = {
    email: '',
    password: '',
  };

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  ngAfterViewInit() {
    this.route.params.subscribe((params) => {
      this.gameName = params['gameName'];
      this.loadGameData();
    });
    if (sessionStorage.getItem('token') != null) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  openLogin() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      data: { email: this.loginForm.email, password: this.loginForm.password },
    });

    dialogRef.afterClosed().subscribe((result) => {
      let { email, password } = result;
      //:TODO update deprecated subscribe to next?
      this.authService.login(email, password).subscribe(
        (response) => {
          if (response.token) {
            sessionStorage.setItem('token', response.token);
            sessionStorage.setItem('userId', response.userId);
            this.isLogged = true;
            this.router.navigate([this.game.quizzNameValue]);
          }
        },
        (error) => console.error('Error: ${error}'),
        () => console.info('Request done')
      );
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
