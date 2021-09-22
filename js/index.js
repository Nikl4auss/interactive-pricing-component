const pageviewsDisplay = document.querySelector("#pageviews");
const priceDisplay = document.querySelector("#price");
const priceSlider = document.querySelector("#range-slider");
const toggleDiscount = document.querySelector("#toggle-button__check");

const pageviewsPrices = [
  {
    views: "10K",
    price: 8.0,
    sliderPorcentage: "0%",
  },
  {
    views: "50K",
    price: 12,
    sliderPorcentage: "25%",
  },
  {
    views: "100K",
    price: 16,
    sliderPorcentage: "50%",
  },
  {
    views: "500K",
    price: 24,
    sliderPorcentage: "75%",
  },
  {
    views: "1M",
    price: 36,
    sliderPorcentage: "100%",
  },
];

window.addEventListener("load", changePrice);

priceSlider.addEventListener("input", changePrice);

toggleDiscount.addEventListener("input", changePrice);

function changePrice() {
  let index = priceSlider.value;
  let pageviewPrice = pageviewsPrices[index];
  pageviewsDisplay.innerText = pageviewPrice.views;
  let price = pageviewPrice.price;
  toggleDiscount.checked ? (price = Math.round(price * 0.75)) : (price = price);
  priceDisplay.innerText = price;
  changeSliderPorcentage(pageviewPrice.sliderPorcentage);
}

function changeSliderPorcentage(porcentage) {
  let rootColors = document.querySelector(":root");
  rootColors.style.setProperty("--grayish-blue-start", porcentage);
}
