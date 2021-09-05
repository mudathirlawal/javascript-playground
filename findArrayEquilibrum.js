/**
 * File:        findArrayEquilibrumPoint.js
 * Author:      Mudathir Lawal
 * Email:       mudathir.lawal@yahoo.com
 * GitHub:      github.com/mudathirlawal
 * Last Edit:   5th September, 2021.   
 * Version:     1.0.0 EN
 *
 * Purpose:     Given an array A of n positive numbers. 
 *              The task is to find the first Equilibium 
 *              Point in the array. 
 * 
 *              The Equilibrium Point in an array is a  
 *              position such that the sum of elements 
 *              before it is equal to the sum of elements 
 *              after it.
 */

function findRightSum( arr, k ){
    let total = 0;
    for ( let n = k; n < arr.length; n++ ){
        total = total + arr[n];
    }
    //console.log( total );
    return total;
}

function findArrayEquilibrumPoint( eqArray ) {
    let firstIdx = 0;
    let len = eqArray.length;
    let leftSum = eqArray[firstIdx];
    if ( len < 3 ) {
        if ( len == 2 ) {
            console.log( 
                '\n\tPlease, enter an array that\n \thas an equillibrum index.\n'
            );
            return null;
        }
        else {
            console.log( 
                "Equilibrum Index: " + firstIdx + ";", 
                "Value at equilibrum index: " + eqArray[firstIdx] 
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
    console.log( 
        '\n\tPlease, enter an array that\n \thas an equillibrum index.\n'
    );
    return null;    
}

const testArray1 = [ 50 ];
const testArray2 = [ 1, 1 ];
const testArray3 = [ 1, 1, 1, 3, 2, 1];
const testArray4 = [-7, 1, 5, 2, -4, 3, 0];
const testArray5 = [-7, 1, 5, 2, -4, 3, 0, 9];

console.log( findArrayEquilibrumPoint( testArray1 ) );
console.log( findArrayEquilibrumPoint( testArray2 ) );
findArrayEquilibrumPoint( testArray3 );
findArrayEquilibrumPoint( testArray4 );
console.log( findArrayEquilibrumPoint( testArray5 ) );
