/* Coding Challenge 1 */

let markHigherBMI;

// Test 1

let markMass = 78; // mass is measured in kilograms
let markHeight = 1.69; // height is measured in meters
let markBMI = markMass / (markHeight ** 2); // BMI == mass / height^2

let johnMass = 92;
let johnHeight = 1.95
let johnBMI = johnMass / (johnHeight ** 2);

markHigherBMI = markBMI > johnBMI;
console.log("Test 1:", markHigherBMI);

// Test 2

markMass = 95;
markHeight = 1.88;
markBMI = markMass / (markHeight ** 2);

johnMass = 85;
johnHeight = 1.76
johnBMI = johnMass / (johnHeight ** 2);

markHigherBMI = markBMI > johnBMI;
console.log("Test 2:", markHigherBMI);

