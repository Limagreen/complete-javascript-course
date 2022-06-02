// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM:
/* We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error." */

// given array(s)
// const temperatures1 = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [3, 5, 1, 9, 0, 5, `error`, 11, 7, 13, 18, -7];

// 1. Understanding the problem

/*
1. We have been given the array, but should build this to handle any array

2. The array includes positive and negative values

3. The array includes strings to represent sensor errors. These should not be used in the calculation.

4. A temperature "amplitude" refers to the difference between the highest and lowest temperature in the same geographical area over a certain period of time.
- In this case, the amplitude would be the difference between the lowest and highest temperatures in our array
- We will need to account for negatives
*/

// 2. Breaking the problem down into sub-problems

/*
1. Read through the array and remove any non-number values
2. Search the array for the lowest value
3. Search the array for the highest value
4. Determine the difference between the lowest and highest value (amplitude)
*/

/******** JONAS' VERSION ********/

// keep in mind, Jonas was not worried about accounting for negative amplitudes

/* Problem 1 */

// console.log(calcAmplitude(temperatures));

// function calcAmplitude(temperatures) {

//     let lowest = temperatures[0];
//     let highest = temperatures[0];

//     // loop through and determine the highest and lowest values in the array
//     for (let i = 1; i < temperatures.length; i++) {

//         if (typeof temperatures[i] !== "number") continue; // ignore errors

//         if (lowest > temperatures[i]) lowest = temperatures[i];

//         if (highest < temperatures[i]) highest = temperatures[i];
//     }

//     return highest - lowest; // amplitude is the difference between highest and lowest
// }

/* Problem 2 */
// The function should now receive two arrays of temperatures

// 1. Understanding the problem
/*
1. With two arrays, we should merge both arrays into one
*/

// 2. Breaking the problem down into sub-problems

/*
1. Merge the two arrays (arrayObject.concat(array1, array2, ...) is a pre-built method for merging multiple arrays)
*/

// console.log(calcAmplitude(temperatures1, temperatures2));

// function calcAmplitude(temperatures1, temperatures2) {

//     // merge the two arrays given
//     const temperatures = temperatures1.concat(temperatures2);

//     let lowest = temperatures[0];
//     let highest = temperatures[0];

//     // loop through and determine the highest and lowest values in the array
//     for (let i = 1; i < temperatures.length; i++) {

//         if (typeof temperatures[i] !== "number") continue; // ignore errors

//         if (lowest > temperatures[i]) lowest = temperatures[i];

//         if (highest < temperatures[i]) highest = temperatures[i];
//     }

//     return highest - lowest; // amplitude is the difference between highest and lowest
// }

/******** MY VERSION (Problem 1 Only) ********/

// /*** CODE STARTS HERE ***/

// // filter the temperatures for non-errors
// const filteredTemperatures = removeNonNumbers(temperatures);

// // find the lowest and highest temperatures
// const lowestTemp = findLowest(filteredTemperatures);
// const highestTemp = findHighest(filteredTemperatures);


// // find the amplitude and print it to the console
// console.log(`The amplitude of today's temperatures is ${calcAmplitude(lowestTemp, highestTemp)}.`);

// /*** FUNCTIONS START HERE ***/

// // function to remove all non-numbers from an array
// function removeNonNumbers(array) {

//     const numbers = [];

//     // loop through the array, pushing only numbers to the numbers array
//     for (let i = 0; i < array.length; i++) {

//         // make sure it is a number and account for NaN (potential sensor error message)
//         if (typeof array[i] === 'number' && Number.isNaN(array[i]) === false) {
//             numbers.push(array[i]);
//         }
//     }

//     return numbers;

// } // end of removeNonNumbers()


// // function to find the lowest temperature
// function findLowest(array) {

//     let lowest = array[0];

//     // loop through, replacing lowest when it encounters a lower value
//     for (let i = 1; i < array.length; i++) {
//         if (lowest > array[i]) lowest = array[i];
//     }

//     return lowest;

// } // end of findLowest()


// // function to find the highest temperature
// function findHighest(array) {

//     let highest = array[0];

//     // loop through, replacing highest when it encounters a higher value
//     for (let i = 1; i < array.length; i++) {
//         if (highest < array[i]) highest = array[i];
//     }

//     return highest;

// } // end of findLowest()


// // function to calculate the amplitude
// function calcAmplitude(lowest, highest) {

//     // if both are negative, return the difference
//     if (lowest < 0 && highest < 0) {

//         return highest - lowest; // Ex: -5 -(-10) = -5 + 10 = 5

//         // if one is negative, return the sum of their absolute values
//     } else if (lowest < 0 || highest < 0) {

//         return Math.abs(highest) + Math.abs(lowest); // Ex: Math.abs(5) + Math.abs(-10) = 5 + 10 = 15

//         // they're both positive/zero, return the difference
//     } else {

//         return highest - lowest; // Ex: 10 - 0 = 10
//     }

// } // end of calcAmplitude()


/* Debugging with the Console and Breakpoints */

// console.log(celsiusToKelvin());

// // A) Identify the bug -> Our converted value is incorrect

// // B) Find the bug -> prompt() returns a String when we need a Number

// // C) Fix the bug -> Wrap our prompt() call inside a Number() call

// function celsiusToKelvin() {

//     const measurement = {
//         type: `temp`,
//         unit: `celsius`,
//         value: Number(prompt(`Enter the temperature (Degrees Celsius):`))
//     }

//     return measurement.value + 273;
// }


/* Coding Challenge 1 */

/*
Given an array of forcasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "...17°C in 1 days...21°C in 2 days...23°C in 3 days..."

Create a function 'printForecast' which takes in an array `arr` and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

console.log(printForecast(temps1));
console.log(printForecast(temps2));


function printForecast(arr) {

    let message = ``;

    for (let i = 0; i < arr.length; i++) {
        message += `${arr[i]}°C in ${i + 1} days...`;
    }

    return message;
}