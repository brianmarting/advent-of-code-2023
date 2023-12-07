package part2

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

func calculateSum(race race) int {
	distances := calculateDistancesByTime(race.duration)

	return calculateAmountOfWinsForRace(race, distances)
}

func calculateSumForInput(input string) int {
	lines := strings.Split(input, "\n")

	times := getValuesFromLine(lines[0], "Time:")
	time, _ := strconv.Atoi(strings.Join(times, ""))
	distances := getValuesFromLine(lines[1], "Distance:")
	distance, _ := strconv.Atoi(strings.Join(distances, ""))

	race := race{
		duration:       time,
		recordDistance: distance,
	}

	return calculateSum(race)
}

func getValuesFromLine(line, name string) []string {
	lineSeparated := strings.Split(line, name)

	currentLine := lineSeparated[1]
	list := strings.Split(currentLine, " ")

	return lo.Filter(list, func(item string, index int) bool {
		return item != ""
	})
}
