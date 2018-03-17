/*
  [2018-02-07] Challenge #350 [Intermediate] Balancing My Spending

  Given my bank account transactions - debits and credits - as a sequence of integers,
  at what points do my behaviors show the same sub-sums of all transactions before or after.
  Basically can you find the equilibria points of my bank account?

  INPUT: string of sequence of debits/credits
*/

let challenge = debitsAndCredits => {
  let debitsAndCreditsParsed = debitsAndCredits.split(' ').map(n => parseInt(n)),
      totalSum = debitsAndCreditsParsed.reduce((x,y) => x + y),
      runningSum = 0,
      balancedIndexes = [];

  for(let i = 0; i < debitsAndCreditsParsed.length; i++){
    totalSum -= debitsAndCreditsParsed[i];
    if(runningSum === totalSum){
      balancedIndexes.push(i);
    }
    runningSum += debitsAndCreditsParsed[i];
  }

  return balancedIndexes.join(' ');
};



describe('This challenge', () => {
  it('should calculate all points where there is an even balance before and after(not including) a point in an input string', () => {
    expect(challenge('0 -3 5 -4 -2 3 1 0')).toBe('0 3 7');
  });
});
