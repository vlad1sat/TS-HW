import TrustedUser from "./TrustedUser";
import User from "./User";

const users: User[] = [
    new User('Alex', 1000, 1),
    new User('Lola', 200, 0),
    new User('Sem', 100, 5),
    new User('Rock', 500, 2)
];

const showBadUsers = (users: User[]): void => users.forEach((user: User) => {
    const trustedUser: TrustedUser = new TrustedUser(user);
    if (!trustedUser.getConfidenceRatio()) {
        console.log(user.informationUser())
    }
});

showBadUsers(users);