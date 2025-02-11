### Coffee Shop App

Write a **class** called **CoffeeShop**, which has **instance data properties**:

-  **name** : a string (basically, of the shop)
-  **menu** : an array of items (of object type), with each item containing the **item** (name of the item), **type** (whether _food_ or a _drink_) and **price**.
-  **orders** : an empty array

and **instance accessor properties**:

-  getter **listOrders**: getter for the **orders** array.
-  setter **listOrders**: setter for the **orders** array.

and **instance methods**:

-  **addOrder**: adds the **name** of the item to the end of the **orders** array if it exists on the **menu**. Otherwise, return `"This item is currently unavailable!"`
-  **fulfillOrder**: if the **orders** array is **not empty**, return `"The {item} is ready!"`. If the **orders** array is empty, return `"All orders have been fulfilled!"`
-  **dueAmount**: returns the total amount due for the **orders** taken.
-  **cheapestItem**: returns the **name** of the cheapest item on the menu.
-  **drinksOnly**: returns only the _item_  **names** of _type_  **drink** from the menu.
-  **foodOnly**: returns only the _item_  **names** of _type_  **food** from the menu.

**IMPORTANT**: Orders are fulfilled in a **FIFO** (first-in, first-out) order.


### Preview

```
Rami's coffee shop

rcs.addOrder("cigarettes"); ➞ "This item is currently unavailable!"
rcs.addOrder("iced tea"); ➞ "This item is currently unavailable!"
rcs.addOrder("cinnamon roll"); ➞  "Order added! cinnamon"
rcs.addOrder("iced coffee"); ➞ "Order added! iced coffee" 
rcs.listOrders; ➞ ["cinnamon roll", "iced coffee"] the list of all the items in the current order
rcs.dueAmount(); ➞ 2.17

rcs.fulfillOrder(); ➞ "The cinnamon roll is ready!"
rcs.fulfillOrder(); ➞ "The iced coffee is ready!"
rcs.fulfillOrder(); ➞ "All orders have been fulfilled!" // all orders have been presumably served
rcs.listOrders; ➞ [] // an empty array is returned if all orders have been exhausted
rcs.dueAmount(); ➞ 0.0 // no new orders taken, expect a zero payable

rcs.cheapestItem(); ➞ "lemonade"
rcs.drinksOnly(); ➞ [ 'iced coffee', 'lemonade' ]
rcs.foodOnly(); ➞ [ 'cinnamon roll', 'vegan burger' ]
```
