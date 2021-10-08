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

