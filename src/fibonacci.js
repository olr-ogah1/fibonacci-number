export const fibonacciNumber = (position) => {
  let sequence = [0, 0, 1];
  while (sequence.length <= position) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  }
  return sequence[position];
};



