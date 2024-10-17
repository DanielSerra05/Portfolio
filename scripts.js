const red = "238, 61, 64",
  blue = "30,144,255",
  white = "255,255,255",
  black = "0,0,0",
  yellow = "255,215,0",
  cyan = "0,255,255",
  pink = "252,15,192";

function changeTheme(color) {
  switch (color) {
    case "red":
      document.documentElement.style.setProperty("--primary-color", red);
      document.documentElement.style.setProperty("--text-color", white);
      console.log("red");
      break;
    case "blue":
      document.documentElement.style.setProperty("--primary-color", blue);
      document.documentElement.style.setProperty("--text-color", white);
      console.log("blue");
      break;
    case "yellow":
      document.documentElement.style.setProperty("--primary-color", yellow);
      document.documentElement.style.setProperty("--text-color", black);
      break;
    case "cyan":
      document.documentElement.style.setProperty("--primary-color", cyan);
      document.documentElement.style.setProperty("--text-color", black);
      break;
    case "pink":
      document.documentElement.style.setProperty("--primary-color", pink);
      document.documentElement.style.setProperty("--text-color", white);
      break;
  }
}

function menu() {
  const btnMenu = document.querySelector("body");
  btnMenu.classList.toggle("sidebar-open");
}
