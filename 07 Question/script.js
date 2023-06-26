function isMonotonic(nums){
    var increasing = true;
  var decreasing = true;

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      decreasing = false;
    } else if (nums[i] < nums[i - 1]) {
      increasing = false;
    }
  }

  return increasing || decreasing;
}
const nums = [1,2,2,3];
console.log(isMonotonic(nums));