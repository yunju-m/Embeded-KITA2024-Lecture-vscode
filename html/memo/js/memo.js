/*
jQuery 메모장 구현
1. 제목과 내용을 입력하고 등록 버튼을 누르면 localStorage에 메모객체를 저장한다.
2. 좌측에는 메모의 리스트를 최신순으로 리스팅하고
    각 메모에는 삭제버튼이 우측에 존재한다.
3. 삭제버튼을 클릭하면 해당 메모가 삭제되고 리스트가 갱신된다.
4. 메모리스트의 가장 최근 메모가 우측에 표시된다.
*/

$(function () {
    // const memoArr = [];
    // const memoObj = { "subject": "제목", "content": "내용", "regdate": "등록일시" };
    // if (localStorage) {
    //     localStorage.setItem("memo1", JSON.stringify(memoObj));
    // }
    printMemoList();
    $("#submitBtn").click(function () {
        const memoObj = {
            title: $("#title").val(),
            content: $("#content").val(),
            regdate: Date.now()
        };
        addMemo(memoObj);
    });

    $("#memolist ul li").click(function () {
        const key = $(this).attr("id");
        const keysub = $(this).attr("id").substr(4);
        // removeMemo(key);
        removeMemo(keysub);
    });
});

// localStorage의 메모리스트를 가져오는 함수
function getMemoList() {
    let memoList = localStorage.getItem("memoList");
    if (memoList == null || memoList == "") {
        localStorage.setItem("memoList", "[]");
        return [];
    } else {
        return JSON.parse(memoList);
    }
}

// 메모리스트를 출력하는 함수
function printMemoList() {
    $("#memolist ul").empty();
    const memoList = getMemoList();
    const memoListLeng = memoList.length;
    for (let i = 0; i < memoListLeng; i++) {
        $("#memolist ul").append(`<li id='memo${i}'>
        ${getDateStr(memoList[i].regdate)}</br>
        ${memoList[i].title}
        <button id=delBtn class="btn btn-danger">삭제</button></li>`);
    }
}

// 메모의 등록 시간 출력형식 지정함수
function getDateStr(time) {
    return moment(time).format("YYYY-MM-DD HH시 mm분");
}

// localStorage의 메모리스트에 메모를 추가하는 함수
function addMemo(memoObj) {
    const memoListArr = getMemoList();
    memoListArr[memoListArr.length] = memoObj;
    localStorage.setItem("memoList", JSON.stringify(memoListArr));
    printMemoList();
}

// localStorage의 메모리스트에서 메모를 삭제하는 함수
function removeMemo(delkey) {
    // const liList = $("ul li");
    // const liListLeng = $("ul li").length;
    // for (let i = 0; i < liListLeng; i++) {
    //     if (liList[i].id == delkey) {
    //         liList[i].remove();
    //     }
    // }
    const memoList = localStorage.getItem("memoList");
    const memoListObj = JSON.parse(memoList);
    console.log(memoListObj.filter((memo) => memo = 1));

}

// 최신 메모를 하나를 가져오는 함수
function getTopMemo() {

}
