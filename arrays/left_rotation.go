// https://www.hackerrank.com/challenges/ctci-array-left-rotation
package arrays

// Complete the rotLeft function below.
func rotLeft(a []int32, d int32) []int32 {
	rotatedA := a

	for rotCount := int32(0); rotCount < d; rotCount++ {
		firstElement := rotatedA[0]
		for index := 0; index < len(rotatedA)-1; index++ {
			rotatedA[index] = rotatedA[index+1]
		}
		rotatedA[len(rotatedA)-1] = firstElement
	}
	return rotatedA
}
