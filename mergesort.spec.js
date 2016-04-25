// describe('Split Array function', function() {
//   it('it returns an array of one element', function() {
//     expect(split([2])).toEqual([2]);
//   });

//   it('is able to split an array into two halves', function() {
//     expect(split([2,3])).toEqual([[2],[3]]);
//   });

//    it('is able to split a longer array of odd elements into two halves', function() {
//     expect(split([2, 3, 444, 61, 33, 7, 9])).toEqual([[2, 3, 444],[61, 33, 7, 9]]);
//   });

// });

// describe('Merge', function(){
//   it('is able to merge two sorted arrays into one sorted array', function(){
//     expect(merge([2, 3, 444], [7, 9, 33, 61])).toEqual([2, 3, 7, 9, 33, 61, 444]);
//   });
// });

describe('mergeSort', function(){
  it('is able to sort an array', function(){
    expect(mergeSort([2, 6, 5, 8, 9, 3, 10, 7])).toEqual([2, 3, 5, 6, 7, 8, 9, 10]);
  });
});
