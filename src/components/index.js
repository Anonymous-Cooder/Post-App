

let input = [10, 22, 31];
let output = [];


const myFunc = () => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 5 !== 0 && input[i] % 11 !== 0) {

      console.log(input[i]);
      output.push(input[i])
      // i--;
    }

  }
}

myFunc();
console.log(output);


// for (let i = 0; i < input.length; i++) {
//   console.log(input[i] % 5, input[i] % 11);

// }
