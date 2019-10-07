// https://www.hackerrank.com/challenges/staircase

// Complete the staircase function below.
function staircase(n) {
	for (let i = 0; i < n; i++) {
		const line = new Array(n);
		line.fill(" ");
		line.fill("#", n - i - 1, n);
		console.log(line.join(""));
	}
}
