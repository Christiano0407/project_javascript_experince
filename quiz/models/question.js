//** * === Questions Of Models === * ==== POO Class ==== ADD => Methods, Object & Functions ====  */
//**TODO === Class === */
export class Questions {
  constructor(question, choice, answer) {
    this.question = question;
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
