package util

import "regexp"

func FindMax(arr []int) int {
	max := arr[0]
	for i := 1; i < len(arr); i++ {
		if arr[i] > max {
			max = arr[i]
		}
	}
	return max
}

func IsNumber(input string) bool {
	return regexp.MustCompile(`\d`).MatchString(input)
}
