let countHome = 0;
let countGuest = 0;

let countHomeEl = document.getElementById("count-home");
let countGuestEl = document.getElementById("count-guest");

function updateScore(team, points) {
  if (team === "home") {
    countHome += points;
    countHomeEl.textContent = countHome;
  } else if (team === "guest") {
    countGuest += points;
    countGuestEl.textContent = countGuest;
  }
}

function newGame() {
  countHome = 0;
  countHomeEl.textContent = countHome;
  countGuest = 0;
  countGuestEl.textContent = countGuest;
}
