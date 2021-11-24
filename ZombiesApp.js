let buttonBack = document.querySelector(".back-button");
buttonBack.textContent = "Jogar novamente";

buttonBack.addEventListener("click", () => {
  location.href = "./index.html";
});

/* QUESTION 1 */

let answer1 = parseInt(
  prompt(
    "Já criamos nossa estrutura básica HTML, com header, main e footer. Também já importamos a folha de estilo, mas falta importar o script. Depois de importar, queremos fazer um teste usando alert. Qual mensagem podemos mostrar na tela?\n\n(1) Hello World!\n(2) Testando...\n(3) Olá, mundo! "
  )
);

const checkAnswer1 = (answer) => {
  if (answer == 1) alert("Hello World!");
  else if (answer == 2) alert("Testando...");
  else if (answer == 3) alert("Olá, mundo!");
  else {
    alert("Opção inválida. Mas vamos continuar.");
  }
};
checkAnswer1(answer1);

/* QUESTION 2 */

let answer2 = parseInt(
  prompt(
    "Já testamos, mas agora precisamos colocar o restante das tags na header. Começando pela logo, qual imagem iremos inserir?\n\n(1) um zumbi\n(2) uma mancha de sangue\n(3) uma letra Z "
  )
);
const checkAnswer2 = (answer) => {
  let logo = document.querySelector(".logo");
  let image = document.createElement("img");
  image.classList.add("img-size");
  if (answer == 1) image.src = "./assets/zombie-icon.png";
  else if (answer == 2) image.src = "./assets/blood-icon.png";
  else if (answer == 3) image.src = "./assets/z-icon.png";
  else {
    alert("Opção inválida. Vamos usar o zumbi mesmo");
    image.src = "./assets/zombie-icon.png";
  }

  logo.appendChild(image);
};
checkAnswer2(answer2);
var temp = answer2; //para verificar o footer

/* QUESTION 3 */

let answer3 = parseInt(
  prompt(
    "Ao lado da imagem da logo, precisamos do nome do aplicativo. Qual a melhor ideia?\n\n(1) Kill'em all\n(2) Shoot the zombies\n(3) Shoot'n'run"
  )
);
const checkAnswer3 = (answer) => {
  let logoName = document.querySelector(".logo-name");
  if (answer == 1) logoName.textContent = "Kill'em all";
  else if (answer == 2) logoName.textContent = "Shoot the zombies";
  else if (answer == 3) logoName.textContent = "Shoot'n'run";
  else {
    alert("Opção inválida. Vamos usar o nosso nome favorito");
    logoName.textContent = "Kill'em all";
  }
};
checkAnswer3(answer3);

/* QUESTION 4 */

let answer4 = parseInt(
  prompt(
    "Mas ainda não falamos um pouquinho sobre o aplicativo. Qual será o melhor título para descrição?\n\n(1) Mate hordas de zumbis com os seus amigos!\n(2) O jogo mais baixado de 2021!\n(3) O jogo mais divertido do ano!"
  )
);
const checkAnswer4 = (answer) => {
  let title = document.querySelector(".title");
  if (answer == 1)
    title.textContent = "Mate hordas de zumbis com os seus amigos!";
  else if (answer == 2) title.textContent = "O jogo mais baixado de 2021!";
  else if (answer == 3) title.textContent = "O jogo mais divertido do ano!";
  else {
    alert("Opção inválida. Vamos usar o nosso título favorito.");
    title.textContent = "Mate hordas de zumbis com os seus amigos!";
  }
};
checkAnswer4(answer4);

/* QUESTION 5 */

let answer5 = parseInt(
  prompt(
    "E quanto à descrição?\n\n(1) O jogo conta com modos single player e multiplayer para você se divertir com a galera.\n(2) Totalmente de graça e esperando para você gastar horas de diversão.\n(3) Uma nova forma de se divertir com os amigos enquanto mata vários zumbis."
  )
);
const checkAnswer5 = (answer) => {
  let description = document.querySelector(".description");
  if (answer == 1)
    description.textContent =
      "O jogo conta com modos single player e multiplayer para você se divertir com a galera.";
  else if (answer == 2)
    description.textContent =
      "Totalmente de graça e esperando para você gastar horas de diversão.";
  else if (answer == 3)
    description.textContent =
      "Uma nova forma de se divertir com os amigos enquanto mata vários zumbis.";
  else {
    alert("Opção inválida. Vamos usar a nossa descrição favorita.");
    description.textContent =
      "O jogo conta com modos single player e multiplayer para você se divertir com a galera.";
  }
};
checkAnswer5(answer5);

