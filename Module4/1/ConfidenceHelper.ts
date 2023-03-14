import IUser from "./IUser";

export default abstract class ConfidenceHelper {

    static checkConfidenceRatio = (user: IUser): number => user.countMessages * 2 - user.countErrors * 100 +
        (new Date(Date.now()).getFullYear() - user.dateRegistration.getFullYear());
}