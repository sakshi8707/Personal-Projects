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

// *Navbar*

const plusIcon = document.querySelector(".plus-icon");
const navTop = document.querySelector(".navbar-top");
const navRight = document.querySelector(".navbar-right");
const faPlus = document.getElementsByClassName("fa-times");
var activeBtn = 0;

let addStyle = function () {
  navTop.style.transform = "translateX(0px)";
  navRight.style.transform = "translateY(0px)";
  plusIcon.classList.add("rotate");
  setTimeout(function () {
    plusIcon.classList.remove("rotate");
    plusIcon.classList.add("fa-white");
  }, 2000);
};

let closeStyle = function () {
  plusIcon.classList.add("revrotate");
  navTop.style.transform = "translateX(-100vw)";
  navRight.style.transform = "translateY(-100vh)";
  plusIcon.classList.remove("fa-white");
  setTimeout(function () {
    plusIcon.classList.remove("revrotate");
  }, 2000);
};

var isActive = true;

function reverseRotate() {
  plusIcon.classList.add("rotate");
  setTimeout(function () {
    plusIcon.classList.remove("revrotate");
  }, 2000);
}

plusIcon.addEventListener("click", function () {
  // Add or remove class based on the variable
  if (isActive) {
    addStyle();
    plusIcon.classList.remove("fa-times-rotated");
    reverseRotate(); // Call the reverse rotation function after adding the navbar
  } else {
    closeStyle();
    plusIcon.classList.add("fa-times-rotated");
  }
  // Toggle the variable to switch the class
  isActive = !isActive;
});

// **Portfolio section**
