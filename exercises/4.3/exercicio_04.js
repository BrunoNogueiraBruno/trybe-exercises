n = 5;
inputLine = "";

for (width = 1; width <= n; width += 0.5) {
  for (sideLine = 1; sideLine < width/2; sideLine =+ 1) {
    inputLine += "*"
  }
  inputLine += "*"
  for (sideLine = 1; sideLine < width + 0.5; sideLine =+ 1) {
    inputLine += "*"
  }
}

for (height = 1; height <= n; height +=1) {
  console.log(inputLine);
}
