//Start by picking the second element of the array
//Now compare the second element with the one before it and swap if necessary
//Continue to the next element and if it is iin the incorrect order, iterate through the sorted portion
//Repeat until array is sorted

function insertionSort(array) {
  let j;
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }

  return array;
}

//Time complexity On2 worst case
