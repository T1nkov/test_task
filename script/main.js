document.addEventListener("DOMContentLoaded", function () {
  const dropdownSelect = document.getElementById("dropdown-list");
  const selected = dropdownSelect.querySelector(".order-dropdown__selected");
  const options = dropdownSelect.querySelector(".order-dropdown__options");
  const arrow = selected.querySelector(".arrow");

  let selectedValue = "";ы
  let selectedText = "";

  selected.addEventListener("click", function () {
    const isOpen = options.style.display === "block";
    options.style.display = isOpen ? "none" : "block";
    dropdownSelect.classList.toggle("open", !isOpen);
    arrow.classList.toggle("open", !isOpen);
  });

  dropdownSelect
    .querySelectorAll(".order-dropdown__option")
    .forEach((option) => {
      option.addEventListener("click", function () {
        selectedValue = this.getAttribute("data-value");
        selectedText = this.textContent;
        selected.firstChild.textContent = selectedText;
        options.style.display = "none";
        dropdownSelect.classList.remove("open");
        arrow.classList.remove("open");

        console.log("Выбранное значение:", selectedValue);
        console.log("Выбранный текст:", selectedText);
      });
    });

  document.addEventListener("click", function (event) {
    if (!dropdownSelect.contains(event.target)) {
      options.style.display = "none";
      dropdownSelect.classList.remove("open");
      arrow.classList.remove("open");
    }
  });

  function getSelectedText() {
    return selectedText;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("r1");
  const sliderValue = document.getElementById("slider-value");

  sliderValue.textContent = slider.value + "%";

  slider.addEventListener("input", function () {
    sliderValue.textContent = this.value + "%";
  });
});

const burger = document.querySelector(".header-burger");
const nav = document.querySelector(".burger-nav");
const lines = document.querySelectorAll(".burger-line");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("active");
  lines.forEach((line) => {
    line.classList.toggle("active");
  });
});
