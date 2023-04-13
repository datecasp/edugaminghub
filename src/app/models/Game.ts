export class Game {
  id: number = 0;
  quizzName: string = '';
  quizzImg: string = '';
  quizzNameValue: string = '';

  constructor(
    _id: number,
    _quizzName: string,
    _quizzImg: string,
    _quizzNameValue: string
  ) {
    this.id = _id;
    this.quizzName = _quizzName;
    this.quizzImg = _quizzImg;
    this.quizzNameValue = _quizzNameValue;
  }
}
