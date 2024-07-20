/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


 

// more clear and understandable
function wait(n) {
    return new Promise((resolve) => {
        setTimeout(resolve, n*1000)
    })
}

module.exports = wait;




// error code 1 ;
//  
// function wait(n) {
//     return new Promise((resolve)=>{
//         setTimeout((resolve)=>{ // why declaring a parameter with the same same as resolve
            // return resolve() --> Mistake 1 : Returning function(as resolve is a function you don't return a fucntion you just call it)
//         },n*1000)
//     })
// }

// correct one
// function wait(n) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, n * 1000); // Assuming n is in seconds, multiply by 1000 to convert to milliseconds
//     });
// }

