// 1. third min and third max ================================================ //

const thirdRule = (arr) => {
    const a = arr.sort((a, b) => { return a - b })[2];
    const b = (arr.sort((a, b) => { return a - b }).reverse())[2];
    return [a, b];
}

console.log('1. ' + thirdRule([5, 6, 12, 3, 7, 13, 2]));

// 2. curring in JS ========================================================== //

const mul = (a) => {
    return (b) => {
        return (c) => {
            return a * b * c;
        }
    }
}

console.log('2. ' + mul(2)(3)(4));

// 3. promise in JS ========================================================== //

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

callerFun();
