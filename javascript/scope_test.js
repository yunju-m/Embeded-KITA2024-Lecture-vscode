var v1 = 1;
let v2 = 2;
console.log(v1, v2);    // v1=1, v2=2

{
    console.log(v1, v2);    // v1=1,v2=2
    v1 = 3;
    v2 = 4;
    console.log(v1, v2);    // v1=3, v2=4
}

function func() {
    // console.log(v1, v2);    // v1=undefined, v2=error
    v1 = 7;
    var v1 = 5;
    let v2 = 6;
    console.log(v1, v2);    // v1=5, v2=6
}
func();

console.log(v1, v2);    // v1=3, v2=4