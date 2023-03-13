import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VerbRenderer } from '../../models/VerbRenderer';

@Component({
  selector: 'app-verb-row',
  templateUrl: './verb-row.component.html',
  styleUrls: ['./verb-row.component.css']
})
export class VerbRowComponent implements OnInit {
  @Input() verbsInput: VerbRenderer[] = [];
  @Output() changeVerbsEvent = new EventEmitter<boolean>();
  @Output() checkAnswersEvent = new EventEmitter<VerbRenderer[]>();

  ngOnInit(): void {
  }

  onChangeVerbs() {
    this.changeVerbsEvent.emit(true);
  }

  onCheckAnswers() {
    this.checkAnswersEvent.emit(this.verbsInput);
  }
}
