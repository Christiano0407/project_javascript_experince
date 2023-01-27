//**TODO === === ============== ========== Game ============ ================== === === */
//** === Variables === */
const app = document.querySelector(`#app`);
const player = document.querySelector(`#player`);
const boardContainer = document.querySelector(`#board`);
//** === Board Game Draw */
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];
let turn = 0; // ==> 0 = User && 1 = PC

//** === Function With Array Game Draw (A) */
const renderBoard = () => {
  const html = board.map((row) => {
    const cells = row.map((cell) => {
      return `
        <button class="cell">${cell}</button>
        `;
    });
    return `
     <div class="row">${cells.join('')}</div>
     `;
  });
  boardContainer.innerHTML = html.join('');
};

//** === Render Current Player (C) */
const renderCurrentPlayer = () => {
  player.textContent = `${turn === 0 ? 'Player Turn' : 'Pc Turn'}`;
};

//** === Start Game (B) */
const startGame = () => {
  renderBoard();
  turn = Math.random() <= 0.5 ? 0 : 1;
  renderCurrentPlayer();
  // == vALIDATION
  if (turn === 0) {
    playerPlay();
  } else {
    pcPlay();
  }

  /* if (turn === 1) {
  } */
};
startGame();

//**? === Player Play */
function playerPlay() {
  const cells = document.querySelectorAll(`.cell`);
  cells.forEach((cell, i) => {
    // >=Position
    const column = i % 3;
    const row = parseInt(i / 3);

    // == Validation
    if (board[row][column] === '') {
      cell.addEventListener(`click`, (e) => {
        board[row][column] = 'O';
        cell.textContent = board[row][column];
        pcPlay();
      });
    }
  });
}
//**? === PC Play */
function pcPlay() {
  renderCurrentPlayer();
}
