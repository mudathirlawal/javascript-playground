function sumUpArrayElems( arr ) {
    let total = 0;
    const len = arr.length;
    for ( let n = 0; n < len; n++ ) {
        total = total + arr[n];
    }
    return total;
}

function getEquilibriumPoint( arr ) {
    let leftSum = 0;
    const len = arr.length;
    let rightSum = sumUpArrayElems( arr );
    for ( let i = 0; i < len; i++ ) {
        rightSum = rightSum - arr[i];
        if ( rightSum === leftSum ) {
            return i;
        }
        leftSum = leftSum + arr[i];
    }
    return null;
}

const testArray = [ 5, 2, 0, 3, 4 ];
console.log( sumUpArrayElems( testArray ) );
getEquilibriumPoint( testArray );
