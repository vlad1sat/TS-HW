const powNumbers = (numbers: number) : number =>
    +([...numbers.toString()]
        .map((strNumber: string) => (+strNumber) ** 2)
        .join(''));

console.log(powNumbers(9119));