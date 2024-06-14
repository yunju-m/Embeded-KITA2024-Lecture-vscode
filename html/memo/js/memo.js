/*
jQuery 메모장 구현
1. 제목과 내용을 입력하고 등록 버튼을 누르면 localStorage에 메모객체를 저장한다.
2. 좌측에는 메모의 리스트를 최신순으로 리스팅하고
    각 메모에는 삭제버튼이 우측에 존재한다.
3. 삭제버튼을 클릭하면 해당 메모가 삭제되고 리스트가 갱신된다.
4. 메모리스트의 가장 최근 메모가 우측에 표시된다.
*/

$(function () {
    printMemoList();

    $("#submitBtn").on("click", function () {
        const memoObj = {
            id: Date.now(),
            title: $("#title").val(),
            content: $("#content").val(),
            regdate: Date.now()
        };
        addMemo(memoObj);
        clearInputs();
    });

    $("#memolist").on("click", ".btn-danger", function () {
        const key = $(this).closest('li').attr('id').substr(4);
        removeMemo(key);
    })

    $("#memolist").on("click", "ul li", function () {
        const key = $(this).attr('id').substr(4);
        getTopMemo(key);
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
        $("#memolist ul").append(`<li id='memo${memoList[i].id}'>
        ${getDateStr(memoList[i].regdate)}</br>
        ${memoList[i].title}
        <button class="btn btn-danger">삭제</button></li>`);
    }
}

// 메모의 등록 시간 출력형식 지정함수
function getDateStr(time) {
    return moment(time).format("YYYY년 MM월 DD일");
}

// localStorage의 메모리스트에 메모를 추가하는 함수
function addMemo(memoObj) {
    const memoList = getMemoList();
    memoList[memoList.length] = memoObj;
    localStorage.setItem("memoList", JSON.stringify(memoList));
    printMemoList();
}

// 새로운 제목, 내용 작성 후 초기화 함수
function clearInputs() {
    $("#title").val('');
    $("#content").val('');
}

// localStorage의 메모리스트에서 메모를 삭제하는 함수
function removeMemo(id) {
    // const liList = $("ul li");
    // const liListLeng = $("ul li").length;
    // for (let i = 0; i < liListLeng; i++) {
    //     if (liList[i].id == delkey) {
    //         liList[i].remove();
    //     }
    // }
    const memoList = getMemoList();
    const leftData = memoList.filter((memo) => memo.id != id);
    localStorage.setItem("memoList", JSON.stringify(leftData));
    printMemoList();
}
// 최신 메모를 하나를 가져오는 함수
function getTopMemo(id) {
    const memoList = getMemoList();
    const selectData = memoList.filter((memo) => memo.id == id);
    printTopMemo(selectData);
}

// 최신 메모 출력하는 함수
function printTopMemo(memo) {
    $(".recent-container").empty();
    if (memo.length != 0) {
        const regdate = `<h1>${getDateStr(memo[0].regdate)}</h1><br />`;
        const title = `<p>${memo[0].title}</p><br />`;
        const content = `<p>${memo[0].content}</p>`
        $(".recent-container").append(regdate + title + content);
    }
}