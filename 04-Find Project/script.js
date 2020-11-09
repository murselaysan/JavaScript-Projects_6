/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations, and the forms of transport you can take to get there, have been provided.

  Return an array of where I can go if I only want to use a specific mode of transport.

  NOTE: only the names should be returned, not the means of transport.
*/
const londonLocations = [
  ["Angel", "tube", "bus"],
  ["Greenwich", "bus", "river boat", "dlr", "air line", "tube"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
]

// first method
// function getTransport(arr, value) {
//   let result = [];
//   for (i=0 ; i<arr.length ; i++) {
//     console.log(arr[i].filter(elem => elem === value))   // it comee array
//     if((arr[i].filter(elem => elem === value)).join('') === value){   // for comparison convert to string
//        result.push(arr[i][0]);
//    };
//   }
//   return result;
// }


//second Method
// function getTransport(arr, value) {
//   let result = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i].filter(element => element.indexOf(value) > -1).join('') === value) {
//       result.push(arr[i][0]);
//     };
//   }
//   return result;
// }

//third Method
function getTransport(arr, value) {
  let result = [];
  arr.forEach(element => {
    if (element.filter(item => item.indexOf(value) > -1).join('') === value) {
      result.push(element);
    }
})
return result;
}



console.log(getTransport(londonLocations, "river boat"));
