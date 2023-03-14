import Product from "./Product";
import OrderItem from "./OrderItem";


export default class ExpressPurchase extends OrderItem{
    private readonly _expressPrice: number = 5;

    constructor(descriptionOrder: string, product: Product, count: number) {
        super(descriptionOrder, product, count);
    }

    getCost(): number {
        const expressPriceByAll = (this.product.price / 100 * this._expressPrice) * this.countProducts;
        return (this.product.price * this.countProducts) - expressPriceByAll;
    }
}