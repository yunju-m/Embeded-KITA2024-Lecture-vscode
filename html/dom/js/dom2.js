function clickBtn() {
    alert("클릭!");
}

function changeBGColor() {
    document.body.style.backgroundColor = 'lightyellow';
}

function changeText() {
    let txt = document.getElementById("txt");
    let result = document.getElementById("result");
    result.innerHTML = txt.value;
}