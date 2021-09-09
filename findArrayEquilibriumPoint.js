/**
 * File:        findArrayEquilibriumPoint.js
 * Author:      Mudathir Lawal
 * Email:       mudathir.lawal@yahoo.com
 * GitHub:      github.com/mudathirlawal
 * Last Edit:   5th September, 2021.   
 * Version:     1.0.0 EN
 *
 * Purpose:     Given an array A of n positive numbers. The task is to find the 
 *              first equilibrium point in the array. 
 *              HINT: According to my solution, if you want to find the last 
 *              equilibrium point in the array, simply iterate from the last 
 *              element of the given array. If you are interested in the 
 *              middlemost equilibrium point, you can create two arrays and update
 *              one with all discorvered equilibrium elements, and the other with 
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

function findArrayEquilibriumPoint( eqArray ) {
    let firstIdx = 0;
    let len = eqArray.length;
    let leftSum = eqArray[firstIdx];
    if ( len < 3 ) {
        if ( len == 2 ) {
            console.log( 
                '\n\tPlease, enter an array that\n \thas an equilibrium index.\n'
            );
            return null;
        }
        else {
            console.log( 
                "Equilibrium Index: " + firstIdx + ";", 
                "Value at equilibrium index: " + eqArray[firstIdx] 
            );
            return 1;
        }
    }

    for( let i = 2; i < len; i++ ){
        let j = ( i - 1 );
        let rightSum = findRightSum( eqArray, i );
        if ( leftSum === rightSum ){
            console.log( 
                "Equilibrium Index: " + j + ";",
                "Value at equilibrium index: " + eqArray[j]
            );
            return j;
        }
        else {
            leftSum = leftSum + eqArray[j];
        }
    }
    console.log( 
        '\n\tPlease, enter an array that\n \thas an equilibrium index.\n'
    );
    return null;    
}

const testArray1 = [ 50 ];
const testArray2 = [ 1, 1 ];
const testArray3 = [ 1, 1, 1, 3, 2, 1];
const testArray4 = [0, 0, 0, 2, -4, 1, 1]; // Has multiple equilibrium points, 3.
const testArray5 = [-7, 1, 5, 2, -4, 3, 0];
const testArray6 = [-7, 1, 5, 2, -4, 3, 0, 9];

// Test Cases:
console.log( findArrayEquilibriumPoint( testArray1 ) );
console.log( findArrayEquilibriumPoint( testArray2 ) );
console.log( findArrayEquilibriumPoint( testArray3 ) );
console.log( findArrayEquilibriumPoint( testArray4 ) );
console.log( findArrayEquilibriumPoint( testArray5 ) );
console.log( findArrayEquilibriumPoint( testArray6 ) );
