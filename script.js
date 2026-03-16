document.getElementById("ex1").onclick = () => {
  let inp1 = document.getElementById("inp1");
  let inp2 = document.getElementById("inp2");
  temp = inp1.value;
  inp1.value = inp2.value;
  inp2.value = temp;
};

document.getElementById("ex2_plus").onclick = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  document.getElementById("ex2_result").value = +num1 + +num2;
};
document.getElementById("ex2_minus").onclick = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  document.getElementById("ex2_result").value = num1 - num2;
};
document.getElementById("ex2_div").onclick = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  document.getElementById("ex2_result").value = num1 / num2;
};
document.getElementById("ex2_multiple").onclick = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  document.getElementById("ex2_result").value = num1 * num2;
};

document.getElementById("ex3").onclick = () => {
  let poids = document.getElementById("poids").value;
  let taille = document.getElementById("taille").value;

  let imc = poids / (taille * taille);

  if (imc < 18.5) {
    document.getElementById("ex3_result").textContent =
      `Votre IMC est de ${imc.toFixed(2)}. Vous êtes en état d'insuffisance pondérale (maigreur).`;
  } else if (imc < 25) {
    document.getElementById("ex3_result").textContent =
      `Votre IMC est de ${imc.toFixed(2)}. Vous avez une corpulence normale.`;
  } else if (imc < 30) {
    document.getElementById("ex3_result").textContent =
      `Votre IMC est de ${imc.toFixed(2)}. Vous êtes en surpoids.`;
  } else if (imc < 35) {
    document.getElementById("ex3_result").textContent =
      `Votre IMC est de ${imc.toFixed(2)}. Vous êtes en obésité modérée.`;
  } else if (imc < 40) {
    document.getElementById("ex3_result").textContent =
      `Votre IMC est de ${imc.toFixed(2)}. Vous êtes en obésité sévère.`;
  } else {
    document.getElementById("ex3_result").textContent =
      `Votre IMC est de ${imc.toFixed(2)}. Vous êtes en obésité morbide ou massive.`;
  }
};

function writeValue(value) {
  const textarea = document.getElementById("ex4_textarea");
  if (value === "CE") {
    textarea.value = "";
  } else if (value === "=") {
    textarea.value = eval(textarea.value);
  } else if (value === "pi") {
    textarea.value += Math.PI;
  } else {
    textarea.value += value;
  }
}
