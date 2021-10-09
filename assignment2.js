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
