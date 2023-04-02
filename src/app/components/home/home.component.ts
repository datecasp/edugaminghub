import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GAMES } from 'src/app/data/games';
import { HOME_TEXTS } from 'src/app/data/home-texts';
import { Game } from 'src/app/models/Game';
import { GamesService } from 'src/app/services/games.service';
import { LoginComponent } from '../login/login.component';
import { RegisterFormComponent } from '../register/register.component';
import { RegisterFormDTO } from 'src/app/models/register-form-DTO';
import { LoginFormDTO } from 'src/app/models/login-form-DTO';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { AuthService } from 'src/app/services/auth-service.service';

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
  homeText1 = this.homeTexts.at(0)?.text1;
  homeText2 = this.homeTexts.at(0)?.text2;
  isLogged: boolean = false;

  loginForm: LoginFormDTO = {
    email: '',
    password: ''
  }

  registerForm: RegisterFormDTO = {
    name: '',
    surname: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private gameService: GamesService,
    public dialog: MatDialog,
    private _authService: AuthService
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
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      data: { email: this.loginForm.email, password: this.loginForm.password },
    });

    dialogRef.afterClosed().subscribe((result) => {
      let {email, password} = result;
      //:TODO update deprecated subscribe to next?
      this._authService.login(email, password).subscribe(
        (response) => {
          if (response.token) {
            sessionStorage.setItem('token', response.token);
            this.isLogged = true;
            this.router.navigate(['home']);
          }
        },
        (error) => console.error('Error: ${error}'),
        () => console.info('Request done')
      );
    });
  }

  public logout(){
    this._authService.logout();
    this.isLogged = false;
    this.router.navigate(['home']);
  }
}
