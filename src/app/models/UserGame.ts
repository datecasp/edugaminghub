export class UserGame {
    id: number = 0;
    user: number = 0;
    game: number = 0;
    plays: number = 0;
  
    constructor(
      _id: number,
      _user: number,
      _game: number,
      _plays: number
    ) {
      this.id = _id;
      this.user = _user;
      this.game = _game;
      this.plays = _plays;
    }
  }