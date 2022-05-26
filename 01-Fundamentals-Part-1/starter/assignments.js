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

// 1.
const numNeighbors = prompt(`How many neighbor countries does your country have?`);

// 2.
if (numNeighbors == 1) console.log(`(Loose) Only 1 border!`);

// 3.
else if (numNeighbors >= 1) console.log(`More than 1 border.`);

// 4.
else console.log(`No borders.`);

// 6. 
if (numNeighbors === 1) console.log(`(Strict) Only 1 border!`);

// 7.
if (Number(numNeighbors) === 1) console.log(`(Strict, Manual Conversion) Only 1 border!`);