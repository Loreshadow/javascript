

function isSorted() {

    for ( let i =0; i < Array.length - 1; i++) {
        if (arr[i] > arr [i + 1 ]) {
            return false;
        }
        return true;
    }
}

let fruits = ['banana', 'orange', 'apple']
console.log(isSorted(fruits))