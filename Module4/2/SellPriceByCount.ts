import Product from "./Product";
import OrderItem from "./OrderItem";

export default class SellPriceByCount extends OrderItem {
    private readonly _needsCount: number = 5;
    private readonly _sell: number = 10;
    constructor(descriptionOrder: string, product: Product, count: number) {
        super(descriptionOrder, product, count);
    }
    getCost(): number {
        if (this.countProducts > this._needsCount)
            return (this.product.price * this.countProducts) / 100 * (100 - this._sell);
        return this.product.price * this.countProducts;
    }
}
