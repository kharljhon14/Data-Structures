//Start by picking the second element of the array
//Now compare the second element with the one before it and swap if necessary
//Continue to the next element and if it is iin the incorrect order, iterate through the sorted portion
//Repeat until array is sorted

function insertionSort(array) {
  let j;
  //Loop through the unsorted array element 0 is the sorted array
  for (let i = 1; i < array.length; i++) {
    //Store the current element
    let currentValue = array[i];
    //Loop through the sorted array and check if the current value is less than the curren element
    for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      //Put the next element to the left of the array
      array[j + 1] = array[j];
    }
    //Change the value of the of the element
    array[j + 1] = currentValue;
  }

  return array;
}
//Time complexity On2 worst case

console.log(insertionSort([2, 3, 1, 0]));
