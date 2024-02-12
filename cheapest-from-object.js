const phonesData = [
    { name: 'Samsung', price: 20000, camera: '12mp', color: 'pink' },
    { name: 'Apple', price: 120000, camera: '12mp', color: 'pink' },
    { name: 'Oppo', price: 30000, camera: '12mp', color: 'pink' },
    { name: 'Itel', price: 10000, camera: '12mp', color: 'pink' },
    { name: 'Nokia', price: 30000, camera: '12mp', color: 'pink' },
    { name: 'HTC', price: 70000, camera: '12mp', color: 'pink' },
    { name: 'HTC', price: 2000, camera: '12mp', color: 'pink' },
]

function getChepestPhone(phones) {

    let min = phones[0];

    for(const phone of phones){
        if (phone.price < min.price){
            min = phone;
        }
    }
    return min;

}

const cheap = getChepestPhone(phonesData);

console.log("Cheapest phone is : ", cheap);


