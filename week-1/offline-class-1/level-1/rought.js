// let initialArray = ['d', 1, "helo"]
// function logCall(str) {
//     console.log(str);
// }
// initialArray.forEach(logCall);



// console.log(initialArray)
// console.log(' ')
// initialArray.unshift('play and learn')
// console.log(initialArray)

// initialArray.shift()
// console.log(initialArray)



function findSum(n) {
    let ans = 0;
    for (let i = 0; i<n; i++) {
      ans += i;
    }
    console.log(ans)
    return ans;
  }
  
  function findSumTill100() {
    return findSum(100);
  }
  
  console.log(setTimeout(findSumTill100, 1000))
  console.log("hello world");