const textCounter = document.querySelector('#text-counter');
const btnIncrement = document.querySelector('#btn-increment');
const btnReset = document.querySelector('#btn-reset');
const btnDecrement = document.querySelector('#btn-decrement');

let counter = 0;

const setTextCounter = () => {
  textCounter.textContent = counter;
};

const incrementCounter = () => {
  counter++;
  setTextCounter();
};

const decrementCounter = () => {
  if (!counter - 1 < 0) counter--;
  else counter;
  setTextCounter();
};

const resetCounter = () => {
  counter = 0;
  setTextCounter();
};

btnIncrement.addEventListener('click', () => {
  incrementCounter();
});

btnReset.addEventListener('click', () => {
  resetCounter();
});

btnDecrement.addEventListener('click', () => {
  decrementCounter();
});
