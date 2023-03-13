import { EventEmitter, Injectable, Output } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FinalDialogComponent } from '../components/final-dialog/final-dialog.component';
import { IAacc } from '../interfaces/IAacc';

@Injectable()
export class FinalDialogService {
  constructor(private modalService: NgbModal) {}

  public popUp(
    correct: boolean,
    title: string,
    message: string,
    submessage: string,
    triesTxt?: string,
    triesNum?: number,
    btnOkText: string = 'Close',
    dialogSize: 'sm' | 'lg' = 'lg'
  ): Promise<boolean> {
    const modalRef = this.modalService.open(FinalDialogComponent, {
      size: dialogSize,
    });
    modalRef.componentInstance.correct = correct,
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.submessage = submessage;
    modalRef.componentInstance.triesTxt = triesTxt;
    modalRef.componentInstance.triesNum = triesNum;
    modalRef.componentInstance.btnOkText = btnOkText;

    return modalRef.result;
  }

  public uncheckButton(btnElement: IAacc) {
    
  }
}
