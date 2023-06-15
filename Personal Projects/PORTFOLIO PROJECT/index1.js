const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "guten tag.";
  }, 0);
  setTimeout(() => {
    text.textContent = "bonjour.";
  }, 4000);
  setTimeout(() => {
    text.textContent = "नमस्ते |";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);

// changing button text on hover in JavaScript e

// var hoverButtons = document.querySelectorAll(".hover-button");
// var hoverTexts = ["Visitor Chat", "Home", "Portfolio", "Coming Soon", "Theme"];

// hoverButtons.forEach(function (button, index) {
//   var hoverText = hoverTexts[index];
//   var hoverTextElement = document.createElement("div");
//   hoverTextElement.className = "hover-text";
//   hoverTextElement.innerText = hoverText;
//   button.appendChild(hoverTextElement);

//   button.addEventListener("mouseover", function () {
//     hoverTextElement.style.display = "block";
//   });

//   button.addEventListener("mouseout", function () {
//     hoverTextElement.style.display = "none";
//   });
// });

// *Navbar*

const plusIcon = document.querySelector(".plus-icon");
const navTop = document.querySelector(".navbar-top");
const navRight = document.querySelector(".navbar-right");
var activeBtn=0;

const navAnimation = function () {
  plusIcon.classList.add("rotate");
  setTimeout(function () {
    plusIcon.classList.remove("rotate");
    plusIcon.classList.add("fa-plus");
  }, 2000);
  
  navTop.style.transform = "translateX(0vh)";
  navRight.style.transform = "translateY(0px)";
  const isAdult = activeBtn==0  ? 1 : 0;  
};
plusIcon.addEventListener("click", navAnimation);


