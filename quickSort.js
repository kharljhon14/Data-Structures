//Pivot
//It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
//Grab the pivot from the start of the array can be the end or a random index
//Store the current pivot index in a variable (this will keep track of where the pivot should end up)
//Loop through the array from start until the end
//if the pivot is greater than the current element increment the pivot index variable and swap the current element with the element at the pivot index
//swap the starting element with the pivot index
//return the pivot index
//-------------------------------------------------------------------
//Call the pivot helper on the array
//When the helper returns to you the updated pivot inde, recursively call the pivot helper on the subarray to the left of the index, and the subarray to the right of that index
//Base case occurs when you consider a subarray with less than 2 elements

function pivot(array, start = 0, end = array.length + 1) {
   function swap(array, i, j) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
   }

   let pivot = array[start];
   let spawnIndex = start;

   for (let i = start + 1; i < array.length; i++) {
      if (pivot > array[i]) {
         spawnIndex++;
         swap(array, spawnIndex, i);
      }
   }

   swap(array, start, spawnIndex);
   return spawnIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
   if (left < right) {
      let pivotIndex = pivot(array, left, right);

      //Left side of the array
      quickSort(array, left, pivotIndex - 1);

      //Right side of the array
      quickSort(array, pivotIndex + 1, right);
   }
   return array;
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
