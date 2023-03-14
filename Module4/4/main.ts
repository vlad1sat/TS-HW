import Job from "./Job";
import Person from "./Person";

const alex: Person = new Person("Alex");
const lina: Person = new Person("Lina");
const gerry: Person = new Person("Gerry");

const persons: Person[] = [alex, lina, gerry];

const chef: Job = new Job("Chef", 1);
const barman: Job = new Job("Barman", 2);
const human: Job = new Job("Human", 3);

alex.job = chef;
lina.job = barman;
gerry.job = human;

persons.forEach(item => item.work());

alex.job = barman;
lina.job = human;
gerry.job = chef;

persons.forEach(item => item.work());
persons.forEach(item => console.log(item.getSalary()));