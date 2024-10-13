const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalID
const startChanginColor = function () {
  intervalID = setInterval(changebgcolor, 400);
  function changebgcolor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChanginColor = function () {
    clearInterval(intervalID)
    
};

document.querySelector("#start").addEventListener("click", startChanginColor);
document.querySelector("#stop").addEventListener("click", stopChanginColor);
