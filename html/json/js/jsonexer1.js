window.onload = function () {

    /* JSON에서 사용하는 Javascript의 데이터 타입 */
    const obj = {};     // object
    const arr = [];     // array
    const str = "";     // string
    const num = 0;      // number
    const bool = false; // boolean
    const nul = null;   //null

    const result = document.getElementById("result");

    // JSON Object
    const person = {
        "name": "홍길동",
        "age": 20,
        "gender": "M",
        "married": false
    };

    person.age = 30;
    result.innerHTML = person.name + ", "
        + person.age + ", "
        + person.gender + ", "
        + person.married;

    // JSON Array
    const persons = [
        { "name": "강감찬", "age": 60 },
        { "name": "장보고", "age": 30 },
        { "name": "이순신", "age": 70 }
    ];
    persons[1] = { "name": "권율", "age": 80 };
    result.innerHTML = persons[1].name
        + ", " + persons[1].age;

    const personLen = persons.length;
    let printStr = "";
    for (let i = 0; i < personLen; i++) {
        printStr += persons[i].name + ", " + persons[i].age + "<br />";
    }
    result.innerHTML = printStr;

    // JSON형태의 문자열
    const jsonObjStr = '{"name": "홍길동", "age": 20}';
    result.innerHTML = jsonObjStr;

    // JSON 문자열 → JSON Object
    const jsonObj = eval("(" + jsonObjStr + ")");
    result.innerHTML = jsonObj.name;


    // JSON Object → JSON 문자열
    const jsonStr = JSON.stringify(jsonObj);
    result.innerHTML = jsonStr;

}