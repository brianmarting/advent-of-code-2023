import { isNumber } from "../util/number_util";

const names: string[] = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
];

export function calculateSum(input: string[]): number {
    return (input || [])
        .map((value: string) => getFirstAndLastNumber(value))
        .reduce((sum, current) => sum + current, 0);
}

export function getFirstAndLastNumber(input: string): number {
    const line = replaceNamesWithNumberValues(input);

    const numbers = line.split('')
        .filter(character => isNumber(character))
        .join('');

    if (numbers.length < 2) {
        const [number] = numbers;

        return +(number + number);
    }

    if (numbers.length > 2) {
        return +(numbers.at(0) + numbers.at(-1)!!);
    }

    return +numbers;
}


// e.g. eighthree becomes 83 and not 8hree, to take into consideration ... not explained on the site
const replaceNamesWithNumberValues = (line: string): string => {
    names.forEach((name, index) => {
        line = line.replaceAll(
            name,
            name + (index + 1) + name,
        );
    });

    return line;
}
