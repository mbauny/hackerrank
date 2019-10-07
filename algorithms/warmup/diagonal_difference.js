// https://www.hackerrank.com/challenges/diagonal-difference

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
	const size = arr[0].length;

	let leftRightSum = 0;
	for (let i = 0; i < size; i++) {
		leftRightSum += arr[i][i];
	}

	let rightLeftSum = 0;
	for (let i = 0; i < size; i++) {
		rightLeftSum += arr[i][size - i - 1];
	}

	// Both sums could be computed in one pass.
	return Math.abs(leftRightSum - rightLeftSum);
}
