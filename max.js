

function getMax(num1, num2) {
    if (num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max1 = getMax(96, 79);
const max2 = getMax(50, 60);

const ultimateMax = getMax(max1, max2)


console.log("max Number : ", max1);
console.log("max Number : ", max2);

console.log("Ultimate max Number : ", ultimateMax);
