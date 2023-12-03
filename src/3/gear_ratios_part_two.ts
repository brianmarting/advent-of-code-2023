import { isNumber } from "../util/number_util";

export class GearRatioSymbol {

    x: number;
    y: number;
    adjacentNumbers: GearRatioNumber[];
}

export class GearRatioNumber {

    value: string;
    fromX: number;
    toX: number;
    y: number;
}

export function calculateSum(input: string[]): number {
    const symbols = gatherSymbols(input);
    const numbers: GearRatioNumber[] = [];

    for (let y = 0; y < input.length; y++) {
        const line = input[y];

        let number = initializeNumber();
        for (let x = 0; x < line.length; x++) {
            const character = line.charAt(x);

            if (isNumber(character)) {
                if (!number.fromX) {
                    number.fromX = x;
                    number.y = y;
                }

                number.value = number.value + character;

                if (x === line.length - 1) {
                    setAndCheckNumber(number, symbols, numbers, x)
                    number = initializeNumber();
                }
                continue
            }

            if (number.value) {
                setAndCheckNumber(number, symbols, numbers, x - 1)
                number = initializeNumber();
            }
        }
    }

    return symbols
        .map(({ adjacentNumbers }: GearRatioSymbol) => adjacentNumbers)
        .filter((adjacentNumbers: GearRatioNumber[]) => adjacentNumbers.length === 2)
        .map((adjacentNumbers: GearRatioNumber[]) => adjacentNumbers
            .map(({ value }: GearRatioNumber) => +value)
            .reduce((previous, current) => previous * current)
        )
        .reduce((previous: number, current: number) => previous + current)
}

export const gatherSymbols = (input: string[]): GearRatioSymbol[] => {
    const symbols: GearRatioSymbol[] = [];

    for (let y = 0; y < input.length; y++) {
        const line = input[y];

        for (let x = 0; x < line.length; x++) {
            const character = line.charAt(x);

            if (character === '*') {
                symbols.push({
                    x: x,
                    y: y,
                    adjacentNumbers: [],
                });
            }
        }
    }

    return symbols;
}

const initializeNumber = () => <GearRatioNumber>{
    value: '',
};

export const isInRange = (number: GearRatioNumber, symbols: GearRatioSymbol[]): boolean => {
    for (let i = number.fromX; i <= number.toX; i++) {
        for (const { x, y, adjacentNumbers } of symbols) {
            if (
                (i - 1 === x || i === x || i + 1 === x) &&
                (number.y - 1 === y || number.y === y || number.y + 1 === y)
            ) {
                adjacentNumbers.push(number);
                return true;
            }
        }
    }

    return false;
}

const setAndCheckNumber = (number: GearRatioNumber, symbols: GearRatioSymbol[], numbers: GearRatioNumber[], x: number): void => {
    number.toX = x;

    if (isInRange(number, symbols)) {
        numbers.push({ ...number });
    }
}
