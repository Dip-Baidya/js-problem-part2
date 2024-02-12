const products = [
    { name: 'Shampo', price: 300, quantity: 5 },
    { name: 'chiruni', price: 100, quantity: 4 },
    { name: 'shirt', price: 700, quantity: 3 },
    { name: 'pant', price: 900, quantity: 4 },
    { name: 'Shirt', price: 900, quantity: 1 },
]


function cartTotal(products) {

    let total = 0;
    for (const product of products) {
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;

}


const shoppingCart = cartTotal(products);


console.log("Total Price: ", shoppingCart);