const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz', () => {
  test('should return the expected string', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    expect(myFizzBuzz(9)).toEqual('fizz');
    expect(myFizzBuzz(4)).toEqual(4);
  })
  test('the input should be a number', () => {
    expect(myFizzBuzz('xablau')).toEqual(false);
  })
})