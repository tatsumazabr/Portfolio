let firstNumber = '';
let operator = '';
let secondNumber = '';

function numberClick(num) {
  if (operator === '') {
    firstNumber += num;
    document.getElementById('result').value = firstNumber;
  } else {
    secondNumber += num;
    document.getElementById('result').value = secondNumber;
  }
}

function operatorClick(op) {
  operator = op;
}

function clearClick() {
  firstNumber = '';
  operator = '';
  secondNumber = '';
  document.getElementById('result').value = '0';
}

function equalClick() {
  let result = '';
  switch (operator) {
    case '+':
      result = parseInt(firstNumber) + parseInt(secondNumber);
      break;
    case '-':
      result = parseInt(firstNumber) - parseInt(secondNumber);
      break;
    case '*':
      result = parseInt(firstNumber) * parseInt(secondNumber);
      break;
    case '/':
      result = parseInt(firstNumber) / parseInt(secondNumber);
      break;
  }
  document.getElementById('result').value = result;
  firstNumber = result;
  operator = '';
  secondNumber = '';
}