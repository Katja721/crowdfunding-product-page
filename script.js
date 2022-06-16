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
const complitedModal = document.querySelector(".complitedModal");
const complitedButton = document.querySelector(".complited-button");
const bookmark = document.querySelector(".bookmark");
const progress = document.querySelector(".progress");
const collectedElement = document.querySelector(".collected");
const backers = document.querySelector(".numOfBackers");
let numBackers = 5007;
let collected = 89914;
const needed = 100000;
overlay.style.height = siteHeight;
overlay.style.width = siteWidth;

console.log(siteHeight);
console.log(x, y);
function selectPledge(pledge) {
  pledge.querySelector(".pledgeEl").classList.remove("hidden");
  pledge.querySelector(".fill").style.display = "block";
  pledge.style.border = "1px solid var(--dark-cyan)";
}
function progressMeter(collected, need = needed) {
  let percentage = (collected / need) * 100;
  progress.style.width = `${percentage}%`;
}
continueElements.forEach((el) =>
  el.addEventListener("click", function (e) {
    const click = e.target;
    const pledgeValue =
      click.closest(".pledgeEl").querySelector(".number").value ||
      click.closest(".pledgeEl").querySelector(".number").placeholder;
    firstModal.classList.add("hidden");
    complitedModal.style.display = "flex";
    collected += Number(pledgeValue);
    if (collected > needed) collected = needed;
    progressMeter(collected);
    collectedElement.innerText = `$${collected}`;
    numBackers++;
    backers.innerText = `${numBackers}`;
  })
);
back.addEventListener("click", function () {
  overlay.classList.remove("hidden");
});
complitedButton.addEventListener("click", function () {
  overlay.classList.add("hidden");
});
bookmark.addEventListener("click", function (e) {
  const click = e.target;
  bookmark.innerHTML = `
  <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"class="bookmark-icon><g fill="none" fill-rule="evenodd"><circle fill="#147b74" cx="28" cy="28" r="28"/><path fill="#ffffff" d="M23 19v18l5-5.058L33 37V19z" "/></g></svg>
  <p>Bookmarked</p>
  `;
  const bookmarkIcon = document.querySelector(".bookmark-icon");
  bookmark.style.color = "var(--dark-cyan)";
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

progressMeter(collected, needed);
