// counter using setTimeout
function counter(n) {
    for (let i = 1; i<=n; i++) {
        setTimeout(() => {
            console.log(i) ;

        }, 1000*i);

    }
}
counter(n)

// counter : using setInterval
// function counter(n){
//     let i =1 
//     let getId = setInterval(()=>{
//         console.log(i)
//         i++ ;
//         if(i>n){
//             clearInterval(getId)
//         }
//     },1000)
// }
// counter(10)
