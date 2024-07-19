const myColor = ["Red", "Green","White","Black"];
const stringArr = myColor.join(',')
// console.log(stringArr); // Red,Green,White,Black
// console.log(typeof stringArr)
const joinByPlus = myColor.join('+')
// console.log(joinByPlus); // Red+Green+White+Black


let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let frequency = arr1.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
}, {});
// console.log(frequency)
let maxFrequency = 0;
let mostFrequentElement;

for (let [key, value] of Object.entries(frequency)) {
    if (value > maxFrequency) {
        maxFrequency = value;
        mostFrequentElement = key;
    }
}

// console.log(`${mostFrequentElement} (${maxFrequency} times)`); // Output: a (5 times)

function truncateString(str,num) {
    return str.slice(0,num);
}
// console.log(truncateString("Robin Singh",4))

function captalizeWords(str) {
    return str.split(' ').map(word =>
    {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
    ).join(' ')
}
// console.log(captalizeWords("js string exercises"));

function arrBetween(start,end,arr) {

    let returnArr =[]

    for (let index = 0; index < arr.length; index++) {
        if( start < arr[index] && arr[index] < end )
        {
            returnArr.push(arr[index])
        }
    }
    return returnArr;
    
}
console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])) 
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]))
console.log(arrBetween(7, 32, [1, 2, 3, 78]));

function findIndex(arr,val){
        return arr.indexOf(val)
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"))
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
console.log(findIndex(["a", "g", "y", "d"], "d"));
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"))