// FOR EACH //
/** 
Description: forEach() calls a provided callbackFn function once for each element in an array in ascending index order. 
It is not invoked for index properties that have been deleted or are uninitialized. 

@param callbackFn - Function to execute on each element.
callbackFn accepts between one and three arguments: the value of the element, the index of the element, the array object being traversed

@return value - undefined

**/

Array.prototype.myEach = function(callbackFn) {
	//this is the array that this function is called on
	for (let i = 0; i < this.length; i++) {

		//if the element at index i is undefined, then the continue statement will skip the current iteration of the for loop and jump to next one, 
		// thus the callback function is not called for that iteration. 
		if (this[i] === undefined) {
			continue; //The continue statement "jumps over" one iteration in the loop.
		}
		//element
		//element, index
		//element, index, array
		callbackFn(this[i], i, this); // the callback function executes on each element of the array, except for elements that are undefined
	}

}; 

//  TEST FOR myEACH  

/*
const arr1 = [1, 2, 3];
const arr2 = [1,"hello",3,,5]; //sparse array

console.log("myEach: ");
arr1.myEach((x, i, arr) => console.log(x, i, arr));

console.log("forEach: ");
arr1.forEach((x, i, arr) => console.log(x, i, arr));

console.log("myEach on a sparse array: ");
arr2.myEach((x, i, arr) => console.log(x, i));

console.log("forEach on a sparese array: ");
arr2.forEach((x, i, arr) => console.log(x, i));

const isEven = (number) => console.log(number % 2 === 0); //user-defined callback function
console.log("myEach: ");
arr1.myEach(isEven);

console.log("forEach: ");
arr1.forEach(isEven);
*/ 


// MAP //
/* 
Description: The map method transforms an array by applying a callback function to all of its elements and building a new array 
from the returned values. The new array will have the same length as the input array, but its content will have been mapped to 
a new form by the function.


@param callbackFn - Function that is called for every element of the array. Each time callbackFn executes, the returned value is added to newArray.
callbackFn is commonly used with one argument, even though they take additional optional arguments.
callbackFn accepts between one and three arguments: the value of the element, the index of the element(optional), the array object being traversed(optional).
callbackFn is invoked only for indexes of the array which have assigned values (including undefined)

@return value - A new array with each element being the result of the callback function.

*/
Array.prototype.myMap = function(callbackFn) {
	let mapped = []; //array that will be returned
	for(let i = 0; i < this.length; i++) {
		//the value returned after callbackFn has been applied to element of the array at index i is added to the new array mapped at same index
		mapped[i] = callbackFn(this[i], i, this); 
	}
	return mapped; //returns the new array which is populated with the results of the callback function being applied on every element in the calling array.
};

// TEST FOR myMap //
/*
const arr = [1, 2, 3];
const square = (num) => num * num; //this function returns the square of num
console.log("myMap: ", arr.myMap(square)); //function square passed as argument for callback function
console.log("map: ", arr.map(square));
*/

// FILTER //
/*
Description: The filter() method creates a new array with all elements of the caller array that pass the test implemented by the provided function.
@param callbackFn - Function is a predicate, to test each element of the array. Returns a value that coerces to true to keep the element, or to false otherwise.
@return value - A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
*/
Array.prototype.myFilter = function(callbackFn) {
	let filtered = []; //array to return
	for (let i = 0; i < this.length; i++) {
		if(callbackFn(this[i], i, this)) { //callbackFn will return true if element at i passes the callback function test
			filtered.push(this[i]); //add the element at i to array filtered if it passes the callback function test
		}
		//elements that do not pass the callback function test are skipped and not added to the array filtered
	}
	return filtered; //return the filtered array
};

// TEST FOR myFilter  //
/*
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) { //callback function tests to see if a number is a prime number or not. Returns true if prime. Else false.
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log("myFilter: ", array.myFilter(isPrime));
console.log("filter: ", array.filter(isPrime));
*/


