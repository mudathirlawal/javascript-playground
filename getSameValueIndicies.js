function getSameValueIndicies( arr1, arr2 ){
	let sameValueIndicies = [];
	for( let n = 0; n < arr1.length; n++ ){
        if ( arr1[ n ] == arr2[ n ] ){
            sameValueIndicies.push( n );
        }
	}
	return sameValueIndicies;
}

let set1 = [ 'a', 'b', 'c', 'd' ];
    set2 = [ 'c', 'b', 'a', 'd' ];
console.log( getSameValueIndicies( set1, set2 ) );
