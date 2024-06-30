import VanillaTilt from "vanilla-tilt";

export default function initTiltAnimation() {
  const elements = document.querySelectorAll(".js-tilt");
  VanillaTilt.init(elements);
}
// import VanillaTilt from "vanilla-tilt";

// document.addEventListener("DOMContentLoaded", () => {
//   const elements = document.querySelectorAll(".js-tilt");
//   VanillaTilt.init(elements);
// });
