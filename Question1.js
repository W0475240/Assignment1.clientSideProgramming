/*
Author: Shaghayegh Amouhossein
Date: September 14th 2023
Title: Question 1
*/

// creating function
function func(inputString) 
{
    // Convert the string to lower case for case-insensitive comparison
    const lowerCaseString = inputString.toLowerCase();

    // if the first and last characters of the input string are the same 
    if (lowerCaseString.charAt[0] === lowerCaseString.charAt[inputString.length - 1]) 
    { 
      
      // If they are the same, reverse the string and return it
      return inputString.split('').reverse().join('');
    }
     
    else 
    {  
      // If they are different, delet the first and last charachter
      // return the modified string
      return inputString.slice(1, -1);
    }
}
 // Adding example and inputs
 const input1 = "Triscuit";
 const input2 = "Cracker";
 const input3 = "google";
 const input4 = "Shaghayegh";

// getting output
console.log(func(input1));
console.log(func(input2));
console.log(func(input3));
console.log(func(input4));


  



  