const caesarCipher = require('./caesarCipher');

test('to upper case', () => {
  expect(caesarCipher('abc')).toEqual('fgh');
});