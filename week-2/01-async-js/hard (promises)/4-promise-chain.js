/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t*1000)
    })
}

function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t*1000)
    })
}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t*1000)
    })
}



function calculateTime(t1, t2, t3) {

    const start = Date.now();
    // return new Promise(wait1(t1)
    //     .then(wait2(t2))
    //         .then(wait3(t3))
    //             .then(() => {
    //                 const current = Date.now();
    //                 return current - start;
    //             })
    // )

    // No need to return new Promise, wait1(t1) will return its own.  But still we have used the new Promise below
    // return wait1(t1)
    // .then(() => wait2(t2))
    // .then(() => wait3(t3))
    // .then(() => {
    //     const current = Date.now();
    //     return current - start;
    // });

    // this is what promise chainging is: Here we called the resolved function first which returns just an empty Promise object
    return new Promise((resolve) => resolve()) // this and, 
    // return new Promise((resolve) => {resolve()}) // this are same. Both new Promise((resolve) => resolve()) and new Promise((resolve) => { resolve(); }) are ways to create a new promise that is immediately resolved
    // resolve() is a function that, when called, marks the promise as resolved. This means that the promise is complete, and the next .then handler in the chain will be called immediately.
    .then(()=> {return wait1(t1)})
    .then(()=> wait2(t2))
    .then(()=> wait3(t3))
    // wait1(t1), wait2(t2), and wait3(t3) are functions that return promises. The code is chaining these promises sequentially, meaning wait2(t2) will only execute after wait1(t1) has resolved, and wait3(t3) will only execute after wait2(t2) has resolved.
    .then(()=>{
        const current = Date.now() 
        return current-start
        // resolve(current-start) //--> The commented-out resolve(current - start); would be used if this were inside a promise executor function, but here return current - start; is the correct way to pass the final result to the next .then handler or the caller of the calculateTime function.
    })
}

module.exports = calculateTime;
