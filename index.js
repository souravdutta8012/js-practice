import fetch from "node-fetch";
import axios from "axios";

// 1. third min and third max ================================================ //

console.log('1. ');

const thirdRule = (arr) => {
    const a = arr.sort((a, b) => { return a - b })[2];
    const b = (arr.sort((a, b) => { return a - b }).reverse())[2];
    return [a, b];
}

console.log(thirdRule([5, 6, 12, 3, 7, 13, 2]));

// 2. curring in JS ========================================================== //

console.log('2. ');

const mul = (a) => {
    return (b) => {
        return (c) => {
            return a * b * c;
        }
    }
}

console.log(mul(2)(3)(4));

const sum = (a) => {
    return (b) => {
        if (b) {
            return sum(a + b);
        }
        return a;
    }
}

console.log(sum(2)(3)(4)());

// 3. promise in JS ========================================================== //

console.log('3. ');

let response = 0;

const testAsync = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                console.log("Hello from inside the testAsync function");
                response = 100;
                resolve();
            }, 3000)
        } catch {
            reject();
            throw Error("something went wrong");
        }
    });
}

async function callerFun() {
    console.log("Caller");
    console.log(response);
    await testAsync();
    console.log(response);
    console.log("After waiting");
}

// callerFun();

// 4. spread and rest in JS =================================================== //

console.log('4. ');

let a = {
    firstName: "Sourav",
    lastName: "Dutta",
    blood: "A+"
};

let b = a;
b.firstName = "Jit";
console.log(a, b); // b is affecting a (not spread)

a = {
    firstName: "Sourav",
    lastName: "Dutta",
    blood: "A+"
};

let c = { ...a };
c.firstName = "Soham";
console.log(a, c); // c is not affecting a (spread)

a = {
    firstName: "Sourav",
    lastName: "Dutta",
    blood: "A+"
};

let { firstName, ...rest } = a;

console.log(firstName); // firstName is a value
console.log(rest); // rest is a object without the firstName

// 5. calculator in JS =================================================== //

console.log('5. ');

class Calc {
    constructor(num = 0) {
        this.num = num;
    }

    add(a) {
        return new Calc(this.num + a);
    }

    sub(a) {
        return new Calc(this.num - a);
    }

    mul(a) {
        return new Calc(this.num * a);
    }

    div(a) {
        return new Calc(this.num / a);
    }

    result() {
        return this.num;
    }
}

const calc = new Calc();
const result = calc.add(10).mul(5).sub(30).add(10).result();
console.log(result);

// 6. fetch api in JS ==================================================== //

console.log('6. ');

await fetch('https://api2.binance.com/api/v3/ticker/24hr')
    .then(response => response.json())
    .then(data => console.log(data.length));

// 7. axios api call ===================================================== //

console.log('7. ');

await axios.get('https://api2.binance.com/api/v3/ticker/24hr').then(response => console.log(response.data.length));

// 8. reduce in js ======================================================= //

console.log('8. ');

let x = [1, 2, 3];
let y = x.reduce((item, total) => {
    return total += item;
})

console.log(y);

// 9. multiple arguments in js =========================================== //

console.log('9. ');

function sumAll(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

console.log(sumAll(2, 5, 7, 12, 45, 10, 3));

// 10. sort in js ======================================================== //

console.log('10. ');

function sorting(arr) {
    return arr.sort();
}

console.log(sorting([3, 5, 7, 1, 0, 2, 9]));

// 11. some in js ======================================================== //

console.log('11. ');

function exists(arr) {

    let result = arr.some((item) => {
        return item % 2 === 0;
    });
    return result;
}

console.log(exists([3, 5, 7, 1, 5, 11, 9]))

// 12. palindrome in js ================================================== //

console.log('12. ');

function palindrome(a, b) {
    return a === b.split("").reverse().join("");
}

console.log(palindrome("abc", "bca"));

// 13. apply, call, bind in js =========================================== //

console.log('13. ');

let person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + " " + city + " " + country;
    }
}

let person1 = {
    firstName: "jhon",
    lastName: "doe",
}

console.log(person.fullName.call(person1, "kolkata", "india"));
console.log(person.fullName.apply(person1, ["kolkata", "india"]));

const fullName = person.fullName.bind(person1, "kolkata", "india")
console.log(fullName());

// 14. apply, call, bind in js =========================================== //

console.log('14. ');
