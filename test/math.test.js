const { sum, multiply } = require('../src/math');

test('sum', () => {
  expect(sum(2,3)).toBe(5);
});

test('mult', () => {
  expect(multiply(2,3)).toBe(6);
});
