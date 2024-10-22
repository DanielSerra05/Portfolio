function setThemeColor(color) {
  const red = "238, 61, 64",
    blue = "30,144,255",
    yellow = "255,215,0",
    cyan = "0,255,255",
    pink = "252,15,192";

  switch (color) {
    case "red":
      document.documentElement.style.setProperty("--primary-color", red);
      console.log("red");
      break;
    case "blue":
      document.documentElement.style.setProperty("--primary-color", blue);
      console.log("blue");
      break;
    case "yellow":
      document.documentElement.style.setProperty("--primary-color", yellow);
      break;
    case "cyan":
      document.documentElement.style.setProperty("--primary-color", cyan);
      break;
    case "pink":
      document.documentElement.style.setProperty("--primary-color", pink);
      break;
  }
}
function changeTheme(color) {
  localStorage.setItem("theme", color);

  setThemeColor(color);
}

function toggleMenu() {
  const btnMenu = document.querySelector("body");
  btnMenu.classList.toggle("sidebar-open");
}

function setUserColor() {
  var color = localStorage.getItem("theme");
  setThemeColor(color);
}

setUserColor();
