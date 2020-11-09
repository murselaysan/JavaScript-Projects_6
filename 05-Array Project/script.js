
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

function express(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = [arr[i], arr[i].substring(0, 3), arr[i].length]
  }
  return arr;
}

console.log(express(countries));



// Add "-" after every even number

const numbers = "315469781318158";

function lastArray(data) {
  let arr = data.toString().split('');
  // let evenNum = arr.filter(number => number%2 === 0);
  // console.log(evenNum);
  arr.forEach(element => {
    if (Number(element) % 2 === 0) {
      console.log('er')
      arr[arr.indexOf(element)] = Number(element) + "-"
    }
  });

  // for (let i = 0; i < arr.length - 1; i++) {
  //   if (arr[i] % 2 === 0) {
  //     arr[i] = Number(arr[i]) + "-"
  //   }
  // }
  return arr.join("");
}
console.log(lastArray(numbers));

/*
  function evenNumbers(num) {
    if(typeof num === 'number') {
      let str = num.toString();
      let a = "";
      for(var i=0; i< str.length; i++) {
        if(parseInt(str[i]) % 2 == 0  && i !== str.length - 1) {
          a = a + str[i] + "-";
        } else {
          a += str[i];
        }
      }
      return a;
    } else {
      return "It is not a number";
    }
  }
  console.log(evenNumbers(numbers));
  */


 var arr = [5, 24, 122, 625, 3125, 15625];
 function isOdd(number) {
   return number % 2 == 1;
 }
 function divide(number) {
   return number / 25;
 }
 console.log(arr.filter(isOdd).map(divide));