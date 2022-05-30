"use strict";


/*** JS Fundamentals Part 1 ***/


/* Assignment 1: Values and Variables */

// // create variables
// let country = "United States", continent = "North America";
// let population = 330149796;

// // display them on the console
// console.log("Assignment 1");
// console.log(country);
// console.log(continent);
// console.log(population);


/* Assignment 2: Data Types */

// // Variable creation
// let isIsland = false;
// let language; // purposefully left undefined

// // display data types on console
// console.log("Assignment 2");
// console.log("Country: " + typeof country);
// console.log("isIsland: " + typeof isIsland);
// console.log("Population: " + typeof population);
// console.log("Language: " + typeof language);


/* Assignment 3: Let, Const, and Var */

// // re-declare variables as const where applicable
// const country = "United States";
// const continent = "North America";
// const isIsland = false;
// let population = 330149796;
// const language = "English";


/* Assignment 4: Basic Operators */

// // 1.
// let population = 330149796;
// console.log(population / 2, "people would live in each half.");

// // 2.
// population++;
// console.log(population);

// // 3.
// const finlandPopulation = 6000000;
// console.log(population > finlandPopulation);

// // 4.
// const avgPopulation = 33000000;
// console.log(population > avgPopulation);

// // 5.
// const country = "United States";
// const continent = "North America";
// const language = "English";

// const description = "The " + country + " is in " + continent + ", and its " + population + " people speak " + language;
// console.log(description);


/* Assignment 5: Strings and Template Literals */

// const country = "United States";
// const continent = "North America";
// const population = 330149796;
// const language = "English";

// const description = `The ${country} is in ${continent}, and its ${population} people speak ${language}.`
// console.log(description);


/* Assignment 6: If-Else Statements */

// const country = "United States";
// const population = 330149796;

// if (population > 33000000) console.log(`The ${country}'s population is above average.`);
// else console.log(`${country}'s population is ${33000000 - population} below average.`);


/* Assignment 7: Type Conversion and Coercion */

// 1. Predictions
/*
'9' - '5' == 4;
'19' - '13' + '17' == '617';
'19' - '13' + 17 == 23;
'123' < 57 == false;
5 + 6 + '4' + 9 - 4 - 2 == 1143;
*/

// 2. Code
// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);


/* Assignment 8: Equality Operators == vs. === */

// // 1.
// const numNeighbors = prompt(`How many neighbor countries does your country have?`);

// // 2.
// if (numNeighbors == 1) console.log(`(Loose) Only 1 border!`);

// // 3.
// else if (numNeighbors > 1) console.log(`More than 1 border.`);

// // 4.
// else console.log(`No borders.`);

// // 6.
// if (numNeighbors === 1) console.log(`(Strict) Only 1 border!`);

// // 7.
// if (Number(numNeighbors) === 1) console.log(`(Strict, Manual Conversion) Only 1 border!`);


/* Assignment 9: Logical Operators */

// // 3. and 4.

// // based on the United States
// const country = `United States`;
// const speaksEnglish = true;
// const lessThan50Mil = false;
// const isIsland = false;

// if (speaksEnglish && lessThan50Mil && !isIsland) console.log(`You should live in ${country} :)`);

// else console.log(`${country} does not meet your criteria :(`);


/* Assignment 10: The Switch Statement */

// const language = prompt(`Enter your language:`).toLowerCase();

// switch (language) {

//     case `chinese`:
//     case `mandarin`:
//         console.log(`Greatest number of native speakers!`);
//         break;
//     case `spanish`:
//         console.log(`2nd-most native speakers.`);
//         break;
//     case `english`:
//         console.log(`3rd place`);
//         break;
//     case `hindi`:
//         console.log(`4th place`);
//         break;
//     case `arabic`:
//         console.log(`5th-most spoken language`);
//         break;
//     default:
//         console.log(`Great language too! :D`);
//         break;
// }


/* Assignment 11: The Conditional (Ternary) Operator */

// const country = "United States";
// const population = 330149796;

// population > 33000000 ? console.log(`${country}' population is above average.`) : console.log(`${country}'s population is below average.`);


/*** JS Fundamentals Part 2 ***/


/* Assignment 1: Functions */

// 1.

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
// }

// // 2.

// const country1 = describeCountry("The United States", "330", "Washington D.C.");
// const country2 = describeCountry("Finland", "6", "Helsinki");
// const country3 = describeCountry("Mexico", "10000", "Mexico City");

// console.log(country1);
// console.log(country2);
// console.log(country3);


/* Assignment 2: Function Declarations vs. Expressions */

// // 1.

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// // 3.

// const country1 = `(Declaration) The United States' population is ${percentageOfWorld1(330)}% of the world.`;
// const country2 = `(Declaration) China's population is ${percentageOfWorld1(1441)}% of the world.`;
// const country3 = `(Declaration) Finland's population is ${percentageOfWorld1(330)}% of the world.`;

// console.log(country1);
// console.log(country2);
// console.log(country3);

// // 4.

// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
// }

// console.log(`(Expression) The United States' population is ${percentageOfWorld2(330)}% of the world.`);
// console.log(`(Expression) China's population is ${percentageOfWorld2(1441)}% of the world.`);
// console.log(`(Expression) Finland's population is ${percentageOfWorld2(6)}% of the world.`);


/* Assignment 3: Arrow Functions */

// const percentageOfWorld3 = population => (population / 7900) * 100;

// const country1 = `The United States' population is ${percentageOfWorld3(330)}% of the world.`;
// const country2 = `China's population is ${percentageOfWorld3(1441)}% of the world.`;
// const country3 = `Finland's population is ${percentageOfWorld3(6)}% of the world.`;

// console.log(country1);
// console.log(country2);
// console.log(country3);


/* Assignment 4: Functions Calling Other Functions */

// // 3.

// console.log(describePopulation(`The United States`, 330));
// console.log(describePopulation(`China`, 1441));
// console.log(describePopulation(`Finland`, 6));


// // 1.

// function describePopulation(country, population) {
//     return `${country} has ${population} million people, which is is ${percentageOfWorld(population)}% of the world.`;
// }

// // 2.

// function percentageOfWorld(population) {
//     return (population / 7900) * 100;
// }


/* Assignment 5: Introduction to Arrays */

// // 1.

// const populations = [330, 1441, 6, 36];

// // 2.

// if (populations.length == 4) console.log(`Array has 4 elements`);

// // 3.

// const percentages = [percentageOfWorld(330), percentageOfWorld(1441), percentageOfWorld(6), percentageOfWorld(36)];

// console.log(percentages[0] + `%`);
// console.log(percentages[1] + `%`);
// console.log(percentages[2] + `%`);
// console.log(percentages[3] + `%`);

// function percentageOfWorld(population) {
//     return (population / 7900) * 100;
// }


/* Assignment 6: Basic Array Operations (Methods) */

// 1.

const neighbors = [`Canada`, `Mexico`];

// 2.

neighbors.push(`Utopia`);
console.log(neighbors);

// 3.

neighbors.pop();
console.log(neighbors);

//  4.

if (!neighbors.includes(`Germany`)) console.log(`Probably not a central European country :D`);

// 5.

const index = neighbors.indexOf(`Mexico`);

neighbors[index] = `Canadia`;
console.log(neighbors);