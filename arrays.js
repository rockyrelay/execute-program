// ARRAYS 

// Basics // 

/*
Arrays are sequences of values. They have a length and a specific order.
*/


[1, 2, 3].length;
RESULT:
3

const array1 = ['a', 'b', 'c'];
array1[0];
RESULT:
'a'

const array2 = ['a', 'b', 'c'];
array2[1] = 'x';
array2;
RESULT:
['a', 'x', 'c']

////

// STACK //

/*
```push``` and ```pop``` let us treat arrays as stacks. They add and remove elements to and from the end of the array.
*/

const a = [1, 2, 3];
a.push(4);
a;
RESULT:
[1, 2, 3, 4]


const b = [1, 2, 3];
b.pop();
b;
RESULT:
[1, 2]

////