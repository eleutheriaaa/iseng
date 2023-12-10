document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".wrapper");
  const question = document.querySelector(".question");
  const gif = document.querySelector(".gif");
  const yesBtn = document.querySelector(".yes-btn");
  const noBtn = document.querySelector(".no-btn");

  yesBtn.addEventListener("click", function () {
    question.innerHTML = "Aaaaa, Seneng dehhh";
    gif.src = "images/diterima.gif";
    hideButtons();
  });

  noBtn.addEventListener("click", function () {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  });

  function hideButtons() {
    const btnGroup = document.querySelector(".btn-group");
    if (btnGroup) {
      btnGroup.style.display = "none";
    }
  }
});
