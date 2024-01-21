


const products = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Headphones", price: 49.99 },
    { id: 3, name: "Mouse", price: 19.99 }
];

const cart = [];

function displayProducts() {
    console.log("Available Products:");
    products.forEach(product => {
        console.log(`${product.id}. ${product.name} - $${product.price}`);
    });
}

function addToCart(productId, quantity) {
    const selectedProduct = products.find(product => product.id === productId);

    if (selectedProduct) {
        cart.push({ product: selectedProduct, quantity });
        console.log(`${quantity} ${selectedProduct.name}(s) added to the cart.`);
    } else {
        console.log("Invalid product selection.");
    }
}

function calculateTotal() {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
}

function displayCart() {
    console.log("\nShopping Cart:");
    cart.forEach(item => {
        console.log(`${item.quantity} ${item.product.name}(s) - $${(item.product.price * item.quantity)} each`);
    });
    console.log(`\nTotal: $${calculateTotal()}`);
}


function startShopping() {
    displayProducts();

    const productId = prompt("Enter the product number you want to add to the cart (0 to checkout): ");
    if (productId === '0') {
        displayCart();
    } else if (productId >= '1' && productId <= '3') {
        const quantity = prompt(`Enter the quantity of ${products[productId - 1].name}: `);
        addToCart(parseInt(productId), parseInt(quantity));
        startShopping();
    } else {
        console.log("Invalid choice. Please enter a valid product number.");
        startShopping();
    }
}

startShopping();
// const productId = prompt("Enter the product number you want to add to the cart (0 to checkout): ");
