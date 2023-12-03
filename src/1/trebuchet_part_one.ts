import { isNumber } from "../util/number_util";

export function calculateSum(input: string[]): number {
    return (input || [])
        .map((value: string) => getFirstAndLastNumber(value))
        .reduce((sum, current) => sum + current, 0);
}

export function getFirstAndLastNumber(input: string): number {
    const numbers = input.split('')
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
