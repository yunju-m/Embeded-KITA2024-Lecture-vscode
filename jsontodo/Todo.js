class Todo {
    constructor(todo, tdcontent) {
        this.todo = todo;               // 번호
        this.tdcontent = tdcontent;     // 내용
        this.tdregdate = Date.now();    // 등록일시
        this.tdcompleted = false;       // 완료여부
    }
}