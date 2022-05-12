const fries = document.getElementById("fries");
const menuToggle = document.getElementById("menu-toggle");
const logo = document.getElementById("logo");

const topLine = document.getElementById("top-line");
const midLine = document.getElementById("mid-line");
const bottomLine = document.getElementById("bottom-line");

fries.addEventListener("click", () => {
  if (menuToggle.classList.contains("hidden")) {
    menuToggle.classList.remove("hidden");
    fries.classList.add("fixed");
    fries.classList.add("right-[30px]");
    fries.classList.remove("relative");
    topLine.classList.add("absolute", "rotate-45", "translate-y-[1px]");
    midLine.classList.add("opacity-0");
    bottomLine.classList.add(
      "absolute",
      "-rotate-45",
      "translate-y-3",
      "-translate-x-0"
    );
    bottomLine.classList.remove("mt-2");
    logo.classList.add("opacity-0");
  } else {
    fries.classList.remove("fixed");
    fries.classList.remove("right-[30px]");
    fries.classList.add("relative");
    menuToggle.classList.add("hidden");
    topLine.classList.remove("absolute", "rotate-45", "translate-y-[1px]");
    midLine.classList.remove("opacity-0");
    bottomLine.classList.remove(
      "absolute",
      "-rotate-45",
      "translate-y-3",
      "-translate-x-0"
    );
    bottomLine.classList.remove("mt-2");
    logo.classList.remove("opacity-0");
  }
});

menuToggle.addEventListener("click", () => {
  if (fries.classList.contains("opacity-100")) {
    topLine.classList.remove("absolute", "rotate-45", "translate-y-[1px]");
    midLine.classList.remove("opacity-0");
    bottomLine.classList.remove(
      "absolute",
      "-rotate-45",
      "translate-y-3",
      "-translate-x-0"
    );
    bottomLine.classList.remove("mt-2");
    logo.classList.remove("opacity-0");
    menuToggle.classList.add("hidden");
    fries.classList.remove("fixed");
  } else {
    logo.classList.add("opacity-100");
  }
});
