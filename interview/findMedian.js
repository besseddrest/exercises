// a, b already sorted
// a & b area all numbers

const a = [1,3,3,6,7];
const b = [2,5,8,8,9,9];

function findMedian(listA, listB) {
  const arrLength = listA.length + listB.length;
  const newArr = [];
  let aIndex = 0;
  let bIndex = 0;

  for ( let i = 0; i < arrLength; i++ ) {
    const ela = listA[aIndex];
    const elb = listB[bIndex];

    if (ela < elb) {
      newArr[i] = ela;
      aIndex++;
    } else {
      newArr[i] = elb;
      bIndex++;
    }
  }

  const length = newArr.length;

  if (length % 2 === 0) {
    // even
    let middle = newArr[(length/2)] + newArr[(length/2) - 1];

    return middle/2;
  } else {
    // odd
    return newArr[(length-1)/2];
  }
}

console.log(findMedian(a, b) === 6);
