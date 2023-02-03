//** ===== Class && UI ==> DOM ===== */
export class UI {
  constructor() {}
  // == Type: Typescript
  // === Method
  /**
   *
   * @param {string} text
   */
  showQuestions(text) {
    const questionTitle = document.querySelector(`#question`);
    questionTitle.innerHTML = text;
  }
  /**
   *
   * @param {string} choices
   */
  showChoices(choices, callback) {
    const choiceContainer = document.querySelector(`#choices`);

    choiceContainer.innerHTML = '';

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement(`button`);
      button.innerText = choices[i]; // = choice
      button.classList.add(`btn-choices`);

      button.addEventListener('click', () => callback(choices[i])); // => CurrentChoice

      choiceContainer.append(button);
    }
  }

  // == Show
  showScores(score) {
    const gameOverHTML = `
   <h1>Result</h1>
   <h2 id="score">Your Score: ${score}</h2>
   `;
    const element = document.querySelector(`#quiz`);
    element.innerHTML = gameOverHTML;
  }

  showProgress(currentIndex, total) {
    const element = document.querySelector(`#progress`);
    element.innerHTML = `Question ${currentIndex} of ${total} `;
  }
}
