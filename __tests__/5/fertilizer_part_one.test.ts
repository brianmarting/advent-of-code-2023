import { calculateLowestLocation, calculateRange, getFertilizerSheet } from "../../src/5/fertilizer_part_one";
import { getInputWithoutSplit } from "../util/input_util";

describe('Fertilizer part one', () => {

    it('should get range for line', () => {
        const input = '50 98 2';

        const result = calculateRange(input);

        expect(result).toEqual({
            "range": 2,
            "source": 98,
            "target": 50
        });
    });

    it('should map seeds and maps', () => {
        const input = getInputWithoutSplit('dummy.txt', 5);

        const result = getFertilizerSheet(input);

        expect(result).toEqual({
            maps: [
                {
                    key: "seed-to-soil map:",
                    ranges: [
                        {
                            range: 2,
                            source: 98,
                            target: 50
                        },
                        {
                            range: 48,
                            source: 50,
                            target: 52
                        }
                    ]
                },
                {
                    key: "soil-to-fertilizer map:",
                    ranges: [
                        {
                            range: 37,
                            source: 15,
                            target: 0
                        },
                        {
                            range: 2,
                            source: 52,
                            target: 37
                        },
                        {
                            range: 15,
                            source: 0,
                            target: 39
                        }
                    ]
                }
            ],
            seeds: [
                79,
                14,
                55,
                13
            ]
        });
    });

    it('should calculate location', () => {
        const input = getInputWithoutSplit('dummy_2.txt', 5);

        const result = calculateLowestLocation(input);

        expect(result).toEqual(35);
    });

    xit('should calculate input from site', () => {
        const input = getInputWithoutSplit('input.txt', 5);

        const result = calculateLowestLocation(input);

        expect(result).toEqual(111627841);
    });
});
