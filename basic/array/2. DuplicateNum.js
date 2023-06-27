// Find Duplicate number in the array.

const duplicateArray = [1, 2, 3, 4, 5, 6, 5, 7, 8]

function findDuplicate(arr) {
  const observed = {}

  for (let i = 0; i < arr.length; i++) {
    if (observed[arr[i]]) {
      return arr[i]
    } else {
      observed[arr[i]] = arr[i]
    }

  }
   return false
}

console.log(findDuplicate(duplicateArray))