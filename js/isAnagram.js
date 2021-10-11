// // Answer

let isAnagram = function (str1, str2){
  
   let one = str1.split('').sort().join('');
   let two = str2.split('').sort().join('');
 for(let i=0; i<isAnagram.length; i++)
   if(one===two){
   return true
}else{
   return false
}
}

console.log(isAnagram('india','nidia'));
console.log(isAnagram('hackathon','achcthoon'));
console.log(isAnagram('smile','similie'));
console.log(isAnagram('dolb','bold'));


// Other Methods of solving this

// 1)

// let isAnagram = function (str1, str2){
//    let one = str1.toLowerCase().split('').sort().join('');
//    let two = str2.toLowerCase().split('').sort().join('');
// return(one===two)
// }

// console.log(isAnagram('india','nidia'));
// console.log(isAnagram('hackathon','achcthoon'));



// 2)
// let isAnagram = (str1, str2)=>{
//   str1=str1.toUpperCase().split('').sort().join('');
//   str2=str2.toUpperCase().split('').sort().join('');
//   return str1=== str2;
// };
// console.log(
//     isAnagram('india','nidia'),
//     isAnagram('hackathon','achcthoon')
//     );


// 3)
// let isAnagram = function (str1, str2){
//       let one = str1.toUpperCase().split('').sort().join('');
//       let two = str2.toUpperCase().split('').sort().join('');
//   console.log (one===two) 
//    }
   
//    isAnagram('india','nidia');
//    isAnagram('hackathon','achcthoon');


// 4)
// const isAnagram = function (a,b){
//    let one = a.toLowerCase().split('').sort().join('');
//    let two = b.toLowerCase().split('').sort().join('');
//    console.log(one===two)
// }
// isAnagram('india','nidia');
// isAnagram('hackathon','achcthoon');



