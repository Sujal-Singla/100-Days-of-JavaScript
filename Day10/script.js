const images = [
  "https://picsum.photos/700?random=1",
  "https://picsum.photos/700?random=2",
  "https://picsum.photos/700?random=3",
  "https://picsum.photos/700?random=4",
];

const slider = document.querySelector(".slider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let currentIndex = 0;
function loadImages() {
  images.forEach((imageinx) => {
    const img = document.createElement("img");
    img.src = imageinx;
    slider.appendChild(img);
  });
}
function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
}
function autoslide() {
  setInterval(() => {
    nextSlide();
  }, 3000);
}
next.addEventListener("click", () => {
  nextSlide();
  console.log("clicked");
});
prev.addEventListener("click", () => {
  prevSlide();
  console.log("clicked");
});
loadImages();
autoslide();
