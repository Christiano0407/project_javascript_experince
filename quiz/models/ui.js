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
    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement(`button`);
      button.innerText = choices[i]; // = choice
      button.classList.add(`btn-choices`);

      button.addEventListener('click', () => callback());

      choiceContainer.append(button);
    }
  }
}
