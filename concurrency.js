// CONCURRENCY COURSE

//////////

// setTimeout
console.log('first');
setTimeout(() => console.log('second'), 2000);
 /*
 async console output
  29 ms  first
2033 ms  second
*/

/*
- The first console.log runs and prints to the console.
setTimeout creates a timer that will call our callback after 2000 ms have passed.
- Both lines of code (console.log and setTimeout) have run, so execution ends.
- After 2000 ms, the timeout fires and calls its callback, which prints 'second'. (You might have noticed that sometimes the time difference in the example above isn't exactly 2000 ms. We'll talk about why that happens in a future lesson.)
- The browser's JavaScript engine sees that there are no timers left, so the example finishes.
*/

console.log('first');
setTimeout(() => console.log('second'), 2000);
console.log('third');
/*
 async console output
  19 ms  first
  20 ms  third
2023 ms  second
*/

const arr1 = [];
arr1.push('first');
setTimeout(() => array.push('second'), 2000);
arr1.push('third');
/*
 ASYNC RESULT:
['first', 'third', 'second']
*/