// https://www.hackerrank.com/challenges/ctci-making-anagrams

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
	const charCounts = {};

	for (const char of a) {
		if (charCounts[char]) {
			charCounts[char] += 1;
		} else {
			charCounts[char] = 1;
		}
	}
	for (const char of b) {
		if (charCounts[char]) {
			charCounts[char] -= 1;
		} else {
			charCounts[char] = -1;
		}
	}

	return Object.values(charCounts).reduce(
		(accu, val) => accu + Math.abs(val),
		0
	);
}
