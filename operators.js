/* ARTHEMATIC OPERATORS 

+,  - , / , *  , %(modulus),  **(exponential)

used to perform operation on data*/

let a = 10;
let b = 5;

console.table([ a+b, a-b, a*b, a/b, a%b, a**b])

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

/* UNARY OPERATORS 

increment, decrement
a++ = a + 1,            a-- = a - 1

a++ (post increment)        a-- (post decrement)  pehly value print hogi usk bad next line me value change ho kr print hogi
++a (pre increment)         --a (post decrement)  pehly value change hogi means 10 me 1 add ya sub hoga phr new value print hogi

*/

a++; // a ki value 10 h to us me 1 add ho kr 11 print hona chahye
console.log(a);

a--; // a ki value 10 h to us me 1 sub ho kr 9 print hona chahye
console.log(a);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

/* ASSIGNMENT OPERATORS

=, +=, -=, *=, %=, **=

a+= 4 means a = a + 4 same as for -,*,/,%,**

*/
a += 4;
console.log(a);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

/* COMPARISION OPERATOR

== equal to             === equal & type
!= not equal to             !== not equal & type

<,  >,  <=,  >=

*/

console.log('a==b ', a==b );
console.log('a!=b ', a!=b );
console.log('a===b ', a===b );
console.log('a!==b ', a!==b );

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

/* LOGICAL OPERATORS
multiple expressions ko evaluate kr k final answer deta h true/false ki shakal me

logical and &&
logical or ||
logical not !
*/
let c = 10;
let d = 5;

// LOGICAL AND &&

let cond_1 = c > d;
let cond_2 = c == 4;

console.log(cond_1 && cond_2);


// LOGICAL OR ||

let cond_3 = c > d;
let cond_4 = c == 4;

console.log(cond_3 || cond_4);


// LOGICAL NOT !

console.log(!(a > b));

