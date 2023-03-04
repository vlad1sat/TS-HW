const sqrtNumbers = (numbers: number): number => {
    const sumNumber = (): number => {
        return [...numbers.toString()]
            .map((strNumber: string) => +strNumber)
            .reduce((sum: number, numberArray: number) => sum + numberArray);
    }

    while (numbers.toString().length !== 1) {
        numbers = sumNumber();
    }

    return numbers;
}

console.log(sqrtNumbers(942));
console.log(sqrtNumbers(493193));