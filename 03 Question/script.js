function findLHS(nums) {
    const frequency = {};
    let longestSubsequence = 0;
  
    for (let num of nums) {
      frequency[num] = (frequency[num] || 0) + 1;
    }
  
    for (let num in frequency) {
      num = parseInt(num);
      if (frequency[num + 1]) {
        longestSubsequence = Math.max(
          longestSubsequence,
          frequency[num] + frequency[num + 1]
        );
      }
    }
  
    return longestSubsequence;
  }
  
  
  const nums = [1, 3, 2, 2, 5, 2, 3, 7];
  console.log(findLHS(nums))
  