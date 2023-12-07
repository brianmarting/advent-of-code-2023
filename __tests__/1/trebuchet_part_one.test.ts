import { calculateSum, getFirstAndLastNumber } from "../../src/1/trebuchet_part_one";
import { getInput } from "../util/input_util";

describe('Trebuchet part one', () => {

    it('should process all inputs correctly', () => {
        const input = [
            '1abc2',
            'pqr3stu8vwx',
            'a1b2c3d4e5f',
            'treb7uchet'
        ];

        const result = calculateSum(input);

        expect(result).toEqual(142);
    });

    it.each([
        ['1abc2', 12],
        ['pqr3stu8vwx', 38],
        ['a1b2c3d4e5f', 15],
        ['treb7uchet', 77]
    ])('should process getFirstAndSecondNumber correctly', (testCase, expected) => {
        const result = getFirstAndLastNumber(testCase);

        expect(result).toEqual(expected);
    });

    xit('should process all inputs correctly', () => {
        const input = getInput('input.txt', 1);

        const result = calculateSum(input);

        expect(result).toEqual(54927);
    });
});
