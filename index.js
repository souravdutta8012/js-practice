// 1. third min and third max ============================================ //

{
    // console.log('1. ');

    // const thirdRule = (arr) => {
    //     const a = arr.sort((a, b) => { return a - b })[2];
    //     const b = (arr.sort((a, b) => { return a - b }).reverse())[2];
    //     return [a, b];
    // }

    // console.log(thirdRule([5, 6, 12, 3, 7, 13, 2]));
}

// 2. curring in JS ====================================================== //

{
    // console.log('2. ');

    // const mul = (a) => {
    //     return (b) => {
    //         return (c) => {
    //             return a * b * c;
    //         }
    //     }
    // }

    // console.log(mul(2)(3)(4));

    // const sum = (a) => {
    //     return (b) => {
    //         if (b) {
    //             return sum(a + b);
    //         }
    //         return a;
    //     }
    // }

    // console.log(sum(2)(3)(4)());
}

// 3. promise in JS ====================================================== //

{
    // console.log('3. ');

    // let response = 0;

    // const testAsync = () => {
    //     return new Promise((resolve, reject) => {
    //         try {
    //             setTimeout(() => {
    //                 console.log("Hello from inside the testAsync function");
    //                 response = 100;
    //                 resolve();
    //             }, 3000)
    //         } catch {
    //             reject();
    //             throw Error("something went wrong");
    //         }
    //     });
    // }

    // async function callerFun() {
    //     console.log("Caller");
    //     console.log(response);
    //     await testAsync();
    //     console.log(response);
    //     console.log("After waiting");
    // }

    // callerFun();
}

// 4. spread and rest in JS ============================================== //

{
    // console.log('4. ');

    // let a = {
    //     firstName: "Sourav",
    //     lastName: "Dutta",
    //     blood: "A+"
    // };

    // let b = a;
    // b.firstName = "Jit";
    // console.log(a, b); // b is affecting a (not spread)

    // a = {
    //     firstName: "Sourav",
    //     lastName: "Dutta",
    //     blood: "A+"
    // };

    // let c = { ...a };
    // c.firstName = "Soham";
    // console.log(a, c); // c is not affecting a (spread)

    // a = {
    //     firstName: "Sourav",
    //     lastName: "Dutta",
    //     blood: "A+"
    // };

    // let { firstName, ...rest } = a;

    // console.log(firstName); // firstName is a value
    // console.log(rest); // rest is a object without the firstName
}

// 5. calculator in JS =================================================== //

{
    // console.log('5. ');

    // class Calc {
    //     constructor(num = 0) {
    //         this.num = num;
    //     }

    //     add(a) {
    //         return new Calc(this.num + a);
    //     }

    //     sub(a) {
    //         return new Calc(this.num - a);
    //     }

    //     mul(a) {
    //         return new Calc(this.num * a);
    //     }

    //     div(a) {
    //         return new Calc(this.num / a);
    //     }

    //     result() {
    //         return this.num;
    //     }
    // }

    // const calc = new Calc();
    // const result = calc.add(10).mul(5).sub(30).add(10).result();
    // console.log(result);
}

// 6. fetch api in JS ==================================================== //

import fetch from "node-fetch";

{
    // console.log('6. ');

    // await fetch('https://api2.binance.com/api/v3/ticker/24hr')
    //     .then(response => response.json())
    //     .then(data => console.log(data.length));
}

// 7. axios api call ===================================================== //

import axios from "axios";

{
    // console.log('7. ');

    // await axios.get('https://api2.binance.com/api/v3/ticker/24hr').then(response => console.log(response.data.length));
}

// 8. reduce in js ======================================================= //

{
    // console.log('8. ');

    // let x = [1, 2, 3];
    // let y = x.reduce((item, total) => {
    //     return total += item;
    // })

    // console.log(y);
}

// 9. multiple arguments in js =========================================== //

{
    // console.log('9. ');

    // function sumAll(...args) {
    //     let sum = 0;
    //     for (let i = 0; i < args.length; i++) {
    //         sum += args[i];
    //     }
    //     return sum;
    // }

    // console.log(sumAll(2, 5, 7, 12, 45, 10, 3));
}

// 10. sort in js ======================================================== //

{
    // console.log('10. ');

    // function sorting(arr) {
    //     return arr.sort();
    // }

    // console.log(sorting([3, 5, 7, 1, 0, 2, 9]));
}

// 11. some in js ======================================================== //

{
    // console.log('11. ');

    // function exists(arr) {

    //     let result = arr.some((item) => {
    //         return item % 2 === 0;
    //     });
    //     return result;
    // }

    // console.log(exists([3, 5, 7, 1, 5, 11, 9]));
}

// 12. palindrome in js ================================================== //

{
    // console.log('12. ');

    // function palindrome(a, b) {
    //     return a === b.split("").reverse().join("");
    // }

    // console.log(palindrome("abc", "bca"));
}

// 13. apply, call, bind in js =========================================== //

