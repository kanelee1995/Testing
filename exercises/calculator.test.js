const calculator = require('./calculator');

test('to upper case', () => {
  expect(calculator.add(1,2)).toBe(3);
  expect(calculator.subtract(2,1)).toBe(1);
  expect(calculator.multiply(2,2)).toBe(4);
  expect(calculator.divide(10,5)).toBe(2);

});