import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { btnQuizzDrawer } from 'projects/social-quizzs-lib/src/lib/social-quizzs-lib.models';
import { SocialQuizzsLibService } from 'projects/social-quizzs-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'social-quizzs-app';
  opened: boolean = false;
  imgMenuIcon: string = "./assets/rubik.png";
  imgMenuIconHover: string = "./assets/rubik-hover.png";
  imgSrc: string = this.imgMenuIcon;

  games: btnQuizzDrawer[] = [
    {id: 0, quizzName:"Fill the gaps", quizzImg:"./assets/brain.png", quizzNameValue:'fill-the-gaps'},
    {id: 1, quizzName:"VerbsGrid Test", quizzImg:"./assets/city.png", quizzNameValue: 'verbs-grid-test'},
    {id: 2, quizzName:" Spain rivers ", quizzImg:"./assets/river.png", quizzNameValue:'spain-rivers-quizz'},
    {id: 3, quizzName:"Spain AA. CC.", quizzImg:"./assets/mountain.png", quizzNameValue:'spain-aacc-quizz'}
   ]

   constructor(
    private quizzLibService: SocialQuizzsLibService,
    private router: Router
    ){}

  ngOnInit(): void { 
  }

  public onClick(gameName: string){
    var url = `https://localhosta:4200/${gameName}`;

    this.router.navigate([`home`]);
    this.router.navigate([`/${gameName}`]);
    //this.router.navigateByUrl(url);
  }

  public onClick_GamesSideNav(){
    this.opened != this.opened;
  }
}
