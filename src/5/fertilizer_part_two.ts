import { hasNumber, isNumber } from "../util/number_util";

export class FertilizerSheet {

    seeds: number[];
    maps: FertilizerMap[];
}

export class FertilizerMap {
    key: string;
    ranges: FertilizerRange[];
}

export class FertilizerRange {
    source: number;
    target: number;
    range: number;
}

export function calculateLowestLocation(input: string): number {
    const map: FertilizerSheet = getFertilizerSheet(input);

    let lowestNumber: number | null = null;
    for (let i = 0; i < map.seeds.length; i += 2) {
        // for every seed and its range we loop to prevent too much loading in memory
        const seed = map.seeds[i];
        const range = map.seeds[i + 1];

        for (let j = seed; j < seed + range; j++) {
            let currentNumber = j;

            for (const currentMap of map.maps) {
                currentNumber = findNumberInRange(currentNumber, currentMap.ranges);
            }

            if (!lowestNumber) {
                lowestNumber = currentNumber;
            }

            // console.log('current num ' + currentNumber)
            if (currentNumber < lowestNumber) {
                console.log('setting lowest to', currentNumber)
                lowestNumber = currentNumber;
            }
        }
    }

    return lowestNumber!!;
}

export function findNumberInRange(seed: number, range: FertilizerRange[]): number {
    for (let currentRange of range) {
        if (seed >= currentRange.source && seed <= currentRange.source + currentRange.range) {
            const difference = seed - currentRange.source;

            return currentRange.target + difference;
        }
    }

    return seed;
}

export function getFertilizerSheet(input: string): FertilizerSheet {
    const [seedsLine, ...otherLines] = input.split('\n');

    const seeds = seedsLine.split(' ')
        .filter((value: string) => isNumber(value))
        .map(Number);

    const maps: FertilizerMap[] = [];

    otherLines
        .filter((line: string) => line !== '')
        .forEach((line: string) => {
            if (!hasNumber(line)) {
                maps.push({
                    key: line,
                    ranges: [],
                });
            } else {
                const range = calculateRange(line);

                maps[maps.length - 1].ranges.push(range);
            }
        });

    return {
        seeds,
        maps,
    };
}

export function calculateRange(line: string): FertilizerRange {
    const [target, source, range] = line.split(' ')
        .map(Number);

    return {
        source,
        target,
        range,
    }
}
