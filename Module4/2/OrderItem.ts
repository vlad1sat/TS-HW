import Product from "./Product";

export default abstract class OrderItem {
    private readonly _descriptionOrder: string;
    private readonly _product: Product;
    private readonly _countProducts: number;

    protected constructor(descriptionOrder: string, product: Product, countProducts: number) {
        this._descriptionOrder = descriptionOrder;
        this._product = product;
        this._countProducts = countProducts;
    }

    public get descriptionOrder(): string {
        return this._descriptionOrder
    }

    public get product(): Product {
        return this._product
    }

    public get countProducts(): number {
        return this._countProducts
    }

    abstract getCost(): number;

    public compare(item: OrderItem): number {
        if (this.getCost() === item.getCost()) {
            return 0;
        } else if (this.getCost() > item.getCost()) {
            return 1;
        }
        return -1;
    }
    log = (): void => console.log(`${this.descriptionOrder};{${this.product.log}};${this.countProducts};${this.getCost()}`);
}