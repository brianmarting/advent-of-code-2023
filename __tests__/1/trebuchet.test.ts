import { calculateSum, getFirstAndLastNumber } from '../../src/1/trebuchet';
import { trebuchetTestData } from './trebuchet.test.data';

describe('Trebuchet', () => {

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

    it('should process all inputs from site correctly', () => {
        const input = [...trebuchetTestData]

        const result = calculateSum(input);

        expect(result).toEqual(54927);
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
});
