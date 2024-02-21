let btn = document.querySelector("button");

let show = true;
function changeColor() {
  if (show) {
    btn.style.backgroundColor = "#7a5197";
    btn.style.border = "2px solid #7a5197";
    show = false;
  } else {
    btn.style.backgroundColor = "palevioletred";
    btn.style.border = "2px solid palevioletred";
    show = true;
  }
}
