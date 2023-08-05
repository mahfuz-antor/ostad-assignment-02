// Task: 1) DOM Manipulation
// getting DOM element
let DOMDiv = document.getElementById("DOM");
let DOMText = document.getElementById("domText");
function toChangeDOM() {
  let image = document.createElement("img");
  image.setAttribute(
    "src",
    "https://www.freecodecamp.org/news/content/images/size/w2000/2022/07/jsdom.png"
  );
  image.setAttribute("width", "250px");
  image.setAttribute("height", "250px");

  // changing the DOM element
  DOMText.innerHTML = "The DOM element has been changed!";
  DOMDiv.appendChild(image);
}

// ****** End Task: 01 ******

// Task: 2) Click Counter

// ****** End Task: 02 ******

// Task: 3) Image Switcher

// ****** End Task: 03 ******

// Task: 4) Ajax

// ****** End Task: 04 ******
