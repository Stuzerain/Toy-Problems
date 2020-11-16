// Given an array of non-negative integers, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Determine if you are able to reach the last index.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

var canJump = function(nums) {
  let previousIndex = null;
  let currentIndex = 0;

  while (previousIndex !== currentIndex) {
    let jump = nums[currentIndex];
    previousIndex = currentIndex;
    currentIndex = currentIndex + jump;

    if (currentIndex >= nums.length - 1) {
      return true;
    }
  }
  return false;
};

// canJump([2,3,1,1,4]) // true
// canJump([3,2,1,0,4]) // false
// canJump([1, 1, 1, 1, 1, 1, 1, 0]) // true
// canJump([1, 1, 1, 1, 1, 1, 1, 0, 0]) // false
// canJump([10, 0, 0, 0, 0, 0, 0, 0]) // true
// canJump([0, 10, 10, 10, 10]) // false