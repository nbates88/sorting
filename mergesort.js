function split(arr)
{
	if(arr.length == 1)
	{
		return arr;
	}
	var midPoint = (arr.length/2);

	var firstArray = arr.slice(0, midPoint);
	var secondArray = arr.slice(midPoint);

	return [firstArray, secondArray];

}

function merge(arr1, arr2)
{
	//var shorterLength = Math.min(arr1.length, arr2.length);
	console.log("Array 1", arr1);
	console.log("Array 2", arr2);
	var returnArray = [];
	
	while(arr2.length > 0)
	{

		if(arr1[0] < arr2[0])
		{
			returnArray.push(arr1.shift());
		}
		else
		{
			returnArray.push(arr2.shift());
		}

	}

	if(arr1.length){
		returnArray.push(arr1.shift());
	}

	// if(arr2.length){
	// 	returnArray.push(arr2.shift());
	// }

	console.log("returned array", returnArray)
	return returnArray;
}

function mergeSort(arr)
{
	var splitArrays = split(arr);

	//console.log("Split arrays ", splitArrays);


	var firstHalf = splitArrays[0];
	var secondHalf = splitArrays[1];
	console.log("first half ", firstHalf)
	console.log("second half ", secondHalf)
	
	if(firstHalf.length == 1)
	{
		return firstHalf;
	}

	if(secondHalf.length == 1)
	{
		return secondHalf;
	}

	// console.log("Array number one ", firstHalf);
	// console.log("Array number two ", secondHalf);

	// if(firstHalf.length > 1){
	// 	mergeSort(firstHalf);
	// 	mergeSort(secondHalf);	
	// }

	// if(firstHalf.length > 1 && secondHalf.length > 1)
	// {

		
		var mergedArray = merge(mergeSort(firstHalf), mergeSort(secondHalf));
		//console.log("merged array", mergedArray)
		if(mergedArray.length != arr.length)
		{
			mergedArray = merge(firstHalf, secondHalf);
		}
		
		return mergedArray;
	    	
	// }

}