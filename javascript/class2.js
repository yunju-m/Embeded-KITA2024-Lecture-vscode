// 상속

class Parent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(this.name + " Hi");
    }
}

class Child extends Parent {
    constructor(name, age, gender) {
        super(name, age);
        this.gender = gender;
    }
}

const parent = new Parent('강감찬', 30);
console.log(parent);
parent.sayHi();

const child = new Child('홍길동', 20, '남');
console.log(child);
child.sayHi();
