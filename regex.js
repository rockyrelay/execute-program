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


// Or
/*
A | between two regexes matches either of those two regexes.
*/
/a|b/.test("a"); // true
/a|b/.test("b"); // true
/at|co/.test("horse"); // false


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


// Parens
/*
Parentheses group operators together.
*/
// Matches a, b, ab, ba, ...
/^(a|b)+$/;


/////////////////////

// ESCAPING

/*
In regexes, + normally repeats whatever comes before it. But we can escape the + as \+ to match a literal "+". Likewise for other operators.
*/

/.\+./.test('1+1'); // true

////////////////////

// MAYBE

/*
The ? operator matches a character 0 or 1 times, but not more than 1. 

? affects whatever is immediately before it. 

in /ab?/ it only affects b.

to include more, use parentheses to apply to group.
*/

////////////////////


// HEX CODES

/*
Computers internally store text as numbers. As a shorthand, we usually write those numbers out as hexadecimal codes.

The x isn't a hex digit; it's telling us that this is a hex code.

the syntax \x can only be followed by exactly two digits. Anything after the two digits will be a different part of the regex.

If we write an \x with only one digit, it's no longer a character code. Instead, the \x matches literal "x" characters.

Hexadecimal digits can be any character from 0-9, a-f, or A-F. If we use the wrong characters, the \x will match literal "x" again.

The letter "ø" doesn't appear on an English keyboard. To match that letter, we can use its hex code \xf8.

*/

/\xf8/.test("søt katt"); // true as \xf8 is the hex code for ø.


