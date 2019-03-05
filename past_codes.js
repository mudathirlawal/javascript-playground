
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




// ( function ( ...args ) {
// 	console.log( args[0], args[1], args[2] );
//  	return 'Hello, World';
//   } 
// ) ( 'a', 'b', 'c' );


// let arr = [ 'Mellon', 'Apple', 'Egg plant' ];
// let [ $fruit1, $fruit2, $fruit3 ] = arr;
// let _fruit1, _fruit2, _fruit3;
// [ _fruit1, _fruit2, _fruit3 ] = arr;

// console.log( $fruit1, $fruit2, $fruit3 );
// console.log( _fruit1, _fruit2, _fruit3 );


// let car = {
// 	id: '123',
// 	getId: function ( ...args ) {
// 		console.log( this );
// 		console.log( args[0], args[1], args[2] );
// 		return this.id;
// 	}
// };

// let bike = {
// 	id: "456",
// 	name: 'Stunning Waffle'
// };

// //let { id, name } = bike;
// let id, name;
// ( { id, name } = bike );

// console.log( car.getId() );
// console.log( car.getId.call( bike ) );
// console.log( car.getId.apply( bike, [ '2012', 'Stanley', name ] ) );


// let userName = "Sulaeym";
// let userSettings = null;
// let defaultSettings = { name: 'User' };

// //console.log( !!( userSettings && defaultSettings ) );

// //console.log( !!( userSettings || defaultSettings ) );

// !!( userSettings || defaultSettings ) 
//     ? function () {
//     	userSettings = { name: userName };
//         console.log( userSettings );
//         return userSettings;
//       }  
//     : function () {
//     	console.log( !!userSettings );
//         return userSettings;
//      };



// function getChars( age, ...nameChars ) {
// 	console.log( age );
// 	for ( let i = 0; i < nameChars.length; i++ ) {
// 		console.log( nameChars[ i ].toUpperCase() );
// 	}
// }


// //getChars( 35, "Mudathir" ); OR:
// let argArray = [ 35, 'Mudathir' ];
// getChars( ...argArray ); // Using spread syntax


//console.log( !!( "Cat" && 0 ) );


// let student1 = {
// 	firstName: 'AbduLlaah',
// 	surname: 'Zaakirov',
// 	fullName: `${this.firstName} + ' ' + ${this.surname}`, // Value not assigned to property, ie undefined.
// 	getContext: function () { 
// 		return this;
// 	},
// 	getStudInfo: function ( title, age, country ) {
// 		//console.log( this );
// 		console.log( '\n  ================= \n' )
// 		return { 
// 			title: title,
// 			firstName: this.firstName,
// 			surname: this.surname,
// 			fullName: this.firstName + ' ' + this.surname,
// 			age: age,
// 			country: country
// 		}; 
// 	}
// };

// let student2 = { 
// 	firstName: 'Daawood',
// 	surname: 'Burbank',
// 	fullName: this.firstName + ' ' + this.surname
// };
// console.log( '\n  ' + student1.firstName + ' ' + student1.surname + '\n' );
// console.log( student1.getContext() );		
// console.log( student1.getStudInfo() );
// console.log( '\n  ' + student1.fullName );
// console.log( student1.getStudInfo.apply( student2, [ 'Dr.', 33, 'Great Britain' ] ) );


// var myObject = {
// 	egg: "plant",
// 	func: function() {
// 		var self = this;   
// 		console.log("outer func: this.egg = " + this.egg);
// 		console.log("outer func: self.egg = " + self.egg);
// 		(function() {
// 			console.log("inner func: this.egg = " + this.egg);
// 			console.log("inner func: self.egg = " + self.egg);
// 		}());
// 	}
// };
// myObject.func();	


// let me = "Orange", you = "Grape", drink = "Juice";
// console.log( you + me + drink );



// let oldCarObj = {  
// 	carId: 123,
// 	getId: function () {
// 		console.log( this );
// 		return this.carId;
// 	}
// };
// let newCarObj = { carId: 456 };

// console.log( oldCarObj.getId() );
// console.log( oldCarObj.getId.call( newCarObj ) );




// var x   = 4,
//     obj = {
//         x: 3,
//         bar: function() {
//             var x = 2;
//             setTimeout(function() {
//                 var x = 1;
//                 console.log(this.x);
//             }, 1000);
//         }
//     };
// obj.bar();




// let fn = function () {
// 	console.log( this === console );
// 	//return this;
// };

// fn();
// console.log( this );


// let app = ( function () { 
// 	let carId = 123;
// 	let getId = function () {
// 		return carId;
// 	};
// 	//console.log( getId() );
// 	return {
// 		getId : getId
// 	};
// }) ();

// console.log( '\n\t' + app.getId );
// console.log( '\n\t' + app.getId() + '\n' );




//IIFEs or Self-Executing Anonymous Function
//LEFT SHIFT: [ x << y ==> x * 2 ** y ]

// //... AND OR EXCLUSSIVE OR BITWISE OPERATORS:

// function Member( memName, isUndergrad, isPostgrad, isDoctoral, isPostdoctoral ) {
// 	this.memName = memName;
// 	this.isUndergrad = isUndergrad;
// 	this.isPostgrad = isPostgrad;
// 	this.isDoctoral = isDoctoral;
// 	this.isPostdoctoral = isPostdoctoral;
// }

// let member1 = new Member(  
// 	 "Dr. Lawal",
// 	 false,
// 	 false,
// 	 false,
// 	 true, 
// );

// function getMemberStatus( uniMember ) {
// 	//console.log( member1.isUndergrad ? 'Undergraduate Student' : '\n\tVisiting Professor' );
//     return member1.isUndergrad ? "Undergraduate Student"
//             : member1.isPostgrad ? "Postgraduate Student"
//             : member1.isDoctoral ? "Doctoral Student"
//             : member1.isPostdoctoral ? "Postdoctoral Researcher"
//             : "Professor";
// }

// //console.log( member1 );
// //console.log( "\n\t" + member1 );
// console.log( "\n\t" + getMemberStatus( member1 ) +"\n" );
// console.log( "\t" + Member.isDoctoral );
// console.log( "\t" + Member.isPostdoctoral );
// console.log( "\t" + Member.isPostgrad );
// console.log( "\t" + Member.isUndergrad );







