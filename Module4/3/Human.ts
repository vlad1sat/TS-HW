export default abstract class Human {
    protected abstract readonly view: string;
    constructor(public readonly name: string) {
    }
}