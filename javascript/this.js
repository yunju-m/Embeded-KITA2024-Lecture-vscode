// 전역 스코프에서의 this
console.log(this); // {}

// 일반함수(선언적함수)에서의 this
function add(a, b) {
    console.log(this); // global (전역객체)
    return a + b;
}
add(3, 5);

// 생성자함수에서의 this
function Person(name, age) {
    this.name = name;
    this.age = age;
    console.log(this); // new Person('홍길동', 30)
};

const person = new Person('홍길동', 30);

// 메소드내에서의 this
const hong = {
    name: '홍길동',
    age: 30,
    printThis() {
        console.log(this); // hong 객체
    }
};
hong.printThis();

// 콜백함수내에서의 this
const kang = {
    name: '강감찬',
    age: 20,
    printThis() {
        console.log(this.name); // 강감찬
        const that = this;

        // 콜백함수 내에서의 this는 전역객체
        setTimeout(function () {
            console.log(this.name); // undefined
        }, 100);

        // 메소드내에 this를 that에 담아서 that을 통해 kang객체와 this를 바인딩 
        setTimeout(function () {
            console.log(that.name); // 강감찬
        }, 100);

        // bind메소드를 사용해 콜백함수내의 kang객체와 this를 바인딩
        setTimeout(function () {
            console.log(this.name); // 강감찬
        }.bind(this), 100);

        // 콜백함수를 화살표 함수를 사용하면 콜백함수 내의 this문제가 해결됨
        // => 콜백함수 내의 this는 콜백함수를 호출한 객체
        setTimeout(() => console.log(this.name)); // 강감찬
    }
};
kang.printThis();

/* 
    이벤트 핸들러내에서의 this는 이벤트 타겟 객체 
    btn : 이벤트 타겟 객체, onclick :이벤트 속성, 이벤트명: click
    function(){} : 이벤트 핸들러(=이벤트 리스너)
    
    btn.onclick = function() {
        console.log(this); // btn
    }
*/