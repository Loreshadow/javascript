let fruits = ['apple', 'orange', 'strawberry']
let food = ['burger', 'pizza', 'tiramisu']

function mergeArrays(fruits, food) {
    return ([...fruits, ...food])
} 

console.log(mergeArrays(fruits, food))