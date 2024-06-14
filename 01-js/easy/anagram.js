/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
let len1 = str1.length ;
let len2 = str2.length ;
if(len1 != len2)return false ;
let mymap = new Map() ;



for (let i = 0; i < len1; i++) {
  // mymap[str1[index]]++ ;
  let char = str1[i] ;
  if(mymap.has(char)){
    mymap.set(char , mymap.get(char) + 1) ;
  }
  else {
    mymap.set(char , 1) ;
  }
}


for (let i = 0; i < len1; i++) {

  let char = str2[i] ;
  if(mymap.has(char) && mymap.get(char)){
    mymap.set(char , mymap.get(char) - 1) ;
  }
  else {
    return false ;
  }
}

// for (let index = 0; index < len2; index++) {
//   mymap[str2[index]]-- ;
// }

for (const value of mymap.values()) {
  if(value != 0){
    return false ;
  }
}

// for (let index = 0; index < len1; index++) {
//   let char =  str1[index] ;
//   if(mymap.get(char) != 0){
//     return false; 
//   }
// }
return true ;

}


let ans=  isAnagram("helo" , "pelh") ;
if(ans){
  console.log("yes, the strings provided are anagram " , ans) ;
  }
  else
console.log("No, the strings provided are not anagram " , ans) ;

// module.exports = isAnagram;
