export class Verb {
  id: number = -1;
  spanish: string = "";
  present: string = "";
  past: string = "";
  participle: string = "";

  constructor (id: number = -1, spanish: string = "", present: string = "", past: string = "", participle: string = "")
  {
    this.id = id;
    this.spanish = spanish;
    this.present = present;
    this.past = past;
    this.participle = participle;
  }
}
