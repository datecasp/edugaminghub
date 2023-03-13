import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { QuizzButtonComponent } from './components/quizz-button/quizz-button.component';



@NgModule({
  declarations: [
    QuizzButtonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
   QuizzButtonComponent
  ]
})
export class SocialQuizzsLibModule { }
