import { Component, OnInit } from '@angular/core';
import { Header } from '../../../models/Header';
import { Verb } from '../../../models/Verb';
import { VerbAttribute } from '../../../models/VerbAttribute';
import { VerbRenderer } from '../../../models/VerbRenderer';
import { FinalDialogService } from '../../../services/final-dialog.service';
import { VerbsService } from '../../../services/verbs.service';
import { Tools } from '../../../utils/tools';

@Component({
  selector: 'app-verbs-grid',
  templateUrl: './verbs-grid.component.html',
  styleUrls: ['./verbs-grid.component.css']
})
export class VerbsGridComponent implements OnInit {
  title = 'VerbsGrid Test';
  numVerbs: number = 5; //Number of verbs in the test
  headers: Header[] = [];
  verbsList: Verb[] = [];
  attributeList: VerbAttribute[] = [];
  gridList: VerbRenderer[]= [];

  constructor(private verbService: VerbsService,
    private finalDialogService: FinalDialogService,
    private tools: Tools) { }

  ngOnInit(): void {
    this.headers = this.verbService.getHeaderService();
    this.getValues();
  }

  private getValues() {
    this.resetResult(this.gridList);
    this.verbsList = this.verbService.getRandomVerbsService(this.numVerbs);
    for (let i = 0; i < this.numVerbs; i++) {
      this.attributeList[i] = this.verbService.getRandomVerbAttributesService(this.verbsList[i]);
      let tempVerb: VerbRenderer = new VerbRenderer();
      tempVerb.id = this.verbsList[i].id;
      if (this.attributeList[i].id == 0) {
        tempVerb.spanish = this.verbsList[i].spanish;
        tempVerb.spanishFlag = true;
      }
      else if (this.attributeList[i].id == 1) {
        tempVerb.present = this.verbsList[i].present;
        tempVerb.presentFlag = true;
      }
      else if (this.attributeList[i].id == 2) {
        tempVerb.past = this.verbsList[i].past;
        tempVerb.pastFlag = true;
      }
      else {
        tempVerb.participle = this.verbsList[i].participle;
        tempVerb.participleFlag = true;
      }
      this.gridList.push(tempVerb);
    }
  }

  private resetResult(result: VerbRenderer[]) {
    for (let i = result.length; i >= 0; i--) { result.pop(); }
  }

  public changeVerbs() {
    this.getValues();
  }

  public checkAnswers(answersList: VerbRenderer[]) {
    let fails: number = this.tools.verbsListsChecker(this.verbsList, answersList);
    if (fails > 0) {
      this.finalDialogService.popUp(false, 'Yuppsss... Something is not correct.',
        'But you can do it better, just study more!!', '', 'Number of mistakes: ', fails);
    }
    else
    {
      this.finalDialogService.popUp(true, 'Yeah right!!! Perfect score!!!',
        'You nailed it but remember to keep studying!!', '');
    }
  }
}
