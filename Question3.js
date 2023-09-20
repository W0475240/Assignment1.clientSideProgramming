/*
Author: Shaghayegh Amouhossein
Date: September 14th 2023
Title: Question 3
*/

// Define the date 
const myNextBirthday = new Date(2024, 1, 5, 0, 0, 0);

// write current date and time
const currentDate = new Date();

// Calculate the time difference
const differenceDate = myNextBirthday - currentDate;

// Calculate the remaining time 
// seconds
const SecRemain = Math.floor(differenceDate / 1000) % 60;
// minutes
const minRemain = Math.floor((differenceDate / (1000 * 60)) % 60);
// hour
const hoursRemain = Math.floor((differenceDate / (1000 * 60 * 60)) % 24);
// day
const daysRemain = Math.floor((differenceDate / (1000 * 60 * 60 * 24)) % 7);
// week
const weeksRemain = Math.floor(differenceDate / (1000 * 60 * 60 * 24 * 7));

// Output the remaining time 
console.log("there are " + weeksRemain + " weeks, " + daysRemain + " days, " + hoursRemain + " hours, " + minRemain + " minutes, and " + SecRemain + " seconds left until my next birthday");