// 성적처리 스크립트
let personArr = [];

$(function () {
    init(); // 초기화

    $("#inputBtn").click(function () {
        if (!$("#sname").val() || !$("#skor").val() || !$("#seng").val() || !$("#smath").val()) {
            alert("정보를 입력해주세요!");
            return false;
        } else {
            const newScore = new Score(
                parseInt($("#skor").val()),
                parseInt($("#seng").val()),
                parseInt($("#smath").val()),
            );
            const newPerson = new Person($("#sname").val(), newScore);
            personArr = getPersonArr(newPerson);
            getRankArr(personArr);
            printScore(personArr, getSumArr(personArr));
        }
    });
});

function init() {
    personArr = getInitPersonArr();
    getRankArr(personArr);
    printScore(personArr, getSumArr(personArr));
}

// 초기 객체 배열 생성 후 반환 함수
function getInitPersonArr() {
    // 3명의 성적 객체 생성
    const hongScore = new Score(100, 90, 80);
    const kangScore = new Score(90, 80, 70);
    const leeScore = new Score(80, 70, 60);

    // 3명의 학생 객체 생성
    const hong = new Person("홍길동", hongScore);
    const kang = new Person("강감찬", kangScore);
    const lee = new Person("이순신", leeScore);

    return [hong, kang, lee];
}

// 객체 배열 생성 후 반환 함수
function getPersonArr(newPerson) {
    // newPerson이 있으면 newPerson을 포함한 personArr를 반환
    if (newPerson) {
        personArr[personArr.length] = newPerson;
    }
    return personArr;
}

// 성적 연산 결과 배열 반환 함수
function getSumArr(personArr) {
    const personArrLeng = personArr.length;
    const sumArr = [0, 0, 0, 0, 0]; // 국어 총점, 영어 총점, 수학 총점, 총점의 총점, 평균의 평균
    for (let i = 0; i < personArrLeng; i++) {
        sumArr[0] += personArr[i].score.skor;
        sumArr[1] += personArr[i].score.seng;
        sumArr[2] += personArr[i].score.smath;
        sumArr[4] += personArr[i].savg;
    }
    sumArr[3] = sumArr[0] + sumArr[1] + sumArr[2];
    sumArr[4] = sumArr[4] / personArrLeng;

    return sumArr;
}

// 성적 출력 함수
function printScore(personArr, sumArr) {
    $("tbody").empty();
    $("tfoot").empty();

    const personArrLeng = personArr.length;
    for (let i = 0; i < personArrLeng; i++) {
        $("tbody").append(`
            <tr>
                <td>${i + 1}</td>
                <td>${personArr[i].name}</td>
                <td>${personArr[i].score.skor}</td>
                <td>${personArr[i].score.seng}</td>
                <td>${personArr[i].score.smath}</td>
                <td>${personArr[i].ssum}</td>
                <td>${personArr[i].savg}</td>
                <td>${personArr[i].srank}</td>
            </tr>`
        );
    }

    $('tfoot').append(`
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>${sumArr[0]}</td>
            <td>${sumArr[1]}</td>
            <td>${sumArr[2]}</td>
            <td>${sumArr[3]}</td>
            <td>${sumArr[4]}</td>
            <td>&nbsp;</td>
        </tr>
    `);
}
// 석차 판별 함수
function getRankArr(personArr) {
    personArr.sort((a, b) => b.savg - a.savg);
    const personArrLeng = personArr.length;

    for (let i = 0; i < personArrLeng; i++) {
        if (i > 0 && personArr[i].savg === personArr[i - 1].savg) {
            personArr[i].srank = personArr[i - 1].srank;
        } else {
            personArr[i].srank = i + 1;
        }
    }
}