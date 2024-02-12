const products = [
    { name: 'Shampo', price: 300 },
    { name: 'chiruni', price: 100 },
    { name: 'shirt', price: 700 },
    { name: 'pant', price: 900 },
    { name: 'Shirt', price: 900 },
]

function allProductsPrice(products) {
    let total = 0;

    for (const product of products) {
        total = total + product.price;
    }
    return total
}

const sum = allProductsPrice(products);
console.log('Purchasing product Total Price: ', sum);