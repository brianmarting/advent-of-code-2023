import { getInput } from "../util/input_util";
import { calculateAmountOfWinningNumbers, calculateSum } from "../../src/4/scratch_card_part_two";

describe('Scratch card part one', () => {

    it('should calculate amount of winning numbers for line', () => {
        const input = '41 48 83 86 17 | 83 86  6 31 17  9 48 53';

        const result = calculateAmountOfWinningNumbers(input);

        expect(result).toEqual(4);
    });

    it('should calculate sum from site example', () => {
        const input = [
            'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53',
            'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19',
            'Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1',
            'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83',
            'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36',
            'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11',
        ];

        const result = calculateSum(input);

        expect(result).toEqual(30);
    });

    xit('should calculate sum from site input', () => {
        const input = getInput('input.txt', 4);

        const result = calculateSum(input);

        expect(result).toEqual(5095824);
    });
});
