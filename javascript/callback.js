// 콜백 함수 (callback function)

// 1. 이벤트리스너 (event listener) = 이벤트콜백 = 이벤트핸들러
// javascript
// load 이벤트에 대한 콜백 함수
window.addEventListener('load', function () {
    const btn = document.getElementById("btn");
    const txt = document.getElementById("txt");
    const result = document.getElementById("result");

    // click 이벤트에 대한 콜백 함수 1)
    // 하나의 콜백 함수만 사용 가능
    // btn.onclick = function () {
    //     result.innerHTML = txt.value;
    //     txt.value = "";
    // };

    // click 이벤트에 대한 콜백함수 2)
    // addEventListener방식을 활용하면 여러개의 콜백함수 사용 가능
    btn.addEventListener('click', function () {
        result.innerHTML = txt.value;
        txt.value = "";
    });
    btn.addEventListener('click', function () {
        alert('버튼 클릭!!');
    });

});

// jquery
// load 이벤트 콜백
$(function () {
    // click 이벤트 콜백
    $("#btn").click(function () {
        console.log('1');
    });
    $("#btn").click(function () {
        $("#result").html($("#txt").val());
    });
    $("#btn").on('click', function () {
        console.log('2');
    });
});

// 2. AJAX 콜백 함수
window.onload = function () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.send();
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState == 4 && xhr.status == 200) {
    //         document.getElementById("result").innerHTML
    //             = xhr.responseText;
    //     }
    // };

    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("result").innerHTML
                = xhr.responseText;
        }
    });

    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText);
        }
    });
};

// juery
$(function () {
    $.ajax({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
        success: function (result) {
            $("#result").html(JSON.stringify(result));
        }
    });
});
$(function () {
    $.ajax({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts"
    }).done(function (data, status) {
        if (status == "success") {
            $("#result").html(JSON.stringify(data));
        }
    }).fail(function (err) {
        console.log(err);
    });
});

// axios
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (result) {
        $("#result").html(JSON.stringify(result));
    })
    .catch(function (error) {
        console.log(error);
    }).finally(function () {
    });

// 3. timing function
// setTimeout : 특정 시간 후 에 콜백 수행
// setInterval : 특정 시간 간격으로 콜백 수행

// 1) setTimeout(callback, milliseconds)
$(function () {
    setTimeout(cbfunc, 1000);
});
const cbfunc = function () {
    console.log("cbfunc함수 수행됨!");
};

// 2) setInterval(callback, milliseconds)
let count = 0;
let timer = null;
$(function () {
    timer = setInterval(cbfunc2, 1000);
});
const cbfunc2 = function () {
    console.log(`cbfunc함수 ${++count}번 수행됨!`);
    if (count == 5) {
        clearInterval(timer);
    }
};

// 타이머 구현
// START버튼을 누르면 타이머 시작 기능 구현
// STOP버튼을 누르면 타이머 멈추는 기능 구현
// 초기화버튼을 누르면 타이머 초기화 기능 구현
let count2 = 0;
let timer2 = null;
$(function () {
    $("#startBtn").click(function () {
        timer2 = setInterval(timefunc, 1000);
    });
    $("#stopBtn").click(function () {
        clearInterval(timer2);
    });
    $("#initBtn").click(function () {
        clearInterval(timer2);
        count2 = 0;
    });
});
const timefunc = function () {
    console.log(`${++count2}초`);
};