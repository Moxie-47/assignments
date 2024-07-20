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
}

// console.log("Before : ")
// helper()
// WriteToFile()
// console.log("After : ")
// helper()

(async ()=>{
    console.log("Before write : ") ;
    await helper() ;

    WriteToFile()
    console.log("After write : ") ;
    await helper() ;

})()



/*

const fs = require("fs").promises;

// Asynchronous function to write to a file
async function WriteToFile() {
    try {
        await fs.writeFile("abcd.txt", "New text ", "utf-8");
        console.log("Done!");
    } catch (err) {
        console.log("Error in writing", err);
    }
}

// Asynchronous function to read from a file
async function readFromFile() {
    try {
        const data = await fs.readFile("abcd.txt", "utf-8");
        return data;
    } catch (err) {
        console.log("Error reading file", err);
    }
}

async function main() {
    console.log("Before : ");
    const originalData = await readFromFile();
    console.log(originalData);

    console.log("After : ");
    await WriteToFile();

    const newData = await readFromFile();
    console.log(newData);
}

main();


*/