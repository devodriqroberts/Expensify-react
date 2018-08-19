

// Object Destructuring


// const person = {
//     name: 'Devodriq',
//     age: 24,
//     location: {
//         city: 'Atlanta',
//         temp: '80'
//     }
// };


// const {name, age} = person;


// console.log(`${name} is ${age}`)

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin',
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;
const {title} = book;

console.log(publisherName);
console.log(title);


// Array Destructuring


// const address = ['2307 Springhouse ln', 'Augusta', 'Georgia', '30907'];

// const [, city, state] = address;

// console.log(`You are in ${city}, ${state}.`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, smallPrice, medium, large] = item;

console.log(`A samll ${itemName} cost ${smallPrice}.`);
console.log(`A medium ${itemName} cost ${medium}.`);
console.log(`A large ${itemName} cost ${large}.`);