const themeBtn = document.getElementById("theme-btn");
const themeCircle = document.getElementById("theme-circle");
var r = document.querySelector(":root");

themeBtn.addEventListener("mouseover", () => {
  if (themeCircle.classList.contains("theme2")) {
    themeBtn.style.cssText =
      "background:linear-gradient(to right,hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
  }
});

themeBtn.addEventListener("mouseout", () => {
  if (themeCircle.classList.contains("theme2")) {
    themeBtn.style.cssText = "background:hsl(230, 22%, 74%)";
  }
});

themeBtn.addEventListener("click", () => {
  if (themeCircle.classList.contains("theme1")) {
    themeCircle.classList.remove("theme1");
    themeCircle.classList.add("theme2");
    themeBtn.style.cssText = "background:hsl(230, 22%, 74%)";
    // Theme 2
    r.style.setProperty("--dark-bg-color", "hsl(0, 0%, 100%)");
    r.style.setProperty("--dark-top-bg-pattern", "hsl(225, 100%, 98%)");
    r.style.setProperty("--dark-card-bg", "hsl(227, 47%, 96%)");
    r.style.setProperty("--dark-card-hover", "#E1E3F0");
    r.style.setProperty("--dark-text-color", "hsl(228, 12%, 44%)");
    r.style.setProperty("--dark-text", "hsl(230, 17%, 14%)");
  } else {
    themeCircle.classList.add("theme1");
    themeCircle.classList.remove("theme2");
    themeBtn.style.cssText =
      "background:linear-gradient(to right,hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
    // Theme 1
    r.style.setProperty("--dark-bg-color", "hsl(230, 17%, 14%)");
    r.style.setProperty("--dark-top-bg-pattern", "hsl(232, 19%, 15%)");
    r.style.setProperty("--dark-card-bg", "hsl(228, 28%, 20%)");
    r.style.setProperty("--dark-card-hover", "hsl(229, 22%, 25%)");
    r.style.setProperty("--dark-text-color", "hsl(228, 34%, 66%)");
    r.style.setProperty("--dark-text", "hsl(0, 0%, 100%)");
  }
});
