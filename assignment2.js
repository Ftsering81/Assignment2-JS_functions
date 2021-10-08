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
		if(callbackFn(this[i], i, this)) { //callbackFn returns true if the elemnent at i passes the test
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