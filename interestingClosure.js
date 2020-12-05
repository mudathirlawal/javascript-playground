// What does the console log?
function myStr1( start, step ) {
    return function() {
        const curr = start;
        start += step;
        return curr;
    }
}

const myStr2 = myStr1( 5, 2 );
myStr2();
myStr2();
myStr2();
console.log( myStr2() );

// What is the correct way to call this function?
// A: const sum4 = sum( 4 ); sum4( 5 );
// B: sum( 5 )( 4 );
// C: sum( 5, 4 );
function sum( x ) {
    return y => x + y;
}
