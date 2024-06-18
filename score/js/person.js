// Person 객체 생성자 함수
function Person(sname, score) {
    this.name = sname;  // 이름
    this.score = score; // 성적 (국어, 영어, 수학)
    this.ssum = score.skor + score.seng + score.smath;  // 총점
    this.savg = this.ssum / Object.keys(score).length;   // 평균
    this.srank = 1; // 석차
}