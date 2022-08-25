const collapsibleButton = document.querySelector(".collapsible__button");
const collapsibleContent = document
  .querySelector(".collapsible__content")
  .animate(
    [
      {
        transform: "translateX(0)",
      },
      {
        transform: "translateX(-100%)",
      },
    ],
    {
      duration: 500,
      fill: "both",
      easing: "ease-out",
    }
  );

collapsibleContent.pause();

collapsibleButton.addEventListener("click", () => {
  if (collapsibleContent.playState === "paused") {
    collapsibleContent.play();
  } else {
    collapsibleContent.reverse();
  }
});
