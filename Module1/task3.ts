type Human = {

    name: string,

    age: number,

    gender: 'male' | 'female',

}

function someFunc(data: Human[]): number {

    return data.reduce((acc: number, current: Human) => current.age > 18 && current.gender === 'male' ? ++acc : acc, 0);
    // неправильное использование типов, нельзя перевести boolean в number Number(current.age > 18 && current.gender === 'male')
}
