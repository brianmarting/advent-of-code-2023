const maxReds = 12, maxGreens = 13, maxBlues = 14;

export function calculateSum(inputs: string[]): number {
    let sum = 0;

    for (let i = 0; i < inputs.length; i++) {
        const gameId = i + 1;
        const [, draws] = inputs[i].split(`Game ${gameId}: `);

        const satchel = calculateCurrentGameSatchelDraws(draws)

        if (satchel.reds <= maxReds &&
            satchel.greens <= maxGreens &&
            satchel.blues <= maxBlues) {
            sum += gameId;
        }
    }

    return sum;
}

export class Satchel {

    // Maximum amount detected cubes
    reds: number = 0;
    greens: number = 0;
    blues: number = 0;
}

export function calculateCurrentGameSatchelDraws(entireDraw: string): Satchel {
    const satchel = new Satchel();

    entireDraw.split('; ')
        .map((singleDraw: string) => singleDraw.split(', '))
        .forEach((singleDrawValues: string[]) => adjustSatchelColorsIfNeeded(singleDrawValues, satchel));

    return satchel;
}

export function adjustSatchelColorsIfNeeded(inputs: string[], satchel: Satchel): void {
    (inputs || [])
        .map(value => value.split(' '))
        .forEach(([amount, color]: string[]) => {
            const amountNumber = +amount;

            switch (color) {
                case 'red':
                    if (satchel.reds < amountNumber) {
                        satchel.reds = amountNumber;
                    }
                    break;
                case 'blue':
                    if (satchel.blues < amountNumber) {
                        satchel.blues = amountNumber;
                    }
                    break;
                case 'green':
                    if (satchel.greens < amountNumber) {
                        satchel.greens = amountNumber;
                    }
                    break;
            }
        });
}