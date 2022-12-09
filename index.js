//function hasTargetSum(array, target) {

  // Write your algorithm here


function hasTargetSum(array, target) {
  for(let i = 0; i<array.length; i++){
    const complementary = target-array[i];
    for(let j= i+1; j<array.length; j++){
      if(array[j] ===complementary)return true;

   }
  }
   return false;
}

// Write your algorithm here
/*
//The function should return true if any pair of numbers in the array adds up to the target number.
/*
  Write the Big O time complexity of your function here
*/

/*
  Add your pseudocode here
*/ return true if any pair of numbers in the array adds up to the target number
    else return false if no two numbers in the array adds up to the target
/*
  Add written explanation of your solution here
*/iterate over the array of numbers to check if any 2 numbers add upto the target
for instance, if our number is 7 and target is 15, the complementary number is 8
iterate over the remaining numbers in the array to check for any other complements
return true if there are complements else return false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
