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
    // >= Position
    const column = i % 3;
    const row = parseInt(i / 3);

    // == Validation
    if (board[row][column] === '') {
      cell.addEventListener(`click`, (e) => {
        board[row][column] = 'O';
        cell.textContent = board[row][column];
        // = turn
        turn = 1;
        // = Winner ==
        const won = checkIfWinner();
        if (won === 'none') {
          pcPlay();
          return;
        }
        // == Empty & Cat Close =
        if (won === 'draw') {
          renderDraw();
          cell.removeEventListener(`click`, this);
          return;
        }
      });
    }
  });
}
//**? === PC Play */
function pcPlay() {
  renderCurrentPlayer();
  // === Timer
  setTimeout(() => {
    let played = false;
    const options = checkIfCanWin();

    if (options.length > 0) {
      const bestOption = options[0];
      for (let i = 0; i < bestOption.length; i++) {
        if (bestOption[i].value === 0) {
          const posI = bestOption[i].i;
          const postJ = bestOption[i].j;
          board[posI][postJ] = 'X';
          played = true;
          break;
        }
      }
    } else {
      for (let i = 0; i < board.length; i++) {
        for (j = 0; j < board.length; j++) {
          if (board[i][j] === '' && !played) {
            board[i][j] = 'X';
            played = true;
          }
        }
      }
    }

    turn = 0;
    renderBoard();
    renderCurrentPlayer();
    playerPlay();

    const won = checkIfWinner();
    if (won === 'none') {
      playerPlay();
      return;
    }

    if (won === 'draw') {
      renderDraw();
      return;
    }
  }, 1500);
}
//** === Draw */
const renderDraw = () => {
  player.textContent = 'Draw';
};

//** === CheckIfCanWin (A-1) */
const checkIfCanWin = () => {
  // >= Tip: Bi-dimension >= (Row = i && Column = j) <=
  const arr = JSON.parse(JSON.stringify(board));

  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      // Validation === Detect Position "X" && "" && "O" ===
      if (arr[i][j] === 'X') {
        arr[i][j] = { value: 1, i: i, j: j };
      }

      if (arr[i][j] === '') {
        arr[i][j] = { value: 0, i: i, j: j };
      }

      if (arr[i][j] === 'O') {
        arr[i][j] = { value: -2, i: i, j: j };
        // >= - + - = "-""
      }
    }
  }

  //*! === Conditions & Variables and Positions === (A-2) */
  const p1 = arr[0][0];
  const p2 = arr[0][1];
  const p3 = arr[0][2];
  const p4 = arr[1][0];
  const p5 = arr[1][1];
  const p6 = arr[1][2];
  const p7 = arr[2][0];
  const p8 = arr[2][1];
  const p9 = arr[2][2];
  //**! === Position Solutions Winner */
  // >= "+" + "+" + "position"
  const s1 = [p1, p2, p3];
  const s2 = [p4, p5, p6];
  const s3 = [p7, p8, p9];
  const s4 = [p1, p4, p7];
  const s5 = [p2, p5, p8];
  const s6 = [p3, p6, p9];
  const s7 = [p1, p5, p9];
  const s8 = [p3, p5, p7];
  //**! ===> Response  */
  // => 2 >= Position Win && 4 >= Position Block
  const response = [s1, s2, s3, s4, s5, s6, s7, s8].filter((line) => {
    return (
      line[0].value + line[1].value + line[2].value === 2 ||
      line[0].value + line[1].value + line[2].value === -4
    );
  });
  return response;
};

//** === checkIfWinner*/
const checkIfWinner = () => {
  // === Position
  const p1 = arr[0][0];
  const p2 = arr[0][1];
  const p3 = arr[0][2];
  const p4 = arr[1][0];
  const p5 = arr[1][1];
  const p6 = arr[1][2];
  const p7 = arr[2][0];
  const p8 = arr[2][1];
  const p9 = arr[2][2];
  // >= Pc Win:
  const PCWon = [
    p1 === 'X' && p5 === 'X' && p9 === 'X',
    p7 === 'X' && p5 === 'X' && p3 === 'X',
    p1 === 'X' && p4 === 'X' && p7 === 'X',
    p2 === 'X' && p5 === 'X' && p8 === 'X',
    p3 === 'X' && p6 === 'X' && p9 === 'X',
    p1 === 'X' && p2 === 'X' && p3 === 'X',
    p4 === 'X' && p5 === 'X' && p6 === 'X',
    p7 === 'X' && p8 === 'X' && p9 === 'X',
  ];
  // >= Player Win:
  const playerWon = [
    p1 === 'O' && p5 === 'O' && p9 === 'O',
    p7 === 'O' && p5 === 'O' && p3 === 'O',
    p1 === 'O' && p4 === 'O' && p7 === 'O',
    p2 === 'O' && p5 === 'O' && p8 === 'O',
    p3 === 'O' && p6 === 'O' && p9 === 'O',
    p1 === 'O' && p2 === 'O' && p3 === 'O',
    p4 === 'O' && p5 === 'O' && p6 === 'O',
    p7 === 'O' && p8 === 'O' && p9 === 'O',
  ];
  // === Validation ===
  if (PCWon.includes(true)) {
    console.log('PCWon');
    player.textContent = 'Pc Win! Your Player Lose.';
    return 'pcWon';
  }

  if (playerWon.includes(true)) {
    console.log('Player Win!');
    player.textContent = 'Player Win!!';
    return `playerWon`;
  }
  // === Draw => Empty not Draw ===
  let draw = true;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === '') {
        draw = false;
      }
    }
  }
  return draw ? 'draw' : 'none'; // = Empty => Empate =
};
