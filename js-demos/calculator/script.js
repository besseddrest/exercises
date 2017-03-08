function Calculator() {
  let userInput = [];
  let calcScreen = document.querySelector('input');
  const buttons = Array.from(document.querySelectorAll('button'));

  this.clear = () => {
    userInput = [];
  };

  this.push = (val) => {
    userInput.push(val);
  };

  this.updateScreen = (val) => {
    let inputVal = calcScreen.value.toString();
    const ops = ['*', '+', '-', '/'];

    ops.indexOf(val) > -1 ? calcScreen.value = '' : calcScreen.value = val;
  }

  this.calc = () => {
    let total = eval(userInput.join(''));
    this.updateScreen(total);
    this.clear();
  };

  this.userInput = (button) => {
    const val = button.value;

    if (val === '=') {
      this.calc();
    } else if (val === 'C') {
      this.updateScreen('');
      this.clear();
    } else {
      this.updateScreen(val);
      this.push(val);
    }
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => { this.userInput(button) });
  });
}

const calc = new Calculator();
