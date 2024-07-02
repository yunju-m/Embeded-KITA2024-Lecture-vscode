class Todo {
    constructor(tdcontent) {
        this.tdcontent = tdcontent;     // 내용
        this.tdregdate = Date.now();    // 등록일시
        this.tdcompleted = false;       // 완료여부
    }
}