package util

import "os"

func GetInput() string {
	file, err := os.ReadFile("input.txt")
	if err != nil {
		panic("no file found")
	}

	return string(file)
}
