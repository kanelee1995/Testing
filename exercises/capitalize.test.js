const capitalize = require('./capitalize');

test('to upper case', () => {
  expect(capitalize('string')).toEqual('String');
});