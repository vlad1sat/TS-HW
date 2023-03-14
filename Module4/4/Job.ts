export default class Job {
    private readonly _role: string;
    private readonly _salary: number;

    constructor(role: string, salary: number) {
        this._role = role;
        this._salary = salary;
    }

    get salary() {
        return this._salary;
    }

    public work = (personName: string): void => console.log(`${personName} сейчас работает как ${this._role}`)

}