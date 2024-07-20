const fs = require("fs")
//synchrounous 
function WriteToFile() {
    fs.writeFile("abcd.txt", "New text ", "utf-8",(err)=>{
        if(err)console.log("Error in writing")
        else
            console.log("Done!")
    })
}

function readFromFile() {
    // const val = await fs.readFile("abcd.txt", "utf-8", (err, data) => {
    //     if (err) {
    //         console.log("the error is : ", err) 
    //     }
    //     else {
    //         return data
    //     }
    // })

    // return val 

    return new Promise(function(resolve){
        fs.readFile("abcd.txt", "utf-8",(err , data)=>{
            if(err)console.log(err) ;
            else
            resolve(data) ;
            // return data ;
        });
    })
    
}

async function helper(){
    const val = await readFromFile();
    console.log(val)
    // return val
}

console.log("Before : ")
helper()
WriteToFile()
console.log("After : ")
helper()