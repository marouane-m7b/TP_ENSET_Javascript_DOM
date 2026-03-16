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
  document.getElementById("result").value = +num1 + +num2;
};
document.getElementById("ex2_minus").onclick = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  document.getElementById("result").value = num1 - num2;
};
document.getElementById("ex2_div").onclick = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  document.getElementById("result").value = num1 / num2;
};
document.getElementById("ex2_multiple").onclick = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  document.getElementById("result").value = num1 * num2;
};
