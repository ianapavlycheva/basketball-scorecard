const countHomeEl = document.getElementById("count-home") as HTMLElement;
const countGuestEl = document.getElementById("count-guest") as HTMLElement;


const scoreButtons = document.querySelectorAll<HTMLButtonElement>("button[data-team]");
const newGameButton = document.getElementById("new-game") as HTMLButtonElement;


let countHome: number = 0;
let countGuest: number = 0;

function updateScore(team: "home" | "guest", points: number): void {
  if (team === "home") {
    countHome += points;
    countHomeEl.textContent = countHome.toString();
  } else if (team === "guest") {
    countGuest += points;
    countGuestEl.textContent = countGuest.toString();
  }
  highlightLeader();
}

function startNewGame(): void {
  countHome = 0;
  countHomeEl.textContent = countHome.toString();
  countGuest = 0;
  countGuestEl.textContent = countGuest.toString();
  highlightLeader();
}

function highlightLeader(): void {
  countHomeEl.style.backgroundColor = "#080001";
  countGuestEl.style.backgroundColor = "#080001";

  if (countHome > countGuest) {
    countHomeEl.style.backgroundColor = "#A7F3D0";
  } else if (countGuest > countHome) {
    countGuestEl.style.backgroundColor = "#A7F3D0";
  }
}

// (window as any).updateScore = updateScore;
// (window as any).startNewGame = startNewGame;

scoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const team = button.dataset.team as "home" | "guest";
    const points = parseInt(button.dataset.points || "0", 10);
    updateScore(team, points);
  });
});

newGameButton.addEventListener("click", startNewGame);