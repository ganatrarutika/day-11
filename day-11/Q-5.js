function greetAll(names) {
    let greetings = [];
    for (let name of names) {
        let message = `Hello, ${name}!`;
        greetings.push(message);
    }
    return greetings;
}
let names = ['Alice', 'Bob', 'Charlie'];
let greetings = greetAll(names);
console.log(greetings);
 