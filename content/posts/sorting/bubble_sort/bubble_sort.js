function bubbleSort(arr) {
	const len = arr.length

	for (let i = 0; i < len; i++) {
		for (let j = len - 1; j > i; j--) {
			if (arr[j - 1] > arr[j]) {
				swap(arr, j, j - 1)
			}
		}
	}
}

// Helper function
function swap(array, i, j) {
	let temp = array[i]
	array[i] = array[j]
	array[j] = temp
}

/*
Time Complexity:
Best, worst and average case - О(n^2)

Space complexity - O(1)
*/

/* ---------------------------------------------------------------------------- */
const testCases = [
	[
		[5, 4, 3, 2, 1],
		[1, 2, 3, 4, 5],
	],
	[
		[5, 6, 1, 0, 6, 2],
		[0, 1, 2, 5, 6, 6],
	],
	[
		[-1, 6, 2, 100, 0, -11],
		[-11, -1, 0, 2, 6, 100],
	],
]

for (const test of testCases) {
	bubbleSort(test[0])
	console.log(JSON.stringify(test[0]) === JSON.stringify(test[1]))
}
