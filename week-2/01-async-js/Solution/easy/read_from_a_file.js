// const fs = require('fs')

// async function PkRead() {
//     fs.readFile("abcd.txt", "utf-8", (err, data) => {
//         if (err) {
//             console.log("Error is here : ", err)
//             return -1; 
//         }
//         else {

//             // console.log(data)
//             return data
//             // cd(data)
//         }
//     })
// }

// // PkRead((data)=>{
// //     console.log(data) ;
// // })

// async function prit(data) {
//     console.log(data);
// }

// const val = await PkRead()
// prit(val)


// ---> USING ASYNC

// const fs = require('fs')

// async function PkRead(){
//     let p = new Promise((resolve)=>{

//     fs.readFile("abc.txt", "utf-8", (err, data) => {
//         if (err) {
//             console.log("Error is here : ", err)
//             return -1; 
//         }
//         else {
//             // console.log(data)
//             // return data
//             resolve(data)
//             // cd(data)
//         }
//     })

// })
// return p 
// }

// // PkRead((data)=>{
// //     console.log(data) ;
// // })

// function prit(data) {
//     console.log(data);
// }

// const val = PkRead()
// val.then(prit)


const fs = require('fs').promises // promisified the fs module

async function PkRead() {
    // let p = new Promise((resolve)=>{

    const val = await fs.readFile("abcd.txt", "utf-8", (err, data) => {
        if (err) {
            console.log("Error is here : ", err)
            return -1;
        }
        else {
            console.log("Hello from PKread")
            return data;
        }
    })

    // let sum = 0
    // for (let i = 0; i < 10000000000; i++) {
    //     sum += i;
    // }
    // console.log(sum)
    return val

    // })
    // return p 
}

// PkRead((data)=>{
//     console.log(data) ;
// })

async function prit() {
    console.log("Helo from Prit")
    const data = await PkRead() 
    console.log(data);
}

// val.then(prit)
function summ() {
    let sum = 0
    for (let i = 0; i < 10000000000; i++) {
        sum += i;
    }
    console.log("Sum from function ", sum)

    // let val = await sum ;
    // return val
}


prit()
setTimeout(() => {
    let sum = 0
    for (let i = 0; i < 10000000000; i++) {
        sum += i;
    }
    console.log(sum)

    // let val = await sum ;
    // return sum
}, 0)

// setTimeout()
// let sum = summ() ;
// console.log("Outside : ",sum)




// const fs = require('fs').promises; // Use the promise-based version of fs

// async function PkRead() {
//     try {
//         const data = await fs.readFile("abc.txt", "utf-8");
//         return data;
//     } catch (err) {
//         console.log("Error is here: ", err);
//         return -1;
//     }
// }

// async function prit() {
//     const val = await PkRead();
//     console.log(val);
// }

// prit(); // Call the function to print the file content

// this one is no need to understand if unable to.
// const fs = require('fs').promises;
// async function ReadMyFile() {
//     try{
//         const dta = await fs.readFile('abcd.txt', 'utf-8') ;
//         return dta;
//     }
//     catch(error){
//         console.log("Eror here: ")
//     }
// }

// async function Prnt() {
//     const data = await ReadMyFile()
//     console.log(data)
// }

// Prnt();


const fs = require('fs')

function READMYFILE(){
    return new Promise((response)=>{
        fs.readFile('abcd.txt' , 'utf-8', (err , data)=>{
            if(err)
                console.log("eror is here")
            else
             response(data) ;
        })
    })
}

// Using ".then" method and executioner function
// const val = READMYFILE() ;
// val.then((data)=>{
//     console.log(data) ;
// })

async function show(){
    let val = await READMYFILE() ;
    console.log(val)
}

show()