import { Component, OnInit } from '@angular/core';
import { VerbsService } from '../../../services/verbs.service';
import { Verb } from '../../../models/Verb';
import { VerbAttribute } from '../../../models/VerbAttribute';
import { Tools } from '../../../utils/tools';
import { MatDialog } from '@angular/material/dialog';
import { FinalDialogService } from '../../../services/final-dialog.service';

@Component({
  selector: 'app-fill-the-gaps',
  templateUrl: './fill-the-gaps.component.html',
  styleUrls: ['./fill-the-gaps.component.css']
})
export class FillTheGapsComponent implements OnInit {
  title = 'Fill the gaps';
  verb: Verb | any;
  clueVerbAttribute: VerbAttribute | any;
  gappedVerbAttribute: VerbAttribute | any;
  completeVerbAttribute: string[] | any;
  btnGappedVerbAttribute: string[] | any;
  btnRandomLetters: string[] | any;
  isRandomLetterSlelectedFirst: boolean = false;
  hasLetter: boolean = false;
  selectedLetter: string = '';
  selectedGapLetter: string = '';
  imgMenuIcon: string = './assets/rubik.png';
  imgMenuIconHover: string = './assets/rubik-hover.png';
  imgSrc: string = this.imgMenuIcon;

  constructor(
    private verbsService: VerbsService,
    private finalDialogService: FinalDialogService,
    public dialog: MatDialog,
    private tools: Tools
  ) {}

  ngOnInit(): void {
    this.getValues();
  }

  private getValues() {
    this.verb = this.getRandomVerb();
    this.getRandomVerbAttributes(this.verb);
    this.completeVerbAttribute = Array.from(this.gappedVerbAttribute.attribute);
    this.btnGappedVerbAttribute = this.getRandomGapsGappedVerbAttribute(
      this.gappedVerbAttribute.attribute
    );
    this.btnRandomLetters = this.getRandomLetters(
      this.completeVerbAttribute,
      this.btnGappedVerbAttribute
    );
  }

  private getRandomVerb(): Verb {
    return this.verbsService.getRandomVerbService();
  }

  private getRandomVerbAttributes(verb: Verb) {
    this.clueVerbAttribute =
      this.verbsService.getRandomVerbAttributesService(verb);
    do {
      this.gappedVerbAttribute =
        this.verbsService.getRandomVerbAttributesService(verb);
    } while (this.gappedVerbAttribute.id == this.clueVerbAttribute.id);
  }

  private getRandomGapsGappedVerbAttribute(attribute: string): string[] | any {
    return this.tools.gappedArray(attribute);
  }

  private getRandomLetters(
    gappedVerbAttribute: string[],
    btnGappedVerbAttribute: string[]
  ): string[] {
    return this.tools.randomLetters(
      gappedVerbAttribute,
      btnGappedVerbAttribute
    );
  }

  public checkResult(resultArray: string[]) {
    let success: boolean = true;
    for (let i = 0; i < resultArray.length; i++) {
      if (resultArray[i] != this.gappedVerbAttribute.attribute[i]) {
        success = false;
        this.finalDialogService.popUp(
          false,
          'Yuuppsss, close but wrong answer!',
          'The correct word was ',
          this.gappedVerbAttribute.attribute
        );
        break;
      }
    }
    if (success) {
      this.finalDialogService.popUp(
        true,
        'Yeah Right!!! Nice answer!',
        'Perfect spelling of ',
        this.gappedVerbAttribute.attribute
      );
    }
  }

  public newWord() {
    this.resetValues();
    this.getValues();
  }

  private resetValues() {
    this.verb = null;
    this.clueVerbAttribute = null;
    this.gappedVerbAttribute = null;
    this.completeVerbAttribute = [];
    this.btnGappedVerbAttribute = [];
    this.btnRandomLetters = [];
    this.isRandomLetterSlelectedFirst = false;
    this.hasLetter = false;
    this.selectedLetter = '';
    this.selectedGapLetter = '';
  }

}