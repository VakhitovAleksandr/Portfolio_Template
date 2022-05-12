// Slider

const slider = function () {
  const sliderContainer = document.querySelector(".slider");
  const sliderWrapper = document.querySelector(".slider__wrapper");
  const sliderItem = document.querySelectorAll(".slider__item");

  let actionSlide = 0;
  for (let i = 0; i < sliderItem.length; i++) {
    let slide = sliderItem[i];
    slide.dataset.order = i;
    slide.style.transform = "translate(-50%, -50%)";
    actionSlide = Math.floor(sliderItem.length / 2);
  }
};
export default slider;
