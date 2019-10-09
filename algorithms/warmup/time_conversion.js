// https://www.hackerrank.com/challenges/time-conversion

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
	/*
	 * Write your code here.
	 */
	let trimmedStr = s.slice(0, -2);
	const elements = trimmedStr.split(":");

	if (s.endsWith("PM")) {
		if (elements[0] !== "12") {
			const hours = Number(elements[0]);
			elements[0] = (hours + 12).toString();
		}
	} else if (elements[0] === "12") {
		elements[0] = "00";
	}

	return elements.join(":");
}
