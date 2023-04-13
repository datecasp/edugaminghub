import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { QuizzButtonComponent } from './components/quizz-button/quizz-button.component';
import { UserButtonComponent } from './components/user-button/user-button.component';



@NgModule({
  declarations: [
    QuizzButtonComponent,
    UserButtonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
   QuizzButtonComponent,
   UserButtonComponent
  ]
})
export class SocialQuizzsLibModule { }
