const fruits = ['apple', 'banana', 'cherry', 'orange', 'cherry', 'cherry', 'strawberry'];
const occ = [];

for ( const n of fruits) {
    occ[n] = occ[n] ? occ[n] + 1 : 1;
} 
console.log(occ['cherry']);