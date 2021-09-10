
function generateAscenderArray( arr ) {
    const len = arr.length;
    const ascenderArray = Array( len ).fill( 0 );
    ascenderArray[0] = arr[0];
    for ( i = 1; i < len; i++ ) {
        ascenderArray[i] = ascenderArray[i - 1] + arr[i];
    }
    return ascenderArray;   
}

function generateDescenderArray( arr ) {
    const len = arr.length;
    const descenderArray = new Array( len ).fill( 0 );
    descenderArray[len - 1] = arr[len - 1];
    for ( i = (len - 2); i >= 0; i-- ) {
        descenderArray[i] = descenderArray[i + 1] + arr[i];
    }
    return descenderArray;   
}

function getEquilibriumIndex( ascenderArray, descenderArray ) {
    const len = ascenderArray.length;
    for ( i = 0; i < len; i++ ) {
        if ( ascenderArray[i] === descenderArray[i] ) {
            return i;
        }
    }
}


const testArray1 = [ 1, 1, 1, 3, 2, 1 ];
const testArray2 = [0, 0, 0, 2, -4, 1, 1]; // Has multiple equilibrum points.
const ascender = generateAscenderArray( testArray2 );
const descender = generateDescenderArray( testArray2 );

console.log( generateAscenderArray( testArray1 ) );
console.log( generateDescenderArray( testArray1 ) );
console.log( getEquilibriumIndex( ascender, descender ) );


// [ 0, 0, 0, 2, -4, 1, 1 ]
// [ 0, 0, 0, 2, -2,-1, 0 ]
// [ 0, 0, 0, 0, -2, 2, 1 ]

// 0
