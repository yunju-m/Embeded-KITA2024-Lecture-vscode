// 이벤트 위임 (event delegation)

const fruits = document.querySelector("#fruits");

// 이벤트 객체의 target을 인자로 전달받음
function activate({ target }) {
    // target이 li가 아니면 빠져나감
    if (!target.matches('#fruits > li')) return;
    // li 각각에 대해서 active 클래스를 토글(active클래스가 없으면 있도록, 있으면 없도록함)
    [...fruits.children].forEach(fruit => {
        fruit.classList.toggle('active', fruit === target);
        console.log(target.id);
    });
}

// 상위인 ul에서 click 이벤트가 발생하면 activate 함수 호출
fruits.onclick = activate;