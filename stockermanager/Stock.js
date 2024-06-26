class Stock {
    constructor(shno, stno, stname, stamt, stindate) {
        this.shno = shno;       // 매장번호
        this.stno = stno;       // 재고번호
        this.stname = stname;   // 재고제품명
        this.stamt = stamt;     //재고수량
        this.stindate = stindate;   // 입고일시
        this.strgdate = Date.now(); // 재고등록일시
    }

}