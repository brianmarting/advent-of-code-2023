package part1

import (
	"github.com/samber/lo"
	"strconv"
	"strings"
)

type race struct {
	duration       int
	recordDistance int
}

type boatDistance struct {
	durationHeldButton int
	distance           int
}

func calculateDistancesByTime(time int) []boatDistance {
	boatDistances := make([]boatDistance, 0)

	for i := 0; i <= time; i++ {
		speed := i

		boatDistances = append(boatDistances, boatDistance{
			durationHeldButton: i,
			distance:           speed * (time - i),
		})
	}

	return boatDistances
}

func calculateAmountOfWinsForRace(race race, boatDistances []boatDistance) int {
	sum := 0

	for _, boatDistance := range boatDistances {
		if boatDistance.distance > race.recordDistance {
			sum++
		}
	}

	return sum
}

func calculateSum(races []race) int {
	numbers := make([]int, 0)

	for _, race := range races {
		distances := calculateDistancesByTime(race.duration)
		amountOfWins := calculateAmountOfWinsForRace(race, distances)

		numbers = append(numbers, amountOfWins)
	}

	return lo.Reduce(numbers, func(prev int, curr int, _ int) int {
		return prev * curr
	}, 1)
}

func calculateSumForInput(input string) int {
	lines := strings.Split(input, "\n")

	times := getValuesFromLine(lines[0], "Time:")
	distances := getValuesFromLine(lines[1], "Distance:")

	races := make([]race, 0)

	for i, _ := range times {
		races = append(races, race{
			duration:       times[i],
			recordDistance: distances[i],
		})
	}

	return calculateSum(races)
}

func getValuesFromLine(line, name string) []int {
	lineSeparated := strings.Split(line, name)

	currentLine := lineSeparated[1]
	list := strings.Split(currentLine, " ")

	filteredList := lo.Filter(list, func(item string, index int) bool {
		return item != ""
	})

	return lo.Map(filteredList, func(item string, index int) int {
		number, _ := strconv.Atoi(item)
		return number
	})
}
