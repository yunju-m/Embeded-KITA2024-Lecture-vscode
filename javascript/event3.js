// 이벤트 전파 (event propagation)


document.querySelector("#outer").addEventListener("click", function (e) {
    printEventInfo(e);
});

// 캡쳐링 단계에서 이벤트 처리를 하려면 addEventListener 세번째 인자를 true로 설정
document.querySelector("#outer").addEventListener("click", function (e) {
    printEventInfo(e);
}, true);

document.querySelector("#inner").addEventListener("click", function (e) {
    printEventInfo(e);
});

document.querySelector("#inner").addEventListener("click", function (e) {
    printEventInfo(e);
}, true);

document.querySelector("#btn").addEventListener("click", function (e) {
    printEventInfo(e);
    e.stopPropagation(); // 이벤트 전파 중단 (== 버블링 금지)
});

document.querySelector("#btn").addEventListener("click", function (e) {
    printEventInfo(e);
}, true);

const printEventInfo = (e) => {
    console.log("이벤트 target : " + e.target);
    console.log("이벤트 currentTarget : " + e.currentTarget);
    console.log("이벤트 currentTarget id : " + e.currentTarget.id);
    console.log("이벤트 phase : " + e.eventPhase);
    console.log('\n');
};