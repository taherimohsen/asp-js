/** @format */
//add comments
// explain what this function does. use Google!
function whatDoIDo() {
  return Math.random() * 8 + 1;
}

// The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

// explain what does this function do, google it
function whatICanDo(word1, word2) {
  return word1.concat(word2);
}

// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

function concatenate(firstWord, secondWord, thirdWord) {
  // do you remember how concatenation works? take a look at the tests and do it yourself
  return firstWord.concat(` ${secondWord} ${thirdWord}`);
}

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.
To run these tests type `node third` into your terminal
==================================
*/

const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "concatenate function - case 1 works",
  concatenate("international", "mentors&", "developers"),
  "international mentors& developers"
);
test(
  "concatenate function - case 2 works",
  concatenate("I", "like", "pizza"),
  "I like pizza"
);
test(
  "concatenate function - case 3 works",
  concatenate("I", "am", 13),
  "I am 13"
);
