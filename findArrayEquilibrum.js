/**
 * File:        findArrayEquilibrumPoint.js
 * Author:      Mudathir Lawal
 * Email:       mudathir.lawal@yahoo.com
 * GitHub:      github.com/mudathirlawal
 * Last Edit:   5th September, 2021.   
 * Version:     1.0.0 EN
 *
 * Purpose:     Given an array A of n positive numbers. The task is to find the 
 *              first equilibium point in the array. 
 *              HINT: According to my solution, if you want to find the last 
 *              equilibrum point in the array, simply iterate from the last 
 *              element of the given array. If you are interested in the 
 *              middlemost equilibrum point, you can create two arrays and update
 *              one with all discorvered equilibrum elements, and the other with 
 *              their corresponding indecies, then work arround that.
 *              
 *              The Equilibrium Point in an array is a position such that the sum
 *              of elements before it is equal to the sum of elements after it.
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
const testArray4 = [0, 0, 0, 2, -4, 1, 1]; // Has multiple equilibrum points.
const testArray5 = [-7, 1, 5, 2, -4, 3, 0];
const testArray6 = [-7, 1, 5, 2, -4, 3, 0, 9];

// Test Cases:
console.log( findArrayEquilibrumPoint( testArray1 ) );
console.log( findArrayEquilibrumPoint( testArray2 ) );
console.log( findArrayEquilibrumPoint( testArray3 ) );
console.log( findArrayEquilibrumPoint( testArray4 ) );
console.log( findArrayEquilibrumPoint( testArray5 ) );
console.log( findArrayEquilibrumPoint( testArray6 ) );
