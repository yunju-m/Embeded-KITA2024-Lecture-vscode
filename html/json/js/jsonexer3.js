window.onload = function () {
    // 1. 3명의 학생데이터(학번, 이름, 국어, 영어, 수학)를 json배열로 생성
    const students = [
        { "sno": 1, "sname": "김학생", "kor": 80, "eng": 80, "math": 80, "tot": 0, "avg": 0 },
        { "sno": 2, "sname": "이학생", "kor": 90, "eng": 80, "math": 70, "tot": 0, "avg": 0 },
        { "sno": 3, "sname": "정학생", "kor": 80, "eng": 70, "math": 60, "tot": 0, "avg": 0 }
    ];
    const tbody = document.getElementsByTagName("TBODY")[0];
    const studentsLen = students.length;
    const subjectsLen = 3;

    //2. 데이터 가져오기 버튼 누르면 3명의 데이터를 테이블에 보여준다.
    document.getElementById("dataBtn").addEventListener("click", printData);

    // 3. 총점/평균 버튼을 누르면 3명의 총점/평균을 테이블 우측에 보여준다.
    document.getElementById("sumAndAvgBtn").addEventListener("click", function () {
        for (let i = 0; i < studentsLen; i++) {
            students[i].tot += students[i].kor
                + students[i].eng
                + students[i].math;
            students[i].avg = students[i].tot / subjectsLen;
        }
        printData();
    });

    // 데이터 출력 함수
    function printData() {
        let trs = "";
        for (let i = 0; i < studentsLen; i++) {
            trs += "<tr>";
            trs += `<td class="px-6 py-4">${students[i].sno}</td>`;
            trs += `<td class="px-6 py-4">${students[i].sname}</td>`;
            trs += `<td class="px-6 py-4">${students[i].kor}</td>`;
            trs += `<td class="px-6 py-4">${students[i].eng}</td>`;
            trs += `<td class="px-6 py-4">${students[i].math}</td>`;

            if (students[i].tot > 0) {
                trs += `<td class="px-6 py-4">${students[i].tot}</td>`;
                trs += `<td class="px-6 py-4">${students[i].avg}</td>`;
            } else {
                trs += `<td>${0}</td>`;
                trs += `<td>${0}</td>`;
            }
            trs += "</tr>";
        }
        tbody.innerHTML = trs;
    }

}


