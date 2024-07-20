const fs = require("fs").promises

async function Cleanerr() {
    // let data = await fs.readFile("abc.txt", "utf-8", (err, val) => {
    //     if (err) {
    //         console.log("Error is here : ", err)
    //     }
    //     else {
    //         return val;
    //     }
    // })

    // other way to do the  above one using  try and catch
    let data
    try{
        data =await fs.readFile("abcd.txt", "utf-8" ); 
    }
    catch(err){
        console.log("ERROR !! Reading")
    }
    console.log(`Data Before ${data}`)
    let new_data = "";
    let temp = []
    // let i = 0
    // while (data[i] == ' ' && i < data.length) {
    //     i++;
    // }
    let str = ""
    for (let i = 0; i < data.length; i++) {
        while (data[i] == ' ' && i < data.length) {
            if (str != "") {
                temp.push(str);
                str = ""
            }
            i++ ;
        }
        str += data[i];
    }

    if(str!= "")temp.push(str)

    for (let i = 0; i < temp.length; i++) {
        new_data+=(temp[i]) ;
        if(i != (temp.length-1)){
            new_data+=(' ');
        }
    }
    console.log(`After writing : ${new_data}`)
    await fs.writeFile("abcd.txt" , new_data , "utf-8") ;
}


Cleanerr()