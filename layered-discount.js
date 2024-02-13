

function layerDiscountedTotal(quantity) {

    const first100Price = 100;
    const secound100Price = 90;
    const above100Price = 70;

    if (quantity <= 100) {

        const total = first100Price * quantity;
        return total;

    }
    else if (quantity <= 200) {
        const first100Total = first100Price * 100;
        const remainingQuantity = quantity - 100;
        const remainingTotal = secound100Price * remainingQuantity;

        const total = first100Total + remainingTotal;
        return total;

    }
    else {

        const first100Total = first100Price * 100;
        const secound100Total = secound100Price * 100;

        const remainingQuantity = quantity - 200;

        const remainingTotal = remainingQuantity * above100Price;

        const total = first100Total + secound100Total + remainingTotal;

        return total;
    }

}

const totalSum = layerDiscountedTotal(300);

console.log('Total Sum Of Price According To quantity: ', totalSum);