//   Find The tallest Value
const heights = [12, 12, 13, 14, 15, 16, 13, 19, 10, 20, 22, 25, 29, 102, 102.5, 102.9];



function getMax(numbers) {

    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}


const max = getMax(heights);

console.log("Maximum value is: ", max)



//   Find The Smatllest Value


const heightsMarks = [50,50,51,60,90,60,45,82,104];


function maxMark(numbers) {
    
    let storeMark = numbers[0];
    for (const number of numbers) {
        if(number < storeMark){
            storeMark =number;
        }
    }
    return storeMark;
}

const stuMark = maxMark(heightsMarks);


console.log("Student lowest Mark: ", stuMark);
