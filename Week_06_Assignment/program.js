function firstElement(arr,n) {
    if(arr.length === 0 || n < 0)
    {
        return [];
    }

    if(n === undefined) // if Not declear
    {
        return arr[0];
    }

    if(n > arr.length)
        {
            return arr
        }

    return arr.slice(0,n); // range 
}

console.log(firstElement([7,9,0,-2]))
console.log(firstElement([], 0))
console.log(firstElement([7,9,0,-2], 3))
console.log(firstElement([7,9,0,-2], 6))
console.log(firstElement([7,9,0,-2], -3))