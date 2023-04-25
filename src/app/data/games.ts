import { Game } from "../models/Game";

export const GAMES: Game[] = [
    //Same id as game-instructions instructions-set
    {id: 0, quizzName:"Fill the gaps", quizzImgUri:"./assets/brain.png", quizzNameValue:'fill-the-gaps'},
    {id: 1, quizzName:"VerbsGrid Test", quizzImgUri:"./assets/city.png", quizzNameValue: 'verbs-grid-test'},
    {id: 2, quizzName:" Spain rivers ", quizzImgUri:"./assets/river.png", quizzNameValue:'spain-rivers-quizz'},
    {id: 3, quizzName:"Spain AA. CC.", quizzImgUri:"./assets/mountain.png", quizzNameValue:'spain-aacc-quizz'}
]