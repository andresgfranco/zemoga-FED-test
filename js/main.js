
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
  if (document.documentElement.clientWidth > 768) {

  }
});


// Voting buttons functions - grid view
function preVote(idButton) {
  let selectedButton = document.getElementById(idButton)
  let nextSibling = selectedButton.nextElementSibling;
  let previousSibling = selectedButton.previousElementSibling;
  let listViewButton;
  let voteButton;

  selectedButton.style.border = "2px solid white";
  nextSibling.style.border = "0px";

  if (idButton.includes("do")) {
    previousSibling.style.border = "0px";
    voteButton = (idButton.replace("do-", ""));
    listViewButton = "list-do-".concat(voteButton);
    document.getElementById(listViewButton).click();
    voteButton = voteButton.concat("-vote");
  };
  if (idButton.includes("up")) {
    voteButton = (idButton.replace("up-", ""));
    listViewButton = "list-up-".concat(voteButton);
    document.getElementById(listViewButton).click();
    voteButton = voteButton.concat("-vote");
  };

  document.getElementById(voteButton).disabled = false;
  document.getElementById(voteButton).style.border = "2px solid white";


}

function vote(idVote) {
  let character = (idVote.replace("-vote", ""));
  let upButtonId = "up-".concat(character);
  let doButtonId = "do-".concat(character);
  let voteAgainId = character.concat("-vote-again");
  let timeStampId = character.concat("-voting-card__time-info");
  let thanksVote = character.concat("-thanks-for-your-vote");
  let listViewButton = character.concat("-vote-list");

  document.getElementById(doButtonId).style.display = "none";
  document.getElementById(upButtonId).style.display = "none";
  document.getElementById(doButtonId).style.border = "0px";
  document.getElementById(upButtonId).style.border = "0px";

  document.getElementById(idVote).style.display = "none";
  document.getElementById(idVote).style.border = "0px";
  document.getElementById(idVote).disabled = true;

  document.getElementById(voteAgainId).style.display = "block";
  document.getElementById(timeStampId).style.display = "none";
  document.getElementById(thanksVote).style.display = "block";
  document.getElementById(listViewButton).click();


  if (document.documentElement.clientWidth < 768) {
    document.getElementById(thanksVote).style.marginLeft = "15rem";
    document.getElementById(voteAgainId).style.marginLeft = "7rem";
  }
  if (document.documentElement.clientWidth > 767) {
    document.getElementById(thanksVote).style.marginLeft = "14.5rem";
    document.getElementById(voteAgainId).style.marginLeft = "6rem";
  }
  if (document.documentElement.clientWidth > 1100) {
    document.getElementById(thanksVote).style.marginLeft = "11rem";
    document.getElementById(voteAgainId).style.marginLeft = "3rem";
  }


}


 function voteAgain(idVoteAgain) {
   let character = (idVoteAgain.replace("-vote-again", ""))
   let upButtonId = "up-".concat(character);
   let doButtonId = "do-".concat(character);
   let vote = character.concat("-vote");
   let timeStampId = character.concat("-voting-card__time-info");
   let thanksVote = character.concat("-thanks-for-your-vote");
   let listViewButton = character.concat("-vote-again-list");

   document.getElementById(upButtonId).style.display = "block";
   document.getElementById(doButtonId).style.display = "block";
   document.getElementById(vote).style.display = "block";
   document.getElementById(idVoteAgain).style.display = "none";
   document.getElementById(timeStampId).style.display = "block";
   document.getElementById(thanksVote).style.display = "none";
   document.getElementById(listViewButton).click();
 }


// Voting buttons functions - list view
function preVoteListView(idButton) {
  let selectedButton = document.getElementById(idButton)
  let nextSibling = selectedButton.nextElementSibling;
  let previousSibling = selectedButton.previousElementSibling;
  let gridViewButton;
  let voteButton;
  let gaugeBar;

  selectedButton.style.border = "2px solid white";
  nextSibling.style.border = "0px";

  if (idButton.includes("do")) {
    previousSibling.style.border = "0px";
    voteButton = (idButton.replace("list-do-", ""));
    gridViewButton = "do-".concat(voteButton);
    document.getElementById(gridViewButton).click();
    gaugeBar = voteButton.concat("-list-gauge-bar");
    if (document.documentElement.clientWidth >= 1100) {
      document.getElementById(gaugeBar).style.marginTop = "0.65rem";
    } else {
      document.getElementById(gaugeBar).style.marginTop = "-0.7rem";
    };
    voteButton = voteButton.concat("-vote-list");
  };

  if (idButton.includes("up")) {
    voteButton = (idButton.replace("list-up-", ""));
    gridViewButton = "up-".concat(voteButton);
    document.getElementById(gridViewButton).click();
    gaugeBar = voteButton.concat("-list-gauge-bar");
    if (document.documentElement.clientWidth >= 1100) {
      document.getElementById(gaugeBar).style.marginTop = "0.65rem";
    } else {
      document.getElementById(gaugeBar).style.marginTop = "-0.7rem";
    };
    voteButton = voteButton.concat("-vote-list");
  };

  document.getElementById(voteButton).disabled = false;
  document.getElementById(voteButton).style.border = "2px solid white";
}

function voteListView(idVote) {
  let character = (idVote.replace("-vote-list", ""));
  let upButtonId = "list-up-".concat(character);
  let doButtonId = "list-do-".concat(character);
  let voteAgainId = character.concat("-vote-again-list");
  let timeStampId = character.concat("-voting-card__time-info-list");
  let thanksVote = character.concat("-thanks-for-your-vote-list");
  let gridViewButton = character.concat("-vote");

  document.getElementById(doButtonId).style.display = "none";
  document.getElementById(upButtonId).style.display = "none";
  document.getElementById(doButtonId).style.border = "0px";
  document.getElementById(upButtonId).style.border = "0px";

  document.getElementById(idVote).style.display = "none";
  document.getElementById(idVote).style.border = "0px";
  document.getElementById(idVote).disabled = true;

  document.getElementById(voteAgainId).style.display = "block";
  document.getElementById(timeStampId).style.display = "none";
  document.getElementById(thanksVote).style.display = "block";

  document.getElementById(gridViewButton).click();


}


function voteAgainListView(idVoteAgain) {
  let character = (idVoteAgain.replace("-vote-again-list", ""))
  let upButtonId = "list-up-".concat(character);
  let doButtonId = "list-do-".concat(character);
  let vote = character.concat("-vote-list");
  let timeStampId = character.concat("-voting-card__time-info-list");
  let thanksVote = character.concat("-thanks-for-your-vote-list");
  let gridViewButton = character.concat("-vote-again");
  let gaugeBar = character.concat("-list-gauge-bar");

  document.getElementById(upButtonId).style.display = "block";
  document.getElementById(doButtonId).style.display = "block";
  document.getElementById(vote).style.display = "block";

  if (document.documentElement.clientWidth >= 1100) {
    document.getElementById(gaugeBar).style.marginTop = "1.67rem";
  } else {
    document.getElementById(gaugeBar).style.marginTop = "-0.7rem";
  };

  document.getElementById(idVoteAgain).style.display = "none";
  document.getElementById(timeStampId).style.display = "block";
  document.getElementById(thanksVote).style.display = "none";
  document.getElementById(gridViewButton).click();

}