/*
  [2018-03-30] Challenge I found online [Random] Sort With just stack

  Sort an array of numbers only using stack operations.  A recursive insertion sort
  which isn't optimized, but a cool solution...
*/

const challenge = arr => {
  if(arr.length){
    let num = arr.pop();
    challenge(arr);
    insert(arr, num);
  }
};

const insert = (arr, num) => {
  if(arr.length){
    let top = arr[arr.length - 1];
    if(num <= top){
      arr.pop();
      insert(arr, num);
      arr.push(top);
    }
    else{
      arr.push(num);
    }
  }
  else{
    arr.push(num);
  }
};



describe('Stack sort', () => {
  it('should sort recursively', () => {
    let arr = [1,4,6,8,3,2];
    challenge(arr);
    expect(arr).toEqual([1,2,3,4,6,8]);
  });

  it('should sort larger lists', () => {
    let arr = [46, 28, 9, 7, 25, 69, 59,
      95, 31, 99, 64, 66, 8, 93,
      92, 48, 44, 18, 98, 54, 79,
      30, 82, 20, 1, 56, 46, 40,
      28, 90, 64, 73, 87, 5, 29,
      88, 44, 35, 12, 36, 53, 37,
      45, 57, 83, 99, 54, 35, 20,
      31, 50, 4, 89, 27, 1, 74, 55,
      36, 14, 51, 68, 90, 67, 20, 14,
      95, 78, 53, 74, 63, 14, 88, 90,
      87, 20, 91, 3, 83, 28, 68, 61, 4,
      76, 40, 39, 62, 90, 96, 73, 63,
      25, 23, 17, 60, 56,
      67, 96, 73, 88, 54]
    let sortedArr = [...arr].sort((x,y) => x - y);
    expect(arr).not.toEqual(sortedArr);
    challenge(arr);
    expect(arr).toEqual(sortedArr);
  });

});
