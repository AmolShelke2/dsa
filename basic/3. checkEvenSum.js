/*
You are given two numbers, stored in variables with the following names 

max, min

You have to find the sum of all even numbers that fall between two numbers from min
 to max(including both min and max)

 for example, if the value stored in max = 19, and the value stored in min = 14,
 then the output will be computed as follows

 sum of even = 14 + 16 + 18 = 48

*/

// solution

function evenCollection(max, min) {
  let sum = 0

  for (let i = min; i <= max; i++) {
    if (i % 2 == 0) {
      sum = sum + i
    }

    console.log(sum)
  }
}

evenCollection(19, 14)
