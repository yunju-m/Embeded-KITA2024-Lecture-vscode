class Todo {
    constructor(tdno, tdcontent) {
        this.tdno = tdno;               // 번호
        this.tdcontent = tdcontent;     // 내용
        this.tdregdate = Date.now();    // 등록일시
        this.tdcompleted = false;       // 완료여부
    }
}