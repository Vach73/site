const header = document.querySelector("#header");
const headerbtn = document.querySelector("#header-btn");
const headerbtnimg = document.querySelector("#header-btn-img");

headerbtn.onclick = () => {
  if (header.classList.toggle("open")) {
    headerbtnimg.src = "./assets/img/10.png";
  } else {
    headerbtnimg.src = "./assets/img/9.png";
  }
};

AOS.init();
