package part1

import (
	"advent-of-code/src/util"
	"reflect"
	"testing"
)

func Test_calculateDistancesByTime(t *testing.T) {
	type args struct {
		time int
	}
	tests := []struct {
		name string
		args args
		want []boatDistance
	}{
		{
			args: args{
				time: 7,
			},
			want: []boatDistance{
				{
					durationHeldButton: 0,
					distance:           0,
				},
				{
					durationHeldButton: 1,
					distance:           6,
				},
				{
					durationHeldButton: 2,
					distance:           10,
				},
				{
					durationHeldButton: 3,
					distance:           12,
				},
				{
					durationHeldButton: 4,
					distance:           12,
				},
				{
					durationHeldButton: 5,
					distance:           10,
				},
				{
					durationHeldButton: 6,
					distance:           6,
				},
				{
					durationHeldButton: 7,
					distance:           0,
				},
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := calculateDistancesByTime(tt.args.time); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("calculateDistancesByTime() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_calculateAmountOfWinsForRace(t *testing.T) {
	type args struct {
		race      race
		distances []boatDistance
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{
			args: args{
				distances: calculateDistancesByTime(7),
				race: race{
					duration:       7,
					recordDistance: 9,
				},
			},
			want: 4,
		},
		{
			args: args{
				distances: calculateDistancesByTime(15),
				race: race{
					duration:       15,
					recordDistance: 40,
				},
			},
			want: 8,
		},
		{
			args: args{
				distances: calculateDistancesByTime(30),
				race: race{
					duration:       30,
					recordDistance: 200,
				},
			},
			want: 9,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := calculateAmountOfWinsForRace(tt.args.race, tt.args.distances); got != tt.want {
				t.Errorf("calculateAmountOfWinsForRace() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Test_calculateSum(t *testing.T) {
	type args struct {
		races []race
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{
			args: args{
				races: []race{
					{
						duration:       7,
						recordDistance: 9,
					},
					{
						duration:       15,
						recordDistance: 40,
					},
					{
						duration:       30,
						recordDistance: 200,
					},
				},
			},
			want: 288,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := calculateSum(tt.args.races); got != tt.want {
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
			want: 316800,
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
