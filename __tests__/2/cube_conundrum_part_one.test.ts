import {
    adjustSatchelColorsIfNeeded,
    calculateCurrentGameSatchelDraws,
    calculateSum,
    Satchel
} from '../../src/2/cube_conundrum_part_one';
import { getInput } from "../util/input_util";

describe('Cube conundrum part one', () => {

    describe('should calculate all inputs correctly', () => {
        it('with default single satchel draw', () => {
            const input = [
                '1 red',
                '2 green',
                '6 blue'
            ];
            const satchel = new Satchel();

            adjustSatchelColorsIfNeeded(input, satchel);

            expect(satchel).toEqual({
                reds: 1,
                greens: 2,
                blues: 6,
            });
        });

        it('with already filled single satchel draw', () => {
            const input = [
                '6 red',
                '4 green',
                '1 blue'
            ];
            const satchel: Satchel = {
                reds: 3,
                greens: 3,
                blues: 3,
            };

            adjustSatchelColorsIfNeeded(input, satchel);

            expect(satchel).toEqual({
                reds: 6,
                greens: 4,
                blues: 3,
            });
        });

        it('with entire satchel draw', () => {
            const input = '7 green, 14 red, 5 blue; 8 red, 4 green; 6 green, 18 red, 9 blue'

            const result = calculateCurrentGameSatchelDraws(input);

            expect(result).toEqual({
                reds: 18,
                greens: 7,
                blues: 9,
            });
        });
    });

    it('should calculateSum', () => {
        const input = getInput('input.txt', 2);

        const result = calculateSum(input);

        expect(result).toEqual(2101);
    });
});
