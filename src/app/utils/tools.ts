import { Injectable } from '@angular/core';
import { Verb } from '../models/Verb';
import { VerbRenderer } from '../models/VerbRenderer';
import { VerbsService } from '../services/verbs.service'

@Injectable({
  providedIn: 'root'
})
export class Tools {
  constructor(private verbService: VerbsService) { }
  /**
   * Tool function to convert the string verb attribute
   *  into a string array and randomize the individual
   *  characters that are shown to user.
   *  param attribute the verbal attribute the user must complete
   */
  public gappedArray(attribute: string): string[] | any {
    let result: string[] = Array.from(attribute);
    this.resetStringArray(result);
    let attributeCharArray = Array.from(attribute);
    if (attributeCharArray.length > 2) {
      for (let i = 0; i < (attributeCharArray.length / 2) - 1; i++) {
        if (!attributeCharArray[i].match(/[a-z]/i)) {
          result[i] = attributeCharArray[i];
        }
        else {
          let index = Math.floor(Math.random() * attributeCharArray.length);
          result[index] = attributeCharArray[index];
        }
      }
    }
    return result;
  }

  public resetStringArray(array: string[]): string[] {
    for (let i = 0; i < array.length; i++) {
      array[i] = " ";
    }
    return array;
  }

  /**
   *  Tool function to create a bunch of random letters among the gapped letters
   *  from btnGappedVerbAttribute
   *  Returns a string[] with the selectable by user letters
   *  param gappedVerbAttribute string[] the verbal attribute with all letters
   *  param btnGappedVerbAttribute string[] the verbal attribute to guess with gaps and letters
   */
  public randomLetters(gappedVerbAttribute: string[], btnGappedVerbAttribute: string[]): string[] {
    let numLetrasFinal: number = 0;
    let abecedary: string[] = this.verbService.getAbecedaryService();

    if (gappedVerbAttribute.length <= 4) {
      numLetrasFinal = 6;
    }
    else if (4 < gappedVerbAttribute.length && gappedVerbAttribute.length <= 6) {
      numLetrasFinal = 8;
    }
    else {
      numLetrasFinal = 10;
    }
    let result: string[] = [];
    for (let i = 0; i < numLetrasFinal; i++) {
      if (i < btnGappedVerbAttribute.length && btnGappedVerbAttribute[i] != gappedVerbAttribute[i]) {
        result[i] = gappedVerbAttribute[i];
      }
      else {
        result[i] = abecedary[i];
      }
    }
    result = this.mixRandomLetters(result);
    return result;
  }

  /**
   *  Tool function to mix the random letters array
   *  param randomLetters
   */
  public mixRandomLetters(randomLetters: string[]): string[] {
    let result: string[] = [];
    let tempArray: string[] = [];
    for (let c of randomLetters) {
      tempArray.push(c);
    }
    for (let i = 0; i < randomLetters.length; i++) {
      let index: number = Math.floor(Math.random() * tempArray.length);
      result[i] = tempArray[index];
      tempArray.splice(index, 1);
    }
    return result;
  }

  /**
   * Tool function to compare Verb[] arrays
   * param verbsList[] -> Verb[] with the original verb list
   * param answersList[] -> Verb[] captured from user inputs
   * return number -> number of cells failed by user.
   *                   Zero if it´s all right answers
   */
  public verbsListsChecker(verbsList: Verb[], answersList: VerbRenderer[]): number {
    let fails: number = 0;
    for (let i = 0; i < answersList.length; i++) {
      if (verbsList[i].spanish != answersList[i].spanish) {
        fails++;
        answersList[i].spanishCorrectAnswer = false;
      }
      else {
        answersList[i].spanishCorrectAnswer = true;

      }
      if (verbsList[i].present != answersList[i].present) {
        fails++;
        answersList[i].presentCorrectAnswer = false;
      }
      else {
        answersList[i].presentCorrectAnswer = true;

      }
      if (verbsList[i].past != answersList[i].past) {
        fails++;
        answersList[i].pastCorrectAnswer = false;
      }
      else {
        answersList[i].pastCorrectAnswer = true;

      }
      if (verbsList[i].participle != answersList[i].participle) {
        fails++;
        answersList[i].participleCorrectAnswer = false;
      }
      else {
        answersList[i].participleCorrectAnswer = true;

      }
    }
    return fails;
  }
}
