const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button'); // A slightly more specific selector

buttons.forEach(button => {
  // * FIXED: Replaced 'curly quotes' (’) with 'straight quotes' (') *
  button.addEventListener('click', () => {
    const buttonValue = button.innerText;

    if (buttonValue === '=') {
      try {
        // Use eval() to compute the result
        display.value = eval(display.value);
      } catch (error) {
        // Display 'Error' for invalid expressions
        display.value = 'Error';
      }
    } else if (buttonValue === 'C') {
      // Clear the display
      display.value = '';
    } else {
      // Append the button value to the display
      display.value += buttonValue;
    }
  });
});
