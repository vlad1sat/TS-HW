import Actor from "./interfaceActor";


const actor : Actor = {

    name: 'Michael',

    firstName: 'Ivanov',

    country: 'Russia',

    city: 'Machachkala',

    hasOskar: false,

    filmsCount: 10,

    age: 14, // '14'- неправильно выбранный ти данных для возраста

    languages: ['RU-ru', 'EN-us', 'TR-tr'],

};

const howOldWillBeActorAfterTwentyYears = (actor: Actor) => {

    return actor.age + 20;

}

console.log(howOldWillBeActorAfterTwentyYears(actor));