/* QUESTION 6 */

let answer6 = parseInt(
  prompt(
    "Para o footer, precisamos atribuir os direitos autorais. Além do nome do aplicativo, qual outra opção podemos colocar?\n\n(1) link para baixar o aplicativo\n(2) uma pequena imagem da logo \n(3) um número de telefone"
  )
);
const checkAnswer6 = (answer) => {
  var footerOption = document.querySelector(".footer-option");
  let logoName = document.querySelector(".logo-name");
  let footerName = document.querySelector(".footer-name");
  footerName.textContent = logoName.textContent + "@2021";
  if (answer == 1) {
    let link = document.createElement("a");
    link.textContent = "Baixe já o aplicativo";
    link.href = "./zombiesApp.html";
    footerOption.appendChild(link);
  } else if (answer == 2) {
    let image = document.createElement("img");
    if (temp == 1) image.src = "./assets/zombie-icon.png";
    else if (temp == 2) image.src = "./assets/blood-icon.png";
    else if (temp == 3) image.src = "./assets/z-icon.png";
    image.classList.add("img-size");
    footerOption.appendChild(image);
  } else if (answer == 3) {
    footerOption.textContent = "(22) 93828-2122";
  } else {
    alert("Opção inválida. Vamos utilizar um número mesmo.");
    footerOption.textContent = "(22) 93828-2122";
  }
};
checkAnswer6(answer6);

/* QUESTION 7 */

let answer7 = parseInt(
  prompt(
    "Vamos para a estilização agora. Qual será a cor da header?\n\n(1) vermelho\n(2) verde \n(3) preto"
  )
);
const checkAnswer7 = (answer) => {
  let header = document.querySelector("header");
  let footer = document.querySelector("footer");
  if (answer == 1) {
    header.classList.add("color-red");
    footer.classList.add("color-red");
  } else if (answer == 2) {
    header.classList.add("color-green");
    footer.classList.add("color-green");
  } else if (answer == 3) {
    header.classList.add("color-black");
    footer.classList.add("color-black");
  } else {
    alert("Opção inválida. Vamos usar uma cor bem chamativa então.");
    header.classList.add("color-red");
    footer.classList.add("color-red");
  }
};
checkAnswer7(answer7);

/* QUESTION 8 */

let answer8 = parseInt(
  prompt("E a fonte?\n\n(1) Arial\n(2) Gill Sans \n(3) Trebuchet")
);
const checkAnswer8 = (answer) => {
  let box = document.querySelector(".box");
  if (answer == 1) box.classList.add("body-font-arial");
  else if (answer == 2) box.classList.add("body-font-gill");
  else if (answer == 3) box.classList.add("body-font-trebuchet");
  else {
    alert("Opção inválida. Vamos com uma fonte padrão.");
    box.classList.add("body-font-arial");
  }
};
checkAnswer8(answer8);

/* QUESTION 9 */

let answer9 = parseInt(
  prompt(
    "Para a descrição e o título, qual será a cor das letras?\n\n(1) vermelho\n(2) verde \n(3) preto"
  )
);
const checkAnswer9 = (answer) => {
  let title = document.querySelector(".title");
  let description = document.querySelector(".description");
  if (answer == 1) {
    title.classList.add("font-color-red");
    description.classList.add("font-color-red");
  } else if (answer == 2) {
    title.classList.add("font-color-green");
    description.classList.add("font-color-green");
  } else if (answer == 3) {
    title.classList.add("font-color-black");
    description.classList.add("font-color-black");
  } else {
    alert("Opção inválida. Então, vamos utilizar uma cor bem tranquila.");
    title.classList.add("font-color-red");
    description.classList.add("font-color-red");
  }
};
checkAnswer9(answer9);
