// https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/

// Complete the whatFlavors function below.
function whatFlavors(cost, money) {
	const flavorIndexes = {};
	cost.forEach(function(id, index) {
		flavorIndexes[id] = index;
	});

	const size = cost.length;
	for (let priceIndex = 0; priceIndex < size; priceIndex += 1) {
		const complement = money - cost[priceIndex];
		if (flavorIndexes[complement]) {
			const complementIndex = flavorIndexes[complement];
			const min = Math.min(priceIndex, complementIndex);
			const max = Math.max(priceIndex, complementIndex);
			console.log(min + 1, max + 1);
			return;
		}
	}
}
