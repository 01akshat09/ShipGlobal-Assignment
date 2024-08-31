let currSlide = 0;
const slides = document.querySelectorAll(".carousel-image");
const totalSlides = slides.length;

function showSlide(index) {
  currSlide = (index + totalSlides) % totalSlides;

  const trans = -currSlide * 100;
  document.querySelector(
    ".wrapper"
  ).style.transform = `translateX(${trans}%)`;

  update();
}

function nextSlide() {
  showSlide(currSlide + 1);
}

function prevSlide() {
  showSlide(currSlide - 1);
}

function goToSlide(index) {
  showSlide(index);
}

function update() {
  document.querySelectorAll(".indicator").forEach((dot, index) => {
    dot.classList.toggle("active", index === currSlide);
  });
}

showSlide(currSlide);
