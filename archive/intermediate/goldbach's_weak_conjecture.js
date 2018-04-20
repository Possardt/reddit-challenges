/*
  [2018-04-11] Challenge #356 [Intermediate] Goldbach's Weak Conjecture

  According to Goldbach’s weak conjecture, every odd number greater than 5 can be expressed as the sum of three prime numbers. 
  (A prime may be used more than once in the same sum.) This conjecture is called "weak" because if Goldbach's strong conjecture 
  (concerning sums of two primes) is proven, it would be true. Computer searches have only reached as far as 1018 for the strong 
  Goldbach conjecture, and not much further than that for the weak Goldbach conjecture.

*/
const isPrime = n => {
  if(n % 2 === 0){
    return false;
  }
  for(let i = 3; i < Math.sqrt(n); i++){
    if(n % i === 0){
      return false;
    }
  }
  return true;
}

let challenge = (number) => {
  let primes = [...Array(number - 5).keys()]
    .filter(n => n > 2)
    .filter(n => isPrime(n));
  
  for(let i = 0; primes[i] < number; i++){
    for(let j = 0; primes[j] < number; j++){
      let primeSum = primes[i] + primes[j];
      let targetWithoutPrimes = number - primeSum;
      if(primes.indexOf(targetWithoutPrimes) !== -1){
        return `${primes[i]} ${primes[j]} ${targetWithoutPrimes}`;
      }
    }
  }
};


describe('Goldman\'s weak conjecture', () => {
  it('should give the three prime numbers that sum to any int > 5', () => {
    expect(challenge(35)).toBe('3 3 29');
    expect(challenge(11)).toBe('3 3 5');
  });
});
