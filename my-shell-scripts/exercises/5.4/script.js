let themeButton = document.querySelector("#theme-button");
  themeButton.addEventListener("click", function() {
    
  let header = document.querySelector("header");
  let elementTheme = document.createElement("div");
  elementTheme.className = "element-theme";

  header.appendChild(elementTheme);

  elementThemeSliders(elementTheme);
  elementThemeSquares(elementTheme);
})

function elementThemeSliders(elementTheme) {
  let elementThemeSliders = document.createElement("div");
  elementThemeSliders.className = "element-theme-sliders";
  elementTheme.appendChild(elementThemeSliders);

  // elementThemeSliders.innerHTML = "Cor de fundo";
  // elementSlider(elementThemeSliders);
  elementThemeSliders.innerHTML += "<br><br>Tamanho da letra";
  elementSlider(elementThemeSliders);
  let text = document.querySelector(".container");
  text = elementThemeSliders.value;
  
  elementThemeSliders.oninput = function() {
    console.log(this.value);
  }
}



function elementSlider(where) {
  let slider = document.createElement("input");
  slider.setAttribute("id", "element-slider");
  slider.setAttribute("type", "range");
  slider.setAttribute("min", "10");
  slider.setAttribute("max", "100");
  slider.setAttribute("value", "60");
  where.appendChild(slider);

  return slider;
}

function elementThemeSquares(elementTheme) {
  let elementThemeFontSquare = document.createElement("div");
  elementThemeFontSquare.className = "element-theme-squares";
  elementTheme.appendChild(elementThemeFontSquare);

  let elementThemeDisplaySquare = document.createElement("div");
  elementThemeDisplaySquare.className = "element-theme-squares";
  elementTheme.appendChild(elementThemeDisplaySquare);

}