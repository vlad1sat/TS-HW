
const areEquals = (firstObject: object, secondObject: object) : boolean =>
    JSON.stringify(firstObject) === JSON.stringify(secondObject);

type DataStudent = {
    marks: number[];
    password: string;
}

type Student = {
    id: number;
    name: string;
    lessons: string[];
    data: DataStudent;
}

const student1: Student = {
    id: 123,
    name: 'lol',
    lessons: ['Math', 'Library'],
    data: {
        marks: [2, 3, 4, 5],
        password: 'qwerty123',
    }
}

const student2: Student = {
    id: 123,
    name: 'lol',
    lessons: ['Math', 'Library'],
    data: {
        marks: [2, 3, 4, 5],
        password: 'qwerty123',
    }
}

const student3: Student= {
    id: 125,
    name: 'kek',
    lessons: ['Music', 'Library'],
    data: {
        marks: [2, 2, 2, 5],
        password: 'qwerty123',
    }
}

console.log(areEquals(student1, student1));
console.log(areEquals(student1, student2));
console.log(areEquals(student3, student3));
console.log(areEquals(student1, student3));