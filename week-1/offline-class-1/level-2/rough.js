// const currentMonth = new Date();
// console.log(currentMonth.getDate())
// console.log(currentMonth.getHours())
// console.log(currentMonth.getMinutes())
// console.log(currentMonth.getSeconds())
function calculateSUm() {
    let a = 0 ;
    for (let i = 0; i < 10; i++) {
        a+= i 
    }
    return a ;
}

const beforeData = new Date() ;
const beforeTimeinMs  = beforeData.getTime() ;
console.log(calculateSUm() );
const AfterData = new Date() ;
const AfterTimeinMs  = AfterData.getTime() ;

console.log(AfterTimeinMs - beforeTimeinMs) ;