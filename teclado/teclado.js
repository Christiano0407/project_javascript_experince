//**TODO ==== ======= ====================== Virtual Keyboard  === ========== =================== */
//** === =====  Variable ======  ===  */
const app = document.querySelector(`#app`);
const keyboard = document.querySelector(`#keyboard-container`);
//** === Keys */
const keys = [
  [
    ['1', '!'],
    ['2', '@'],
    ['3', '#'],
    ['4', '$'],
    ['5', '%'],
    ['6', '&'],
    ['7', '/'],
    ['8', '('],
    ['9', ')'],
    ['0', '='],
    ["'", '?'],
    ['¡', '¿'], // === First ===
  ],
  [
    ['q', 'Q'],
    ['w', 'W'],
    ['e', 'E'],
    ['r', 'R'],
    ['t', 'T'],
    ['y', 'Y'],
    ['u', 'U'],
    ['i', 'I'],
    ['o', 'O'],
    ['p', 'P'],
    ['`', '^'],
    ['+', '*'],
  ],
  [
    ['MAYUS', 'MAYUS'],
    ['a', 'A'],
    ['s', 'S'],
    ['d', 'D'],
    ['f', 'F'],
    ['g', 'G'],
    ['h', 'H'],
    ['j', 'J'],
    ['k', 'K'],
    ['l', 'L'],
    ['ñ', 'Ñ'],
    ['¨', '{'],
    ['Ç', '}'],
  ],
  [
    ['SHIFT', 'SHIFT'],
    ['<', '>'],
    ['z', 'Z'],
    ['x', 'X'],
    ['c', 'C'],
    ['v', 'V'],
    ['b', 'B'],
    ['n', 'N'],
    ['m', 'M'],
    [',', ';'],
    ['.', ':'],
    ['-', '_'],
  ],
  [['SPACE', 'SPACE']], // === Last ===
];

let mayus = false;
let shift = false;

//** === render Keyboard && Access a key === */
const renderKeyboard = () => {
  let empty = `<div class="key-empty"></div>`;
  const layers = keys.map((layer) => {
    return layer.map((key) => {
      if (key[0] === `SHIFT`) {
        return `
         <button class="key key-shift">${key[0]}</button>
        `;
      }
      if (key[0] == `MAYUS`) {
        return `
         <button class="key key-mayus">${key[0]}</button>
        `;
      }
      if (key[0] === 'space') {
        return `
              <button class="key key-space">${key[0]}</button>
            `;
      }
      // === Key
      return `
           <button class="key key-normal">
           ${
             shift
               ? key[1]
               : mayus &&
                 key[0].toLowerCase().charCodeAt(0) >= 97 && // => "a"
                 key[0].toLowerCase().charCodeAt(0) <= 122 // => "z"
               ? key[1]
               : key[0]
           }
           </button>
        `;
    });
  });
  // === Add Space
  layers[0].push(empty);
  layers[1].unshift(empty);

  const htmlLayers = layers.map((layer) => {
    return layer.join('');
  });

  keyboard.innerHTML = '';

  htmlLayers.forEach((layer) => {
    keyboard.innerHTML += `<div class="layer" >${layer}</div>`;
  });
};

renderKeyboard();
