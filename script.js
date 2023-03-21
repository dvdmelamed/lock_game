let wheel_1,
  wheel_2,
  wheel_3,
  wheel1,
  wheel2,
  wheel3,
  secretNumber1,
  secretNumber2,
  secretNumber3,
  attempts;

init();

function wheelRoller(value) {
  if (value < 9) {
    value += 1;
  } else {
    value = 0;
  }
  return value;
}

function checkImage() {
  if (
    wheel1 === secretNumber1 &&
    wheel2 === secretNumber2 &&
    wheel3 === secretNumber3
  ) {
    document.getElementById("lock").src = "images/lockopen.jpg";
    updateAttempts("You Win!");
    document.getElementById("triesCounter").style.color = "#2ECC71";
    dinit();
  } else if (attempts > 1) {
    attempts--;
    updateAttempts(attempts);
  } else {
    document.getElementById("triesCounter").style.color = "#CB4335";
    updateAttempts("Game Over");
    dinit();
  }
}

document.getElementById("newButton").addEventListener("click", init);

function init() {
  document.getElementById("hintText").style.display === "none";
  wheel_1 = document.getElementById("wheel_1").innerHTML = "0";
  wheel_2 = document.getElementById("wheel_2").innerHTML = "0";
  wheel_3 = document.getElementById("wheel_3").innerHTML = "0";
  document.getElementById("lock").src = "images/lock.jpg";
  startState = true;
  wheel1 = 0;
  wheel2 = 0;
  wheel3 = 0;
  secretNumber1 = 4;
  secretNumber2 = 9;
  secretNumber3 = 7;
  attempts = 3;
  document.getElementById("triesCounter").style.color = "#32A4DB";
  updateAttempts(attempts);

  document.getElementById("wheel_1").onclick = function () {
    wheel1 = wheelRoller(wheel1);
    document.getElementById("wheel_1").innerHTML = wheel1;
  };

  document.getElementById("wheel_2").onclick = function () {
    wheel2 = wheelRoller(wheel2);
    document.getElementById("wheel_2").innerHTML = wheel2;
  };

  document.getElementById("wheel_3").onclick = function () {
    wheel3 = wheelRoller(wheel3);
    document.getElementById("wheel_3").innerHTML = wheel3;
  };

  document.getElementById("checkButton").onclick = function () {
    checkImage();
  };
}

document.getElementById("hintButton").onclick = function () {
    document.getElementById("hintText").style.display = "block";
    document.getElementById(
      "hintText"
    ).innerText = `I am a multiple of 7 and 71`;
    setTimeout(() => {
      document.getElementById("hintText").style.display = "none";
    }, 2000);
  };
}


function dinit() {
  document.getElementById("wheel_1").onclick = null;
  document.getElementById("wheel_2").onclick = null;
  document.getElementById("wheel_3").onclick = null;
  document.getElementById("checkButton").onclick = null;
  document.getElementById("hintButton").onclick = null;
}

function updateAttempts(value) {
  document.getElementById("triesCounter").innerHTML = value;
}
