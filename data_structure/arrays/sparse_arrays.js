// https://www.hackerrank.com/challenges/sparse-arrays

// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {
	const counts = {};
	for (let string of strings) {
		if (counts[string]) {
			counts[string] += 1;
		} else {
			counts[string] = 1;
		}
	}

	return queries.map(query => (counts[query] ? counts[query] : 0));
}
