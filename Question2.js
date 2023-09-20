/*
Author: Shaghayegh Amouhossein
Date: September 14th 2023
Title: Question 2
*/

// creating function for storying data 
function func(arr) 
{
  // Initialize an array to store consecutive increasing numbers within
  var consecutives_arr = [[]];
  var j = 0; // Initialize an index for the consecutive sequences array
  var flag = false; // Initialize a flag to track consecutive elements

 
  
  // Loop through the input array
  for(var i=0;i<arr.length;i++)
  {
    // if the element is consecutive to the previous element
    if( ( i == arr.length-1 && arr[i] == arr[i-1]+1 ) || arr[i] == arr[i+1]-1)
    {
      // push the element to the array and set the flag to true
      var flag = true
      consecutives_arr[j].push(arr[i]);
    }
    else if(flag == true)
    {
      // if the flag is true, push the element to the array and increment the array index
      consecutives_arr[j].push(arr[i]);
      j++;
      consecutives_arr[j] = []; // Create a new empty array for the next sequence
      flag = false; // Reset the flag 
    }
  }

  consecutives_arr.sort( (a,b) => 
  { 
    // if the length of the arrays are equal, sort by sum else sort by length
    if(a.length == b.length)
    {
      return b.reduce( (a,b) => a+b ) - a.reduce( (a,b) => a+b );
    }
    else
    { 
       // Otherwise, sort by length
      return b.length - a.length;
    }
  });
   // If the first sequence is empty, return 0, otherwise return the sum of its elements
  if(consecutives_arr[0].length == 0)
  {
    return 0;
  }
  // return the sum of the first array
  return consecutives_arr[0].reduce( (a,b) => a+b );
}

// Test  with different input arrays and show results
console.log(func([1, 2, 3, 6, 9, 34, 2, 6]));
console.log(func([3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3]));
console.log(func([100, 101, 102, 3, 4, 5, 6, 9]));
console.log(func([3, 2, 1, 1, 1, 1, 1]));