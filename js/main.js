
// View functions
function listView() {
  document.getElementsByClassName("grid-view")[0].style.display = "none";
  document.getElementsByClassName("list-view")[0].style.display = "block";
}
function gridView() {
  document.getElementsByClassName("grid-view")[0].style.display = "block";
  document.getElementsByClassName("list-view")[0].style.display = "none";
}


window.addEventListener("resize", function(){
  if (document.documentElement.clientWidth < 768) {
    gridView();
  }
});


// Voting buttons functions
function preVote(idButton) {
  let selectedButton = document.getElementById(idButton)
  selectedButton.style.border = "2px solid white";

  let nextSibling = selectedButton.nextElementSibling;
  nextSibling.style.border = "0px";

  if (idButton.includes("do")) {
    let previousSibling = selectedButton.previousElementSibling;
    previousSibling.style.border = "0px";
  };

  let voteButton;
  if (idButton.includes("do")) {
    voteButton = (idButton.replace("do-", ""));
    voteButton = voteButton.concat("-vote");
  };
  if (idButton.includes("up")) {
     voteButton = (idButton.replace("up-", ""));
    voteButton = voteButton.concat("-vote");
  };
  document.getElementById(voteButton).disabled = false;
  document.getElementById(voteButton).style.border = "2px solid white";
}

function vote(idVote) {
  let character = (idVote.replace("-vote", ""));

  let upButtonId = "up-".concat(character);
  document.getElementById(upButtonId).style.display = "none";

  let doButtonId = "do-".concat(character);
  document.getElementById(doButtonId).style.display = "none";

  let voteAgainId = character.concat("-vote-again");
  document.getElementById(voteAgainId).style.display = "block";

  document.getElementById(idVote).style.display = "none";

  let timeStampId = character.concat("-voting-card__time-info");
  document.getElementById(timeStampId).style.display = "none";

  let thanksVote = character.concat("-thanks-for-your-vote");
  document.getElementById(thanksVote).style.display = "block";

  if (document.documentElement.clientWidth < 768) {
    document.getElementById(thanksVote).style.marginLeft = "15rem";
  }

  if (document.documentElement.clientWidth > 767) {
    document.getElementById(thanksVote).style.marginLeft = "14rem";
  }

  if (document.documentElement.clientWidth > 767) {
    document.getElementById(voteAgainId).style.marginLeft = "6rem";
  }

  if (document.documentElement.clientWidth > 1100) {
    document.getElementById(thanksVote).style.marginLeft = "11.5rem";
  }

  if (document.documentElement.clientWidth > 1100) {
    document.getElementById(voteAgainId).style.marginLeft = "3rem";
  }



}

 function voteAgain(idVoteAgain) {
   let character = (idVoteAgain.replace("-vote-again", ""))

   let upButtonId = "up-".concat(character);
   document.getElementById(upButtonId).style.display = "block";

   let doButtonId = "do-".concat(character);
   document.getElementById(doButtonId).style.display = "block";

   let vote = character.concat("-vote");
   document.getElementById(vote).style.display = "block";

   document.getElementById(idVoteAgain).style.display = "none";

   let timeStampId = character.concat("-voting-card__time-info");
   document.getElementById(timeStampId).style.display = "block";

   let thanksVote = character.concat("-thanks-for-your-vote");
   document.getElementById(thanksVote).style.display = "none";
 }