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