
document.addEventListener('click', (e: MouseEvent) => {

    const coords: number[] = [e.pageX, e.pageY]; // у MouseEvent не существует свойств posX, posY,

    console.log(`Point is ${coords[0]}, ${coords[1]}`);

});