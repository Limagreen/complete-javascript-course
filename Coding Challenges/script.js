"use strict";


/*** JS Fundamentals Part 2 ***/


/* Coding Challenge 1 */

// let markHigherBMI;

// // Test 1

// let markMass = 78; // mass is measured in kilograms
// let markHeight = 1.69; // height is measured in meters
// let markBMI = markMass / (markHeight ** 2); // BMI == mass / height^2

// let johnMass = 92;
// let johnHeight = 1.95
// let johnBMI = johnMass / (johnHeight ** 2);

// markHigherBMI = markBMI > johnBMI;
// console.log("Test 1:", markHigherBMI);

// // Test 2

// markMass = 95;
// markHeight = 1.88;
// markBMI = markMass / (markHeight ** 2);

// johnMass = 85;
// johnHeight = 1.76
// johnBMI = johnMass / (johnHeight ** 2);

// markHigherBMI = markBMI > johnBMI;
// console.log("Test 2:", markHigherBMI);


/* Coding Challenge 2 */

// // Test 1

// let markMass = 78; // mass is measured in kilograms
// let markHeight = 1.69; // height is measured in meters
// let markBMI = markMass / (markHeight ** 2); // BMI == mass / height^2

// let johnMass = 92;
// let johnHeight = 1.95
// let johnBMI = johnMass / (johnHeight ** 2);

// if (markBMI > johnBMI) console.log(`Test 1: Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// else console.log(`Test 1: John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);


// // Test 2

// markMass = 95;
// markHeight = 1.88;
// markBMI = markMass / (markHeight ** 2);

// johnMass = 85;
// johnHeight = 1.76
// johnBMI = johnMass / (johnHeight ** 2);

// if (markBMI > johnBMI) console.log(`Test 1: Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// else console.log(`Test 1: John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);


/* Coding Challenge 3 */

// // Test 1

// let dolphinsScores = [96, 108, 89];
// let koalasScores = [88, 91, 110];

// let dolphinsAvg = calculateAvg(dolphinsScores);
// let koalasAvg = calculateAvg(koalasScores);

// determineWinner(dolphinsAvg, koalasAvg);

// // Test 2

// dolphinsScores = [97, 112, 101];
// koalasScores = [109, 95, 123];

// dolphinsAvg = calculateAvg(dolphinsScores);
// koalasAvg = calculateAvg(koalasScores);

// determineWinner(dolphinsAvg, koalasAvg);

// // Test 3

// dolphinsScores = [97, 112, 101];
// koalasScores = [109, 95, 106];

// dolphinsAvg = calculateAvg(dolphinsScores);
// koalasAvg = calculateAvg(koalasScores);

// determineWinner(dolphinsAvg, koalasAvg);

// // Functions

// function calculateAvg(scores) {

//     let sum = 0;

//     scores.forEach(function (score) {
//         sum += score;
//     });

//     return sum / scores.length;
// }

// function determineWinner(dolphinsAvg, koalasAvg) {
//     if (dolphinsAvg > 100 && dolphinsAvg > koalasAvg) console.log(`The Dolphins win!`);

//     else if (koalasAvg > 100 && koalasAvg > dolphinsAvg) console.log(`The Koalas win!`);

//     else if (dolphinsAvg > 100 && koalasAvg > 100 && koalasAvg === dolphinsAvg) console.log(`The Dolphins and Koalas tied!`);

//     else console.log(`Neither team won.`);
// }


/* Coding Challenge 4 */

// // 1.

// // prompt returns a string, so I convert it to a number
// const bill = Number(prompt(`Enter bill value:`));
// const tip = bill >= 50 && bill <= 300 ? (bill * 0.15) : (bill * 0.20);

// // 2.

// console.log(`The bill was $${bill}, the tip was $${tip}, and the total value was $${bill + tip}.`);


/*** JS Fundamentals Part 2 ***/


/* Coding Challenge 1 */

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins >= avgKoalas * 2) console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);

//     else if (avgKoalas >= avgDolphins * 2) console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);

//     else console.log(`Neither team won.`);
// }

// // Test 1

// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);

// console.log(`(Test 1)`);
// checkWinner(avgDolphins, avgKoalas);

// // Test 2

// avgDolphins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);

// console.log(`(Test 2)`);
// checkWinner(avgDolphins, avgKoalas);


/* Coding Challenge 2 */

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Totals: ${totals}`);

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}