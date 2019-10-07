// https://www.hackerrank.com/challenges/2d-array
package arrays

func singleHourglassSum(line, col int, arr [][]int32) int32 {
	sum := arr[line][col]
	sum += arr[line][col+1]
	sum += arr[line][col+2]

	sum += arr[line+1][col+1]

	sum += arr[line+2][col]
	sum += arr[line+2][col+1]
	sum += arr[line+2][col+2]

	return sum
}

// Complete the hourglassSum function below.
func hourglassSum(arr [][]int32) int32 {
	var maxSum int32 = -63 // the lowest sum possible

	for line := 0; line <= 3; line++ {
		for col := 0; col <= 3; col++ {
			sum := singleHourglassSum(line, col, arr)
			if sum > maxSum {
				maxSum = sum
			}
		}
	}

	return maxSum
}
