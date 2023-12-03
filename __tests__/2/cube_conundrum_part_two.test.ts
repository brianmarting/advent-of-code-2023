import { calculateSum } from "../../src/2/cube_conundrum_part_two";
import { calculateCurrentGameSatchelDraws } from "../../src/2/cube_conundrum_part_one";
import { getInput } from "../util/input_util";

describe('Cube conundrum part two', () => {

    it.each([
        ['3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green', 4, 2, 6],
        ['1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue', 1, 3, 4],
        ['8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red', 20, 13, 6],
        ['1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red', 14, 3, 15],
        ['6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green', 6, 3, 2],
    ])('should process getFirstAndSecondNumber correctly', (testCase, reds, greens, blues) => {
        const result = calculateCurrentGameSatchelDraws(testCase);

        expect(result).toEqual({
            reds,
            greens,
            blues,
        });
    });

    it('should calculateSum', () => {
        const input = [
            'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
            'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
            'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
            'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
            'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
        ];

        const result = calculateSum(input);

        expect(result).toEqual(2286);
    });

    it('should calculateSum', () => {
        const input = getInput('cube_conundrum.txt', 2);

        const result = calculateSum(input);

        expect(result).toEqual(58269);
    });
});
