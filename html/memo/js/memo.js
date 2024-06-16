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

    $("#memolist").on("click", ".delBtn-container button", function () {
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
        <div id =\"regtitle\">${memoList[i].title}</div></li>`);
        $("#memolist ul").append(`<li id='memo${memoList[i].id}'>${printDelBtn()}</li> `);
    }
}

function printDelBtn() {
    return `<div class= "delBtn-container">
        <button id=delBtn>
            <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                        clip-rule="evenodd">
                    </path>
                </svg>
        </button></div > `;
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
    $(".sel-container").empty();
    if (memo.length != 0) {
        $(".sel-container").append(`<div id=\"selregdate\">${getDateStr(memo[0].regdate)}</div>`);
        $(".sel-container").append(`<div id=\"seltitle\">${(memo[0].title)}</div>`);
        $(".sel-container").append(`<div id=\"selcontent\">${(memo[0].content)}</div>`);
    }
}