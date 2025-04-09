function reverseWords(sentence) {
    let words = sentence.split(' ');
    let reversed = words.reverse();
    return reversed.join(' ');
}

let sentence = 'I love programming';
let reversedWords = reverseWords(sentence);

console.log(reversedWords);
