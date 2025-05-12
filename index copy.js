const countHomeEl = document.getElementById("count-home");
const countGuestEl = document.getElementById("count-guest");

let countHome = 0;
let countGuest = 0;

function updateScore(team, points) {
  if (team === "home") {
    countHome += points;
    countHomeEl.textContent = countHome;
  } else if (team === "guest") {
    countGuest += points;
    countGuestEl.textContent = countGuest;
  }
  highlightLeader();
}

function startNewGame() {
  countHome = 0;
  countHomeEl.textContent = countHome;
  countGuest = 0;
  countGuestEl.textContent = countGuest;
  highlightLeader();
}

function highlightLeader() {
  countHomeEl.style.backgroundColor = "#080001";
  countGuestEl.style.backgroundColor = "#080001";

  if (countHome > countGuest) {
    countHomeEl.style.backgroundColor = "#A7F3D0";
  } else if (countGuest > countHome) {
    countGuestEl.style.backgroundColor = "#A7F3D0";
  }
}
