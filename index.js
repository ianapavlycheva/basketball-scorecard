var countHomeEl = document.getElementById("count-home");
var countGuestEl = document.getElementById("count-guest");
var scoreButtons = document.querySelectorAll("button[data-team]");
var newGameButton = document.getElementById("new-game");
var countHome = 0;
var countGuest = 0;
function updateScore(team, points) {
    if (team === "home") {
        countHome += points;
        countHomeEl.textContent = countHome.toString();
    }
    else if (team === "guest") {
        countGuest += points;
        countGuestEl.textContent = countGuest.toString();
    }
    highlightLeader();
}
function startNewGame() {
    countHome = 0;
    countHomeEl.textContent = countHome.toString();
    countGuest = 0;
    countGuestEl.textContent = countGuest.toString();
    highlightLeader();
}
function highlightLeader() {
    countHomeEl.style.backgroundColor = "#080001";
    countGuestEl.style.backgroundColor = "#080001";
    if (countHome > countGuest) {
        countHomeEl.style.backgroundColor = "#A7F3D0";
    }
    else if (countGuest > countHome) {
        countGuestEl.style.backgroundColor = "#A7F3D0";
    }
}
// (window as any).updateScore = updateScore;
// (window as any).startNewGame = startNewGame;
scoreButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var team = button.dataset.team;
        var points = parseInt(button.dataset.points || "0", 10);
        updateScore(team, points);
    });
});
newGameButton.addEventListener("click", startNewGame);
