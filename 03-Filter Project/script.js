/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended AT LEAST 8 classes
*/
const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
]

function getTransport(arr, value) {
  let result = [];
  for (i=0 ; i<arr.length ; i++) {
    if(arr[i].filter(elem => elem > value) > value){
      result.push(arr[i][0]);
    };
  }
  return result;
}
console.log(getTransport(attendances, 8));

