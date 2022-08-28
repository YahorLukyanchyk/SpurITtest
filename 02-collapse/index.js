const collapsibleBlock = document.querySelector(".collapsible");
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
        backgroundColor: "#e6e7e8",
        padding: "0 10px",
      },
      {
        overflow: "hidden",
        maxHeight: "0",
        backgroundColor: "#e6e7e8",
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
collapsibleButtonHidden.style.display = "none";

function checkPlaybackRate() {
  if (collapsibleContent.playbackRate === -1) {
    collapsibleButtonHidden.style.display = "inline";
    collapsibleButtonActive.style.display = "none";
  } else if (collapsibleContent.playbackRate === 1) {
    collapsibleButtonHidden.style.display = "none";
    collapsibleButtonActive.style.display = "inline";
  }
}

collapsibleButton.addEventListener("click", () => {
  checkPlaybackRate();
  collapsibleContent.reverse();
});