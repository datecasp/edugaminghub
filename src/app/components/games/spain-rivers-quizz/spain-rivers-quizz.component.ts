import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coordinate } from 'ol/coordinate';
import { ELEMENT_DATA } from '../../../data/element-data';
import { IAacc } from '../../../interfaces/IAacc';
import { InlineStyles } from '../../../resources/inline-styles';

@Component({
  selector: 'app-spain-rivers-quizz',
  templateUrl: './spain-rivers-quizz.component.html',
  styleUrls: ['./spain-rivers-quizz.component.css']
})
export class SpainRiversQuizzComponent {
//Inputs app-ol-map and in-line style defs
center: Coordinate = [400, 320];
zoom: number = 1.5;
url: string = './assets/spain-rivers-map.png';

mapStyle = 'width: 800px; height: 700px;';
inlineStyleStore: InlineStyles = new InlineStyles();
tries: number = 1;

//Inputs table-custom and in-line style defs
data = ELEMENT_DATA;
dataSourceLeft: IAacc[] = this.data.slice(0, this.data.length / 2 + 1);
dataSourceRight: IAacc[] = this.data.slice(this.data.length / 2 + 1);
columnStyleLeft = this.inlineStyleStore.columnStyleLeft;
columnStyleRight = this.inlineStyleStore.columnStyleRight;

constructor(private router: Router, private route: ActivatedRoute) {}

buttonClicked() {
  this.tries++;
}
}
