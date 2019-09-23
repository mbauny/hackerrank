// https://www.hackerrank.com/challenges/repeated-string
package warmup

import "strings"

// Complete the repeatedString function below.
func repeatedString(s string, n int64) int64 {
	numberOfAsInS := int64(strings.Count(s, "a"))
	repeat := n / int64(len(s))
	exceed := n % int64(len(s))

	if exceed == 0 {
		return repeat * numberOfAsInS
	}

	truncatedS := string(s[0:exceed])
	numberOfAsInTruncatedS := int64(strings.Count(truncatedS, "a"))
	return repeat*numberOfAsInS + numberOfAsInTruncatedS
}
