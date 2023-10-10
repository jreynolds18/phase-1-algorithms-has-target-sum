function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > target) {
      continue; 
    }
    let secondaryNumber = target - array[i];
    if (array.includes(secondaryNumber) && array.indexOf(secondaryNumber) !== i) {
      return true; 
    }
  }
  return false;
}

/* 
  Function definition = O(1)
    for loop iterates n times = O(n)
      checks this number if it is bigger than the target. One step. = O(1)
    secondaryNumber has a subtraction with predetermined numbers. = O(1)
    array.includes and array.indexOf both look through however many items are in the array. = O(n)

Total Big O Notation = O(n^2), or quadratic, since the loop iterates the array, then needs to iterate the array again to see if it includes the number. 
*/

/* 
  function hasTargetSum(array, target) {
    For loop, iterating the array
      if the current number is bigger than target number, skip it
    Make a secondary number subtracting the current number from it
    if the array contains that secondary number AND it is not the same number in the same index, return true
    if the array does not contain secondary, or if it is just the same index number, return false
  }
*/

/*
  Instead of adding several numbers to eachother, I iterated the array to where it subtracts the number from the target instead, then detects if that number is in the array, weeding out a second number that could be added to the current one in the array to make the target sum.

  The function is defined and takes an array and target number.
    Inside the function, a for loop for iterating the array.
    Since we have to make a sum that equals the target and no negative numbers are present, we skip numbers bigger than the target number.
    We define a variable that holds the total of the target number subtracting the current one in the array.
    If that total is equal to a number in the array and is not the same index in the array, it means that there are two numbers in the array that add up to the total.
    If the array does not, it does not contain two numbers that equal the total when added together.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

// Custom tests below
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 6, 4], 10));
}

module.exports = hasTargetSum;
