const fs = require("fs").promises

//synchrounous 
function WriteToFile() {
    fs.writeFile("abc.txt", "New text ", "utf-8")
}

async function readFromFile() {
    const val = await fs.readFile("abc.txt", "utf-8", (err, data) => {
        if (err) {
            console.log("the error is : ", err)
        }
        else {
            return data
        }
    })

    return val
}

async function helper(){
    const val = await readFromFile();
    console.log(val)
}

// console.log("Before : ",helper())
// WriteToFile()
// console.log("After : ",helper())

(async ()=>{
    console.log("Before write : ") ;
    await helper() ;

     WriteToFile()
    console.log("After write : ") ;
    await helper() ;

})()


// const fs = require("fs").promises
// const prompt = require("prompt-sync")()
// async function WriteToFile() {
//     await fs.writeFile("abc.txt", "New text ", "utf-8")
// }

// async function readFromFile() {
//     const val = await fs.readFile("abc.txt", "utf-8", (err, data) => {
//         if (err) {
//             console.log("the error is : ", err)
//         }
//         else {
//             return data
//         }
//     })

//     return val
// }

// async function helper(){
//     const val = await readFromFile();
//     console.log(val)
// }

// // console.log("Before : ",helper())
// // WriteToFile()
// // console.log("After : ",helper())

// (async ()=>{
//     console.log("Before write : ") ;
//     await helper() ;

//     await WriteToFile()
//     console.log("After write : ") ;
//     await helper() ;

// })()

