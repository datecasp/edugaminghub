import { Component, Input } from '@angular/core';
import { DropEvent } from 'angular-draggable-droppable';

@Component({
  selector: 'app-blank-button',
  templateUrl: './blank-button.component.html',
  styleUrls: ['./blank-button.component.css']
})
export class BlankButtonComponent {

  @Input() letter: string = "";
}
