// What does the console log?

function myStr1(start, step) {
    return function() {
        const curr = start;
        start += step;
        return curr;
    }
}

const myStr2 = myStr1(5, 2);
myStr2();
myStr2();
myStr2();
console.log( myStr2() );
