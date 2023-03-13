import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IAacc } from '../../interfaces/IAacc';
import { FinalDialogService } from '../../services/final-dialog.service';

@Component({
  selector: 'app-final-dialog',
  templateUrl: './final-dialog.component.html',
  styleUrls: ['./final-dialog.component.css'],
})
export class FinalDialogComponent implements OnInit{
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() submessage: string = ';'
  @Input() triesTxt: string = '';
  @Input() triesNum: number = 0;
  @Input() btnOkText: string = '';
  @Input() btnElement: IAacc | any;
  @Input() correct: boolean = true;

  headerColor: any;

  constructor(
    private activeModal: NgbActiveModal,
    private _finalDialogService: FinalDialogService
  ) {}

  ngOnInit(): void {
    this.setHeaderColor();
  }

  setHeaderColor(){
    if(this.correct){
      this.headerColor = '#2cff56';
    }
    else{
      this.headerColor = 'red';
    }
  }

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.activeModal.close(false);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }
}
