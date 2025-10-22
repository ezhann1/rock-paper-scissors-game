// Elemen DOM untuk tombol, hasil, dan skor
const buttons = document.querySelectorAll("button:not(.btn-reset)");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const resetBtn = document.getElementById("reset");

// Variabel skor (dimuat dari localStorage jika ada)
let playerScore = parseInt(localStorage.getItem('playerScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;

// Update skor awal dari localStorage
playerScoreEl.textContent = playerScore;
computerScoreEl.textContent = computerScore;

// Event listener untuk tombol pilihan
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
  });
});

// Event listener untuk tombol reset
resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  localStorage.setItem('playerScore', playerScore); // Simpan ke localStorage
  localStorage.setItem('computerScore', computerScore);
  resultEl.textContent = "Skor telah direset!";
});

// Fungsi untuk pilihan komputer acak
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

// Fungsi utama untuk menjalankan satu ronde permainan
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Seri!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    localStorage.setItem('playerScore', playerScore); // Simpan ke localStorage
    return "Anda menang! " + translateChoice(playerSelection) + " mengalahkan " + translateChoice(computerSelection);
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    localStorage.setItem('computerScore', computerScore); // Simpan ke localStorage
    return "Anda kalah! " + translateChoice(computerSelection) + " mengalahkan " + translateChoice(playerSelection);
  }
}

// Fungsi pembantu untuk menerjemahkan pilihan ke bahasa Indonesia
function translateChoice(choice) {
  const translations = {
    rock: "Batu",
    paper: "Kertas",
    scissors: "Gunting"
  };
  return translations[choice] || choice;
}
