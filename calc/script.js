function calculate(operator) {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var result;

  if (operator === '+') {
    result = parseFloat(num1) + parseFloat(num2);
  } else if (operator === '-') {
    result = parseFloat(num1) - parseFloat(num2);
  } else if (operator === '*') {
    result = parseFloat(num1) * parseFloat(num2);
  } else if (operator === '/') {
    result = parseFloat(num1) / parseFloat(num2);
  }

  document.getElementById("პასუხი").innerHTML = result;
}
