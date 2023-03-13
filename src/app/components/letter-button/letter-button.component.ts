import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DropEvent, DroppableDirective } from 'angular-draggable-droppable';

/**
 *
 *  Component to represent each button that holds a character of the gapped
 *  verb attribute array.
 *  Recives as input the value of the letter or a whitespace as string to
 *  represent in the button content 
 *  Property disbled is used to check if content of button is a letter, a slash
 *  forward or a whitespace. If content is letter or slash, disabled is true
 * 
 */
@Component({
  selector: 'app-letter-button',
  templateUrl: './letter-button.component.html',
  styleUrls: ['./letter-button.component.css']
})
export class LetterButtonComponent implements OnInit {

  @Input() letter: string = "";
  disabled: boolean = false;
  droppedData: string = "";

  @ViewChild(DroppableDirective, { read: ElementRef, static: true })
  droppableElement: ElementRef | any;

  ngOnInit(): void {
    
  }

  onDrop({ dropData }: DropEvent<string>): void {
    this.droppedData = dropData;
    setTimeout(() => {
      this.droppedData = '';
    }, 2000);
  }
}
