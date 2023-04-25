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
import { OlMapComponent } from './components/ol-map/ol-map.component';
import { OlMapService } from './services/ol-map.service';
import { FinalDialogComponent } from './components/final-dialog/final-dialog.component';
import { FinalDialogService } from './services/final-dialog.service';
import { VerbsGridComponent } from './components/games/verbs-grid/verbs-grid.component';
import { VerbsService } from './services/verbs.service';
import { VerbRowComponent } from './components/verb-row/verb-row.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FillTheGapsComponent } from './components/games/fill-the-gaps/fill-the-gaps.component';
import { LetterButtonComponent } from './components/letter-button/letter-button.component';
import { RandomLetterButtonComponent } from './components/random-letter-button/random-letter-button.component';
import { LetterButtonRendererComponent } from './components/letter-button-renderer/letter-button-renderer.component';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { BlankButtonComponent } from './components/blank-button/blank-button.component';
import { GameInstructionsComponent } from './components/game-instructions/game-instructions.component';
import { GamesService } from './services/games.service';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';
import { AuthService } from './services/auth-service.service';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { GenericDialogComponent } from './components/generic-dialog/generic-dialog.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SpainRiversPageComponent } from './pages/games/spain-rivers-page/spain-rivers-page.component';
import { SpainAaccPageComponent } from './pages/games/spain-aacc-page/spain-aacc-page.component';
import { FillTheGapsPageComponent } from './pages/games/fill-the-gaps-page/fill-the-gaps-page.component';
import { VerbsGridTestPageComponent } from './pages/games/verbs-grid-test-page/verbs-grid-test-page.component';
import { GameInstructionsPageComponent } from './pages/game-instructions-page/game-instructions-page.component';
import { HubNavPageComponent } from './pages/hub-nav-page/hub-nav-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PasswordCheckerDirective } from './shared/password-checker.directive';

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
    RegisterDialogComponent,
    LoginDialogComponent,
    GenericDialogComponent,
    HomePageComponent,
    SpainRiversPageComponent,
    SpainAaccPageComponent,
    FillTheGapsPageComponent,
    VerbsGridTestPageComponent,
    GameInstructionsPageComponent,
    HubNavPageComponent,
    PasswordCheckerDirective,
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
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OlMapService, FinalDialogService, VerbsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
