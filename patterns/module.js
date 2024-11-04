/*
The Module Pattern is commonly used for:

Encapsulating data so that it can’t be accessed directly from the outside.
Creating reusable components with public APIs, while hiding the internal logic and details.

The Module Pattern in JavaScript is a powerful way to organize code and manage scope. By using IIFE, we create a closure that helps keep variables and functions private while exposing only the public API. This pattern is widely used for building maintainable and modular code in JavaScript applications.
*/

const CounterModule = (function() {
    // Private variables
    let count = 0;

    // Private function
    function logCount() {
        console.log(`Current count: ${count}`);
    }

    // Public API (methods we want to expose)
    return {
        increment() {
            count++;
            logCount();
        },
        decrement() {
            count--;
            logCount();
        },
        getCount() {
            return count;
        }
    };
})();

// Usage
CounterModule.increment(); // Output: Current count: 1
CounterModule.increment(); // Output: Current count: 2
CounterModule.decrement(); // Output: Current count: 1
console.log(CounterModule.getCount()); // Output: 1


// Example

const ShoppingCart = (function() {
    // Private variables and functions
    let cart = [];

    function calculateTotal() {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    // Public API
    return {
        addItem(item) {
            cart.push(item);
            console.log(`Added ${item.name} to the cart.`);
        },
        removeItem(itemName) {
            cart = cart.filter(item => item.name !== itemName);
            console.log(`Removed ${itemName} from the cart.`);
        },
        getTotal() {
            return calculateTotal();
        },
        getCart() {
            return cart.slice(); // Return a copy to prevent external modification
        }
    };
})();

// Usage
ShoppingCart.addItem({ name: "Laptop", price: 1000, quantity: 1 });
ShoppingCart.addItem({ name: "Phone", price: 500, quantity: 2 });
console.log("Cart total:", ShoppingCart.getTotal()); // Output: Cart total: 2000
ShoppingCart.removeItem("Phone");
console.log("Updated Cart total:", ShoppingCart.getTotal()); // Output: Updated Cart total: 1000
console.log("Current Cart Items:", ShoppingCart.getCart()); // Output: [{ name: "Laptop", price: 1000, quantity: 1 }]
