// class Solution {
//   // swap(arr, i, j) {
//   //   let temp = arr[i];
//   //   arr[i] = arr[j];
//   //   arr[j] = temp;
//   // }
//   SelectionSort(arr) {
//     if (!arr.length) {
//       return 'namit';
//     }
//     const l = arr.length;
//     for (let i = 1; i < l; i++) {
//       let temp = arr[i];
//       let j = i - 1;
//       while (arr[j] > temp && j >= 0) {
//         arr[j + 1] = arr[j];
//         j--
//         // arr[j]
//       }
//       arr[j + 1] = temp;
//     }
//     return arr;
//   }
// }

// const solutionClass = new Solution();
// console.log(solutionClass.SelectionSort([64, 25, 12, 22, 0]));




//filter class

function filterDublicateValue(){
  let arr=[2,3,2,4,5,5,2,4];
let result=[]; let obj={};
  for(let i=0;i<arr.length;i++){
if(obj[arr[i]]){
  continue;
}
else{
  result.push(arr[i]);
  obj[arr[i]]=true;
}
  }
  console.log(result)
}

filterDublicateValue()
