var twoSum = function (nums, target) {
  let newTarg = [];
  for (let i = 0; i < nums.length; i++) {
    nums.map((num, index) => {
      if (num + nums[i] === target) {
        if (i === index) {
          return
        } else {
          newTarg.push(i, index)
        }
      }
    })
  }
  let result = [... new Set(newTarg)];
  return result;
};
