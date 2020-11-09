/*


Create a function called sortAges which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted ages in ascending order 
  - HARD MODE - without using the built-in javascript sort method 😎

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/ 

const arrCase1 = [false, 100, [24, 33], "💩", 55, "🥵", null, 45, "Sanyia", 66, "James", 23];
const arrCase2 = ["28", 100, 60, "Elamin", 55, "75", "🍕"];
console.log(typeof arrCase2[2]);

function sortAges(arr) {
  let result = [];
// first try this one without for loop

    // if (typeof arr[0] === "number") {
    //   result.push(arr[0]);
    // }
    // if (typeof arr[1] === "number") {
    //   result.push(arr[1]);
    // }
    // if (typeof arr[2] === "number") {
    //   result.push(arr[2]);
    // }
    // if (typeof arr[3] === "number") {
    //   result.push(arr[3]);
    // }
    // if (typeof arr[4] === "number") {
    //   result.push(arr[4]);
    // }
    // if (typeof arr[5] === "number") {
    //   result.push(arr[5]);
    // }
    // if (typeof arr[6] === "number") {
    //   result.push(arr[6]);
    // }
    // if (typeof arr[7] === "number") {
    //   result.push(arr[7]);
    // }
    // if (typeof arr[8] === "number") {
    //   result.push(arr[8]);
    // }
    // if (typeof arr[9] === "number") {
    //   result.push(arr[9]);
    // }
    // if (typeof arr[10] === "number") {
    //   result.push(arr[10]);
    // }

    // then make solution with for loop
    for (i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        result.push(arr[i]);
      }
    }
    //return result.sort((a, b) => b - a);  //descending 
    return result.sort((a, b) => a - b);  //ascending

    // this is alternative but not working properly  
  //   for (i = 0; i < arr.length; i++) {
  //     if ((typeof arr[i] && typeof arr[i+1]) !== "number" || (typeof arr[i] && typeof arr[i+1]) === "object") {
  //       arr.splice(i,2);
  //     }
  //     if (typeof arr[i] !== "number" || typeof arr[i] === "object") {
  //       arr.splice(i,1);
  //     }
  //   }
  // return arr.sort((a, b) => b - a);

}
  
  console.log(sortAges(arrCase1));

  console.log(sortAges(arrCase2));

  // console.log(arrCase2.sort((a, b) => a - b));


/* ======= TESTS ===== */

function testArrays(a, b) {
  // if (a === b) return true;
  // if (a == null || b == null) return false;
  if (a.length != b.length) return "FAILED";

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return "FAILED";
  }
  return "PASSED";
}

console.log("sortAges function works - case 1 : " + testArrays(sortAges(arrCase1), [23, 45, 55, 66, 100]));

console.log( "sortAges function works - case 2 : " + testArrays(sortAges(arrCase2), [55, 60, 100]));
