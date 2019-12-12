//GOOD CODE za samo kucajuci text
// let tag = document.getElementById("tag");

// let i = 0;
// let txt = `all projects`;
// let speed = 150;

// function writeText() {
//   if (i < txt.length) {
//     tag.innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(writeText, speed);
//   }
// }

function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("lang-nav").classList.toggle("change");

  document.getElementById("menu-bg").classList.toggle("change-bg");
}
