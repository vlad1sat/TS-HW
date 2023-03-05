const upFirstWithDeleteIndexLetter = (text: string): string => {
    let indexDelete = 0;
    return text
        .split(' ')
        .map((element: string, index: number) => {
            let elementUp = element.charAt(0).toUpperCase() + element.slice(1);

            if (index === 0) {
                indexDelete = elementUp.length;
            }

            return elementUp;
        })
        .filter((element: string, index: number) => index !== indexDelete)
        .join(' ');
}

console.log(upFirstWithDeleteIndexLetter("Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили."))