document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  let firstCard, secondCard;
  let hasFlipped = false;
  let lockBoard = false;

  function flipCard() {
    if (lockBoard || this === firstCard) return;
    this.classList.add("flipped");

    if (!hasFlipped) {
      hasFlipped = true;
      firstCard = this;
      return;
    }
    secondCard = this;
    checkForMatch();
  }

  function checkForMatch() {
    const isMatch = firstCard.dataset.name === secondCard.dataset.name;
    isMatch ? disableCard() : unFlipCard();
  }
  function disableCard() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
  }
  function unFlipCard() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetBoard();
    }, 1500);
  }
  function resetBoard() {
    [hasFlipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }
  function shuffle() {
    cards.forEach((card) => {
      let random = Math.floor(Math.random() * 10);
      card.style.order = random;
    });
  }
  cards.forEach((card) => card.addEventListener("click", flipCard));

  shuffle();
});
