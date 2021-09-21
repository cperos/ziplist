function ziplist(arr1, arr2) {
  const arr3 = [];
  let j = 0;

  for (let i = 0; i < (arr1.length + arr2.length); i++) {
    arr3[i] = arr1[j];
    i++;
    arr3[i] = arr2[j];
    j++;
  }
  return (arr3);
}

const arr0 = [1, 5, 6];
const arrb = ['a', 'd', 'e'];

console.log(ziplist(arr0, arrb));

function ziplistTheSimpleWay(arr1, arr2) {
  let arr3 = [];
  arr3 = _.flatten(_.zip(arr1, arr2));
  return (arr3);
}

console.log(ziplistTheSimpleWay(arr0, arrb));
