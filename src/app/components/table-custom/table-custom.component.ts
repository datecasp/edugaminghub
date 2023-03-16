import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IAacc } from '../../interfaces/IAacc';
import { FinalDialogService } from '../../services/final-dialog.service';
import { OlMapService } from '../../services/ol-map.service';


@Component({
  selector: 'table-custom',
  styleUrls: ['./table-custom.component.css'],
  templateUrl: './table-custom.component.html',
})
export class TableCustomComponent {
  @Input() data: IAacc[] = [];
  @Input() columnStyle: string = '';
  @Input() tries: number = 1 //Number of tries used -> starts at first try
  @Output() btnClicked = new EventEmitter();

  dataSource: IAacc[] = [];
  correctAnswer: boolean = false;
  notSelectedColor = 'aquamarine';
  correctColor = 'green';
  wrongColor = 'red';

  constructor(
    private _olMapService: OlMapService,
    private _finalDialogService: FinalDialogService
  ) {}

  ngAfterViewInit() {
    this.dataSource = this.data;
  }

  async onClick(element: IAacc) {
    //  To equals id and dataSource index if dataSource[0].id != 0
    //  dataA[0].id == 1   dataB[0] == 10 in spain-aacc-quizz
    let offsetId = this.dataSource[0].id;
    element.isCorrect = this._olMapService.checkClickedAaccService(
      element.point
    );
    if (!element.isCorrect) {
      this.btnClicked.emit();
    }
    this.dataSource[element.id - offsetId].isSelected = !element.isSelected;
    if (element.isCorrect && element.isSelected) {
      element.isSelected = await this._finalDialogService.popUp(
        true,
        'Yeah Right!!! Nice answer!',
        'This Autonomous Community is',
        element.name,
        'Number of tries:  ',
        this.tries
      );
    }
  }

  onLeave(element: IAacc) {
    let offsetId = this.dataSource[0].id;
    if (!this.dataSource[element.id - offsetId].isCorrect) {
      this.dataSource[element.id - offsetId].isSelected = !element.isSelected;
    }
  }
}