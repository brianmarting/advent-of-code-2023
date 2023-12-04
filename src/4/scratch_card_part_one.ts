import _ from "lodash";

export function calculateSum(input: string[]): number {
    return (input || [])
        .map((line: string, index: number) => line.split(` ${index + 1}: `) as [string, string])
        .map(([, line]: [string, string]) => line)
        .map((line: string) => calculatePoints(line))
        .reduce((previous, current) => previous + current);
}

export function calculatePoints(line: string): number {
    const [winningNumbers, yourNumbers]: [number[], number[]] = line.split(' | ')
        .map((item: string) => item.trim().split(' ')
            .map((number: string) => +number)
            .filter((number: number) => number !== 0)
        ).map((numbers: number[]) => _.uniq(numbers)) as [number[], number[]];

    const yourWinningNumbers = yourNumbers
        .filter(number => winningNumbers.indexOf(number) !== -1);

    if (yourWinningNumbers.length <= 1) {
        return yourWinningNumbers.length;
    }

    return Math.pow(2, yourWinningNumbers.length - 1);
}
