// REGULAR EXPRESSIONS COURSE

/////////

// Literals
/* 
Letters, numbers, and some other characters match themselves
*/
/a cat/.test("that's a cat"); // true
/a cat/.test("cat ate food"); // false

// Wildcard
/*
. matches one character.
*/
/./.test(">"); // true

// Boundaries
/*
The ^ boundary matches the beginning of a string, and the $ boundary matches the end.
*/
/^cat/.test("a cat"); // false
/^the/.test("the cat"); // true

// Repetition
/*
The + operator requires the regex before it to occur one or more times.
*/
/c.+t/.test("caaat"); // true
/c.+t/.test("ct"); // false

/////

//QUIZ
/*
Write a regex that matches any string containing "cat".
*/

var re = /cat/;

// QUIZ
/*
Write a regex that only recognizes the string "a single phrase". If there's anything more or less than that, the regex shouldn't match.
*/

var re = /^a single phrase$/;

// QUIZ
/*
Write a regex that recognizes words that begin and end in "t". (The "t" at the beginning and end of the word must be separate, so the regex should match "tt" but not "t".)
*/

var re = /^t.*t$/;

// ^ notes must start with t, . notes additional character
// * notes 0 or more of this character, $ notes must end in t
