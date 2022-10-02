const img = document.getElementById("card-img");

function manageImg() {
  const width = window.innerWidth;

  if (width < 900) {
    img.src = "./images/image-product-mobile.jpg";
  } else {
    img.src = "./images/image-product-desktop.jpg";
  }
}

window.addEventListener("resize", manageImg);
