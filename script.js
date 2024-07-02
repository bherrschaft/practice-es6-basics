// Step 1: Create two arrays of numbers
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];

// Step 2: Use the spread operator to create a combined array
const numbers = [...numbers1, ...numbers2];

// Step 3: Define an arrow function to square a number
const square = num => num * num;

// Step 4: Use map to create an array of squares
const squares = numbers.map(square);

// Step 5: Define an arrow function to check if a number is even
const isEven = num => num % 2 === 0;

// Step 6: Use filter to create an array of even squares
const evenSquares = squares.filter(isEven);

// Step 7: Use destructuring to extract the first two even squares
const [firstEvenSquare, secondEvenSquare] = evenSquares;

// Step 8: Use template literals to log the arrays and values
console.log(`Original numbers array: ${numbers}`);
console.log(`Squares array: ${squares}`);
console.log(`Even squares array: ${evenSquares}`);
console.log(`First even square: ${firstEvenSquare}`);
console.log(`Second even square: ${secondEvenSquare}`);
