export default class Product {
    private readonly _name: string;
    private _price: number;
    private readonly _description: string;

    constructor(name: string, description: string, price: number) {

        if (price <= 0) {
            throw new Error("Price cannot be negative!");
        }

        this._name = name;
        this._description = description;
        this._price = price;
    }
    public get price(): number {
        return this._price;
    }

    public get name(): string {
        return this._name;
    }

    public get description(): string {
        return this._description;
    }

    public set price(value: number) {
        if (value <= 0) {
            throw new Error("Price cannot be negative!");
        }
        this._price = value;
    }

    log = (): void => console.log(`${this.name};${this.description};${this.price}`);
}

