//Merging arrays
//Create an empty array, take a look at the smallest values in each input array
//While there are still values we havent looked at
//If the value in the first array is smaller than the value of the seccond array
//push the value in the first array into our results and move on to the next value in the first array
//-----------------------------------------------------------------------------------
//If the value in the second array is smaller than the value of the first array
//push the value in the second array into our results and move on to the next value in the second array
//Once we exhaust one array, push in all ramaining values from the other array

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

  console.log(results);
}

merge([1, 2, 3], [4, 5, 6,32,45,78,122]);
