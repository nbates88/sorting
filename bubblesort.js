function bubbleSort(arr) {
	
	var compCount = 0;
	var swapCount = 0;

	for (var i = 0; i < arr.length - 1; i++) {
		var swapFlag = false;
		compCount++;

		if (arr[i] > arr[i+1]) {
			var temp = arr[i+1];
			arr[i+1] = arr[i];
			arr[i] = temp;
			swapFlag = true;
			swapCount++;
		}
		if (swapFlag === false) return arr;
	}
	return arr;
}
