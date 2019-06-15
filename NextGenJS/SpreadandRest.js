/* spread operator on array */
const  arr = [1, 2, 3];
console.log(arr);

// using ... (three dos as  spread operator)
const newarr = [...arr, 4, 5];
console.log(newarr);

// without three dots
const anotherNewArr = [arr,  4, 5];
console.log(anotherNewArr);



/* spread operator on objects */

d1 = {
    name : "Abdul Waheed",
    age : 20
};

console.log(d1);

d2 = {
    ...d1,
    status : "single"
}
console.log(d2);

// three dots as rest operator

const fun = (...args) => {
    return (args.filter(el => el === 1))
}


console.log(fun(1, 2, 3))

