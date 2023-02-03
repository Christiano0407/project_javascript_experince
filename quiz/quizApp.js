//** ============== POO (Programming Oriented Object)============ QUIZ Application ======================================= */
const quiz = document.querySelector(`#quiz`);
//** === Import */
//import { data } from './data/data.js';
//import { Questions } from './models/question.js';
import { newQuestions } from './data/questions.js';
import { Quiz } from './models/Quiz.js';
import { UI } from './models/ui.js';

function main() {
  const quiz = new Quiz(newQuestions);
  const ui = new UI();
  console.log(quiz);
  ui.showQuestions(quiz.getQuestionIndex().question);
  ui.showChoices(quiz.getQuestionIndex().choice, () => console.log('Buttons')); // === Add Callback ===
}
main();
