describe('Bubble Sort', function(){

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array of one element', function(){
    expect( bubbleSort([921]) ).toEqual( [921] );
  });

  it('handles an array of multiple elements', function(){
    expect( bubbleSort([14, 4, 88]) ).toEqual( [4, 14, 88] );
  });



  // it('counts are counting', function(){
  // 	expect( bubbleSort([14, 4]) ).toEqual( [4, 14] );
  //   expect( compCount ).toEqual( 1 );
  //   expect( swapCount ).toEqual( 1 );
  // });
});
