//** ============== POO (Programming Oriented Object)============ QUIZ Application ======================================= */
//@ts-check
//** === Import */
//import { data } from './data/data.js';
//import { Questions } from './models/question.js';
import { newQuestions } from './data/questions.js';
import { Quiz } from './models/Quiz.js';
import { UI } from './models/ui.js';

// == Render == (Questions & Answer)
const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.showScores(quiz.score);
  } else {
    console.log(quiz);
    ui.showQuestions(quiz.getQuestionIndex().question);
    ui.showProgress(quiz.questionIndex + 1, quiz.newQuestions);
    ui.showChoices(quiz.getQuestionIndex().choice, (currentChoice) => {
      quiz.guess(currentChoice);
      renderPage(quiz, ui);
    }); // === Add Callback ===
  }
};

function main() {
  const quiz = new Quiz(newQuestions);
  const ui = new UI();
  renderPage(quiz, ui);
}
main();
