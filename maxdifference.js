var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];
  // [7, 8, 4, 9, 9, 15, 3, 1, 10] would return `11` based on the difference between `4` and `15`
  // Notice: It is not `14` from the difference between `15` and `1` because 15 comes before 1.

  findLargestDifference(array);

  function findLargestDifference(array) {
    // If there is only one element, there is no difference
    if (array.length <= 1) return -1;

    // currentMin will keep track of the current lowest
    var currentMin = array[0];
    var currentMaxDifference = 0;

    // We will iterate through the array and keep track of the current max difference
    // If we find a greater max difference, we will set the current max difference to that variable
    // Keep track of the current min as we iterate through the array, since we know the greatest
    // difference is yield from `largest value in future` - `smallest value before it`

    for (var i = 1; i < array.length; i++) {
      if (array[i] > currentMin && (array[i] - currentMin > currentMaxDifference)) {
        currentMaxDifference = array[i] - currentMin;
        console.log("max",currentMaxDifference)
      } else if (array[i] <= currentMin) {
        currentMin = array[i];
        console.log("min",currentMin)
      }
    }

    // If negative or 0, there is no largest difference
    if (currentMaxDifference <= 0) return -1;

    return currentMaxDifference;
  }
console.log( findLargestDifference(array))
