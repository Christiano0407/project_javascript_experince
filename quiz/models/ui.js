//** ===== Class && DOM ===== */
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
  showChoices(choices) {
    const choiceContainer = document.querySelector(`#choices`);
    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement(`button`);
      button.innerText = 'Some Button';
      button.classList.add(`btn-choices`);
      choiceContainer.append(button);
    }
  }
}
