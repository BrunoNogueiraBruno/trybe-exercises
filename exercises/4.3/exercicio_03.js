let n = 5;
let lineIndex;
let columnIndex;
let inputLine = '';
let inputPosition = n;

for (lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + "*";
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};