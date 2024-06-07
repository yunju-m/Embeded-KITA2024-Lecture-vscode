window.onload = function () {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const btn = document.getElementById("btn");
    const result = document.getElementById("result");

    btn.addEventListener("click", function () {
        result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
    });
}