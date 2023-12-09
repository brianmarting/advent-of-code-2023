package part2

import (
	"advent-of-code/src/util"
	"strings"
	"testing"
)

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
			want: 5905,
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
			want: 251421071,
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
