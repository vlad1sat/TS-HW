type Cat = {
    type: 'cat';
    name: string,
    meow: () => string,
}

type Dog = {
    type: 'dog';
    name: string,
    bark: () => string,
}

const cat: Cat = {
    type: 'cat',
    name: 'Pushok',
    meow: () => 'meow!'
};

const dog: Dog = {
    type: 'dog',
    name: 'Bobik',
    bark: () => 'bark!',
}

type Pet = Dog | Cat;

const isDog = (obj: Pet): obj is Dog => obj.type === 'dog';
const isCat = (obj: Pet): obj is Cat => obj.type === 'cat';

whatDoesThePetSayWithIn(cat);
whatDoesThePetSayWithIn(dog);
whatDoesThePetSayWithBaseTypegards(cat);
whatDoesThePetSayWithBaseTypegards(dog);
whatDoesThePetSayWithCustomTypegards(cat);
whatDoesThePetSayWithCustomTypegards(dog);


function whatDoesThePetSayWithBaseTypegards(pet: Pet): string {
    if (pet.type === 'dog') {
        return pet.bark();
    } else if (pet.type === 'cat') {
        return pet.meow();
    }
    return 'Nothing :(';
}

function whatDoesThePetSayWithCustomTypegards(pet: Dog | Cat): string {
    if (isDog(pet)) {
        return pet.bark()
    } else if (isCat(pet)) {
        return pet.meow();
    }
    return 'Nothing :(';
}

function whatDoesThePetSayWithIn(pet: Dog | Cat): string {
    if ("meow" in pet) {
        return pet.meow();
    } else if ("bark" in pet) {
        return pet.bark()
    }
    return 'Nothing :(';
}