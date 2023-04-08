// let arr = [1, 2, 3, 4, 5];
// let arr2 = [-1, 1, -2, 2, -3, 3];
// let arr3 = [7, 8, 2, 6, 1, 10, 0];
// let arr4 = [2, 8, 2, 6, 1, 10, 0, 7, 18];
// let arr5 = [2, 8, 2, 6, 1, 10, 0, 7, 18, 15];

// console.log("-----------tow sum------------");

// let towsum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++)
//       if (nums[i] + nums[j] === target) {
//         return console.log(nums[i], "+", nums[j], "=", target);
//       }
//   }
// };

// towsum(arr, 3);

// console.log(
//   "---------filter negative, positive, and sum negative, sum positive---------"
// );

// let checkNegative = (nums) => {
//   return nums < 0;
// };

// let checkPositive = (nums) => {
//   return nums > 0;
// };

// let negative1 = arr2.filter(checkNegative);
// let negative2 = negative1.reduce((total, nums) => {
//   return total + nums;
// }, 0);

// let positive1 = arr2.filter(checkPositive);
// let positive2 = positive1.reduce((total, nums) => {
//   return total + nums;
// }, 0);

// console.log("negative arr: ", negative1);
// console.log("total arr negative: ", negative2);

// console.log("positive arr: ", positive1);
// console.log("total arr positive: ", positive2);

// console.log("------------------Sắp xếp nổi bọt (Bubble Sort)-----------------");

