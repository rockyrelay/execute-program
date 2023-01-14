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
