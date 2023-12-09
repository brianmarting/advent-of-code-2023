package part1

import (
	"advent-of-code/src/util"
	"github.com/samber/lo"
	"sort"
	"strconv"
	"strings"
)

type hand struct {
	cards    string
	bid      int
	strength int
}

func calculateSum(lines []string) int {
	hands := lo.Map(lines, func(item string, index int) hand {
		return getHand(item)
	})

	sort.Slice(hands, func(i, j int) bool {
		return !isFirstHandStronger(hands[i], hands[j])
	})

	sum := 0
	for index, hand := range hands {
		number := index + 1

		sum += number * hand.bid
	}

	return sum
}

func isFirstHandStronger(firstHand, secondHand hand) bool {
	firstHandStrength := firstHand.strength
	secondHandStrength := secondHand.strength

	if firstHandStrength < secondHandStrength {
		return true
	}

	if firstHandStrength > secondHandStrength {
		return false
	}

	return checkFirstHandStrongerByCards(firstHand, secondHand)
}

func checkFirstHandStrongerByCards(firstHand, secondHand hand) bool {
	firstHandCharacters := strings.Split(firstHand.cards, "")
	secondHandCharacters := strings.Split(secondHand.cards, "")

	for index, firstHandCharacter := range firstHandCharacters {
		secondHandCharacter := secondHandCharacters[index]

		firstCharacterStrength := getCharacterStrength(firstHandCharacter)
		secondCharacterStrength := getCharacterStrength(secondHandCharacter)

		if firstCharacterStrength > secondCharacterStrength {
			return true
		}

		if firstCharacterStrength < secondCharacterStrength {
			return false
		}
	}

	return false
}

func getCharacterStrength(character string) int {
	if util.IsNumber(character) {
		number, _ := strconv.Atoi(character)
		return number
	}

	switch character {
	case "A":
		return 14
	case "K":
		return 13
	case "Q":
		return 12
	case "J":
		return 11
	case "T":
		return 10
	}
	return 0
}

func getHandStrength(cards string) int {
	handMap := convertInputToMap(cards)

	if isFiveOfAKind(handMap) {
		return 1
	}

	if isFourOfAKind(handMap) {
		return 2
	}

	if isFullHouse(handMap) {
		return 3
	}

	if isThreeOfAKind(handMap) {
		return 4
	}

	if isTwoPair(handMap) {
		return 5
	}

	if isOnePair(handMap) {
		return 6
	}

	return 7
}

func getHand(line string) hand {
	inputs := strings.Split(line, " ")

	bid, _ := strconv.Atoi(inputs[1])
	return hand{
		cards:    inputs[0],
		bid:      bid,
		strength: getHandStrength(inputs[0]),
	}
}

func convertInputToMap(input string) map[string]int {
	list := strings.Split(input, "")

	charMap := map[string]int{}

	for _, character := range list {
		charMap[character]++
	}

	return charMap
}

func isFiveOfAKind(input map[string]int) bool {
	return isXOfAKind(input, 5)
}

func isFourOfAKind(input map[string]int) bool {
	return isXOfAKind(input, 4)
}

func isFullHouse(input map[string]int) bool {
	if len(input) != 2 {
		return false
	}

	hasTwo, hasThree := false, false
	for _, value := range input {
		if value == 2 {
			hasTwo = true
		}

		if value == 3 {
			hasThree = true
		}
	}

	return hasTwo && hasThree
}

func isThreeOfAKind(input map[string]int) bool {
	return isXOfAKind(input, 3)
}

func isTwoPair(input map[string]int) bool {
	sum := 0

	for _, value := range input {
		if value == 2 {
			sum++
		}
	}

	return sum == 2
}

func isOnePair(input map[string]int) bool {
	return isXOfAKind(input, 2)
}

func isXOfAKind(input map[string]int, amount int) bool {
	for _, value := range input {
		if value == amount && len(input) == 5-amount+1 {
			return true
		}
	}

	return false
}

func isHighCard(input map[string]int) bool {
	return len(input) == 5
}
