export const isNumber = (input: string) => {
    return /^\d+$/.test(input);
}

export const hasNumber = (input: string) => {
    return /\d/.test(input);
}
