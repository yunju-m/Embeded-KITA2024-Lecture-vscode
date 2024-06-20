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

    switch (direction) {
        case "top": {
            return function () {
                if (dogTop >= min) {
                    dogTop -= dogSpeed;
                    $("#dog").css("top", dogTop + "px");
                }
            };
        }
        case "bottom": {
            return function () {
                if (dogTop <= max) {
                    dogTop += dogSpeed;
                    $("#dog").css("top", dogTop + "px");
                }
            };
        }
        case "left": {
            return function () {
                if (dogLeft >= min) {
                    dogLeft -= dogSpeed;
                    $("#dog").css("left", dogLeft + "px");
                }
            };
        }
        case "right": {
            return function () {
                if (dogLeft <= max) {
                    dogLeft += dogSpeed;
                    $("#dog").css("left", dogLeft + "px");
                }
            };
        }
    }

}