// SOME //
/*
Description: The some() method executes the callbackFn function once for each element present in the array until it finds the one where callbackFn returns a truthy value. 
If such an element is found, some() immediately returns true. Otherwise, some() returns false. callbackFn is invoked only for indexes of the array with assigned values.
It is not invoked for indexes which have been deleted or which have never been assigned values.

@param callbackFn - A function to test for each element of the array. The callbackFn returns a boolean value.
callbackFn can take three arguments:  the value of the element, the index of the element(optional), and the Array object being traversed(optional).
@return value - true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
*/
Array.prototype.mySome = function(callbackFn) {
	for(let i = 0; i < this.length; i++) {
		if (callbackFn(this[i], i, this)) { //callbackFn returns true if the elemnent at i passes the test
			return true; //return true to the caller if at an element that passes the callback function test is found.
		}
	}
	return false; //return false if the callback function didn't evaluate to true for any of the elements in the arr.
};

// TEST FOR mySOME // 
/*
const arr1 = [-1, "hello", 3, 13,, 17] //no even numbers
const arr2 = [-1, "hello", 8, 13,, 17] //contains an even number
const isEven = (num) => num % 2 === 0;
console.log("mySome: ", arr1.mySome(isEven));  //prints false
console.log("some: ", arr2.some(isEven));  //prints true cause arr2 contains an even number
*/

// EVERY //
/*
Description: The every method executes the provided callbackFn function once for each element present in the array until it finds the one where callbackFn
returns a falsy value. If such an element is found, the every method immediately returns false. Otherwise, if callbackFn returns a truthy value for all 
elements, every returns true. The every() method is the opposite of the some() method. 
@param callbackFn - A function to test for each element that can take three arguments.
@return value - true if the callbackFn function returns a truthy value for every array element. Otherwise, false.
*/
Array.prototype.myEvery = function(callbackFn) {
	for(let i = 0; i < this.length; i++) {
		//when the callback function returns false, this if-statement evaluates to true and thus returns false to the caller. 
		//returns false to caller when an element is found in the array that doesn't pass the callback function test.  
		if (!callbackFn(this[i], i, this))  { 
			return false;
		}
	}
	return true; //if this line executes, that means that every element in the array passed the callback function test, so return true. 
};

// TEST FOR myEvery //
/* 
const isBelowThreshold = (currentValue) => currentValue < 40; //returns a boolean value
const array1 = [1, 30, 39, 29, 10, 13];
console.log("myEvery: ", array1.myEvery(isBelowThreshold));
console.log("every: ", array1.every(isBelowThreshold)); // expected output: true
*/


// REDUCE //
/* 
Description: The reduce() method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value 
from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

@param callbackFn - A “reducer” function that takes four arguments: 
	- previousValue (the value resulting from the previous call to callbackfn)
	- currentValue (the value of the current element)
	- currentIndex Optional
	- array (the array to traverse) Optional
@param initialValue (optional) - A value to which previousValue is initialized the first time the callback is called. 
- If initialValue is specified, that also causes currentValue to be initialized to the first value in the array. 
- If initialValue is not specified, previousValue is initialized to the first value in the array, and currentValue is initialized to the second value in the array.

@return value - The single value that results from running the “reducer” callback function to completion over the entire array.

Exceptions - Throws a TypeError if the array contains no elements and initialValue is not provided.
*/
Array.prototype.myReduce = function(callbackFn, initialValue) {
	//Throws a TypeError if the array contains no elements and initialValue is not provided.
	if(this.length === 0 && initialValue === undefined) { 
		throw new TypeError("Reduce of empty array with no initial value"); //throws a TypeError with the error message
	}

	//If the intialValue is not specified, previousValue of the callback function is initialized to the first value in the array
	// and currentvalue is initialized to the second value in the array.
	if(initialValue === undefined) {
		let previousValue = this[0]; //previousValue initalized to the first element of the array
		// i is the index of the currentValue and starts from 1 bc currentValue is initalized to the second element.
		for(let i = 1; i < this.length; i++) { 
			previousValue = callbackFn(previousValue, this[i], i, this); //previousValue updated with value returned by the callbackFn 
		}
		return previousValue; 
		//if there was only one element in the array, callbackFn not called and the first and only element of the array is returned.
		//if the length of array was greater than 1, returns the single value that resulted from applying the callback function to the array
	}
	
	//If initialValue is specified, the initialValue will be the previousValue
	// and the currentValue will be intialized to the first element of the array
	if(initialValue != undefined) {
		previousValue = initialValue; 
		// i is the index of the currentValue and starts from 0 bc currentValue is initalized to the first element of the array
		for(let i = 0; i < this.length; i++) { 
			previousValue = callbackFn(previousValue, this[i], i, this); //previousValue updated with value returned by the callbackFn 
		}
		return previousValue;
		//if array is empty, callback function is not called and the initialValue is returned
		//if array is not empty, returns the single value that resulted from applying the callback function to the array
	}
};

