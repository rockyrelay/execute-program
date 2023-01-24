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

/////

// Or
/*
A | between two regexes matches either of those two regexes.
*/
/a|b/.test("a"); // true
/a|b/.test("b"); // true
/at|co/.test("horse"); // false

/////

// QUIZ
/*
Write a regex to recognize strings that contain "cat", "dog", or "horse".
*/
var re = /cat|dog|horse/;

/////

// Basic Character Classes
/*
Character classes give us short names for common groups of characters.
*/
// \s matches any whitespace character.
/\s/.test(' ');
RESULT:
true
>
// \d matches digits.
/\d/.test('1');
RESULT:
true
// All character classes can be negated by upper-casing them.

>
// \D matches non-digit characters.
/\D/.test('a');
RESULT:
true

// QUIZ
/*
Write a regex that recognizes any five consecutive digits anywhere in the text.
*/
var re = /\d\d\d\d\d/;

/////

// Parens
/*
Parentheses group operators together.
*/
// Matches a, b, ab, ba, ...
/^(a|b)+$/;

// QUIZ
/*
Write a regex that matches the word "cat", or the empty string. It shouldn't match any strings other than those two.
*/
var re = /^(cat|)$/;

// QUIZ
/*
Write a regex that recognizes dogs and cats that are only big or fluffy, but not both.
*/
var re = /^(big|fluffy) (dog|cat)$/;

// QUIZ
/*
Define a regular expression that recognizes American local phone numbers. (They have three numbers before the dash and four after it.)
*/
var re = /^\d\d\d-\d\d\d\d$/;

/////////////////////

// ESCAPING

/*
In regexes, + normally repeats whatever comes before it. But we can escape the + as \+ to match a literal "+". Likewise for other operators.
*/

/.\+./.test('1+1'); // true

// QUIZ
/*
Write a regular expression to match US dollar amounts. The amounts always have two cents included, like $9.52.
*/
var re = /^\$\d+\.\d\d$/;
