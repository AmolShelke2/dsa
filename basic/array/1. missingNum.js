// Find the missing number in a given integer array of 1 to 100
// Return: integer — the missing number in the array

const array = [1, 2, 3, 4, 5, 6, 7, 9, 10]

// create a function which takes an array as a input and returns the missing element between the classmarks
const missingNumber = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      return arr[i] + 1
    }
  }

  return false
}

console.log(missingNumber(array))
