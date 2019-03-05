
// Closure Implementation: Just testing my understanding of closure.
let app = ( function () {

	let myName = 'Mudathir';

	let primeMin = {
		firstName: 'Tafawa',
	    lastName : 'Balewa',
	    age: 55,
	    bloodGroup: 'B-',
	    nationality: 'Nigerian',
	    uGQual: 'Bachelor of Arts',
	    uGMajor: 'History',
	    pGQual: 'Master of Arts',
	    pGMajor: 'Archeology'
	};

let getPrimeMin = function () { 
	return primeMin;
};

	let getAcadRecords = function () {
		
		return { 
			fullName: primeMin.firstName + ' ' + primeMin.lastName,
			uGDetails: primeMin.uGQual + ' in ' + primeMin.uGMajor,
			pGDetails: primeMin.pGQual + ' in ' + primeMin.pGMajor
		};

	};
    
    let getHealthRecords = function () {

    	return { 
    		fullName: primeMin.firstName + ' ' + primeMin.lastName,
    		age: primeMin.age, 
    		bGroup: primeMin.bloodGroup
    	};

    };

    return {
    	getHealthRecords: getHealthRecords,
    	getAcadRecords: getAcadRecords,
    	getPrimeMin: getPrimeMin,
    	primeMin: primeMin,
    	myName: myName
    };

	}) ();

/**********Function calls:**************************/
console.log( '\n1- HEALTH RECORDS:\n' );
console.log( app.getHealthRecords() );
console.log( '\n' );
console.log( '2- ACADEMIC RECORDS:\n' );
console.log( app.getAcadRecords() );
console.log( '\n3- Logging \'primeMin\' object: \n' );
console.log( app.getPrimeMin() );
console.log( '\n' + '4- Inappropriate approach to log \'primeMin\' object:' );
console.log( 'Object properties/values cannot be accessed.\n' );
console.log( app.primeMin + '\n' );
console.log( '5- It\'s okay to log a varible directly, as oppossed to objects\n which need to be returned through a function expression \n' );
console.log( '\tmyName: ' + app.myName + '\n' );
console.log( '6- Logging the content of \'app\' varaiable:\n' );
console.log( app );
console.log( '\n' );



