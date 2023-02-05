//-- REGULAR EXPRESSIONS COURSE --//

/////////

// LITERALS

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


// BASIC CHARACTER CLASSES

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

// \n represents a new line character or a line break

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
let x = /^(a|b)+$/;

/*
A character class matches only one character in the string. If we want to match multiple characters, we can use + or *.
*/

/^\d$/.test('1000'); // false, because there's more than 1 digit


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

/*
Caution: the syntax /x can only be followed by exactly 2 digits. Anything after these will be a different part of the regex. 
*/

/\x41d/.test('A'); // false, because A(\x41) PLUS 'd'
/\x5Ad/.test('Zd'); // true, because Z (\x5A) PLUS 'd'

/*
Writing an \x with only one digit means it's no longer a hex code, instead matching literal 'x'
*/

/\x4/.test('x4'); // true, because it's only x+4

//////////////////

// BASIC CHARACTER SETS

// With "or" expressions, we can recognize a whole set of characters.

// eg
/^c(a|o|u)t$/.test('cat'); 
/* 
This gets tiresome if we need many options in the "or". Fortunately, we can use a character set to simplify it. The set [aou] is equivalent to (a|o|u).
*/

/^c[aou]t$/.test('cat'); // true

// We can specify an entire range of characters by using - (chars and numbers).

/[a-z]/.test('g'); // true, because we're checking the range between a-z

/*
We escape special characters when we want them to be literal. This range contains only one character, an escaped ] written as \].

We negate with ^, a character that we already saw. Normally it means "beginning of line". But inside [square brackets], it means "negate the character set". (There are only so many symbols on a keyboard, so some get reused.)
*/

/[^a]/.test('a'); // false, because we are NEGATING a
/[^a]/.test('5'); // true, because we NEGATE a and it's not there

/*
Character sets match exactly one character in the string. (This is like character classes, which also match only one character.) To match more than one character, we can use + or *.
*/

/^[a-z]$/.test('cat'); // false, because we're only looking for ONE char between a-z
/^[a-z]+$/.test('cat'); // true, because we're looking for > ONE char between a-z

/////////////////////

// CHARACTER CLASSES

/*
We could write [A-Za-z0-9_] to mean "letters, numbers, and underscores." But that's verbose, and regexes are meant to be terse. Instead, we can use the character class \w. 

The "w" in \w stands for "word", which is another name for an identifier. This can be tricky: "word" has a special meaning in programming!
*/

/\w/.test('a'); // true, because we've matched an identifier, even if only 1 char
/\w/.test('+'); // false, because + is not an identifier

/*
underscore / _ represents a placeholder character, matching any single character except a newline
*/
/\w/.test('_') // true because it's representing 1 char., thus 1 word/identifier

// We can match entire identifiers by combining \w with + and boundaries.

let y = /^\w+$/.test('my_variable'); // true because matching a WHOLE identifier
/^\w+$/.test('1+1'); // false, because the + is not a 'word identifier'


// As before upper-casing the class negates it. (\W is the opposite of \w.)

/\w/.test('c'); // true, because 'c' is an identifier of \w
/\W/.test('c'); // false, because \W negates \w