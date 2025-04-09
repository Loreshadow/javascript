function removeDuplicates(arr) {
    return [...new Set(arr)];
  }

const tableau = [1, 2, 2, 3, 4, 4, 5];
const sansDoublons = removeDuplicates(tableau);
console.log(sansDoublons); // [1, 2, 3, 4, 5]