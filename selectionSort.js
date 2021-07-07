function selectionSort(array) {
   //Store first emelent as the smallest value seen so far
   //Compare this item to the next item in the array until you find a smaller number
   //if a smaller number is found, designate that smaller number to be the new minimum and continue until the end of the array
   //if the minimum is not the value you initially began with, swap the two values
   //Repeat this with the next element until the array is sorted

   let minValue; //The first Index of the array

   for (let i = 0; i < array.length; i++) {
      minValue = i;
      for (let j = i + 1; j < array.length; j++) {
         if (array[j] < array[minValue]) {
            minValue = j;
         }
      }
      if (i !== minValue) {
         let temp = array[i];
         array[i] = array[minValue];
         array[minValue] = temp;
      }
   }

   return array;
}

console.log(selectionSort([4, 5, 6, 3, 21, 1]));
//Time complexity of selection sort is On2
