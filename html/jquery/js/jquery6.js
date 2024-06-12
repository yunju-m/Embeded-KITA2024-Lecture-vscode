$(function () {
    console.log($("#p1").text());
    console.log($("#p1").html());

    $("#btn1").click(function () {
        console.log($("#txt1").val());
    });

    $("input[type='checkbox']").click(function () {
        console.log($(this).val());
    });

    $("input[type='radio']").click(function () {
        console.log($(this).val());
    });

    $("textarea").keyup(function () {
        console.log($(this).val());
    });

    $("select").change(function () {
        console.log($(this).val());
    });
});