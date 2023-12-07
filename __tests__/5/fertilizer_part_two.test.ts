import { calculateLowestLocation } from "../../src/5/fertilizer_part_two";
import { getInputWithoutSplit } from "../util/input_util";

describe('Fertilizer part one', () => {

    it('should calculate lowest location', () => {
        const input = getInputWithoutSplit('dummy_2.txt', 5);

        const result = calculateLowestLocation(input);

        expect(result).toEqual(46);
    });

    xit('should calculate input from site', () => {
        const input = getInputWithoutSplit('input.txt', 5);

        const result = calculateLowestLocation(input);

        expect(result).toEqual(69323689);
    });
});
