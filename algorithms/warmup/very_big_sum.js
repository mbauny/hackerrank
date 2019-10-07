// https://www.hackerrank.com/challenges/a-very-big-sum/

// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
	return ar.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	);
}
