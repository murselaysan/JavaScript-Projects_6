/*
  You are given a program that logs pairings between two students group
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 11 to produce an array with valid content
  - Do not edit any of the existing code
*/
var pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, [3, 0], "whoops"];

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

var pairsByIndex = pairsByIndexRaw.filter(
  element => typeof element === 'object' && element !== null && element.length === 2)
console.log(pairsByIndex);


var pairs = pairsByIndex.map(function(indexes) {
  var student = students[indexes[0]];
  var mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);
