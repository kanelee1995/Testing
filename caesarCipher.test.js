const caesarCipher = require('./caesarCipher');

test('to upper case', () => {
  expect(caesarCipher('1abc2xyz!')).toEqual('1fgh2cde!');
});