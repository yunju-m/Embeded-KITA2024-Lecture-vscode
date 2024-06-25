const g = globalThis;

// 웹 브라우저의 전역객체 : window 또는 globalThis
// node의 전역객체 : global 또는 globalThis
// in web browser
console.log(window === globalThis);

// in node
// console.log(global === globalThis);

g.name = 'global';
// console.log(g.name); // global

console.log('1) ' + this.name); // 1) undefined (node에서 전역 this => {})

function func1() {
    console.log('2) ' + this.name); // 2) global (node에서 일반함수내에서의 this => global)
}
func1();

function Person(name) {
    this.name = name;
    console.log('3) ' + this.name); // 3) 강감찬
}
const person = new Person('강감찬');

const hong = {
    name: '홍길동',
    getName() {
        return this.name;
    },
    printName() {
        setTimeout(function () {
            console.log('5) ' + this.name); // 5) undefined
        }, 100);
        setTimeout(() => console.log('6) ' + this.name)); // 6) 홍길동
    }
};
console.log('4) ' + hong.getName()); // 4) 홍길동
hong.printName();

function func2() {
    const name = 'func2';
    console.log('7) ' + this.name); // 7) global
    function func3() {
        const name = 'func3';
        console.log('8) ' + this.name); // 8) global
    }
    func3();
}
func2();