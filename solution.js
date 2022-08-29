'use strict';
// Rami Al-Saadi        OOP-JS-Coffee Shop              29/Aug/2022


// class MyMath {
//     static roundOff = (num, places = 2) => {
//         const x = Math.pow(10, places);
//         return Math.round(num * x) / x;
//     }
// }

class Item {
    constructor(name = '', type = 'food', price = 0) {
        this.name = name;
        this.type = type;
        this.price = price;
    }
}

class CoffeeShop {
    constructor(name = 'Rami\'s Coffee Shop', menu = [{ name: 'itemName', type: 'food or drink', price: 0 }], orders = []) {
        this.name = name;
        this.menu = menu;
        this.listOrders = orders;
    }
    get listOrders() {
        return console.log(this.orders);
    };
    set listOrders(orders) {
        this.orders = orders;
    };
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
    //  listOrders = () => console.log(this.orders)
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

const items = [
    new Item("cinnamon roll", 'food', 1.17),
    new Item("iced coffee", 'drink', 1.0),
    new Item('lemonade', 'drink', 0.5),
    new Item('vegan burger', 'food', 2.0)];

const rcs = new CoffeeShop(undefined, items);
console.log(rcs.name);
console.log();

rcs.addOrder("cigarettes");
// ➞ "This item is currently unavailable!"
// Rami's coffee shop does not sell cigarettes
rcs.addOrder("iced tea");
// ➞ "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process
rcs.addOrder("cinnamon roll");
// ➞  "Order added!"
rcs.addOrder("iced coffee");
// ➞ "Order added!"
// rcs.listOrders = ["cinnamon roll", "iced coffee", 'lemonade', 'vegan burger'];
rcs.listOrders;
// ➞ ["cinnamon roll", "iced coffee"]
// the list of all the items in the current order
rcs.dueAmount();
// ➞ 2.17
console.log();

rcs.fulfillOrder();
// ➞ "The cinnamon roll is ready!"
rcs.fulfillOrder();
// ➞ "The iced coffee is ready!"
rcs.fulfillOrder();
// ➞ "All orders have been fulfilled!"
// all orders have been presumably served
rcs.listOrders;
// ➞ []
// an empty array is returned if all orders have been exhausted
rcs.dueAmount();
// ➞ 0.0
console.log();

// no new orders taken, expect a zero payable
rcs.cheapestItem();
// ➞ "lemonade"
rcs.drinksOnly();
// ➞ [ 'iced coffee', 'lemonade' ]
rcs.foodOnly();
// ➞ [ 'cinnamon roll', 'vegan burger' ]