// TEST FOR myReduce //
 /*
const arr = [1, 2, 3, 4];
const sum = (a, b) => a + b; //arrow function that adds two numbers

console.log("myReduce without initial value: ", arr.myReduce(sum)); //expected output: 10
console.log("reduce without initial value: ", arr.reduce(sum)); //expected output: 10

console.log("myReduce with initial value of 10: ", arr.myReduce(sum, 10)); //expected output: 20
console.log("reduce with initial value of 10: ", arr.reduce(sum, 10)); //expected output: 20

const empty_arr = [];
console.log(empty_arr.myReduce(sum));
console.log(empty_arr.reduce(sum));
*/

// INCLUDES //
/*
Description: The includes() method determines whether an array includes a certain value among its entries, 
returning true or false as appropriate.

@param searchElement - The value to search for.
@param fromIndex (optional) - The position in the array at which to begin searching for searchElement. 
	- Defaults to 0 if not specified(searches from the beginning).
	- If fromIndex is a positive value, the index is that value.
	- If fromIndex is a negative value, compute the positive index by adding the negative value to the length of the array (arr.length + fromIndex)
@return value - A boolean value which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).
*/ 
Array.prototype.myIncludes = function(searchElement, fromIndex) {

	//if no argument is specified for fromIndex, set fromIndex to 0 
	if (fromIndex === undefined) {
		fromIndex = 0; //default value
	}
	//if value specified for fromIndex is negative, compute the corresponding positive index.
	else if (fromIndex < 0) { 
		fromIndex = this.length + fromIndex; //compute positive index from negative index provided
		
		//If the computed index is still less than 0, set it to 0 so that the array is searched from the first element.
		if(fromIndex < 0) {
			fromIndex = 0;
		}
	}

	//if fromIndex specified is out of bounds, return false 
	if (fromIndex >= this.length) {
		return false;
	}

	for (let i = fromIndex; i < this.length; i++) {
		// Returns true to caller if the current element value equals to the searchElement value
		if(this[i] === searchElement || (Number.isNaN(searchElement) && Number.isNaN(this[i])) ) {
			//Can't use the equality operators to compare NaN values so use the Number.isNaN() function to determine whether a value is NaN or not.
			//if the searchElement is NaN and the current element is a NaN, return true bc searchElement is found
			return true; 
		}
	}
	//if the for loop doesn't return true, it means the searchElement was not found in the array so return false
	return false; 
};

// TEST FOR myIncludes //
/*
const pets = ['cat', 'dog', 'bat'];

console.log("includes: ", pets.includes('cat'));
//expected output: true
console.log("myIncludes: ", pets.myIncludes('cat'));
//expected output: true

console.log("includes: ", pets.includes('at'));
//expected output: false
console.log("myIncludes: ", pets.myIncludes('at'));
// expected output: false

console.log("myIncludes: ", [1, 5, "hello", NaN, 10].myIncludes(NaN))
console.log("includes: ", [1, 5, "hello", NaN, 10].includes(NaN))
console.log("myIncludes: ", [1, 5, "hello", NaN, 10].myIncludes(5, -1))
console.log("includes: ", [1, 5, "hello", NaN, 10].includes(5, -1))
console.log("myIncludes: ", [1, 5, "hello", NaN, 10].myIncludes(5, -100))
console.log("includes: ", [1, 5, "hello", NaN, 10].includes(5, -100))
*/

