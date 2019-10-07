// https://www.hackerrank.com/challenges/plus-minus/

// Complete the plusMinus function below.
function plusMinus(arr) {
	const counts = {
		"+": 0,
		"-": 0,
		"0": 0
	};

	arr.forEach(element => {
		switch (element) {
			case 0:
				counts["0"]++;
				break;
			default:
				counts[element > 0 ? "+" : "-"]++;
				break;
		}
	});

	console.log(counts["+"] / arr.length);
	console.log(counts["-"] / arr.length);
	console.log(counts["0"] / arr.length);
}
