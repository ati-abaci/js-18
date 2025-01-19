// ? Question-3: Write a function that simulates the filter function using a callback function:
// todo-1: Your function should take an array and a callback function as arguments.
// todo-2: It should return the result of filtering based on the callback.
// todo-3: In the callback function, check if the number is greater than 2.

const numbers = [1, 2, 3, 4, 5];
function simulateFilter(array, callback){
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]); 
        }
    }

  return result;
}

function callback(number) {
    return number > 2;
}

const greaterThan2Numbers = simulateFilter(numbers, callback);
console.log(greaterThan2Numbers); //>>> [3, 4, 5]
