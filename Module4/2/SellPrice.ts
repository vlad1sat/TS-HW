import OrderItem from "./OrderItem";
import Product from "./Product";

export default class SellPrice extends OrderItem {
    private readonly _discount: number;

    constructor(descriptionOrder: string, product: Product, countProduct: number, discount: number) {
        if (discount <= 0 || discount >= 100) {
            throw new Error("Discount cannot be more 100 or less 0");
        }
        super(descriptionOrder, product, countProduct);
        this._discount = discount;
    }

    get discount(): number {
        return this._discount;
    }

    getCost(): number {
        return this.product.price * this.countProducts * (this.discount / 100);
    }

}