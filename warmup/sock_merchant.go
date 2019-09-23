// https://www.hackerrank.com/challenges/sock-merchant/
package warmup

// Complete the sockMerchant function below.
func sockMerchant(n int32, ar []int32) int32 {
	var nbOfPairs int32 = 0
	pairs := make(map[int32]int32)

	for _, color := range ar {
		pairs[color]++

		if pairs[color]%2 == 0 {
			nbOfPairs++
		}
	}
	return nbOfPairs
}
