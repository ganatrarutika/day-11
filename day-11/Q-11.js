
function countConsonants(input) {
    // Convert input string to lowercase
    const lowerCaseInput = input.toLowerCase();
    
    // Define a set of vowel characters
    const vowels = 'aeiou';
    
    // Initialize a counter for consonants
    let consonantCount = 0;
    
    // Iterate through each character in the string
    for (let char of lowerCaseInput) {
        // Check if the character is an alphabetic character and not a vowel
        if (char >= 'a' && char <= 'z' && !vowels.includes(char)) {
            consonantCount++;
        }
    }
    
    return consonantCount;
}

let testString = "Hello";
console.log(countConsonants(testString)); 
