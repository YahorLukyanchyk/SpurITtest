const collapsibleButton = document.querySelector(".collapsible__button");
const collapsibleContent = document.querySelector(".collapsible__content").animate(
    [
      {
        overflow: "hidden",
        maxHeight: "75px",
      },
      {
        overflow: "hidden",
        maxHeight: "0",
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
