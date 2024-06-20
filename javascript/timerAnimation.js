let timer = null;
let dogTop = 265;
let dogLeft = 265;
let dogSpeed = 1;

$(function () {
    $("#accel").val("속도: " + dogSpeed);

    $("#moveToUp").on('click', function () {
        pause();
        timer = setInterval(moveToTop, 5);
    });

    $("#moveToDown").on('click', function () {
        pause();
        timer = setInterval(moveToBottom, 5);
    });

    $("#pause").on('click', function () {
        pause();
    });

    $("#moveToLeft").on('click', function () {
        pause();
        timer = setInterval(moveToLeft, 5);
    });

    $("#moveToRight").on('click', function () {
        pause();
        timer = setInterval(moveToRight, 5);
    });

    $("body").on("keydown", function (event) {
        if (event.keyCode == 37) moveToLeft();
        if (event.keyCode == 38) moveToTop();
        if (event.keyCode == 39) moveToRight();
        if (event.keyCode == 40) moveToBottom();
        if (event.keyCode == 37 && event.keyCode == 38) {
            moveToLeft();
            moveToTop();
        }
        if (event.keyCode == 37 && event.keyCode == 40) {
            moveToLeft();
            moveToBottom();
        }
        if (event.keyCode == 39 && event.keyCode == 38) {
            moveToRight();
            moveToTop();
        }
        if (event.keyCode == 39 && event.keyCode == 40) {
            moveToRight();
            moveToBottom();
        }
    });

    $("#accel").on('click', function () {
        dogSpeed++;
        $("#accel").val(`속도: ${dogSpeed}`);
    });
});

// 이미지 정지 기능 구현 함수
const pause = function () {
    clearInterval(timer);
};

// 이미지 위쪽 이동 기능 구현 함수
const moveToTop = function () {
    if (dogTop >= 10) {
        dogTop -= dogSpeed;
        $("#dog").css("top", `${dogTop}px`);
    }
}

// 이미지 아래쪽 이동 기능 구현 함수
const moveToBottom = function () {
    if (dogTop <= 540) {
        dogTop += dogSpeed;
        $("#dog").css("top", `${dogTop}px`);
    }
}

// 이미지 왼쪽 이동 기능 구현 함수
const moveToLeft = function () {
    if (dogLeft >= 10) {
        dogLeft -= dogSpeed;
        $("#dog").css("left", `${dogLeft}px`);
    }
}

// 이미지 오른쪽 이동 기능 구현 함수
const moveToRight = function () {
    if (dogLeft <= 540) {
        dogLeft += dogSpeed;
        $("#dog").css("left", `${dogLeft}px`);
    }
}
