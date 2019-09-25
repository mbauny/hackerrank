// https://www.hackerrank.com/challenges/new-year-chaos
package arrays

import (
	"fmt"
)

// Complete the minimumBribes function below.
func minimumBribes(q []int32) {
	nbBribesPerPerson := make(map[int32]int)

	for swapped := true; swapped; {
		swapped = false

		for index := 1; index < len(q); index++ {
			previousPerson := q[index-1]
			currentPerson := q[index]

			if previousPerson > currentPerson {
				nbBribesPerPerson[previousPerson]++

				if nbBribesPerPerson[previousPerson] == 3 {
					// Reached max swapping already
					fmt.Println("Too chaotic")
					return
				}

				q[index] = previousPerson
				q[index-1] = currentPerson
				swapped = true
			}
		}
	}

	nbTotalBribes := 0
	for _, nbBribes := range nbBribesPerPerson {
		nbTotalBribes += nbBribes
	}
	fmt.Println(nbTotalBribes)
}
