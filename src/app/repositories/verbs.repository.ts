import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VERBS_LIST } from '../data/verbs-list';
import { ABECEDARY } from '../data/abecedary';
import { Verb } from '../models/Verb';
import { HEADERS } from '../data/headers';
import { Header } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class VerbsRepository {

  verbsList: Verb[] = VERBS_LIST;
  abecedary: string[] = ABECEDARY;
  verbalTenses: Header[] = HEADERS;

  public getVerbsList(): Verb[] {
    return this.verbsList;
  }

  public getAbecedary(): string[] {
    return this.abecedary;
  }

  public getHeader(): Header[] {
    return this.verbalTenses;
  }
}
