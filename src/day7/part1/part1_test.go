package part1

import (
	"advent-of-code/src/util"
	"reflect"
	"strings"
	"testing"
)

func Test_getHand(t *testing.T) {
	type args struct {
		line string
	}
	tests := []struct {
		name string
		args args
		want hand
	}{
		{
			args: args{
				line: "32T3K 765",
			},
			want: hand{
				cards: "32T3K",
				bid:   765,
			},
		},
		{
			args: args{
				line: "T55J5 684",
			},
			want: hand{
				cards: "T55J5",
				bid:   684,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := getHand(tt.args.line); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("getHand() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_convertInputToMap(t *testing.T) {
	type args struct {
		input string
	}
	tests := []struct {
		name string
		args args
		want map[string]int
	}{
		{
			args: args{
				input: "23456",
			},
			want: map[string]int{
				"2": 1,
				"3": 1,
				"4": 1,
				"5": 1,
				"6": 1,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := convertInputToMap(tt.args.input); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("convertInputToMap() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_isFiveOfAKind(t *testing.T) {
	tests := getValuesForTypes(6)

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := isFiveOfAKind(tt.args.input); got != tt.want {
				t.Errorf("isFiveOfAKind() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_isFourOfAKind(t *testing.T) {
	tests := getValuesForTypes(5)

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := isFourOfAKind(tt.args.input); got != tt.want {
				t.Errorf("isFourOfAKind() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_isFullHouse(t *testing.T) {
	tests := getValuesForTypes(4)

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := isFullHouse(tt.args.input); got != tt.want {
				t.Errorf("isFullHouse() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_isThreeOfAKind(t *testing.T) {
	tests := getValuesForTypes(3)

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := isThreeOfAKind(tt.args.input); got != tt.want {
				t.Errorf("isThreeOfAKind() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_isTwoPair(t *testing.T) {
	tests := getValuesForTypes(2)

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := isTwoPair(tt.args.input); got != tt.want {
				t.Errorf("isTwoPair() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_isOnePair(t *testing.T) {
	tests := getValuesForTypes(1)

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := isOnePair(tt.args.input); got != tt.want {
				t.Errorf("isOnePair() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_isHighCard(t *testing.T) {
	tests := getValuesForTypes(0)

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := isHighCard(tt.args.input); got != tt.want {
				t.Errorf("isHighCard() = %v, want %v", got, tt.want)
			}
		})
	}
}

type valuesForTypesArgs struct {
	input map[string]int
}

type valuesForTypes struct {
	name string
	args valuesForTypesArgs
	want bool
}

func getValuesForTypes(index int) []valuesForTypes {
	return []valuesForTypes{
		{
			name: "",
			args: valuesForTypesArgs{
				input: map[string]int{
					"1": 1,
					"2": 1,
					"3": 1,
					"4": 1,
					"5": 1,
				},
			},
			want: index == 0,
		},
		{
			args: valuesForTypesArgs{
				input: map[string]int{
					"1": 1,
					"2": 2,
					"3": 1,
					"4": 1,
				},
			},
			want: index == 1,
		},
		{
			args: valuesForTypesArgs{
				input: map[string]int{
					"1": 1,
					"2": 2,
					"3": 2,
				},
			},
			want: index == 2,
		},
		{
			args: valuesForTypesArgs{
				input: map[string]int{
					"1": 1,
					"2": 1,
					"3": 3,
				},
			},
			want: index == 3,
		},
		{
			args: valuesForTypesArgs{
				input: map[string]int{
					"2": 2,
					"3": 3,
				},
			},
			want: index == 4,
		},
		{
			args: valuesForTypesArgs{
				input: map[string]int{
					"2": 1,
					"3": 4,
				},
			},
			want: index == 5,
		},
		{
			args: valuesForTypesArgs{
				input: map[string]int{
					"3": 5,
				},
			},
			want: index == 6,
		},
	}
}

func Test_getHandStrength(t *testing.T) {
	type args struct {
		hand hand
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{
			args: args{
				hand: hand{
					cards: "11111",
				},
			},
			want: 1,
		},
		{
			args: args{
				hand: hand{
					cards: "11114",
				},
			},
			want: 2,
		},
		{
			args: args{
				hand: hand{
					cards: "11222",
				},
			},
			want: 3,
		},
		{
			args: args{
				hand: hand{
					cards: "11124",
				},
			},
			want: 4,
		},
		{
			args: args{
				hand: hand{
					cards: "11224",
				},
			},
			want: 5,
		},
		{
			args: args{
				hand: hand{
					cards: "11234",
				},
			},
			want: 6,
		},
		{
			args: args{
				hand: hand{
					cards: "12345",
				},
			},
			want: 7,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := getHandStrength(tt.args.hand.cards); got != tt.want {
				t.Errorf("getHandStrength() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_getCharacterStrength(t *testing.T) {
	type args struct {
		character string
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{
			args: args{
				character: "A",
			},
			want: 14,
		},
		{
			args: args{
				character: "K",
			},
			want: 13,
		},
		{
			args: args{
				character: "Q",
			},
			want: 12,
		},
		{
			args: args{
				character: "J",
			},
			want: 11,
		},
		{
			args: args{
				character: "10",
			},
			want: 10,
		},
		{
			args: args{
				character: "9",
			},
			want: 9,
		},
		{
			args: args{
				character: "8",
			},
			want: 8,
		},
		{
			args: args{
				character: "7",
			},
			want: 7,
		},
		{
			args: args{
				character: "6",
			},
			want: 6,
		},
		{
			args: args{
				character: "5",
			},
			want: 5,
		},
		{
			args: args{
				character: "4",
			},
			want: 4,
		},
		{
			args: args{
				character: "3",
			},
			want: 3,
		},
		{
			args: args{
				character: "2",
			},
			want: 2,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := getCharacterStrength(tt.args.character); got != tt.want {
				t.Errorf("getCharacterStrength() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_checkFirstHandStrongerByCards(t *testing.T) {
	type args struct {
		firstHand  hand
		secondHand hand
	}
	tests := []struct {
		name string
		args args
		want bool
	}{
		{
			args: args{
				firstHand: hand{
					cards: "22223",
				},
				secondHand: hand{
					cards: "22222",
				},
			},
			want: true,
		},
		{
			args: args{
				firstHand: hand{
					cards: "22222",
				},
				secondHand: hand{
					cards: "22223",
				},
			},
			want: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := checkFirstHandStrongerByCards(tt.args.firstHand, tt.args.secondHand); got != tt.want {
				t.Errorf("checkFirstHandStrongerByCards() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_isFirstHandStronger(t *testing.T) {
	type args struct {
		firstHand  hand
		secondHand hand
	}
	tests := []struct {
		name string
		args args
		want bool
	}{
		{
			args: args{
				firstHand: hand{
					cards: "22333",
				},
				secondHand: hand{
					cards: "22223",
				},
			},
			want: true,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := isFirstHandStronger(tt.args.firstHand, tt.args.secondHand); got != tt.want {
				t.Errorf("isFirstHandStronger() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_calculateSum(t *testing.T) {
	type args struct {
		lines []string
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{
			args: args{
				lines: []string{
					"32T3K 765",
					"T55J5 684",
					"KK677 28",
					"KTJJT 220",
					"QQQJA 483",
				},
			},
			want: 6440,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := calculateSum(tt.args.lines); got != tt.want {
				t.Errorf("calculateSum() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_calculateSum_fromSiteInput(t *testing.T) {
	type args struct {
		lines []string
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{
			args: args{
				lines: strings.Split(util.GetInput(), "\n"),
			},
			want: 251121738,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := calculateSum(tt.args.lines); got != tt.want {
				t.Errorf("calculateSum() = %v, want %v", got, tt.want)
			}
		})
	}
}
