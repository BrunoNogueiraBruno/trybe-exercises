let themeButton = document.querySelector("#theme-button");
  themeButton.addEventListener("click", function() {
    
  let header = document.querySelector("header");
  let elementTheme = document.createElement("div");
  elementTheme.className = "element-theme";

  header.appendChild(elementTheme);

  let elementThemeBg = document.createElement("div");
  elementThemeBg.className = "element-theme-bg";
  elementTheme.appendChild(elementThemeBg);

  let elementThemeFontSize = document.createElement("div");
  elementThemeFontSize.className = "element-theme-font-size";
  elementTheme.appendChild(elementThemeFontSize);

  let elementThemeFontFamily = document.createElement("div");
  elementThemeFontFamily.className = "element-theme-font-family";
  elementTheme.appendChild(elementThemeFontFamily);

  let elementThemeDisplay = document.createElement("div");
  elementThemeDisplay.className = "element-theme-display";
  elementTheme.appendChild(elementThemeDisplay);
})