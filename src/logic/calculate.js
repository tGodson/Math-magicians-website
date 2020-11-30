import operate from './operate';

const calculate = (calculator, buttonName) => {
  let { total, next, operation } = calculator;
  const operators = ['+', '-', '÷', 'x', '%'];

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if ((buttonName === '=') && (total && next && operation)) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
  } else if (operators.includes(buttonName)) {
    if (buttonName === '%') {
      next = (next *= 0.01).toString();
      operation = null;
    }
    if (total && next && operation) {
      total = operate(total, next, operation);
      operation = buttonName;
      next = null;
    } else if (next && !operation) {
      total = next;
      operation = buttonName;
      next = null;
    } else {
      operation = buttonName;
    }
  } else if (buttonName === '+/-') {
    if (next !== null) {
      next = (next * -1).toString();
    } else {
      total = (total * -1).toString();
    }
  } else if ((buttonName === '=') && (next && total)) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
  } else if (buttonName === '.' && next) {
    if (!next.includes('.')) {
      next += '.';
    }
  } else if (buttonName === '.') {
    if (!next) {
      next = '0.';
    }
  } else if (next) {
    if (!operators.includes(buttonName) && buttonName !== '=' && buttonName !== '.') {
      next += buttonName;
    }
  } else {
    next = buttonName;
  }
  return {
    total,
    next,
    operation,
  };
};

export default calculate;
