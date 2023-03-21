import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coordinate } from 'ol/coordinate';
import { RIVERS } from 'src/app/data/rivers';
import { IRiver } from 'src/app/interfaces/IRiver';
import { OlMapService } from 'src/app/services/ol-map.service';
import { InlineStyles } from '../../../resources/inline-styles';

@Component({
  selector: 'app-spain-rivers-quizz',
  templateUrl: './spain-rivers-quizz.component.html',
  styleUrls: ['./spain-rivers-quizz.component.css'],
})
export class SpainRiversQuizzComponent implements OnInit {
  //Inputs app-ol-map and in-line style defs
  center: Coordinate = [400, 320];
  zoom: number = 1.5;
  url: string = './assets/spain-rivers-map.png';

  mapStyle = 'width: 800px; height: 700px;';
  inlineStyleStore: InlineStyles = new InlineStyles();
  tries: number = 1;

  //Inputs table-custom and in-line style defs
  data = RIVERS;
  dataType = 'rivers';
  dataSourceLeft: IRiver[] = this.data;
  columnStyleLeft = this.inlineStyleStore.columnStyleLeft;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _olMapService: OlMapService
  ) {}

  ngOnInit(): void {
    this._olMapService.setData(this.data);
  }

  buttonClicked() {
    this.tries++;
  }

  resetTries() {
    this.tries = 1;
  }
}
