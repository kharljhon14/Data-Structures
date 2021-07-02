//Merging arrays
//Create an empty array, take a look at the smallest values in each input array
//While there are still values we havent looked at
//If the value in the first array is smaller than the value of the seccond array
//push the value in the first array into our results and move on to the next value in the first array
//-----------------------------------------------------------------------------------
//If the value in the second array is smaller than the value of the first array
//push the value in the second array into our results and move on to the next value in the second array
//Once we exhaust one array, push in all ramaining values from the other array

//Break up the array into halves until you have arrays that are empty or have one elemet
//Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
//Once the array has been merged back together return the merged and sorted array

function merge(array1, array2) {
   let results = [];
   let i = 0;
   let j = 0;
   while (i < array1.length && j < array2.length) {
      if (array1[i] < array2[j]) {
         results.push(array1[i]);
         i++;
      } else {
         results.push(array2[j]);
         j++;
      }
   }
   while (i < array1.length) {
      results.push(array1[i]);
      i++;
   }
   while (j < array2.length) {
      results.push(array2[j]);
      j++;
   }

   return results;
}

function mergeSort(array) {
   if (array.length <= 1) return array;
   let mid = Math.floor(array.length / 2);
   let left = mergeSort(array.slice(0, mid));
   let right = mergeSort(array.slice(mid));
   console.log(left, right);
   return merge(left, right);
}

console.log(mergeSort([14, 2, 1, 0, 32, 54]));
