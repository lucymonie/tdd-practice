describe("Tests for greet function:", function() {
  it('should return a string that says "Hello, Bob" when the name Bob is passed in', function() {
    var greet = compose(sayHello);
    expect(greet('Bob')).toBe('Hello, Bob');
  });

  it('should return a greeting "Hello, my friend" if name passed in has a null value', function() {
    var greet = compose(noName, sayHello);
    expect(greet(null)).toBe('Hello, my friend');
  });

  it('should shout back "HELLO, JERRY!" if name value is in capital letters', function() {
    var greet = compose(sayHello, shout);
    expect(greet('JERRY')).toBe('HELLO, JERRY!');
  });

  it('should greet both users if there are two, without any Oxford comma', function() {
    var greet = compose(twoNames, sayHello);
    expect(greet(['Jill', 'Jane'])).toBe('Hello, Jill and Jane');
  });

  it('should greet all users if there are more than two and use an Oxford comma', function() {
    var greet = compose(manyNames, sayHello);
    expect(greet(['Amy', 'Brian', 'Charlotte'])).toBe('Hello, Amy, Brian, and Charlotte');
  });

  it('should greet users with the same tone they use, and shouting should be handled separately', function() {
    var greet = compose(separateByCase, constructMultiCaseGreeting);
    expect(greet(['Amy', 'BRIAN', 'Charlotte'])).toBe('Hello, Amy and Charlotte. AND HELLO, BRIAN!');
  });

  it('should greet users separately even if they are grouped together in a string', function() {
    var greet = compose(checkMultiNameString, manyNames, sayHello);
    expect(greet(['Bob', 'Charlie, Dianne'])).toBe('Hello, Bob, Charlie, and Dianne');
  });

  it('should allow double sets of quotes to indicate that grouping is intentional, so names should be left grouped', function() {
    var greet = compose(checkMultiNameString, twoNames, sayHello);
    expect(greet(['Bob', "\"Charlie, Dianne\""])).toEqual('Hello, Bob and Charlie, Dianne');
  });
})


describe("Tests to check individual functions:", function() {
  it('checks if an array has multiword strings and whether to split the names or leave them', function() {
    expect(checkMultiNameString(['Bob', 'Charlie, Dianne'])).toEqual(['Bob', 'Charlie', 'Dianne']);
    expect(checkMultiNameString(['Bob', "\"Charlie, Dianne\""])).toEqual(['Bob', 'Charlie, Dianne']);
  });

  it('checks if multiword string should be left as it is', function() {
    expect(ignoreComma('Charlie, Dianne')).toBe(false);
    expect(ignoreComma("\"Charlie, Dianne\"")).toBe(true);
  });

  it('splits strings of multiple words', function() {
    expect(splitNames('Charlie, Dianne')).toEqual(['Charlie', ' Dianne']);
    expect(splitNames('Bob, Charlie')).toEqual(['Bob', ' Charlie']);
  });

  it('trims extra space off strings', function() {
    expect(trimString(' Charlie ')).toBe('Charlie');
    expect(trimString(' Bob ')).toBe('Bob');
  });

  it('takes split strings, inserts them in the original array, and deletes the old joined string', function() {
    expect(insertSplitNames(['Benny', 'Millie'], ['Eden', 'Benny, Millie'], 1)).toEqual(['Eden', 'Benny', 'Millie']);
  });

  it('transforms a string to uppercase and adds an exclamation mark', function() {
    expect(shout('Hello, Charlie')).toBe('HELLO, CHARLIE!');
  });

  it('separates names by lower and upper case and stores them in a multidimensional array', function() {
    expect(separateByCase(['Amy', 'BRIAN', 'Charlotte'])).toEqual([['Amy','Charlotte'],['BRIAN']]);
  });

  it('checks if the string has a comma', function() {
    expect(stringHasComma('Amy, Charlotte')).toBe(true);
    expect(stringHasComma('Charlotte')).toBe(false);
  });

})
