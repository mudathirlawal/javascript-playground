// What is the correct way to call this function?
// A: const sum4 = sum( 4 ); sum4( 5 );
// B: sum( 5 )( 4 );
// C: sum( 5, 4 );

function sum( x ) {
    return y => x + y;
}
