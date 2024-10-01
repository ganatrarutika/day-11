
function reverseWords(sentence) {
    // Step 1: Split the sentence into an array of words
    let words = sentence.split(' ');

    // Step 2: Reverse the order of the words
    let reversedWords = words.reverse();

    // Step 3: Join the reversed words back into a sentence
    let reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

let sentence = "Hello world";
console.log(reverseWords(sentence)); 
