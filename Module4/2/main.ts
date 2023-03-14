import Product from "./Product";
import OrderItem from "./OrderItem";
import SellPrice from "./SellPrice";
import SellPriceByCount from "./SellPriceByCount";
import ExpressPurchase from "./ExpressPurchase";

const Tomato: Product = new Product( "Tomato", "red vegetable", 100);
const Cucumber: Product = new Product("Cucumber","green vegetable", 220);

let purchases: OrderItem[] = [
    new SellPrice("0", Tomato, 2, 5),
    new SellPrice("1", Cucumber, 4, 15),
    new SellPriceByCount("2", Tomato, 2),
    new SellPriceByCount("3", Cucumber, 45),
    new ExpressPurchase("4", Tomato, 8),
    new ExpressPurchase("5", Cucumber, 9)];

purchases.forEach(item => item.log());
purchases = purchases.sort((item1, item2) => item1.compare(item2));
console.log("Sort: ")
purchases.forEach(item => item.log());