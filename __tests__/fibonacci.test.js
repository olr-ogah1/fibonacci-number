import {fibonacciNumber} from "../src/fibonacci";

describe('Fibonnaci calculator should', () => {
  it('return 0 when the position is 1', () => {
    expect(fibonacciNumber(1)).toEqual(0);
  });

  it('return 1 when position is 2', () => {
    expect(fibonacciNumber(2)).toBe(1);
  });

  it('return 1 when position is 3', () => {
    expect(fibonacciNumber(3)).toBe(1);
  });

  it('return 2 when position is 4', () => {
    expect(fibonacciNumber(4)).toBe(2);
  });

  it('return 13 when position is 8', () => {
    expect(fibonacciNumber(8)).toBe(13);
  });

  it('return 144 when position is 13', () => {
    expect(fibonacciNumber(13)).toBe(144);
  });
});