// INDEXOF //
/*
Description: The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
@param searchElement - the element to locate in the array
@param fromIndex (optional) - The index to start the search at. 
	- If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched.
@return value - The first index of the element in the array; -1 if not found.
*/
Array.prototype.myIndexOf = function(searchElement, fromIndex) {
	//set fromIndex to default to 0 if no argument specified for it
	if(fromIndex === undefined) {
		fromIndex = 0;
	}
	//if value specified for fromIndex is negative, compute the corresponding positive index.
	else if (fromIndex < 0) { 
		fromIndex = this.length + fromIndex; //compute positive index from negative index provided
		
		//If the computed index is still less than 0, set it to 0 so that the array is searched from the first element.
		if(fromIndex < 0) {
			fromIndex = 0;
		}
	}	
	//if fromIndex specified is out of bounds, return -1 and the array will not be searched.
	if (fromIndex >= this.length) {
		return -1;
	}

	for(let i = fromIndex; i < this.length; i++) {
		//if the element at index i is the same as the searchElement, return index i
		if(this[i] === searchElement) {
			return i; 
		}
	}
	//if the for loop doesn't return to caller, that means the searchElement was not found in the array so return -1.
	return -1;
};

// TEST FOR myIndexOf //
/*
const array = [2, 9, 9];

console.log("indexOf: ", array.indexOf(2));     // 0
console.log("myIndexOf: ", array.myIndexOf(2));     // 0
console.log("indexOf: ", array.indexOf(9, 2));  //2
console.log("myIndexOf: ", array.myIndexOf(9, 2));  //2
console.log("indexOf: ", array.myIndexOf(9, -10)); //1 
console.log("myIndexOf: ", array.indexOf(9, -10)); //1
console.log("indexOf: ", array.indexOf(2, -3)); // 0
console.log("myIndexOf: ", array.myIndexOf(2, -3)); // 0
console.log("indexOf: ", array.indexOf(2, 6)); // -1 bc out of bounds
console.log("myIndexOf: ", array.myIndexOf(2, 6)); // -1 bc out of bounds
console.log("indexOf: ", array.indexOf(7));     // -1 
console.log("myIndexOf: ", array.myIndexOf(7));     // -1
*/

// PUSH //
/*
Description: The push() method adds one or more elements to the end of an array and returns the new length of the array.
@param elementN - The element(s) to add to the end of the array. Basically an array of element(s) to add to the caller array.
@return value - The new length property of the object upon which the method was called.
	- remember that the length property of an array object sets or returns the number of elements in that array
*/
Array.prototype.myPush = function(...elementN) {
	//Loops through elementN or the array of element(s) provided to add to the caller array object and adds each element 
	// one by one to the end of the caller array.
	for(let i = 0; i < elementN.length; i++) {
		this[this.length] = elementN[i]; //add the elements to add one by one to the end of the caller array object
		//this[this.length] accesses the end of the array where the new element is added.
		//the length property of the array automatically increments by 1 when a new element is added at the end of the array. 
	}
	return this.length; //return the length property of the caller array object
};

// TEST FOR myPush //
/*
console.log([1, 3,,4, 5].push(10, 11))   //prints 7
console.log([1, 3,,4, 5].myPush(10, 11))  //prints 7 
console.log([].push(1)) //prints 1
console.log([].myPush(1)) //prints 1
let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']
// Merge the second array into the first one
vegetables.myPush(...moreVegs);
console.log(vegetables)  // prints ['parsnip', 'potato', 'celery', 'beetroot']
*/

// LASTINDEXOF //
/*
Description: The lastIndexOf() method returns the last index at which a given element can be found in the array,
or -1 if it is not present. The array is searched backwards, starting at fromIndex.

@param searchElement - Element to locate in the array.
@param fromIndex (optional) - The index at which to start searching backwards. 
	- fromIndex defaults to the array's length minus one (arr.length - 1), i.e. the whole array will be searched.
	- If the index is greater than or equal to the length of the array, the whole array will be searched. 
	- If the index negative, it is taken as the offset from the end of the array.
	- If the calculated index is less than 0, -1 is returned, i.e. the array will not be searched.
@return value - The last index of the element in the array that matches the searchElement; -1 if not found.
*/
Array.prototype.myLastIndexOf = function(searchElement, fromIndex) {
	//If no argument is provided for fromIndex or if fromIndex provided is greater than or equal to the length of the array,
	// then the whole array must be searched, so set fromIndex to the index of the last element of the array.
	if (fromIndex === undefined || fromIndex >= this.length) {
		fromIndex = this.length - 1; //sets fromIndex to index of the last element in the array
	}
	//If a negative index value is provided for fromIndex, compute the positive index value from the negative index
	else if (fromIndex < 0) {
		fromIndex = this.length + fromIndex; 
		//if the computed index is still negative, return -1. The array will not be searched bc invalid index was provided
		if(fromIndex < 0) {
			return -1;
		}
	}
	//Search the array backwards, starting at fromIndex to index 0 of the array.
	for(let i = fromIndex; i >= 0; i --) {
		//If searchElement is located in the array at index i, that index is the last index at which that element can be found,
		// so return that index i. 
		if(this[i] === searchElement) {
			return i;			
		}
	}
	return -1; //if the searchElement is not found in the array, then return -1

};

