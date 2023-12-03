import { calculateSum, getFirstAndLastNumber } from "../../src/1/trebuchet_part_two";
import { getInput } from "../util/input_util";

describe('Trebuchet part two', () => {

    it.each([
        ['two1nine', 29],
        ['eightwothree', 83],
        ['abcone2threexyz', 13],
        ['xtwone3four', 24],
        ['4nineeightseven2', 42],
        ['zoneight234', 14],
        ['7pqrstsixteen', 76],
        ['eighthree', 83],
    ])('should process getFirstAndSecondNumber correctly', (testCase, expected) => {
        const result = getFirstAndLastNumber(testCase);

        expect(result).toEqual(expected);
    });

    it('should process all inputs correctly', () => {
        const input = [
            'two1nine',
            'eightwothree',
            'abcone2threexyz',
            'xtwone3four',
            '4nineeightseven2',
            'zoneight234',
            '7pqrstsixteen',
        ];

        const result = calculateSum(input);

        expect(result).toEqual(281);
    });

    it('should process all inputs correctly', () => {
        const input = getInput('trebuchet.txt', 1);

        const result = calculateSum(input);

        expect(result).toEqual(54591);
    });
});
