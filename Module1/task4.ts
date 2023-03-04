const mirrorString = (text: string): string => {
    return [...text].reverse().join('');
}

console.log(mirrorString("Это пример!"));
console.log(mirrorString("Заееееб"));