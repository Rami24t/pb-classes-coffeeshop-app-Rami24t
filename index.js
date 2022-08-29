'use strict';

class Item {
    constructor(name = '', type = 'food', price = 0) {
        this.name = name;
        this.type = type;
        this.price = price;
    }
}
let cinnamon = new Item("cinnamon roll", 'food', 1.17);
let icedCoffee = new Item("iced coffee", 'drink', 1.0);
let lemonade = new Item('lemonade', 'drink', 0.5);
let burger = new Item('vegan burger', 'food', 2.0);

class CoffeeShop {
    constructor(name = 'Rami\'s Coffee Shop', menu = [cinnamon, icedCoffee, lemonade, burger], orders = []) {
        this.name = name;
        this.menu = menu;
        this.orders = orders;
    }
    addOrder(name) {
        if (this.menu.some(item => item.name === name))
            if (this.orders.push(name))
                return console.log('Order added! (added ' + name + ')');
        return console.log("This item is currently unavailable!");
    }
    fulfillOrder() {
        if (this.orders.length !== 0) {
            const itemName = this.orders.shift();
            return console.log(`The ${itemName} is ready!`);
        }
        else
            return console.log('All orders have been fulfilled');
    }
    listOrders = () => console.log(this.orders)
    dueAmount = () => console.log(this.orders.reduce((total, name) => {
        let item = this.menu.find(item => item.name === name);
        total += item.price;
        return total;
    }, 0).toFixed(2))
    cheapestItem() {
        console.log(
            this.menu.reduce((min, item) => {
                if (item.price < min.price && item.price < this.menu[this.menu.indexOf(item) + 1].price)
                    min = item;
                return min;
            }, { price: Infinity }).name
        )
    }
    drinksOnly() {
        return console.log((this.menu.filter(item => item.type === 'drink')).map(item => item.name))
    }
    foodOnly() {
        return console.log((this.menu.filter(item => item.type === 'food')).map(item => item.name))
    }
}


const tcs = new CoffeeShop();
tcs.addOrder("hot cocoa")
// ➞ "This item is currently unavailable!"
// Tesha's coffee shop does not sell hot cocoa
tcs.addOrder("iced tea")
// ➞ "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process

tcs.addOrder("cinnamon roll")
// ➞  "Order added!"
tcs.addOrder("iced coffee")
// ➞ "Order added!"
tcs.listOrders()
// ➞ ["cinnamon roll", "iced coffee"]
// the list of all the items in the current order

tcs.dueAmount()
// ➞ 2.17
tcs.fulfillOrder()
// ➞ "The cinnamon roll is ready!"
tcs.fulfillOrder()
// ➞ "The iced coffee is ready!"
tcs.fulfillOrder()
// ➞ "All orders have been fulfilled!"
// all orders have been presumably served

tcs.listOrders()
// ➞ []
// an empty array is returned if all orders have been exhausted

tcs.dueAmount()
// ➞ 0.0
// no new orders taken, expect a zero payable

tcs.cheapestItem()
// ➞ "lemonade"
tcs.drinksOnly()
// ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
tcs.foodOnly()
// ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]

