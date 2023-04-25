export class Game {
  id: number = 0;
  quizzName: string = '';
  quizzImgUri: string = '';
  quizzNameValue: string = '';

  constructor(
    _id: number,
    _quizzName: string,
    _quizzImgUri: string,
    _quizzNameValue: string
  ) {
    this.id = _id;
    this.quizzName = _quizzName;
    this.quizzImgUri = _quizzImgUri;
    this.quizzNameValue = _quizzNameValue;
  }
}
