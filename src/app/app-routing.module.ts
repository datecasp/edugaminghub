import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FillTheGapsComponent } from './components/games/fill-the-gaps/fill-the-gaps.component';
import { SpainAaccQuizzComponent } from './components/games/spain-aacc-quizz/spain-aacc-quizz.component';
import { SpainRiversQuizzComponent } from './components/games/spain-rivers-quizz/spain-rivers-quizz.component';
import { VerbsGridComponent } from './components/games/verbs-grid/verbs-grid.component';
import { HomeComponent } from './components/home/home.component';

const baseUrl: string = "edugaming/"
const routes: Routes = [
  {path: baseUrl, component: HomeComponent},
  {path: baseUrl+'spain-rivers-quizz', component: SpainRiversQuizzComponent},
  {path: baseUrl+'spain-aacc-quizz', component: SpainAaccQuizzComponent},
  {path: baseUrl+'verbs-grid-test', component: VerbsGridComponent},
  {path: baseUrl+'fill-the-gaps', component: FillTheGapsComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