{
    // console.log('13. ');

    // let person = {
    //     fullName: function (city, country) {
    //         return this.firstName + " " + this.lastName + " " + city + " " + country;
    //     }
    // }

    // let person1 = {
    //     firstName: "jhon",
    //     lastName: "doe",
    // }

    // console.log(person.fullName.call(person1, "kolkata", "india"));
    // console.log(person.fullName.apply(person1, ["kolkata", "india"]));

    // const fullName = person.fullName.bind(person1, "kolkata", "india")
    // console.log(fullName());
}

// 14. setTimeout and setInterval in js ================================== //

{
    // console.log('14. ');

    // setTimeout(() => {
    //     console.log("inside setTimeout");
    // }, 2000);

    // let counter = 0;
    // let intervalId = setInterval(() => {
    //     counter++;
    //     if (counter > 1) {
    //         clearInterval(intervalId);
    //     }
    //     console.log("inside setInterval");
    // }, 2000);
}

// 15. closure in js ===================================================== //

{
    // console.log('15. ');

    // function parent() {
    //     let name = "sourav";
    //     console.log(name);
    //     function child() {
    //         console.log(name); // can access parent variable
    //     }
    //     child();
    //     return name;
    // }

    // console.log(parent());
}

// 16. generator func in js ============================================== //

{
    // console.log('16. ');

    // function* generator() {
    //     let i = 0;
    //     while (true) {
    //         yield i++;
    //     }
    // }

    // let func = generator();

    // console.log(func.next().value);
    // console.log(func.next().value);
    // console.log(func.next().value);
}

// 17. guess the output ================================================== //

{
    // console.log('17. ');

    // function func1() {
    //     for (let i = 0; i < 5; i++) {
    //         setTimeout(() => {
    //             console.log(i);
    //         }, 500)
    //     }
    // }

    // func1();

    // function func2() {
    //     for (var i = 0; i < 5; i++) {
    //         setTimeout(() => {
    //             console.log(i);
    //         }, 500)
    //     }
    // }

    // func2();
}

// 18. guess the output ================================================== //

{
    // console.log('18. ');

    // let x = {}, y = { name: "sourav" }, z = { name: "jit" };

    // x[y] = { name: "sam" };
    // console.log(JSON.stringify(x));
    // x[z] = { name: "som" };
    // console.log(JSON.stringify(x));
}

// 19. guess the output ================================================== //

{
    // console.log('19. ');

    // function func() {
    //     setTimeout(() => {
    //         console.log(x);
    //         console.log(y);
    //     }, 500);
    // }

    // var x = 2;
    // let y = 12;

    // func();
}

// 20. solve the problem ================================================= //

{
    // console.log('20. ');

    // const arr = [
    //     [1, 2, 3],
    //     1, 2, 3,
    //     [1, 2, 3, [3, 4, [3, 4]]],
    //     2
    // ];

    // const a = arr.toString();
    // let b = a.split(",");
    // b = b.map((item) => {
    //     return parseInt(item);
    // });

    // console.log(b);
}

// 21. make polyfill of map ============================================== //

{
    // console.log('21. ');

    // const arr = [1, 2, 3, 6, 7];

    // Array.prototype.myMap = function (cb) {
    //     let temp = [];
    //     for (let i = 0; i < this.length; i++) {
    //         temp.push(cb(this[i], i, this))
    //     }
    //     return temp;
    // }

    // const res = arr.myMap(item => item * 2);
    // console.log(res);
}

// 22. make polyfill of filter =========================================== //

{
    // console.log('22. ');

    // let a = [1, 2, 3, 4];

    // Array.prototype.myFilter = function (cb) {
    //     let temp = [];

    //     for (let i = 0; i < this.length; i++) {
    //         if (cb(this[i], i, this)) {
    //             temp.push(this[i]);
    //         }
    //     }

    //     return temp;
    // }

    // let c = a.myFilter(item => item % 2 === 0);
    // console.log(c);
}

// 23. make polyfill of find ============================================= //

{
    // console.log('23. ');

    // let a = [1, 2, 3, 4];

    // Array.prototype.myFind = function (cb) {
    //     let temp = null;

    //     for (let i = 0; i < this.length; i++) {
    //         if (cb(this[i], i, this)) {
    //             temp = this[i];
    //             break;
    //         }
    //     }

    //     return temp;
    // }

    // let c = a.myFind(item => item === 3);
    // console.log(c);
}

// 24. array sum problem pwc ============================================= //

{
    // console.log('24. ');

    // let a = [2, 3, 5, 4, 1, 0];
    // let z = 5;
    // let final = [];
    // for (let i = 0; i < a.length; i++) {
    //     for (let j = i + 1; j < a.length; j++) {
    //         if (a[i] + a[j] === z) {
    //             final.push([i, j]);
    //         }
    //     }
    // }
    // console.log(final);
}

// 25. api call problem pwc with fetch =================================== //

