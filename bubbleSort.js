function bubbleSort(arr) {
   let noSpawp = true;
   for (let i = arr.length; i > 0; i--) {
       noSpawp = true;
      for (let j = 0; j < i - 1; j++) {
         console.log(arr, arr[j], arr[j + 1]);
         if (arr[j] > arr[j + 1]) {
            //Swap
            noSpawp = false;
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
         }
      }
      if (noSpawp) break;
   }
   return arr;
}

console.log(bubbleSort([1, 2, 3, 5, 8, 7]));
