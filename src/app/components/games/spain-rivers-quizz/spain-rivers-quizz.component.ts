import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-spain-rivers-quizz',
  templateUrl: './spain-rivers-quizz.component.html',
  styleUrls: ['./spain-rivers-quizz.component.css']
})
export class SpainRiversQuizzComponent {

  constructor(private router: Router,
    private route: ActivatedRoute){}
}
