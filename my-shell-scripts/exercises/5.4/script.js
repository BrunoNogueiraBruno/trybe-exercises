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
  elementSlider(elementThemeSliders, "slider-font-size", "slider-font-size-btn");
}

function elementSlider(where, id, btnId) {
  let slider = document.createElement("div");
  slider.className = "element-slider";
  slider.id = id
  where.appendChild(slider);

  let sliderBtn = document.createElement("span");
  sliderBtn.className = "element-slider-btn";
  sliderBtn.id = btnId;
  slider.appendChild(sliderBtn);
}

function elementThemeSquares(elementTheme) {
  let elementThemeFontSquare = document.createElement("div");
  elementThemeFontSquare.className = "element-theme-squares";
  elementTheme.appendChild(elementThemeFontSquare);

  let elementThemeDisplaySquare = document.createElement("div");
  elementThemeDisplaySquare.className = "element-theme-squares";
  elementTheme.appendChild(elementThemeDisplaySquare);

}