{
    // console.log('25. ');

    // async function caller() {
    //     let response1 = await one();
    //     console.log(response1);
    //     if (response1) {
    //         let response2 = await two(response1.id);
    //         console.log(response2);
    //     }
    // }

    // async function one() {
    //     let response = null;
    //     await fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()).then(res => response = res);
    //     return response;
    // }

    // async function two(id) {
    //     let response = null;
    //     await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
    //         method: 'PATCH'
    //     }).then(res => res.json()).then(res => response = res);
    //     return response;
    // }

    // caller();
}

// 26. api call problem pwc with promise ================================= //

{
    // console.log('26. ');

    // async function caller() {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             await fetch('https://jsonplaceholder.typicode.com/posts/1')
    //                 .then(res => res.json())
    //                 .then(async res => {
    //                     await fetch('https://jsonplaceholder.typicode.com/posts/' + res.id, {
    //                         method: 'PATCH'
    //                     }).then(res => res.json()).then(res => resolve(res));
    //                 });
    //         } catch {
    //             reject(null);
    //         }
    //     });
    // }

    // let res = await caller();
    // console.log(res);
}

// 27. make polyfill of reduce =========================================== //

{
    // console.log('27. ');

    // Array.prototype.Myreduce = function (cb) {
    //     let total = 0;
    //     for (let i = 0; i < this.length; i++) {
    //         total += this[i];
    //     }
    //     return total;
    // };

    // let a = [1, 2, 3, 4, 5];
    // let res = a.Myreduce((item, total) => {
    //     return total += item;
    // });

    // console.log(res);
}

// 28. coditas question ================================================== //

{
    // console.log('28. ');

    // const sampleArr = [1, 2, 4, 3, 4, 2, 5].map(val => ({ val }));

    // console.log(sampleArr); // [{"val":1},{"val":2},{"val":4},{"val":3},{"val":4},{"val":2},{"val":5}]

    // let res = [];

    // sampleArr.forEach(item => {
    //     if (!res.find(t => t.val === item.val)) {
    //         res.push(item);
    //     }
    // });

    // sampleArr.sort((a, b) => (a.val - b.val));

    // console.log(res); // [{"val":1},{"val":2},{"val":4},{"val":3},{"val":5}]
}

// 29. guess the output ================================================== //

{
    // console.log('29. ');

    // let a = [1, true, "ok", null, undefined, ''];
    // console.log(a.map(x => x));
    // console.log(a.filter(x => x));
    // console.log(a.find(x => x));
    // console.log(a.reduce(x => x));
    // console.log(a.some(x => x));
    // console.log(a.every(x => x));
}

// 30. find all possible palindrome ====================================== //

{
    // console.log('30. ');

    // let a = 'aabbaa';
    // let count = 0;
    // for (let i = 0; i < a.length; i++) {
    //     for (let j = i + 1; j < a.length; j++) {
    //         if (a.slice(i, j + 1) === a.slice(i, j + 1).split('').reverse().join('')) {
    //             count++;
    //             console.log(a.slice(i, j + 1));
    //         }
    //     }
    // }
    // console.log(count);
}

// 31. deep copy & shallow copy ========================================= //

{
    // console.log('31. ');

    // let a = {
    //     "firstname": "sourav",
    //     "lastname": "dutta",
    //     "user": {
    //         "firstname": "sourav",
    //         "lastname": "dutta",
    //     }
    // }
    // let b = JSON.parse(JSON.stringify(a)); // deep copy
    // b.user.firstname = "jit";
    // b.user.lastname = "saha";
    // console.log(a);
    // console.log(b);
}

// 32. guess the output ================================================ //

{
    // console.log('32. ');

    // console.log(4 + "3");
    // console.log(4 - "3");
    // console.log(4 * "3");
    // console.log(4 / "3");
}

// 33. max distance between letter ===================================== //

{
    // console.log('33. ');

    // let input = "sdasd adasd a das das dasda daaddd";
    // let letter = "a";

    // let dis = 0;
    // let found = false;
    // let count = 0;
    // input.split('').forEach((item) => {
    //     if (item === letter) {
    //         if (!found) {
    //             found = true;
    //         }
    //         dis = count;
    //     } else if (found && item !== letter && item !== " ") {
    //         count++;
    //     }
    // });
    // console.log(dis);
}

// 34. repeat number =================================================== //

{
    // console.log('34. ');

    // let input = [2, 3, 4, 3, 6, 5, 6, 7, 6, 8];
    // let res = [];

    // input = input.sort((a, b) => (a - b));
    // let flag = input[0];
    // let count = 0;
    // input.forEach((item, i) => {
    //     if (item === flag) {
    //         count++;
    //     } else {
    //         res.push({ [flag]: count });
    //         flag = item;
    //         count = 1;
    //     }
    //     if (input.length - 1 === i) {
    //         res.push({ [flag]: count });
    //     }
    // });
    // console.log(res);
}
