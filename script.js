"use strict";
const firstModal = document.querySelector(".modal-first");
const fillElemnts = document.querySelectorAll(".fill");
const modalEl = document.querySelectorAll(".modalEl");
const pledge = document.querySelectorAll(".pledgeEl");
const closeModal = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const back = document.querySelector(".back");
const selectReward = document.querySelectorAll(".reward");
const body = document.querySelector("body");
const { x, y } = firstModal.getBoundingClientRect();
const siteHeight = `${body.clientHeight}px`;
const siteWidth = `${body.clientWidth}px`;
const continueElements = document.querySelectorAll(".continue");
overlay.style.height = siteHeight;
overlay.style.width = siteWidth;

console.log(siteHeight);
console.log(x, y);
function selectPledge(pledge) {
  pledge.querySelector(".pledgeEl").classList.remove("hidden");
  pledge.querySelector(".fill").style.display = "block";
  pledge.style.border = "1px solid var(--dark-cyan)";
}
continueElements.forEach((el) =>
  el.addEventListener("click", function () {
    firstModal.classList.add("hidden");
  })
);
back.addEventListener("click", function () {
  overlay.classList.remove("hidden");
});
selectReward.forEach((reward) =>
  reward.addEventListener("click", function () {
    window.scroll(x, y);
    overlay.classList.remove("hidden");
  })
);
firstModal.addEventListener("click", function (e) {
  const cliked = e.target;
  console.log(cliked);
  if (cliked.closest(".modalEl").classList.contains("noStock")) return;
  const chosenElement = cliked.closest(".modalEl");
  fillElemnts.forEach((fill) => (fill.style.display = "none"));
  modalEl.forEach(
    (modalEl) => (modalEl.style.border = "1px solid  hsla(0, 0%, 48%, 0.4)")
  );
  pledge.forEach((pledge) => pledge.classList.add("hidden"));
  selectPledge(chosenElement);
});
closeModal.addEventListener("click", function () {
  overlay.classList.add("hidden");
});
