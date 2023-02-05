/*
Write a regex that matches any string containing "cat".
*/

var re = /cat/;

////

/*
Write a regex that only recognizes the string "a single phrase". If there's anything more or less than that, the regex shouldn't match.
*/

var re = /^a single phrase$/;

////

/*
Write a regex that recognizes words that begin and end in "t". (The "t" at the beginning and end of the word must be separate, so the regex should match "tt" but not "t".)
*/

var re = /^t.*t$/;

// ^ notes must start with t, . notes additional character
// * notes 0 or more of this character, $ notes must end in t

////

/*
Write a regex to recognize strings that contain "cat", "dog", or "horse".
*/
var re = /cat|dog|horse/;

////

/*
Write a regex that recognizes any five consecutive digits anywhere in the text.
*/
var re = /\d\d\d\d\d/;

////

/*
Write a regex that matches the word "cat", or the empty string. It shouldn't match any strings other than those two.
*/
var re = /^(cat|)$/;

////

/*
Write a regex that recognizes dogs and cats that are only big or fluffy, but not both.
*/
var re = /^(big|fluffy) (dog|cat)$/;

////

/*
Define a regular expression that recognizes American local phone numbers. (They have three numbers before the dash and four after it.)
*/
var re = /^\d\d\d-\d\d\d\d$/;

////

/*
Write a regular expression to match US dollar amounts. The amounts always have two cents included, like $9.52.
*/
var re = /^\$\d+\.\d\d$/;

////

/*
Write a regex to match only 'cat' or 'cats'. If there's anything more or less than that, the regex shouldn't match.
*/

var re = /^cats?$/;

////

/*
A local number looks like 555-1234. A long-distance number adds an area code, like 206-555-1234. Write a regex that can recognize both types.
*/

var re = /^\d\d\d-(\d\d\d-)?\d\d\d\d$/;

////

/*
Write a regex that matches a word character followed by a literal space.
*/

var re = /^\w $/;

// starts with word, has space and ends that way
