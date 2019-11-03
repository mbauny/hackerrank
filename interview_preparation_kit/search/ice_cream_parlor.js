// https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/

// Complete the whatFlavors function below.
function whatFlavors(cost, money) {
	const flavorIndexByPrice = {};
	for (let idx = 0; idx < cost.length; idx += 1) {
		const price = cost[idx];
		const complement = money - price;
		const complementIndex = flavorIndexByPrice[complement];
		if (complementIndex != undefined) {
			const min = Math.min(idx, complementIndex);
			const max = Math.max(idx, complementIndex);
			console.log(min + 1, max + 1);
		} else {
			flavorIndexByPrice[price] = idx;
		}
	}
}
