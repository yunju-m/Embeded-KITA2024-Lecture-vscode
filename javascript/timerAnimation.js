let timer = null;
let dogTop = 265;
let dogLeft = 265;
let dogSpeed = 1;

$(function () {
    $("#accel").val("속도: " + dogSpeed);

    makeTimer("moveToTop", move("top"));
    makeTimer("moveToBottom", move("bottom"));
    makeTimer("moveToLeft", move("left"));
    makeTimer("moveToRight", move("right"));

    $("body").on("keydown", function (event) {
        if (event.keyCode == 37) move("left")();
        if (event.keyCode == 38) move("top")();
        if (event.keyCode == 39) move("right")();
        if (event.keyCode == 40) move("bottom")();
        if (event.keyCode == 37 && event.keyCode == 38) {
            move("left")();
            move("top")();
        }
        if (event.keyCode == 37 && event.keyCode == 40) {
            move("left")();
            move("bottom")();
        }
        if (event.keyCode == 39 && event.keyCode == 38) {
            move("right")();
            move("top")();
        }
        if (event.keyCode == 39 && event.keyCode == 40) {
            move("right")();
            move("bottom")();
        }
    });

    $("#pause").on("click", function () {
        pause();
    });

    $("#accel").on('click', function () {
        dogSpeed++;
        $("#accel").val(`속도: ${dogSpeed}`);
    });
});

// 버튼별 타이밍 함수 지정
const makeTimer = function (id, func) {
    $(`#${id}`).on('click', function () {
        pause();
        timer = setInterval(func, 5);
    });
}

// 이미지 정지 기능 구현 함수
const pause = function () {
    clearInterval(timer);
}

// 이미지(상,하,좌,우) 이동 기능 구현 함수
const move = function (direction) {
    const max = 540;
    const min = 10;
    let dogDir = null;
    let displ = 0;

    switch (direction) {
        case "top":
            dogDir = dogTop;
            displ = min;
            break;
        case "bottom":
            dogDir = dogTop;
            displ = max;
            break;
        case "left":
            dogDir = dogLeft;
            displ = min;
            break;
        case "right":
            dogDir = dogLeft;
            displ = max;
            break;
    }

    if (direction == "top" || direction == "left") {
        return function () {
            if (dogDir >= displ) {
                dogDir -= dogSpeed;
                $("#dog").css(direction, dogDir + "px");
            }
        };
    } else {
        return function () {
            console.log(direction == "bottom");
            direction == "bottom" ? direction = "top" : direction = "left";
            if (dogDir <= displ) {
                dogDir += dogSpeed;
                $("#dog").css(direction, dogDir + "px");
            }
        };
    }
}
