/*
Author: Shaghayegh Amouhossein
Date: September 14th 2023
Title: Question 4
*/


// Function for checking prime number
function prime(number) 
{
  // check if the number is 1 or less than 1 that are not prime numbers
  if (number <= 1) 
  {
    return false;
  }
  // check if the number is 2 or 3 because these are primes
  if (number <= 3) 
  {
    return true;
  }

  // check if numbers would be divided by 2 or 3, if yes they wont be prime
  if (number % 2 === 0 || number % 3 === 0) 
  {
    return false;
  }

  let i = 5;

  //  while loop for checking prime candidates
  while (i * i <= number) 
  {
    if (number % i === 0 || number % (i + 2) === 0) 
    {
      return false;
    }

    // adding i to 6 for checking prime candidates
    i += 6;
  }

  // if we could not find above condition then the number will be considered prime
  return true;
}

