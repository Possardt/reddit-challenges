/*

  [2018-03-12] Challenge #354 [Easy] Integer Complexity 1

  Given a number A, find the smallest possible value of B+C, if B*C = A.
  Here A, B, and C must all be positive integers.
*/

let challenge = n => {
  let smallestFactorsWhenAdded = n + 1;

  for(let i = 2; i < Math.sqrt(n); i++){
    if(n % i === 0){
      let factorsAdded = i + (n / i);
      smallestFactorsWhenAdded = factorsAdded < smallestFactorsWhenAdded ?
        factorsAdded : smallestFactorsWhenAdded;
    }
  }

  return smallestFactorsWhenAdded;
};

describe('The challenge', () => {
  it('should calculate the minimum sum of all factors given an integer', () => {
    expect(challenge(12)).toBe(7);
    expect(challenge(456)).toBe(43);
    expect(challenge(4567)).toBe(4568);
    expect(challenge(12345)).toBe(838);
  });

});
