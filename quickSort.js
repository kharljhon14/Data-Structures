//Pivot
//It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
//Grab the pivot from the start of the array can be the end or a random index
//Store the current pivot index in a variable (this will keep track of where the pivot should end up)
//Loop through the array from start until the end
//if the pivot is greater than the current element increment the pivot index variable and swap the current element with the element at the pivot index
//swap the starting element with the pivot index
//return the pivot index

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
   console.log(array);

   return spawnIndex;
}

console.log(pivot([5, 4, 10, 30, 2, 1]));
