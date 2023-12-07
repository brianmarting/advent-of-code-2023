package part2

import (
	"advent-of-code/src/util"
	"testing"
)

func Test_calculateSum(t *testing.T) {
	type args struct {
		race race
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{
			args: args{
				race: race{
					duration:       71530,
					recordDistance: 940200,
				},
			},
			want: 71503,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := calculateSum(tt.args.race); got != tt.want {
				t.Errorf("calculateSum() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_calculateSumForInput(t *testing.T) {
	type args struct {
		input string
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{
			args: args{
				input: util.GetInput(),
			},
			want: 45647654,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := calculateSumForInput(tt.args.input); got != tt.want {
				t.Errorf("calculateSumForInput() = %v, want %v", got, tt.want)
			}
		})
	}
}