// TEST FOR myLastIndexOf //
/*
const numbers = [2, 5, 9, 2];
console.log("lastIndexOf: ", numbers.lastIndexOf(2)); //3
console.log("myLastIndexOf: ", numbers.myLastIndexOf(2)); //3
console.log("lastIndexOf: ", numbers.lastIndexOf(7)); //-1 bc 7 is not in the array
console.log("myLastIndexOf: ", numbers.myLastIndexOf(7)); //-1
console.log("lastIndexOf: ", numbers.lastIndexOf(2, 2)); //0
console.log("myLastIndexOf: ", numbers.myLastIndexOf(2, 2)); //0
console.log("lastIndexOf: ", numbers.lastIndexOf(5, -2)); //1
console.log("myLastIndexOf: ", numbers.myLastIndexOf(5, -2)); //1
console.log("lastIndexOf: ", numbers.lastIndexOf(2, -10)); // -1 bc computed index still negative
console.log("myLastIndexOf: ", numbers.myLastIndexOf(2, -10)); // -1
*/

// KEYS //
/*
Description: The Object.keys() method returns an array of a given object's own enumerable property
names, iterated in the same order that a normal loop would. 

@param obj - The object of which the enumerable's own properties are to be returned.
@return value - An array of strings that represent all the enumerable properties of the given object.
*/
Object.grabKeys = function(obj) {
	let properties = []; //array to store property names or keys of the object

	//iterate over each property/key of the object obj
	for (const property in obj) {
		//check if the property belongs to the object obj by calling its hasOwnProperty() method. 
		//if the property belongs to the object obj, then this evaluates to true and the property is added to the array of properties.
		if (obj.hasOwnProperty(property)) {
			properties.push(property); //add property to the array properties
		}
	}
	return properties; //return the array with the keys of the object
};

// TEST FOR grabKeys //
/*
// book object
 let book = {title: "The Alchemist", author: "Paulo Coelho", pages: 163}
 console.log("keys: ", Object.keys(book))
 console.log("grabKeys: ", Object.grabKeys(book))

// simple array object
const arr = ['a', 'b', 'c'];
console.log("keys: ", Object.keys(arr)); // console: ['0', '1', '2']
console.log("grabKeys: ", Object.grabKeys(arr)); // console: ['0', '1', '2']
*/


// VALUES //
/*
Description: The Object.values() method returns an array of a given object's own enumerable property values, 
in the same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates 
properties in the prototype chain as well.)

@param obj - The object whose enumerable own property values are to be returned.
@return value - An array containing the given object's own enumerable property values.
*/
Object.grabValues = function(obj) {
	let values = []; //this array will store the values of the object
	//iterates over the properties of the object obj
	for (const property in obj) {
		//Check that the property is the object's own property bc we only want the object's own enumerable property values.
		if (obj.hasOwnProperty(property)) {
			values.push(obj[property]); //adds the value for the given property of the object to the array values
		}

	}
	return values;
};

// TEST FOR grabValues //
/*
// book object
 let book = {title: "The Alchemist", author: "Paulo Coelho", pages: 163}
 console.log("keys: ", Object.values(book)) // console: ['The Alchemist', 'Paulo Coelho', 163]
 console.log("grabKeys: ", Object.grabValues(book))

// simple array object
const arr = ['a', 'b', 'c'];
console.log("keys: ", Object.values(arr)); // console: ['a', 'b', 'c']
console.log("grabKeys: ", Object.grabValues(arr)); 
*/
