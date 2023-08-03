const reverseString = require('./reverseString');

test('to upper case', () => {
  expect(reverseString('string')).toEqual('gnirts');
});