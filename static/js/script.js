const image = document.createElement("img");
const playAgain = document.createElement("a");

function spinTop() {
  LogoElement = document.getElementById("tomaTodoLogo");
  if (LogoElement != null) LogoElement.remove();

  const topElement = document.getElementById("spinBtn");
  topElement.classList.add("tomaTodoLogo");

  // Remove the class after a specified duration
  setTimeout(() => {
    topElement.classList.remove("tomaTodoLogo");
  }, 2000);

  faceNum = Math.floor(Math.random() * 6);
  if (faceNum == 0) {
    image.src = "static/img/pon_uno.jpg";
    image.alt = "Pon Uno Img";
    image.className = "topImg";
    var inputImg = document.getElementById("topImg");
    inputImg.appendChild(image);
    return;
  }

  if (faceNum == 1) {
    image.src = "static/img/toma_uno.jpg";
    image.alt = "Toma Uno Img";
    image.className = "topImg";
    var inputImg = document.getElementById("topImg");
    inputImg.appendChild(image);
    return;
  }

  if (faceNum == 2) {
    image.src = "static/img/pon_dos.jpg";
    image.alt = "Pon Dos Img";
    image.className = "topImg";
    var inputImg = document.getElementById("topImg");
    inputImg.appendChild(image);
    return;
  }

  if (faceNum == 3) {
    image.src = "static/img/toma_dos.jpg";
    image.alt = "Toma Dos Img";
    image.className = "topImg";
    var inputImg = document.getElementById("topImg");
    inputImg.appendChild(image);
    return;
  }

  if (faceNum == 4) {
    image.src = "static/img/todos_ponen.jpg";
    image.alt = "Todos Ponen Img";
    image.className = "topImg";
    var inputImg = document.getElementById("topImg");
    inputImg.appendChild(image);
    return;
  }

  if (faceNum == 5) {
    image.src = "static/img/toma_todo.jpg";
    image.alt = "Toma Todo Img";
    image.className = "topImg";
    var inputImg = document.getElementById("topImg");
    inputImg.appendChild(image);
    const ButtonElement = document.getElementById("spinBtn");
    ButtonElement.remove();
    playAgain.href = "javascript:window.location.href=window.location.href";
    playAgain.innerHTML =
      "<img src='static/img/playAgain.png' class='playAgainBtn'>";
    var inputPlay = document.getElementById("playAgain");
    inputPlay.appendChild(playAgain);
    return;
  }
}
