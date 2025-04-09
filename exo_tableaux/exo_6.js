const fruits = ['apple', 'banana', 'cherry', 'orange', 'cherry', 'cherry', 'strawberry'];

const count = {};
let maxFruit = null;
let maxCount = 0;

for (const fruit of fruits) {
    count[fruit] = (count[fruit] || 0) + 1;
  
    if (count[fruit] > maxCount) {
      maxCount = count[fruit];
      maxFruit = fruit;
    }
  }
  
  console.log(` "${maxFruit}" est le plus fréquent avec ${maxCount} apparition`);