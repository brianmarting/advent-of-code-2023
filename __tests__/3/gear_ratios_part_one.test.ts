import {
    calculateSum,
    gatherSymbols,
    GearRatioNumber,
    GearRatioSymbol,
    isInRange
} from '../../src/3/gear_ratios_part_one';
import { getInput } from "../util/input_util";

describe('Gear ratios part one', () => {

    it('should gather symbols', () => {
        const input = [
            '467..114..',
            '...*......',
            '..35..633.',
            '......#...',
            '617*......',
            '.....+.58.',
            '..592.....',
            '......755.',
            '...$.*....',
            '.664.598..',
        ];

        const result = gatherSymbols(input);

        expect(result).toEqual([
            {
                'value': '*',
                'x': 3,
                'y': 1,
            },
            {
                'value': '#',
                'x': 6,
                'y': 3,
            },
            {
                'value': '*',
                'x': 3,
                'y': 4,
            },
            {
                'value': '+',
                'x': 5,
                'y': 5,
            },
            {
                'value': '$',
                'x': 3,
                'y': 8,
            },
            {
                'value': '*',
                'x': 5,
                'y': 8,
            },
        ]);
    });

    it.each([
        [
            `
            *..
            .4.
            ...
            `,
            {
                value: '*',
                x: 0,
                y: 0,
            },
        ],
        [
            `
            .*.
            .4.
            ...
            `,
            {
                value: '*',
                x: 1,
                y: 0,
            },
        ],
        [
            `
            ..*
            .4.
            ...
            `,
            {
                value: '*',
                x: 2,
                y: 0,
            },
        ],
        [
            `
            ...
            *4.
            ...
            `,
            {
                value: '*',
                x: 0,
                y: 1,
            },
        ],
        [
            `
            ...
            .4*
            ...
            `,
            {
                value: '*',
                x: 2,
                y: 1,
            },
        ],
        [
            `
            ...
            .4.
            *..
            `,
            {
                value: '*',
                x: 0,
                y: 2,
            },
        ],
        [
            `
            ...
            .4.
            .*.
            `,
            {
                value: '*',
                x: 1,
                y: 2,
            },
        ],
        [
            `
            ...
            .4.
            ..*
            `,
            {
                value: '*',
                x: 2,
                y: 2,
            },
        ],
    ])('should be in range single digit', (description, symbol: GearRatioSymbol) => {
        const number: GearRatioNumber = {
            value: '4',
            fromX: 1,
            toX: 1,
            y: 1,
        };

        const result = isInRange(number, [symbol]);

        expect(result).toBeTruthy();
    });

    it.each([
        [
            `
            *....
            .456.
            .....
            `,
            {
                value: '*',
                x: 0,
                y: 0,
            },
        ],
        [
            `
            .*...
            .456.
            .....
            `,
            {
                value: '*',
                x: 1,
                y: 0,
            },
        ],
        [
            `
            ..*..
            .456.
            .....
            `,
            {
                value: '*',
                x: 2,
                y: 0,
            },
        ],
        [
            `
            ...*.
            .456.
            .....
            `,
            {
                value: '*',
                x: 3,
                y: 0,
            },
        ],
        [
            `
            ....*
            .456.
            .....
            `,
            {
                value: '*',
                x: 4,
                y: 0,
            },
        ],
        [
            `
            .....
            *456.
            .....
            `,
            {
                value: '*',
                x: 0,
                y: 1,
            },
        ],
        [
            `
            .....
            .456*
            .....
            `,
            {
                value: '*',
                x: 4,
                y: 1,
            },
        ],
        [
            `
            .....
            .456.
            *....
            `,
            {
                value: '*',
                x: 0,
                y: 2,
            },
        ],
        [
            `
            .....
            .456.
            .*...
            `,
            {
                value: '*',
                x: 1,
                y: 2,
            },
        ],
        [
            `
            .....
            .456.
            ..*..
            `,
            {
                value: '*',
                x: 2,
                y: 2,
            },
        ],
        [
            `
            .....
            .456.
            ...*.
            `,
            {
                value: '*',
                x: 3,
                y: 2,
            },
        ],
        [
            `
            .....
            .456.
            ....*
            `,
            {
                value: '*',
                x: 4,
                y: 2,
            },
        ],
    ])('should be in range double digits', (description, symbol: GearRatioSymbol) => {
        const number: GearRatioNumber = {
            value: '458',
            fromX: 1,
            toX: 3,
            y: 1,
        };

        const result = isInRange(number, [symbol]);

        expect(result).toBeTruthy();
    });

    it.each([
        [
            `
            *....
            ..5..
            .....
            `,
            {
                value: '*',
                x: 0,
                y: 0,
            },
        ],
        [
            `
            ....*
            ..5..
            .....
            `,
            {
                value: '*',
                x: 4,
                y: 0,
            },
        ],
        [
            `
            .....
            ..5..
            *....
            `,
            {
                value: '*',
                x: 0,
                y: 2,
            },
        ],
        [
            `
            .....
            ..5..
            ....*
            `,
            {
                value: '*',
                x: 4,
                y: 2,
            },
        ],
    ])('should not be in range', (description, symbol: GearRatioSymbol) => {
        const number: GearRatioNumber = {
            value: '5',
            fromX: 2,
            toX: 2,
            y: 1,
        };

        const result = isInRange(number, [symbol]);

        expect(result).toBeFalsy();
    });

    it('should calculate sum', () => {
        const input = [
            '467.',
            '...*',
        ];

        const result = calculateSum(input);

        expect(result).toEqual(467);
    });

    it('should calculate sum from site', () => {
        const input = [
            '467..114..',
            '...*......',
            '..35..633.',
            '......#...',
            '617*......',
            '.....+.58.',
            '..592.....',
            '......755.',
            '...$.*....',
            '.664.598..',
        ];

        const result = calculateSum(input);

        expect(result).toEqual(4361);
    });

    it('should calculate edge case one sum from site', () => {
        const input = [
            '.................................389.314.................206......................449.523..................138.....................',
            '.........+.....954......723..........................................*.............687.....*..........692..........*........................',
            '121......992...............*.......%585....814............936.......102..#353.........*.....140.........*..434..301..................%..315.',
        ];

        const result = calculateSum(input);

        expect(result).toEqual(4575);
    });

    it('should calculate edge case two sum from site', () => {
        const input = [
            '12.......*..',
            '+.........34',
            '.......-12..',
            '..78........',
            '..*....60...',
            '78.........9',
            '.5.....23..$',
            '8...90*12...',
            '............',
            '2.2......12.',
            '.*.........*',
            '1.1..503+.56',
        ];

        const result = calculateSum(input);

        expect(result).toEqual(925);
    });

    xit('should calculate sum from site example', () => {
        const input = getInput('input.txt', 3);

        const result = calculateSum(input);

        expect(result).toEqual(530849);
    });
});
