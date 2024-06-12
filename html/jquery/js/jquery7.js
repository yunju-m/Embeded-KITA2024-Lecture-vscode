$(function () {
    $("#a1").attr("href", "http://www.naver.com");
    $("#a1").attr("href", "http://www.google.com");
    $("#a1").text("구글");
    console.log($("#a1").attr("href"));

    $("#content").prepend("[prepend]");
    $("#content").append("[append]");
    $("#content").before("[before]");
    $("#content").after("[after]");

    $("#empty").click(function () {
        $("ul").empty();
    });

    $("#remove").click(function () {
        $("ul").remove();
    });

    $("#btnc1add").click(function () {
        $("#txt2").addClass("class1");
    });

    $("#btnc1remove").click(function () {
        $("#txt2").removeClass("class1");
    });

    $("#btnc1toggle").click(function () {
        $("#txt2").toggleClass("class1");
    });

    $("#btnc2add").click(function () {
        $("#txt2").addClass("class2");
    });

    $("#btnc2remove").click(function () {
        $("#txt2").removeClass("class2");
    });

    $("#btnc2toggle").click(function () {
        $("#txt2").toggleClass("class2");
    });

    $("#txt2").css({
        backgroundColor: "ivory",
        fontSize: "50px"
    });

    console.log($("#txt2").css("font-size"));

});