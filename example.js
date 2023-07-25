// 1. observable example ============================================== //

{
    // import { Observable } from 'rxjs';

    // const observable = new Observable((subscriber) => {
    //     subscriber.next(1);
    //     subscriber.next(2);
    //     subscriber.next(3);
    //     setTimeout(() => {
    //         subscriber.next(4);
    //         subscriber.complete();
    //     }, 1000);
    // });

    // console.log('just before subscribe');
    // observable.subscribe({
    //     next(x) {
    //         console.log('got value ' + x);
    //     },
    //     error(err) {
    //         console.error('something wrong occurred: ' + err);
    //     },
    //     complete() {
    //         console.log('done');
    //     },
    // });
    // console.log('just after subscribe');
}

// 2. promise example ================================================= //

{
    // const test = (v1, v2) => {
    //     return new Promise((resolve, reject) => {
    //         if (v1 === v2) {
    //             resolve();
    //         } else {
    //             reject();
    //         }
    //     })
    // };

    // function demoPromise() {
    //     test("geeksforgeeks", "geeksforgeeks")
    //         .then(function () {
    //             console.log("Promise resolved successfully");
    //         })
    //         .catch(function () {
    //             console.log("Promise is rejected");
    //         });
    // }

    // demoPromise();
}

// 3. async/await example ============================================= //

{
    // const test = (v1, v2) => {
    //     return new Promise((resolve, reject) => {
    //         if (v1 === v2) {
    //             resolve("Strings are same");
    //         } else {
    //             reject("Strings are not same");
    //         }
    //     })
    // };

    // async function demoPromise() {
    //     try {
    //         let message = await test("geeksforgeeks", "geeksforgeeks");
    //         console.log(message);
    //     } catch (error) {
    //         console.log("Error: " + error);
    //     }
    // }

    // demoPromise();
}