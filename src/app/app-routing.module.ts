import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SpainRiversPageComponent } from './pages/games/spain-rivers-page/spain-rivers-page.component';
import { FillTheGapsPageComponent } from './pages/games/fill-the-gaps-page/fill-the-gaps-page.component';
import { GameInstructionsPageComponent } from './pages/game-instructions-page/game-instructions-page.component';
import { SpainAaccPageComponent } from './pages/games/spain-aacc-page/spain-aacc-page.component';
import { VerbsGridTestPageComponent } from './pages/games/verbs-grid-test-page/verbs-grid-test-page.component';
import { HubNavPageComponent } from './pages/hub-nav-page/hub-nav-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  {
    path: 'spain-rivers-quizz',
    component: SpainRiversPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'spain-aacc-quizz',
    component: SpainAaccPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'verbs-grid-test',
    component: VerbsGridTestPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'fill-the-gaps',
    component: FillTheGapsPageComponent,
    canActivate: [authGuard],
  },
  { path: 'instructions/:gameName', component: GameInstructionsPageComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
