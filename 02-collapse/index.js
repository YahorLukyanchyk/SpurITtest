const collapsibleButton = document.querySelector(".collapsible__button");
const collapsibleButtonActive = document.querySelector(
  '[class*="__action--visible"]'
);
const collapsibleButtonHidden = document.querySelector(
  '[class*="__action--hidden"]'
);
const collapsibleContent = document
  .querySelector(".collapsible__content")
  .animate(
    [
      {
        overflow: "hidden",
        maxHeight: "75px",
        backgroundColor: "#D3D3D3",
        padding: "0 10px",
      },
      {
        overflow: "hidden",
        maxHeight: "0",
        backgroundColor: "#D3D3D3",
        padding: "0 10px",
      },
    ],
    {
      duration: 500,
      fill: "both",
      easing: "ease-out",
    }
  );

collapsibleContent.pause();
collapsibleContent.playbackRate = -1;

collapsibleButtonActive.addEventListener("click", () => {
  if (collapsibleContent.playbackRate === -1) {
    collapsibleContent.playbackRate = 1;
    collapsibleContent.play();
  }
});

collapsibleButtonHidden.addEventListener("click", () => {
  if (collapsibleContent.playbackRate === 1) {
  collapsibleContent.playbackRate = -1;
  collapsibleContent.play();
  }
});
