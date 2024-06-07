function calculate(event) {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const result = document.getElementById("result");
    if (event === '+') result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
    else if (event === '-') result.innerHTML = parseInt(num1.value) - parseInt(num2.value);
    else if (event === '*') result.innerHTML = parseInt(num1.value) * parseInt(num2.value);
    else if (event === '/') result.innerHTML = parseInt(num1.value) / parseInt(num2.value);
}