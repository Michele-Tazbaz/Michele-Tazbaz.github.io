const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
// const pathName = window.location.pathname;
// const pageName = pathName.split("/").pop();

// console.log("pageName", pageName);

// if (pageName === ".") {
//   document.querySelector("home").classList.add("activeLink");
// }
// if (pageName === "about") {
//   document.querySelector(".about").classList.add("activeLink");
// }
// if (pageName === "projects") {
//   document.querySelector(".projects").classList.add("activeLink");
// }

toggleButton.addEventListener("click", (e) => {
  console.log("click");
  console.log("e", e.target);
  navbarLinks.classList.toggle("active");
});
