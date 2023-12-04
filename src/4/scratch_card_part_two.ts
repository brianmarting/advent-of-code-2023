import _ from "lodash";

export class ScratchCard {

    index: number;
    amountOfCopies: number;
}

export function calculateSum(input: string[]): number {
    const lines = (input || [])
        .map((line: string, index: number) => line.split(` ${index + 1}: `) as [string, string])
        .map(([, line]: [string, string]) => line)

    const scratchCards: ScratchCard[] = createScratchCards(lines.length);

    lines.forEach((line: string, index: number) => {
        const amount = calculateAmountOfWinningNumbers(line);
        const currentScratchCard = scratchCards[index];

        const indexToUse = index + 1;
        for (let i = indexToUse; i < indexToUse + amount; i++) {
            const scratchCard = scratchCards[i];

            scratchCard.amountOfCopies += 1 + currentScratchCard.amountOfCopies;
        }
    });

    return scratchCards
        .map(({ amountOfCopies }: ScratchCard) => amountOfCopies)
        .reduce((previous, current) => previous + current) + lines.length;
}

export function calculateAmountOfWinningNumbers(line: string): number {
    const [winningNumbers, yourNumbers]: [number[], number[]] = line.split(' | ')
        .map((item: string) => item
            .trim()
            .split(' ')
            .map((number: string) => +number)
            .filter((number: number) => number !== 0)
        ).map((numbers: number[]) => _.uniq(numbers)) as [number[], number[]];

    return yourNumbers
        .filter(number => winningNumbers.indexOf(number) !== -1)
        .length;
}

const createScratchCards = (amountOfLines: number): ScratchCard[] => {
    const scratchCards: ScratchCard[] = [];

    for (let i = 0; i < amountOfLines; i++) {
        scratchCards.push({
            index: i,
            amountOfCopies: 0,
        })
    }

    return scratchCards;
}
