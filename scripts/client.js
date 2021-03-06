//
// JARGON / VOCABULARY
// ------------------------------

/*
. - dot
/ - Wack
\ - back slash (escaping characters)
() - parenthesis, parens
{} - braces, curlies, curly brackets, curly bracks
[] - brackets, square brackets, square braces
< - less than, angle brackets
> - great than, gator, angle brackets
! - not, bang
# - pound, hash, number
* - star, splat
|| - or, pipes
$ - bling, dollar sign, cash
NaN - not a number, bread
kittyKat - it's whatever you want
keyword - a predefined word in JS
*/

//
// Data Types
// ------------------------------

/*
number - 10, 8, 10000000
string - 'taco' or '8' ("taco")
object - {}
array - []

function - function() {}
*/

//
// Variables
// ------------------------------

/*
let - reset value
const - cannot reset value
*/

const something = 'words';
let doggo = 'Woof';
doggo = 'Bow Wow';

// = - assignment operator

console.log(doggo);

// VARIABLE NAMING
// kittyKat

let firstName = 'Chris';
let numberOfPets = 3;

// self documenting code

//
// Expressions & Operators
// ------------------------------

let lastName = 'Schippers'; // expression
// =

lastName = 3; // expression

lastName = 3 + 1; // expression
// + operator

lastName += 1; // expression
// += operator

lastName++; // expression
// ++ operator

lastName--; // expression
// -- operator

/*
OPERATORS
=
-
+
/
*
<
>
&&
||
++
--
+=
!=
google: js operator
*/

//
// null, undefined, NaN
// ------------------------------

// null - we set, show that something doesn't have value (Falsy Values)
let fullName = null;
// undefined - a value has not been defined (Falsy Values)
let zoo;
console.log('zoo:', zoo);
// not defined - meaning I never defined the thing
// const person = { name: 'Myron' };
// person.name;
// NaN - Not a Number
const whatAmI = 'ten' * 3;
console.log(whatAmI);
console.log(typeof whatAmI);

//
// Conditional Statements
// ------------------------------

// code block only runs if expression is true

// if (/* expression */) {
//   // perform some logic (if block)
// } else if (/* expression */) {
//   // perform some logic
// } else {
//   // perform logic
// }

// Comparison Operators

/*
== - not type just value, 8 == 8 (true), '8' == 8 (true)
=== - both type and value, 8 == 8 (true), '8' === 8 (false)
! - if (!isOpen) {}
!= - not equal by only value
!== - not equal with type & value
> - greater than, 10 > 8 (true), 8 > 8 (false)
>= - greater than equal to, 8 >= 8 (true)
< - less than, 7 < 8 (true)
<= - less than equal to, 8 <= 8 (true)
*/

//
// Loops
// ------------------------------

// WHILE LOOP
// looping for a fixed condition

// while (/* expression */) {
//   // logic to perform while looping
// }

// FOR LOOP
// iterating through a list (from point A to B)

// for (let i = 0; i < 3; i++) {
//   // perform logic HERE
// }

const people = ['Myron', 'Scott'];
for (let person of people) {
  // logic HERE
  console.log('of:', person);
}
for (let index in people) {
  // logic HERE
  console.log('in:', index);
  console.log('in:', people[index]);
}

//
// FUNCTIONS
// ------------------------------

// want to double the value you pass me
// function declaration
function doubleIt(originalNum) {
  return originalNum * 2;
  // doubleIt2(originalNum);
}

// function  expression
const doubleIt2 = function (originalNum) {
  return originalNum * 2;
};

console.log(doubleIt2(2));

//
// Built-IN FUNCTIONS
// ------------------------------

Number('8');
// Object();
// Array();
parseFloat(); // decimal place
parseInt();
String();

// STRING METHODS

const puppy = 'Fiudo';

// .charAt();
console.log(puppy.charAt(1));
// .length
console.log(puppy.length);
// .replace()
console.log(puppy.replace('u', ''));
// puppy.push('u');

const checker = '';

if (checker == null) {
  console.log('Truthy');
} else {
  console.log('Falsy');
}

// ARRAY METHODS

const testArray = [1, 2, 3];

// .push('value') - add to end of array
// .pop() - removing from the end
// .shift('value') - adds to the beginning of array
// .unshift() - removes the first item
// .length

// console.log(testArray.pop());
console.log(testArray[testArray.length - 1]);

const myPerson = {
  name: 'Myron',
  age: 37,
};

console.log(Object.keys(myPerson));

const butterfly = 'magnificent';

console.log(butterfly.split(''));
