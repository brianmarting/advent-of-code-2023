import { calculateSum } from "../../src/3/gear_ratios_part_two";
import { getInput } from "../util/input_util";

describe('Gear ratios part two', () => {

    it('should calculate edge case two sum from site', () => {
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

        expect(result).toEqual(467835);
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

        expect(result).toEqual(6756);
    });

    xit('should calculate sum from site example', () => {
        const input = getInput('input.txt', 3);

        const result = calculateSum(input);

        expect(result).toEqual(84900879);
    });
});
