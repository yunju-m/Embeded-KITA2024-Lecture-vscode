// 프로토타입 변경에 따른 동적 상속 변경
function Dog(name, sound) {
    this.name = name;
    this.sound = sound;
}
Dog.prototype.say = function () {
    console.log("개는 " + this.sound + " 소리를 냅니다!");
};

function Cat(name, sound) {
    this.name = name;
    this.sound = sound;
}
Cat.prototype.say = function () {
    console.log("고양이는 " + this.sound + " 소리를 냅니다!");
};

const dog = new Dog('푸들', '왈왈'); // dog는 Dog타입
dog.say();
const cat = new Cat('샴', '야옹');  // cat은 Cat타입
cat.say();

dog.__proto__ = Cat.prototype;  // dog는 Cat타입
dog.say();
cat.__proto__ = Dog.prototype;  // cat은 Dog타입
cat.say();