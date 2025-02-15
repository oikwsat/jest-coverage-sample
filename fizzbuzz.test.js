const fizzbuzz = require('./fizzbuzz');

test('3 equal Fizz', () => {
  expect(fizzbuzz(3)).toBe('Fizz');
});

test('5 equal Buzz', () => {
  expect(fizzbuzz(5)).toBe('Buzz');
});

test('30 equal FizzBuzz', () => {
  expect(fizzbuzz(30)).toBe('FizzBuzz');
});

test('1 equal 1', () => {
  expect(fizzbuzz(1)).toBe(1);
});
