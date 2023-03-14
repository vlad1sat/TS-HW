import Job from "./Job";

export default class Person {
    private _job: Job | null = null;
    constructor(private readonly _name: string) {}

    public set job(value: Job) {
        this._job = value;
    }

    public getSalary = (): number => this._job !== null ? this._job.salary : 0;

    public work = (): void => {
        if (this._job === null) {
            throw new Error("Person cannot work without job!");
        }
        this._job.work(this._name);
    }
}