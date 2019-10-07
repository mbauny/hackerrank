// https://www.hackerrank.com/challenges/jumping-on-the-clouds
package warmup

// Complete the jumpingOnClouds function below.
func jumpingOnClouds(c []int32) int32 {
	var nbJumps int32 = 0
	var current int32 = 0
	lastIndex := int32(len(c) - 1)
	for current <= lastIndex {
		switch current {
		case lastIndex:
			return nbJumps
		case lastIndex - 1:
			return nbJumps + 1
		default:
			if c[current+2] == 0 {
				current += 2
			} else {
				current++
			}
			nbJumps++
		}
	}
	return nbJumps
}
