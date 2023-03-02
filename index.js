const inputs = document.querySelectorAll(".input");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("ul");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};
window.onload = function () {
  var max = -219.99078369140625;
  forEach(document.querySelectorAll(".progress"), function (index, value) {
    percent = value.getAttribute("data-progress");
    value
      .querySelector(".fill")
      .setAttribute(
        "style",
        "stroke-dashoffset: " + ((100 - percent) / 100) * max
      );
    value.querySelector(".value").innerHTML = percent + "%";
  });
};

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

