
function findRightSum( myArray, k ){
    let myTotal = 0;
    for ( let n = k; n < myArray.length; n++ ){
        myTotal = myTotal + myArray[n];
    }
    //console.log( myTotal );
    return myTotal;
}

function findArrayEquilibrum( eqArray ) {
    let firstIndex = 0;
    let len = eqArray.length;
    let leftSum = eqArray[firstIndex];
    if ( len < 3 ) {
        if ( len == 2 ) {
                console.log( 
                    '\n\tPlease, enter an array that\n \thas an equillibrum index.\n'
                );
            return null;
        }
        else {
            console.log( 
                "Equilibrum Index: " + firstIndex + ";", 
                "Value at equilibrum index: " + eqArray[firstIndex] 
            );
            return 1;
        }
    }

    for( let i = 2; i < len; i++ ){
        let j = ( i - 1 );
        let rightSum = findRightSum( eqArray, i );
        if ( leftSum === rightSum ){
            console.log( 
                "Equilibrum Index: " + j + ";",
                "Value at equilibrum index: " + eqArray[j]
            );
            return j;
        }
        else {
            leftSum = leftSum + eqArray[j];
        }
    }
}

// TEST CASES:
const testArray1 = [ 50 ];
const testArray2 = [ 1, 1 ];
const testArray3 = [ 1, 1, 1, 3, 2, 1];
const testArray4 = [-7, 1, 5, 2, -4, 3, 0];
findArrayEquilibrum( testArray1 );
findArrayEquilibrum( testArray2 );
findArrayEquilibrum( testArray3 );
findArrayEquilibrum( testArray4 );


