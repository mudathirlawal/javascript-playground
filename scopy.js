
// 16306 N 137th Dr
// Surprise AZ 85374-4087
// Neighborhood: West Point Towne Center


// CLOSURES
// ========
// Here is how it works. Whenever you declare a new function and assign it to a variable, you store the function definition, as well as a closure. The closure contains all the variables that are in scope at the time of creation of the function. It is analogous to a backpack. A function definition comes with a little backpack. And in its pack it stores all the variables that were in scope at the time that the function definition was created.

// When a function returns a function, that is when the concept of closures becomes more relevant. The returned function has access to variables that are not in the global scope, but they solely exist in its closure.

// Not so trivial closures
// Sometimes closures show up when you don’t even notice it. You may have seen an example of what we call partial application. Like in the following code.

let c = 4
const addX = x => n => n + x
const addThree = addX(3)
let d = addThree(c)
console.log('example partial application', d)
In case the arrow function throws you off, here is the equivalent.

let c = 4
function addX(x) {
  return function(n) {
     return n + x
  }
}
const addThree = addX(3)
let d = addThree(c)
console.log('example partial application', d)
console.dir(increment);
console.dir(increment);
console.dir(increment);


function one() {

   console.log( test, ': ', typeof( test ) ); 

   var test = function two() {

        three();

        function three() {
            alert('I am at function three');
        }

    } 

    console.log( test, typeof( test ) ); 
    test();

}

one();

// Global Context when evaluated
global.VO = {
    foo: pointer to foo(),
    callAlert: returned value of global.VO.foo
    scopeChain: [global.VO]
}

// Foo Context when evaluated
foo.VO = {
    bar: pointer to bar(),
    a: 'private variable',
    scopeChain: [foo.VO, global.VO]
}

// Bar Context when evaluated
bar.VO = {
    scopeChain: [bar.VO, foo.VO, global.VO]
}


class Car {
	constructor( id ) {
	    this.id = id
	}
}


executionContextObj = {
    'scopeChain': { /* variableObject + all parent execution context's variableObject */ },
    'variableObject': { /* function arguments / parameters, inner variable and function declarations */ },
    'this': {}
}

