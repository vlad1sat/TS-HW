import IUser from "./IUser";

export default class User implements IUser {

    public readonly dateRegistration: Date;

    constructor(public readonly name: string,
        public readonly countMessages: number,
        public readonly countErrors: number) {

        this.dateRegistration = this.randomDate();

    }

    informationUser = (): string => `
        Name: ${this.name}.
        CountMessages: ${this.countMessages}.
        CountErrors: ${this.countErrors}.
        DateRegistration: ${this.dateRegistration.getDate()}-${this.dateRegistration.getMonth() + 1}-${this.dateRegistration.getFullYear()}.`

    randomDate = (): Date => new Date(Math.random() * Date.now());

}