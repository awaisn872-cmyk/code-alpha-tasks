let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backbtn");
let nextBtn = document.getElementById("nextbtn");

let imageWidth = 300 + 20; 

nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += imageWidth;
});

backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= imageWidth;
});
function filterImages(category) {
  let boxes = document.querySelectorAll(".img-box");

  boxes.forEach(box => {
    if (category === "all") {
      box.style.display = "block";
    }
    else if (box.classList.contains(category)) {
      box.style.display = "block";
    }
    else {
      box.style.display = "none";
    }
  });
}
