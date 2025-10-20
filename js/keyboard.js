const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

// Mouse click support
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.innerText;

    if (buttonValue === '=') {
      calculate();
    } else if (buttonValue === 'C') {
      clearDisplay();
    } else {
      appendToDisplay(buttonValue);
    }
  });
});

// Keyboard support
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    appendToDisplay(key);
  } else if (key === 'Enter') {
    event.preventDefault(); // prevent form submission if ever
    calculate();
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});

// Functions
function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
