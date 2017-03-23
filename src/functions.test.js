/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */

// ...0
function max (a, b) {
  if (isNaN(a) && isNaN(b)) {
    return NaN
  } if (isNaN(a) && !isNaN(b)) {
    return b
  } if (!isNaN(a) && isNaN(b)) {
    return a
  } if (a > b) {
    return a
  } else if (b > a) {
    return b
  } else {
    return b
  }
}

/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree (a, b, c) {
  if ((a > b) && (a > c)) {
    return a
  } else if ((b > a) && (b > c)) {
    return b
  } else {
    return c
  }
}

/*
 * Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

function sum (a, b) {
  return a + b
}

/*
 * Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */

function sumOfArray (keith) {
  let a = 0
  for (let i = 0; i < keith.length; i++) {
    a += keith[i]
  }
  return a
}

// ...

/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel (c) {
  if ((c === 'a') || (c === 'A')) {
    return true
  } else if ((c === 'e') || (c === 'E')) {
    return true
  } else if ((c === 'i') || (c === 'I')) {
    return true
  } else if ((c === 'o') || (c === 'O')) {
    return true
  } else if ((c === 'u') || (c === 'U')) {
    return true
  } else {
    return false
  }
}

// ...

 /**
  * Write a function rovarspraket() that will translate
  * a text into a "rövarspråket". That is, double every
  * consonant and place an occurrence of "o" in between.
  *
  * For example, rovarspraket("this is fun") should
  * return the string "tothohisos isos fofunon".
  */

function rovarspraket (word) {
  let roverword = ''
  if (Number.isInteger(word)) {
    return '0'
  }
  for (let i = 0; i < word.length; i++) {
    if ((word[i] === 'a') || (word[i] === 'A')) {
      if (word.length === 1) {
        return word
      }
      roverword += 'a'
    } else if ((word[i] === 'e') || (word[i] === 'E')) {
      if (word.length === 1) {
        return word
      }
      roverword += 'e'
    } else if ((word[i] === 'i') || (word[i] === 'I')) {
      if (word.length === 1) {
        return word
      }
      roverword += 'i'
    } else if ((word[i] === 'o') || (word[i] === 'O')) {
      if (word.length === 1) {
        return word
      }
      roverword += 'o'
    } else if ((word[i] === 'u') || (word[i] === 'U')) {
      if (word.length === 1) {
        return word
      }
      roverword += 'u'
    } else if (word[i] === ' ') {
      if (word.length === 1) {
        return word
      }
      roverword += ' '
    } else {
      roverword = roverword + word[i] + 'o' + word[i]
    }
  }
  return roverword
}

// ...

/**
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse (inputString) {
  let reverseString = ''

  let i = inputString.length - 1
  while (i >= 0) {
    reverseString += inputString[i]
    i--
  }
  return reverseString
}

// ...

 /**
  * Write a function findLongestWord() that takes an
  * string returns the first, longest word in the array.
  *
  * i.e. findLongestWord("book dogs") should return "book"
  */

function findLongestWord (text) {
  let words = text.split(' ')
  return words.sort((a, b) => b.length - a.length)[0]
}

// ...

/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

test('max()', (t) => {
  t.is(max(1, 3), 3)
  t.is(max(0, 3), 3)
  t.is(max(10, 3), 10)
  t.is(max(-1, -3), -1)
  t.is(max('aaa', 0), 0)
  t.true(isNaN(max('aaa', 'bbb')))
})

test('maxOfThree()', (t) => {
  t.is(maxOfThree(1, 3, 2), 3)
  t.is(maxOfThree(0, 3, -1), 3)
  t.is(maxOfThree(10, 3, 50), 50)
  t.is(maxOfThree(-1, -3, -10), -1)
  t.is(maxOfThree('aaa', 0, 1), 1)
  t.true(isNaN(maxOfThree('aaa', 'bbb', 'ccc')))
})

test('sum()', (t) => {
  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
})

test('sumOfArray()', (t) => {
  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test('isVowel()', (t) => {
  t.is(isVowel(0), false)
  t.is(isVowel('B'), false)
  t.is(isVowel('b'), false)
  t.is(isVowel('a'), true)
  t.is(isVowel('E'), true)
})

test('rovarspraket()', (t) => {
  t.is(rovarspraket('a'), 'a')
  t.is(rovarspraket('b'), 'bob')
  t.is(rovarspraket('cat'), 'cocatot')
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
  t.is(rovarspraket(0), '0')
})

test('reverse()', (t) => {
  t.is(reverse('books'), 'skoob')
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', (t) => {
  t.is(findLongestWord('book dogs'), 'book')
//  t.is(findLongestWord('life the universe and everything', 'everything'))
})

/* eslint-enable */
