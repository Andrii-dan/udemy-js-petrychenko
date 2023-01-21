'use strict';

// 1.
let x = 5;
alert(x++);
// 5,
//++x would return 6

// 2.
console.log([] + false - null + true);
// NaN
// [] + false return false as string, anything + null return NaN

// 3.
let y = 1;
let j = (y = 2);
alert(j);
// 2

// 4.
console.log([] + 1 + 2);
// 12,
//empty array is like amty string

// 5.
alert('1'[0]);
// 1,
//string as like array, you can call specific index of string, the same way as in case of an array

//6.
console.log(2 && 1 && null && 0 && undefined );
// null
// && stop working when find false, in this case first false is null

//7.
console.log(!!(1 && 2) === (1 && 2));
// false
// !! - change next expression into boolean type (true in this case) while 1 && 2 return number

// 8.
alert( null || 2 && 3 || 4 )
// 3
// logical operator && has higher precedence than || so first it compares 2 with 3 than 3 with null and return 3 because || operator stops when it find true

// 9.
let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a == b);
// false
// here we compare two variables not their values! So they are not the same, one is a other is b, yes they have the same, identical, values, but it is two diffrent variables

// 10.
alert( +"Infinity" );
// Infinity but type of number


// 11.
console.log( 0 || "" || 2 || undefined || true || false)
// 2
// operator || stops when it find true