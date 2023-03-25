const labels = document.querySelectorAll(".box");
labels.forEach((label, index) => {
  let clicked = false;
  label.addEventListener("click", (event) => {
    if (event.target === label) {
      if (clicked) {
        label.style.backgroundColor = "initial";
        label.style.borderColor = "#e0e0e1";
        clicked = false;
      } else {
        label.style.backgroundColor = "#EEECFD";
        label.style.borderColor = "#5c48f1";
        clicked = true;
      }
    }
  });
});
