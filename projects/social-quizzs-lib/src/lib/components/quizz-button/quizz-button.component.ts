import { Component, Input } from '@angular/core';

@Component({
  selector: 'quizz-button',
  templateUrl: './quizz-button.component.html',
  styleUrls: ['./quizz-button.component.css']
})
export class QuizzButtonComponent {
  @Input() imgUri: string = "";
  @Input() quizzGameName: string = "";
}
