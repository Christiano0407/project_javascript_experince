//** ==== * =========  Quiz  ========= *  ==== */
//**? === Class POO === Add Questions */
//@ts-check
import { Questions } from './question.js';

export class Quiz {
  score = 0;
  questionIndex = 0;

  /**
   *
   * @param {Questions[]} question
   */
  constructor(question) {
    this.question = question;
  }

  /**
   *
   * @returns {Questions} the question found
   */
  getQuestionIndex() {
    return this.question[this.questionIndex];
  }

  isEnded() {
    return this.question.length === this.questionIndex;
  }

  guess(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }
}
