type User = {
    name: string;
    age: number;
    occupation: string;
}

type Admin = {
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Roman Abramov',
        age: 25,
        occupation: 'Millionaire'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Andrey Fox',
        age: 23,
        occupation: 'Developer'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

function logPerson(user: User | Admin) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);

export {Person, persons, logPerson};