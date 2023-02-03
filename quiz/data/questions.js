//** === * Questions Of Data * === */
import { data } from './data.js';
import { Questions } from '../models/question.js';

export const newQuestions = data.map(
  (newQuestion) =>
    new Questions(newQuestion.question, newQuestion.choices, newQuestion.answer)
);
