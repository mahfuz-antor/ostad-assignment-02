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
  image.setAttribute("class", "mx-auto py-3");

  // changing the DOM element
  DOMText.innerHTML = "The DOM element has been changed!";
  DOMDiv.appendChild(image);
}

// ****** End Task: 01 ******

// Task: 2) Click Counter
let counterText = document.getElementById("count");
let num = 1;
function onCount() {
  counterText.innerText = num++;
}

// ****** End Task: 02 ******

// Task: 3) Image Switcher
function toSwitchImage(value) {
  let image = document.getElementById("fanImg");
  if (value === "on") {
    image.src = "./images/fan-on-2.gif";
  } else {
    image.src = "./images/fan-off-3.jpg";
  }
}

// ****** End Task: 03 ******

// Task: 4) Ajax

let url = "https://jsonplaceholder.typicode.com/posts";
let showingDiv = document.getElementById("fetchData");
async function getFetchingData() {
  const response = await fetch(url);
  const data = await response.json();
  showingDiv.innerHTML = JSON.stringify(data);
}

// ****** End Task: 04 ******
