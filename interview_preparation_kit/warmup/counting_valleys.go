// https://www.hackerrank.com/challenges/counting-valleys
package warmup

// Complete the countingValleys function below.
func countingValleys(n int32, s string) int32 {
	seaLevel := 0
	currentLevel := seaLevel
	var nbValleys int32 = 0

	for _, step := range s {
		switch step {
		case 'U':
			currentLevel++
		case 'D':
			if currentLevel == seaLevel {
				nbValleys++
			}
			currentLevel--
		}
	}

	return nbValleys
}