// let bubbleSort = (nums) => {
//   let x = 0;
//   let temp;
//   console.log("arr: ", arr3);
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length - i - 1; j++) {
//       if (nums[j] > nums[j + 1]) {
//         // [nums[j], nums[j + 1]] = [nums[j+1], nums[j]]
//         temp = nums[j];
//         nums[j] = nums[j + 1];
//         nums[j + 1] = temp;
//       }
//       console.log(
//         "Bubble Sort num " + x++,
//         ": ",
//         "Trao doi: ",
//         nums[j],
//         nums[j + 1],
//         nums
//       );
//     }
//   }
//   return nums;
// };

// bubbleSort(arr2);

// console.log(
//   "--------------------------------Sắp xếp chèn (Insertion Sort)----------------------"
// );

// let insertionSort = (nums) => {
//   let temp,
//     j,
//     x = 0;
//   for (let i = 0; i < nums.length; i++) {
//     temp = nums[i];
//     let j = i - 1;

//     for (j > 0; nums[j] > temp; j--) {
//       nums[j + 1] = nums[j];
//     }
//     nums[j + 1] = temp;
//     console.log("Insertion Sort " + x++, ": ", "Di chuyen: ", nums[j], nums);
//   }
// };

// insertionSort(arr3);

// console.log(
//   "------------------Sắp xếp chọn (Selection Sort)-------------------------------"
// );

// let seletionSort = (nums) => {
//   let i,
//     j,
//     temp,
//     min,
//     x = 0;
//   for (i = 0; i < nums.length - 1; i++) {
//     min = i;
//     for (j = i + 1; j < nums.length; j++) {
//       if (nums[j] < nums[min]) {
//         min = j;
//       }
//       temp = nums[i];
//       nums[i] = nums[min];
//       nums[min] = temp;
//     }
//     console.log("Selection Sort num: " + x++, "Di chuyen: ", nums[i], nums);
//   }
// };

// seletionSort(arr4);

// console.log("------------------------Merge Sort-------------------------");
// console.log(arr5.length);

// let merge = (left, right) => {
//   let arr = [];
//   while (left.length > 0 && right.length > 0) {
//     if (left[0] < right[0]) {
//       arr.push(left.shift());
//     } else {
//       arr.push(right.shift());
//     }
//   }
//   return [...arr, ...left, ...right];
// };

// let mergeSort = (nums) => {
//   let half = nums.length / 2;

//   if (nums.length < 2) {
//     return nums;
//   }

//   const left = nums.splice(0, half);
//   return merge(mergeSort(left), mergeSort(nums));
// };
// console.log(mergeSort(arr5));

// console.log(
//   "-----------------------Sắp xếp nhanh (Quick Sort)-------------------"
// );

// var items = [7, 2, 1, 8, 2, 0];
// function swap(items, leftIndex, rightIndex) {
//   var temp = items[leftIndex];
//   items[leftIndex] = items[rightIndex];
//   items[rightIndex] = temp;
// }
// function partition(items, left, right) {
//   var pivot = items[Math.floor((right + left) / 2)];
//   while (left <= right) {
//     while (items[left] < pivot) {
//       left++;
//     }
//     while (items[right] > pivot) {
//       right--;
//     }
//     if (left <= right) {
//       swap(items, left, right); //sawpping two elements
//       left++;
//       right--;
//     }
//   }
//   return left;
// }

// function quickSort(items, left, right) {
//   var index;
//   if (items.length > 1) {
//     index = partition(items, left, right); //index returned from partition
//     if (left < index - 1) {
//       //more elements on the left side of the pivot
//       quickSort(items, left, index - 1);
//     }
//     if (index < right) {
//       //more elements on the right side of the pivot
//       quickSort(items, index, right);
//     }
//   }
//   return items;
// }
// // first call to quick sort
// var sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray); //prints [2,3,5,6,7,9]

// console.log(
//   "==============================================================================================="
// );
// console.log(
//   "=========================Practice Using All Method In Javascript==============================="
// );
// console.log(
//   "==============================================================================================="
// );

// console.log("----------------Method Push-------------------");
// console.log("1. Using Push With Condisition If Else");
// let push1 = [12, 345, 345, 345123, 13];

// let pushMethod1 = (item, add) => {
//   let arrCopy = [...item];
//   console.log("Before: ", item);
//   if (add.length > 5) {
//     arrCopy.push(add);
//   } else {
//     console.log("Push Failed Because You must have limit 8 parameter");
//   }
//   console.log("Result: ", arrCopy);
// };

// pushMethod1(push1, "Anh Pham");

// console.log("2. Using Push With For Loop");
// let push2 = [2, 4, 1, 6];

// let pushMethod2 = (item) => {
//   let arrCopy = [...item];
//   let temp = 0;
//   for (let i = 0; i < item.length; i++) {
//     temp += item[i];
//   }
//   console.log(temp);
//   arrCopy.unshift(temp);
//   console.log(arrCopy);
// };

// pushMethod2(push2);

// console.log("3. Using Pop Method and Filter Method");
// let arrMerge = [34, 234, "66", "2134"];

// let filterMethod = (item, add) => {
//   let arrCopy = [...item];
//   console.log(arrCopy);
//   let result = arrCopy.filter((word) => word.length >= 2);
//   console.log(result);
//   result.shift();
//   console.log(result);
// };

// filterMethod(arrMerge);

// console.log("4. Using reduce find max and min in array");
// let arrFind = [12, 5, 32, 7, 34, 88, 12, 1];

// let findMaxAndMin = (item) => {
//   let arrCopy = [...item];
//   let max = arrCopy.reduce((init, current) =>
//     init > current ? init : current
//   );
//   let min = arrCopy.reduce((init, current) =>
//     init < current ? init : current
//   );
//   console.log("max: ", max, "min: ", min);
// };

// findMaxAndMin(arrFind);

// console.log("5. Using findIndex in array, if item in array this's even number");
// let arrFindIndex = [12, 5, 3, 0, 345, 3, 45, 9, 346];

// let evenIndex = (item => {
//   let arrCopy = [...item]
//   // for(let i = 0; i < arrCopy.length; i++) {
//   //   if(arrCopy[i] % 2 === 0) {
//   //     console.log(i)
//   //   }
//   // }

//   let result = arrCopy.findLast((item) => item % 2 !== 0 ? item : '')
//   console.log(result,'aasd')

// })(arrFindIndex)

// // couter
// console.log('couter')
// function createCouter() {
//   let couter = 0

//   function increase() {
//     return couter++
//   }

//   return increase
// }

// let couter1 = createCouter()
// console.log(couter1())
// console.log(couter1())

// (function getMonthName(mo) {
//   mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
//   const months = [
//     "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
//   ];
//   console.log(months[mo], mo)
//   if (months[mo]) {
//     return months[mo];
//   } else {
//     throw new Error("InvalidMonthNo"); // throw keyword is used here
//   }
// }
// )(12)
// try {
//   // statements to try
//   monthName = getMonthName(myMonth); // function could throw exception
// } catch (e) {
//   monthName = "unknown";
//   logMyErrors(e); // pass exception object to error handler (i.e. your own function)
// }


function countSelected(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const musicTypes = document.selectForm.musicTypes;
  console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
});
