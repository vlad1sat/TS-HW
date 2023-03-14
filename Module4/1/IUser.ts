export default interface IUser {
    readonly name: string;
    readonly countMessages: number;
    readonly countErrors: number;
    readonly dateRegistration: Date;
}