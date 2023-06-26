/* from the given array find the largest number

create a function which takes an array as an input and returns the largest number present in that array.

const demoArray = [12, 35, 42, 44, 254, 224]

*/

// solution

const demoArray = [12, 35, 42, 44, 254, 224]

const findLargestNum = (arr) => {
  let largestNum = demoArray[0]

  for (let i = 0; i <= demoArray.length; i++) {
    if (demoArray[i] > largestNum) {
     largestNum = demoArray[i]
   }
  }

  return largestNum

}

console.log(findLargestNum(demoArray))
