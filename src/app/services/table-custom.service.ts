import { Injectable } from '@angular/core';
import { FINALDIALOG_TEXTS } from '../data/final-dialog-texts';

@Injectable({
  providedIn: 'root'
})
export class TableCustomService {
  finalDialogTexts = FINALDIALOG_TEXTS;

  constructor() { }

  loadDialogText(dataType: string): string | any{
    var result;
    switch (dataType) {
      case 'communities':
        result = this.finalDialogTexts.get('communities');
        break;
      case 'rivers':
        result = this.finalDialogTexts.get('rivers');
        break;
      default:
        result = this.finalDialogTexts.get('default');
    }
    return result;
  }
}
