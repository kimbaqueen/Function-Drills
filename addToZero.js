/* 
Given an array of numbers, console.log True if any two numbers in the array add to zero, otherwise log False.

For example:

[1, 4, 11, 2, 37, -4] should log True because 4 and -4 add to 0.

[0, 21, 33, 6, 0, -9] should log True because 0 and 0 add to 0.

[0, 1, 2, 3, 4, 5] should log False because no two numbers add to 0. 
*/


// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below
function addToZero(array) {
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[i] + array[j] === 0) {
                return (true);
            } else {
                return (false);
            }
        }
    }
}

console.log(addToZero);