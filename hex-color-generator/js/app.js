mainBackground = document.querySelector('#main-background');
btnGenerateCode = document.querySelector('#btn-generate-code');
textColorCode = document.querySelector('#text-color-code');

const ramdomHexadecimal = () => {
  const hexadecimal = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  let colorCode = '';
  for (let i = 0; i < 6; i++) {
    const ramdomIndex = Math.floor(Math.random() * hexadecimal.length);
    colorCode += hexadecimal[ramdomIndex];
  }

  return colorCode;
};

const setBackgroundColor = () => {
  let hexBackgroundCode = '#' + ramdomHexadecimal();

  mainBackground.style.backgroundColor = hexBackgroundCode;
  textColorCode.textContent = hexBackgroundCode;
};

window.addEventListener('load', () => {
  setBackgroundColor();
});

btnGenerateCode.addEventListener('click', () => {
  setBackgroundColor();
});
