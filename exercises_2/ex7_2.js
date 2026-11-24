function calculate(a, b, operator) {
  if (operator === '+') {
    return a + b;
  } else if (operator === '-') {
    return a - b;
  } else if (operator === '/') {
    return a / b;
  }
}
  
const result = calculate.apply(null, [2, 3, '+']);

console.log(result);