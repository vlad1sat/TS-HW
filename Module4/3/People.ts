import {CanRun, CanFly, CanSwim} from "./Abilities";
import Human from "./Human";

class Nibiru extends Human implements CanRun {
    protected readonly view: string = 'nibiru';

    run = (): void => console.log(`I'm ${this.view}. ${this.name} can run!`);
}

class Earthman extends Human implements CanRun, CanSwim {
    protected readonly view: string = 'earthman';

    run = (): void => console.log(`I'm ${this.view}. ${this.name} can run!`);

    swim = (): void => console.log(`I'm ${this.view}. ${this.name} can swim!`);
}

class Kryptonian extends Human implements CanRun, CanSwim, CanFly {
    protected readonly view: string = 'kryptonian';

    fly = (): void => console.log(`I'm ${this.view}. ${this.name} can fly!`);

    run = (): void => console.log(`I'm ${this.view}. ${this.name} can run!`);

    swim = (): void => console.log(`I'm ${this.view}. ${this.name} can swin!`);
}