const button1 = document.querySelector("#story-1");
const button2 = document.querySelector("#story-2");
const button3 = document.querySelector("#story-3");

button1.addEventListener("click", () => {
  location.href = "./petsApp.html";
});
button2.addEventListener("click", () => {
  location.href = "./bankApp.html";
});
button3.addEventListener("click", () => {
  location.href = "./zombiesApp.html";
});
