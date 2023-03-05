const upFirstLetter = (text: string): string =>
    text
        .split(' ')
        .map((element: string) => element.charAt(0).toUpperCase() + element.slice(1))
        .join(' ');

console.log(upFirstLetter("Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили."))