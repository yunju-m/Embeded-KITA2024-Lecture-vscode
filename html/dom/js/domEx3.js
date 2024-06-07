window.onload = function () {
    const svg = document.getElementById("svg");
}

function drawsquare() {
    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", document.getElementById("rx").value);
    rect.setAttribute("y", document.getElementById("ry").value);
    rect.setAttribute("width", document.getElementById("rw").value);
    rect.setAttribute("height", document.getElementById("rh").value);
    rect.setAttribute("stroke", "black");
    rect.setAttribute("stroke-width", "6");
    rect.setAttribute("fill", document.getElementById("rectcolor").value);
    svg.appendChild(rect);
}

function drawcircle() {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", document.getElementById("cx").value);
    circle.setAttribute("cy", document.getElementById("cy").value);
    circle.setAttribute("r", document.getElementById("r").value);
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", 4);
    circle.setAttribute("fill", document.getElementById("circlecolor").value);
    svg.appendChild(circle);
}