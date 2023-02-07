let input = `3
1
2
5`;
let lines = input.split('\n');

const T = Number(lines.shift());
for(let i = 0; i < T; i++) {

  let string = "";

  for(let x = 0; x < Number(lines[i]); x++) { 
    for(let j = 0; j < Number(lines[i]); j++) { 
      string = string + "*";
    }
    string = string +  "\n"
  }
  console.log(string)
}