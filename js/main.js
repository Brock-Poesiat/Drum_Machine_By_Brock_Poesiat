
function playAudio(id) {
  //play the child audio element of the button id passed into this function
  document.getElementById(id).children[0].play();

  //display inner text of child audio element
  document.getElementById("display").innerText = document.getElementById(id).children[0].innerText;
}

function pushBtn(event) {
  //when user pushes a button, grab the button code and convert it to its corresponding key string
  const keyPushed = String.fromCharCode(event.keyCode);

  //create an array of strings representing each of the buttons
  const arrOfDrumKeys = document.getElementById("buttons").innerText.replace(/\s/g, '').split("");
  if (arrOfDrumKeys.includes(keyPushed)) {
    playAudio(keyPushed);
  }
}

//call the pushBtn function when the user presses a button
document.addEventListener('keydown', pushBtn);
