//** * === Questions === * ==== POO Class ==== ADD => Methods, Object & Functions ====  */
//**TODO === Class === */
export class Questions {
  constructor(text, choice, answer) {
    this.text = text;
    this.choice = choice;
    this.answer = answer;
  }
  // === Method
  correctAnswer(choice) {
    return choice === this.choice;
  }
}
/* const people = new Questions('Hello Text', 'New Choice', true);
console.log(people);
console.log(people.correctAnswer()); */
