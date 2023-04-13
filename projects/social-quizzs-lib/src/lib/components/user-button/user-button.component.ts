import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.css']
})
export class UserButtonComponent {
  @Input() imgUri: string = "";
  @Input() userName: string = "";
}
