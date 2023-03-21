import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FINALDIALOG_TEXTS } from 'src/app/data/final-dialog-texts';
import { IElement } from 'src/app/interfaces/IElement';
import { TableCustomService } from 'src/app/services/table-custom.service';
import { FinalDialogService } from '../../services/final-dialog.service';
import { OlMapService } from '../../services/ol-map.service';

@Component({
  selector: 'table-custom',
  styleUrls: ['./table-custom.component.css'],
  templateUrl: './table-custom.component.html',
})
export class TableCustomComponent {
  @Input() data: IElement[] = [];
  @Input() columnStyle: string = '';
  @Input() tries: number = 1; //Number of tries used -> starts at first try
  @Input() dataType: string = '';
  @Output() btnClicked = new EventEmitter();
  @Output() resetTries = new EventEmitter();

  dataSource: IElement[] = [];
  correctAnswer: boolean = false;
  notSelectedColor = 'aquamarine';
  correctColor = 'green';
  wrongColor = 'red';
  fdShowedText: string | any;

  constructor(
    private _olMapService: OlMapService,
    private _finalDialogService: FinalDialogService,
    private _tableCustomService: TableCustomService
  ) {}

  ngAfterViewInit() {
    this.dataSource = this.data;
    this.fdShowedText = this._tableCustomService.loadDialogText(this.dataType);
  }

  

  async onClick(element: IElement) {
    //  To equals id and dataSource index if dataSource[0].id != 0
    //  dataLeft[0].id == 1   dataRight[0] == 10 in spain-aacc-quizz
    let offsetId = this.dataSource[0].id;
    element.isCorrect = this._olMapService.checkClickedIElementService(
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
        this.fdShowedText,
        element.name,
        'Number of tries:  ',
        this.tries
      );
      this.resetTries.emit();
    }
  }

  onLeave(element: IElement) {
    let offsetId = this.dataSource[0].id;
    if (!this.dataSource[element.id - offsetId].isCorrect) {
      this.dataSource[element.id - offsetId].isSelected = !element.isSelected;
    }
  }
}
