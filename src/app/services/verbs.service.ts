import { Injectable } from '@angular/core';
import { VerbsRepository } from '../repositories/verbs.repository';
import { Verb } from '../models/Verb';
import { VerbAttribute } from '../models/VerbAttribute';
import { Header } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class VerbsService {
  private verbList: Verb[] | any;
  private verbAttribute: VerbAttribute | any;
  private abecedary: string[] = [];
  private header: Header[] = []

  constructor(private verbsRepo: VerbsRepository) {
    this.verbList = this.verbsRepo.getVerbsList();
    this.abecedary = this.verbsRepo.getAbecedary();
    this.header = this.verbsRepo.getHeader();
  }

  public getVerbsListService(): Verb[] {
    return this.verbList;
  }

  public getAbecedaryService(): string[] {
    return this.abecedary;
  }

  public getHeaderService(): Header[] {
    return this.header;
  }

  public getRandomVerbService(): Verb | any {
    return this.verbList[Math.floor(Math.random() * this.verbList.length)];
  }

  public getRandomVerbsService(numVerbs: number): Verb[] | any {
    let result: Verb[] = [];
    let listRd: number[] = [];
    let actualRd: number = -1;

    for (let i = 0; i < numVerbs; i++) {
      do {
        actualRd = Math.floor(Math.random() * this.verbList.length);
      } while (listRd.includes(actualRd));
      listRd.push(actualRd);
      let verb: Verb = this.verbList[actualRd];
      verb.id = i;
      result.push(verb);
    }
    return result;
  }

  public getRandomVerbAttributesService(verb: Verb): VerbAttribute | any{
    this.verbAttribute = { id: -1, attribute: "" };
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        this.verbAttribute.attributeType = "spanish";
        this.verbAttribute.attribute = verb.spanish;
        this.verbAttribute.id = 0;
        break;
      case 1:
        this.verbAttribute.attributeType = "present";
        this.verbAttribute.attribute = verb.present;
        this.verbAttribute.id = 1;
        break;
      case 2:
        this.verbAttribute.attributeType = "past";
        this.verbAttribute.attribute = verb.past;
        this.verbAttribute.id = 2;
        break;
      case 3:
        this.verbAttribute.attributeType = "participle";
        this.verbAttribute.attribute = verb.participle;
        this.verbAttribute.id = 3;
        break;
    }
    return this.verbAttribute;
  }
}
