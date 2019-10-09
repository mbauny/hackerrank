// https://www.hackerrank.com/challenges/birthday-cake-candles/

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
	const max = {
		value: ar[0],
		count: 0
	};

	ar.forEach(function(val, index) {
		switch (val) {
			case max.value:
				max.count += 1;
				break;
			default:
				if (val > max.value) {
					max.value = val;
					max.count = 1;
				}
				break;
		}
	});

	return max.count;
}
