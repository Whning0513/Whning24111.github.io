let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "image/tupian1.bmp") {
    myImage.setAttribute("src", "image/tupian2.bmp");
  } else {
    myImage.setAttribute("src", "image/tupian1.bmp");
  }
};
let myButton = document.querySelector("button");
myButton.onclick = () => setUserName();

let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("你的名字是");
    localStorage.setItem("name凄凄切切", myName);
    myHeading.textContent = "哦，" + myName;
  }
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "？" + storedName;
}
