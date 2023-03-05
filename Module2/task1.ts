const arrayDiff = (baseArray: number[], filterArray: number[]) =>
    baseArray
        .filter((element: number) => !filterArray.includes(element));


console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 3, 4], [5, 6]));
console.log(arrayDiff([2, 2, 2, 2, 3], [2]));