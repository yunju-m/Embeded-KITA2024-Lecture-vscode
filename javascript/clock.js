// javascript clock
// 형식 : 2024년 6월 27일 오후 2:27:10

$(function () {
    setInterval(getTime, 1);
});

const getTime = () => {
    const today = new Date();
    let day = '';
    switch (today.getDay()) {
        case 0: day = '일요일'; break;
        case 1: day = '월요일'; break;
        case 2: day = '화요일'; break;
        case 3: day = '수요일'; break;
        case 4: day = '목요일'; break;
        case 5: day = '금요일'; break;
        case 6: day = '토요일';
    }
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const milliSeconds = today.getMilliseconds();
    const ampm = hour < 12 ? "오전" : "오후";

    $('h1').html(`${year}년 ${month}월 ${date}일 ${day} ${ampm} \
        ${hour}:${minutes}:${seconds}:${milliSeconds}`);
};