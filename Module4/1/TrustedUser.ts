import ConfidenceHelper from "./ConfidenceHelper";
import User from "./User";

export default class TrustedUser {
    constructor(public readonly user: User) {}

    getConfidenceRatio = (): boolean => ConfidenceHelper.checkConfidenceRatio(this.user) >= 0;
}