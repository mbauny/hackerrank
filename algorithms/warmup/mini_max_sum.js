// https://www.hackerrank.com/challenges/mini-max-sum/problem

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
	const modifiedArrays = new Array(arr.length);
	arr.forEach(function(value, index) {
		modifiedArrays[index] = [...arr];
		modifiedArrays[index].splice(index, 1);
	});

	const reducer = (accumulator, current) => accumulator + current;
	const sums = modifiedArrays.map(array => array.reduce(reducer, 0));

	console.log(`${Math.min(...sums)} ${Math.max(...sums)}`);
}
