import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameInstructionsComponent } from './components/game-instructions/game-instructions.component';
import { FillTheGapsComponent } from './components/games/fill-the-gaps/fill-the-gaps.component';
import { SpainAaccQuizzComponent } from './components/games/spain-aacc-quizz/spain-aacc-quizz.component';
import { SpainRiversQuizzComponent } from './components/games/spain-rivers-quizz/spain-rivers-quizz.component';
import { VerbsGridComponent } from './components/games/verbs-grid/verbs-grid.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'spain-rivers-quizz', component: SpainRiversQuizzComponent },
  { path: 'spain-aacc-quizz', component: SpainAaccQuizzComponent },
  { path: 'verbs-grid-test', component: VerbsGridComponent },
  { path: 'fill-the-gaps', component: FillTheGapsComponent },
  { path: 'instructions/:gameName', component: GameInstructionsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
