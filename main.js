
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

let answer = document.getElementById('root');
let h1 = document.createElement('h1')

const arr1 = ["ab", "c"];
const arr2 = ["a", "bc"];

var arrayStringsAreEqual = function (word1, word2) {
  var arr1 = word1.join('');
  var arr2 = word2.join('');
  if (arr1 === arr2) {
    return true;
  }
  return false
};

h1.innerText = arrayStringsAreEqual(arr1, arr2)

answer.append(h1);

