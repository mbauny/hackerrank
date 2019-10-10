// https://www.hackerrank.com/challenges/alternating-characters/

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
	let ref = s[0];
	let deletions = 0;
	for (let index = 1; index < s.length; index += 1) {
		switch (s[index]) {
			case ref:
				deletions += 1;
				break;
			default:
				ref = s[index];
				break;
		}
	}
	return deletions;
}
