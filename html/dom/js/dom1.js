window.onload = function () {

    let wrapper = document.getElementById("wrapper");
    let div = document.createElement("DIV");
    let p = document.createElement("P");
    let text = document.createTextNode("Hello DOM!");

    p.appendChild(text);
    div.appendChild(p);
    wrapper.appendChild(div);

}