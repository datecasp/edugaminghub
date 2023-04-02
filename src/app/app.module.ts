import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from 'material.module';

import { SocialQuizzsLibModule } from 'projects/social-quizzs-lib/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SpainRiversQuizzComponent } from './components/games/spain-rivers-quizz/spain-rivers-quizz.component';
import { SpainAaccQuizzComponent } from './components/games/spain-aacc-quizz/spain-aacc-quizz.component';
import { TableCustomComponent } from './components/table-custom/table-custom.component';
import { TableCustomService } from './services/table-custom.service';
import { OlMapComponent } from './components/ol-map/ol-map.component';
import { OlMapService } from './services/ol-map.service';
import { FinalDialogComponent } from './components/final-dialog/final-dialog.component';
import { FinalDialogService } from './services/final-dialog.service';
import { VerbsGridComponent } from './components/games/verbs-grid/verbs-grid.component';
import { VerbsService } from './services/verbs.service';
import { VerbRowComponent } from './components/verb-row/verb-row.component';
import { FormsModule } from '@angular/forms';
import { FillTheGapsComponent } from './components/games/fill-the-gaps/fill-the-gaps.component';
import { LetterButtonComponent } from './components/letter-button/letter-button.component';
import { RandomLetterButtonComponent } from './components/random-letter-button/random-letter-button.component';
import { LetterButtonRendererComponent } from './components/letter-button-renderer/letter-button-renderer.component';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { BlankButtonComponent } from './components/blank-button/blank-button.component';
import { GameInstructionsComponent } from './components/game-instructions/game-instructions.component';
import { GamesService } from './services/games.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterFormComponent } from './components/register/register.component';
import { AuthService } from './services/auth-service.service';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpainRiversQuizzComponent,
    SpainAaccQuizzComponent,
    TableCustomComponent,
    OlMapComponent,
    FinalDialogComponent,
    VerbRowComponent,
    VerbsGridComponent,
    LetterButtonComponent,
    RandomLetterButtonComponent,
    LetterButtonRendererComponent,
    BlankButtonComponent,
    FillTheGapsComponent,
    GameInstructionsComponent,
    LoginComponent,
    RegisterFormComponent,
    LoginFormComponent,
    LoginDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragAndDropModule,
    SocialQuizzsLibModule,
    FormsModule,
    NgbModule,
    NgbPopoverModule,
    MaterialModule,
  ],
  providers: [OlMapService, FinalDialogService, VerbsService, TableCustomService, GamesService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
