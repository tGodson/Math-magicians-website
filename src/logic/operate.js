import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNumber = Big(numberOne);
  const secondNumber = Big(numberTwo);
  let result;
  if (operation === '+') {
    result = firstNumber.plus(secondNumber).toString();
  }
  if (operation === '-') {
    result = firstNumber.minus(secondNumber).toString();
  }
  if (operation === 'x') {
    result = firstNumber.times(secondNumber).toString();
  }

  if (operation === '÷' && secondNumber !== '0') {
    // eslint-disable-next-line eqeqeq
    if (secondNumber == 0) {
      result = NaN;
    } else {
      result = firstNumber.div(secondNumber).toString();
    }
  }
  return result;
};

export default operate;
